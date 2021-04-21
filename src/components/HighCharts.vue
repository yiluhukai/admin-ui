<template>
	<div id="container"></div>
</template>

<script>
const echarts = require('echarts')
export default {
	data() {
		return {
			myChart: null
		}
	},
	mounted() {
		// 基于准备好的dom，初始化echarts实例
		this.myChart = echarts.init(document.getElementById('container'))
		this.setCleverRateChart()
	},
	methods: {
		// 半圓扇形
		setCleverRateChart() {
			var option = {
				// 提示文本
				series: [
					{
						type: 'custom',
						coordinateSystem: 'none',
						renderItem: function(params) {
							return {
								type: 'sector',
								left: 'center',
								top: 'center',
								shape: {
									cx: 200,
									cy: 200,
									r: params.dataIndex == 1 ? 100 : 70,
									//r0: 50,
									startAngle: params.dataIndex == 1 ? Math.PI * 0.5 : 0,
									endAngle: params.dataIndex == 0 ? Math.PI * 0.5 : Math.PI * 2,
									clockwise: true
								},
								style: {
									fill: params.dataIndex == 0 ? 'red' : 'blue'
								}
							}
						},
						data: [
							{
								name: 'A',
								value: 250,
								r: 100,
								itemStyle: {
									color: 'red'
								}
							},
							{
								name: 'A',
								value: 250,
								r: 100,
								itemStyle: {
									color: 'blue'
								}
							}
						]
					}
				]
			}
			// 使用刚指定的配置项和数据显示图表。
			this.myChart.setOption(option)
		}
	}
}
</script>
<style lang="scss">
#container {
	min-width: 300px;
	max-width: 800px;
	height: 500px;
	margin: 1em auto;
}
</style>
