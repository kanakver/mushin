import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	LineElement,
	PointElement,
	Tooltip,
	Legend,
	Filler
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend, Filler)

// Custom midline plugin for horizontal dotted reference lines
const midlinePlugin = {
	id: 'midline',
	afterDatasetsDraw(chart: any, _args: any, pluginOptions: any) {
		const { ctx, chartArea, scales } = chart
		if (!chartArea || !scales?.y) return
		const yValue = pluginOptions?.yValue ?? null
		if (yValue == null) return
		const y = scales.y.getPixelForValue(yValue)
		ctx.save()
		ctx.strokeStyle = pluginOptions?.color ?? '#ef4444'
		ctx.lineWidth = pluginOptions?.lineWidth ?? 1
		ctx.setLineDash(pluginOptions?.dash ?? [4, 4])
		ctx.beginPath()
		ctx.moveTo(chartArea.left, y)
		ctx.lineTo(chartArea.right, y)
		ctx.stroke()
		ctx.restore()
	}
}

ChartJS.register(midlinePlugin as any)
