<template>
	<div :id="id" :style="{height:height,width:width}"></div>
</template>
<script>
const { debounce } = require("lodash");
const echarts = require("echarts");
// const {} = require("lodash");
export default {
	props: {
		options: {
			type: Object,
			required: true
		},
		id: {
			type: String,
			required: true
		},
		height: {
			type: String,
			default: "400px"
		},
		width: {
			type: String,
			default: "100%"
		}
	},
	data() {
		return {
			myChart: null
		};
	},
	mounted() {
		this.myChart = echarts.init(document.getElementById(this.id));
		//this.myChart.showLoading();
		this.setOptions();
		this.initListener();
	},
	beforeDestroy() {
		this.destroyListener();
	},
	methods: {
		setOptions() {
			// 绘制图表
			this.myChart.setOption(this.options);
		},
		initListener() {
			this.$_resizeHandler = debounce(() => {
				this.resize();
			}, 100);
			window.addEventListener("resize", this.$_resizeHandler);
		},
		destroyListener() {
			window.removeEventListener("resize", this.$_resizeHandler);
			this.$_resizeHandler = null;
		},
		resize() {
			const { myChart } = this;
			myChart && myChart.resize();
		}
	},
	watch: {
		"options.series": {
			//immediate: true,
			deep: true,
			handler: function() {
				this.$nextTick(this.setOptions);
			}
		}
	}
};
</script>
<style lang="scss" scoped>
</style>
