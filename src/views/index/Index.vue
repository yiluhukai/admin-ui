<!--  -->
<template>
	<div>
		<div class="filter-container">
			<div class="name item">
				<el-select v-model="value" placeholder="-请选择-" class="options" @change="searchList($event, 'type')">
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
				>
				</el-date-picker>
			</div>
		</div>
		<el-table :data="tableData">
			<el-table-column prop="date" :label="$t('table.date')" width="140"></el-table-column>
			<el-table-column prop="name" :label="$t('table.name')" width="120"></el-table-column>
			<el-table-column prop="address" :label="$t('table.address')"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import { GetRecords } from '@/api/login'
export default {
	data() {
		const item = {
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄'
		}
		return {
			tableData: Array(20).fill(item),
			options: [
				{
					value: '选项1',
					label: '黄金糕'
				},
				{
					value: '选项2',
					label: '双皮奶'
				},
				{
					value: '选项3',
					label: '蚵仔煎'
				},
				{
					value: '选项4',
					label: '龙须面'
				},
				{
					value: '选项5',
					label: '北京烤鸭'
				}
			],
			value: '',
			value1: ''
		}
	},

	components: {},

	computed: {},

	created() {
		GetRecords({}).then(data => (this.tableData = data))
	},

	methods: {
		searchList(val, name) {
			console.log(val, name)
			this.tableData.splice(1, 10)
		}
	}
}
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
</style>
