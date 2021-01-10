<!--  -->
<template>
	<div class="employee_messages">
		<div><EchartForPie :options="countOptions" id="salary"></EchartForPie></div>
		<div><EchartForPie :options="salaryOptions" id="count"></EchartForPie></div>
	</div>
</template>

<script>
import _ from 'lodash'
import EchartForPie from '@/components/EchartForPie'
import { getAverageSalaryAndCount } from '@/api'
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
	tooltip: {
		trigger: 'item',
		formatter: function(params) {
			console.log(params)
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
	//  设置饼状图的颜色
	//color: ["red", "orange", "yellow", "green", "blue"],
	series: [
		{
			name: '',
			type: 'pie',
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
			countOptions: _.cloneDeep(options)
		}
	},

	components: {
		EchartForPie
	},

	created() {
		this.fetchStatisticsData()
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
		}
	}
}
</script>
<style lang="scss" scoped>
.employee_messages {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
</style>
