<!--  -->
<template>
	<div>
		<div class="filter-container">
			<div class="name item">
				<el-select
					v-model="value"
					placeholder="-请选择-"
					class="options"
					@change="searchList($event, 'type')"
				>
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</div>
			<div class="date item">
				<el-date-picker
					v-model="value1"
					type="datetimerange"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
					:default-time="['12:00:00']"
					class="options"
					range-separator="|"
					@change="searchList($event, 'type')"
				></el-date-picker>
			</div>
		</div>
		<BaseTable :tableInfo="tableInfo" :getTableData="getTableList" style="margin-top:50px">
			<template #salary="{scope}">{{scope.row.salary|fmtMoney}}</template>
		</BaseTable>
	</div>
</template>

<script>
import BaseTable from "@/components/BaseTable";
import { getEmployeeList } from "@/api/index.js";
export default {
	data() {
		return {
			tableInfo: {
				columns: [
					{ label: "firstName" },
					{ label: "lastName" },
					{ label: "email" },
					{ label: "phoneNumber" },
					{ label: "salary", slot: true },
					{ label: "hiredate" }
				],
				data: [],
				total: 0,
				pageSize: 10,
				pageSizes: [10, 15, 20, 30],
				currentPage: 1
			},
			options: [],
			value: "",
			value1: ""
		};
	},
	components: {
		BaseTable
	},
	methods: {
		async getTableList() {
			const { currentPage, pageSize } = this.tableInfo;
			const { list, total } = await getEmployeeList({
				currentPage,
				pageSize
			});
			this.tableInfo.data = list;
			this.tableInfo.total = total;
		}
	},
	filters: {
		fmtMoney(val) {
			return `$${val.toFixed(2)}`;
		}
	}
};
</script>
<style scoped>
/deep/ .el-input--suffix .el-input__inner {
	height: 32px;
}

/deep/ .el-input__icon {
	line-height: 1;
}

/deep/ .el-range-editor.el-input__inner {
	padding: 0 5px;
}
.filter-container {
	background: #ddd;
	height: 80px;
	border-radius: 8px;
	display: flex;
	align-items: center;
}

.item {
	width: 50%;
}
.options {
	height: 32px;
	width: calc(100% - 20px);
}
/deep/ .el-table .warning-row {
	background: oldlace;
}
</style>
