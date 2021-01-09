<template>
	<div class="base-table">
		<el-table :data="tableInfo.data" row-key="id" border>
			<template v-for="column of tableInfo.columns">
				<el-table-column align="left" :key="column.label">
					<template slot="header">
						<div class="header_bg-color">{{column.label}}</div>
					</template>
					<template slot-scope="scope">
						<template v-if="!column.slot">
							<div>{{scope.row[column.label]}}</div>
						</template>

						<template v-else>
							<slot :name="column.label" :scope="scope"></slot>
						</template>
					</template>
				</el-table-column>
			</template>
		</el-table>

		<el-pagination
			style="margin:50px 0"
			background
			layout="prev, pager, next,sizes,total"
			:page-size.sync="tableInfo.pageSize"
			:page-sizes="tableInfo.pageSizes"
			:total="tableInfo.total"
			:current-page="tableInfo.currentPage"
			@current-change="handlePageChange"
		></el-pagination>
	</div>
</template>

<script>
export default {
	name: "base-table",
	props: {
		tableInfo: {
			type: Object,
			default: () => ({
				columns: [],
				data: [],
				total: 0,
				pageSize: 10,
				pageSizes: [10, 15, 20, 30],
				currentPage: 1
			})
		},
		getTableData: {
			type: Function,
			required: true
		}
	},
	methods: {
		handlePageChange(page) {
			this.tableInfo.currentPage = page;
		},
		getTableList() {
			this.getTableData();
		}
	},
	created() {
		this.getTableList();
	},
	watch: {
		"tableInfo.currentPage"(newPage, oldPage) {
			if (newPage !== oldPage) {
				this.getTableList();
			}
		},
		"tableInfo..pageSize"(newVal, oldVal) {
			if (newVal !== oldVal) {
				this.getTableList();
			}
		}
	}
};
</script>
<style scoped>
.base-table >>> thead th {
	background: #f2f6fc;
}
</style>
