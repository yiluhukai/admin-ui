<!--  -->
<template>
	<div class="container">
		<img src="@/assets/timg.jpeg" />

		<el-row :gutter="20">
			<el-col :span="6">
				<div class="icon1">icon1</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<div class="icon2">icon2</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},

	components: {},

	computed: {},

	created() {},

	methods: {}
};
</script>
<style lang='scss' scoped>
.icon1 {
	background-image: url("../../assets/timg.jpeg");
	width: 84px;
	height: 84px;
	display: inline-block;
	background-repeat: no-repeat;
	background-position: -35px -38px;
	text-align: center;
	line-height: 84px;
}

.icon2 {
	background-image: url("../../assets/timg.jpeg");
	width: 84px;
	height: 84px;
	display: inline-block;
	background-repeat: no-repeat;
	background-position: -130px -38px;
	text-align: center;
	line-height: 84px;
}
</style>