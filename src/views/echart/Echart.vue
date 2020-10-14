<!--  -->
<template>
	<div class="echart-container">
		<div id="main"></div>
	</div>
</template>

<script>
var echarts = require("echarts");
export default {
	data() {
		return {
			options: {
				//  设置中心位置的文字
				graphic: {
					type: "text",
					z: 2,
					zlevel: 100,
					left: "center",
					top: "center",
					style: {
						text: "重点网络级别",
						fill: "#ccc",
						font: 'bolder 40px "Microsoft YaHei", sans-serif'
					}
				},
				tooltip: {
					trigger: "item",
					//formatter: "{a} <br/>{b}: {c} ({d}%)"

					formatter: function(params) {
						console.log(params);
						const content = `<div style="width: 10px;height: 10px;background: ${params.color};
	border-radius: 50%;display: inline-block;"></div>	  <div>  hello world</div>`;
						return content;
					},
					backgroundColor: "#fff",
					borderColor: "black",
					borderWidth: "1px",
					textStyle: {
						color: "black",
						fontStyle: "normal"
					}
				},
				legend: {
					// 设置legend的位置
					orient: "vertical",
					right: 40,
					top: 300,

					data: [
						"直接访问",
						"邮件营销",
						"联盟广告",
						"视频广告",
						"搜索引擎"
					]
				},
				//  设置饼状图的颜色
				color: ["red", "orange", "yellow", "green", "blue"],
				series: [
					{
						name: "访问来源",
						type: "pie",
						radius: ["50%", "70%"],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: "center"
						},
						emphasis: {
							label: {
								//  取消hover是中心位置的文字
								show: false,
								fontSize: "30",
								fontWeight: "bold"
							}
						},
						labelLine: {
							show: false
						},
						data: [
							{ value: 335, name: "直接访问" },
							{ value: 310, name: "邮件营销" },
							{ value: 234, name: "联盟广告" },
							{ value: 135, name: "视频广告" },
							{ value: 1548, name: "搜索引擎" }
						]
					}
				]
			}
		};
	},

	components: {},

	computed: {},

	mounted() {
		this.myChart = echarts.init(document.getElementById("main"));
		this.setOptions();
	},

	methods: {
		setOptions() {
			// 绘制图表
			this.myChart.setOption(this.options);
		}
	}
};
</script>
<style lang="scss" scoped>
.echart-container {
	//background: #ccc;
	height: calc(100vh - 100px);
	#main {
		width: 100%;
		height: 100%;
		// background: red;
	}
}
</style>
