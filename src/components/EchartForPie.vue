<template>
	<div class="echart-container">
		<div id="main">
			<div :id="id" style="height:100%"></div>
		</div>
	</div>
</template>
<script>
const echarts = require('echarts')
export default {
	props: {
		options: {
			type: Object,
			required: true
		},
		id: {
			type: String,
			required: true
		}
	},
	mounted() {
		this.myChart = echarts.init(document.getElementById(this.id))
		this.setOptions()
	},

	methods: {
		setOptions() {
			// 绘制图表
			this.myChart.setOption(this.options)
		}
	},
	watch: {
		'options.series': {
			//immediate: true,
			deep: true,
			handler: function() {
				console.log('--------------', this.id)
				this.$nextTick(this.setOptions)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.echart-container {
	//background: #ccc;
	height: calc(100vh - 100px);
	#main {
		width: 400px;
		height: 400px;
		// background: red;
	}
}
</style>
