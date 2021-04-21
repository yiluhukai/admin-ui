<!--  -->
<template>
	<div class="employee_messages">
		<EchartForPie :options="countOptions" id="salary"></EchartForPie>

		<EchartForPie :options="salaryOptions" id="count"></EchartForPie>

		<EchartForPie :options="countOptionsByRank" id="salaryRank"></EchartForPie>

		<!-- <EchartForPie :options="salaryOptionsByRank" id="countRank"></EchartForPie> -->
		<high-charts :options="options" ref="simpleChart"></high-charts>
	</div>
</template>

<script>
import _ from 'lodash'
import EchartForPie from '@/components/EchartForPie'
import HighCharts from '@/components/HighCharts'
import { getAverageSalaryAndCount, getAverageSalaryAndCountByRank } from '@/api'
const options = {
	//  设置中心位置的文字
	graphic: {
		type: 'text',
		z: 2,
		zlevel: 100,
		left: 'center',
		top: 'center',
		style: {
			text: '',
			fill: '#ccc',
			font: 'bolder 20px "Microsoft YaHei", sans-serif'
		}
	},
	//hover在饼图上的效果
	tooltip: {
		trigger: 'item',
		formatter: function(params) {
			const content = `<div style="width: 10px;height: 10px;background: ${params.color};
						border-radius: 50%;display: inline-block;"></div><span style="margin-left:10px">${params.percent + '%'}</span><div> ${params.name}:${
				params.value
			}</div>`
			return content
		},
		backgroundColor: '#fff',
		borderColor: 'black',
		borderWidth: '1px',
		textStyle: {
			color: 'black',
			fontStyle: 'normal'
		}
	},
	//图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
	legend: {
		orient: 'vertical',
		left: 'right',
		top: 'center'
	},
	//  设置饼状图的颜色
	//color: ["red", "orange", "yellow", "green", "blue"],
	series: [
		{
			name: '',
			type: 'pie',
			//表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度
			//环状图串两个 ，饼图穿一个
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				show: false,
				position: 'center'
			},
			emphasis: {
				label: {
					//  取消hover是中心位置的文字
					show: false,
					fontSize: '30',
					fontWeight: 'bold'
				}
			},
			labelLine: {
				show: false
			},
			data: []
		}
	]
}

export default {
	data() {
		return {
			salaryOptions: _.cloneDeep(options),
			countOptions: _.cloneDeep(options),
			salaryOptionsByRank: _.cloneDeep(options),
			countOptionsByRank: _.cloneDeep(options),
			options: {
				chart: {
					type: 'variablepie'
				},
				title: {
					text: '不同国家人口密度及面积对比'
				},
				subtitle: {
					text: '扇区长度（圆周方法）表示面积，宽度（纵向）表示人口密度'
				},
				tooltip: {
					headerFormat: '',
					pointFormat:
						'<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
						'面积 (平方千米): <b>{point.y}</b><br/>' +
						'人口密度 (每平方千米人数): <b>{point.z}</b><br/>'
				},
				series: [
					{
						minPointSize: 10,
						//innerSize: '20%',
						zMin: 0,
						name: 'countries',
						data: [
							{
								name: '西班牙',
								y: 250,
								z: 70
							},
							{
								name: '法国',
								y: 750,
								z: 100
							}
						]
					}
				]
			}
		}
	},

	components: {
		EchartForPie,
		HighCharts
	},

	created() {
		this.fetchStatisticsData()
		this.fetchAverageSalaryAndCountByRank()
	},
	methods: {
		async fetchStatisticsData() {
			const data = await getAverageSalaryAndCount()
			if (data && Array.isArray(data)) {
				this.salaryOptions.graphic.style.text = '部门平均工资'
				this.salaryOptions.series.name = '平均工资'
				this.salaryOptions.series[0].data = data.map(({ departmentName, avgSalary }) => ({
					name: departmentName,
					value: avgSalary
				}))
				this.countOptions.graphic.style.text = '部门人数'
				this.countOptions.series.name = '部门人数'
				this.countOptions.series[0].data = data.map(({ count, departmentName }) => ({
					name: departmentName,
					value: count
				}))
			}
		},
		async fetchAverageSalaryAndCountByRank() {
			const data = await getAverageSalaryAndCountByRank()
			if (data && Array.isArray(data)) {
				this.salaryOptionsByRank.graphic.style.text = '不同等级平均工资'
				this.salaryOptionsByRank.series.name = '平均工资'
				this.salaryOptionsByRank.series[0].data = data.map(({ gradeLevel, avgSalary }) => ({
					name: gradeLevel,
					value: avgSalary
				}))
				this.countOptionsByRank.graphic.style.text = '不同等级人数'
				this.countOptionsByRank.series.name = '等级人数'
				this.countOptionsByRank.series[0].data = data.map(({ count, gradeLevel }) => ({
					name: gradeLevel,
					value: count
				}))
				this.countOptionsByRank.series[0].radius = '70%'
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.employee_messages {
	display: flex;
	align-items: center;
	justify-content: space-between;
	div {
		flex: 1 1 auto;
	}
}
</style>
