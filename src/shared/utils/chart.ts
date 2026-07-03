/**
 * Apache EChart의 Chart option을 초기화합니다.
 * https://echarts.apache.org/en/option.html
 */
export class ChartOptionBuilder {
  title?: object
  legend?: object
  grid?: object
  xAxis?: object
  yAxis?: object
  tooltip?: object = { trigger: 'item' }
  toolbox?: object = { feature: { saveAsImage: {} }, top: 'top', right: '15px' }
  series?: object[]

  setTitle(title: object) {
    this.title = title
    return this
  }
  setLegend(legend: object) {
    this.legend = legend
    return this
  }
  setGrid(grid: object) {
    this.grid = grid
    return this
  }
  setXAxis(xAxis: object) {
    this.xAxis = xAxis
    return this
  }
  setYAxis(yAxis: object) {
    this.yAxis = yAxis
    return this
  }
  setTooltip(tooltip: object) {
    this.tooltip = tooltip
    return this
  }
  setToolbox(toolbox: object) {
    this.toolbox = toolbox
    return this
  }
  setSeries(series: object[]) {
    this.series = series
    return this
  }

  build() {
    return new ChartOption(this)
  }
}

export class ChartOption {
  title?: object
  legend?: object
  grid?: object
  xAxis?: object
  yAxis?: object
  tooltip?: object
  toolbox?: object
  series?: object[]

  constructor(builder: ChartOptionBuilder) {
    this.title = builder.title
    this.legend = builder.legend
    this.grid = builder.grid
    this.xAxis = builder.xAxis
    this.yAxis = builder.yAxis
    this.tooltip = builder.tooltip
    this.toolbox = builder.toolbox
    this.series = builder.series
  }
}
