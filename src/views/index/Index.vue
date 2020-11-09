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
		<el-table :data="tableData" row-key="id">
			<el-table-column prop="date" :label="$tt('日期', 'date')" width="140"></el-table-column>
			<el-table-column prop="name" :label="$t('table.name')" width="120"></el-table-column>
			<el-table-column prop="address" :label="$t('table.address')"></el-table-column>
		</el-table>
	</div>
</template>

<script>
//import { GetRecords } from "@/api/login";
import Sortable from "sortablejs";
export default {
	data() {
		return {
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
					id: 1
				},
				{
					date: "2016-05-02",
					name: "李二狗",
					address: "上海市普陀区金沙江路 1518 弄",
					id: 2
				},
				{
					date: "2016-05-02",
					name: "李向前",
					address: "上海市普陀区金沙江路 1518 弄",
					id: 3
				},
				{
					date: "2016-05-02",
					name: "王小虎---",
					address: "上海市普陀区金沙江路 1518 弄",
					id: 5
				},
				{
					date: "2016-05-02",
					name: "李二狗123",
					address: "上海市普陀区金沙江路 1518 弄",
					id: 4
				},
				{
					date: "2016-05-02",
					name: "李向前aaa",
					address: "上海市普陀区金沙江路 1518 弄",
					id: 6
				}
			],
			options: [
				{
					value: "选项1",
					label: "黄金糕"
				},
				{
					value: "选项2",
					label: "双皮奶"
				},
				{
					value: "选项3",
					label: "蚵仔煎"
				},
				{
					value: "选项4",
					label: "龙须面"
				},
				{
					value: "选项5",
					label: "北京烤鸭"
				}
			],
			value: "",
			value1: ""
		};
	},

	components: {},

	computed: {},

	created() {
		//GetRecords({}).then(data => (this.tableData = data));
		localStorage.removeItem("upadte_riskId");
	},

	methods: {
		searchList(val, name) {
			console.log(val, name);
			this.tableData.splice(1, 10);
		},
		// columnDrop() {
		// 	const wrapperTr = document.querySelector(
		// 		".el-table__header-wrapper tr"
		// 	);
		// 	this.sortable = Sortable.create(wrapperTr, {
		// 		animation: 180,
		// 		delay: 0,
		// 		onEnd: evt => {
		// 			const oldItem = this.dropCol.splice(evt.oldIndex, 1)[0];
		// 			this.dropCol.splice(evt.newIndex, 0, oldItem);
		// 		}
		// 	});
		// },
		rowDrop() {
			//	需要添加row-key
			const el = document.getElementsByTagName("tbody")[0];
			Sortable.create(el, {
				onEnd: (/**Event*/ evt) => {
					const tempIndex = this.tableData.splice(evt.oldIndex, 1)[0];
					this.tableData.splice(evt.newIndex, 0, tempIndex);

					localStorage.setItem("upadte_riskId", "123");
				}
			});
		}
	},
	mounted() {
		//this.columnDrop();
		this.rowDrop();

		window.addEventListener("storage", function(e) {
			if (e.newValue === "123" && e.key === "upadte_riskId") {
				window.location.reload();
			}
		});
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
</style>
