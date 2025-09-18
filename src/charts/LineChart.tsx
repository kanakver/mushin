import { Line } from 'react-chartjs-2'
import type { ChartData, ChartOptions } from 'chart.js'

type Props = { data: ChartData<'line'>; options?: ChartOptions<'line'> }

export default function LineChart({ data, options }: Props) {
	const base: ChartOptions<'line'> = {
		maintainAspectRatio: false,
		responsive: true,
		plugins: { legend: { position: 'bottom', labels: { font: { size: 6 } } } },
		elements: { line: { borderWidth: 2 }, point: { radius: 1 } },
		scales: {
			x: { ticks: { font: { size: 6 } } },
			y: { ticks: { font: { size: 6 } } }
		}
	}
	return (
		<div className="h-full">
			<Line data={data} options={{ ...base, ...options }} />
		</div>
	)
}
