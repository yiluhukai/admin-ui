#### Vue 中使用 echart

-   [在 webpack 中使用 ECharts](https://echarts.apache.org/zh/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

-   安装 echart

-   mounted 方法中初始化 echat，调用 setOption 方法设置选项

```js
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
```

-   根据 options 中的数据动态修改试图

```js
//第一种 watch options变化 利用vue的深度 watcher，options一有变化就重新setOption
watch: {
  options: {
    handler(options) {
      this.chart.setOption(this.options)
    },
    deep: true
  },
}
//第二种 只watch 数据的变化 只有数据变化时触发ECharts
watch: {
  seriesData(val) {
    this.setOptions({series:val})
  }
}
```

-   注意事项：对应的 dom 区域（document.getElementById('main')）需要设定高度，不然无法显示
