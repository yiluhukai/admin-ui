<!--  -->
<template>
	<div>
		<BaseTable :tableInfo="tableInfo" :getTableData="getTableList"> </BaseTable>
	</div>
</template>

<script>
import { getJobList } from '@/api/index.js'
import BaseTable from '@/components/BaseTable'
export default {
	data() {
		return {
			tableInfo: {
				hasSelection: true,
				hasIndex: true,
				columns: [{ label: 'id' }, { label: 'jobTitle' }, { label: 'minSalary' }, { label: 'maxSalary' }],
				data: [],
				total: 0,
				pageSize: 10,
				pageSizes: [10, 15, 20, 30],
				currentPage: 1
			}
		}
	},

	components: {
		BaseTable
	},

	computed: {},

	created() {},

	methods: {
		async getTableList() {
			const { currentPage, pageSize } = this.tableInfo
			const { list, total } = await getJobList({
				currentPage,
				pageSize
			})
			this.tableInfo.data = list
			this.tableInfo.total = total
		}
	}
}
</script>
<style lang="scss" scoped></style>
