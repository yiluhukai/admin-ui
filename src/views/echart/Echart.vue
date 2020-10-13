<!--  -->
<template>
	<div class="echart-container">
		<div id="main"></div>
	</div>
</template>

<script>
var echarts = require('echarts')
export default {
	data() {
		return {
			options: {
				title: {
					text: 'ECharts 入门示例'
				},
				tooltip: {},
				xAxis: {
					data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
				},
				yAxis: {},
				series: [
					{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}
				]
			}
		}
	},

	components: {},

	computed: {},

	mounted() {
		this.myChart = echarts.init(document.getElementById('main'))
		this.setOptions()
	},

	methods: {
		setOptions() {
			// 绘制图表
			this.myChart.setOption(this.options)
		}
	}
}
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
