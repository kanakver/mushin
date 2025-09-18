import { Bar } from 'react-chartjs-2'
import type { ChartData, ChartOptions } from 'chart.js'

type Props = { data: ChartData<'bar'>; options?: ChartOptions<'bar'> }

export default function BarChart({ data, options }: Props) {
	return (
		<div className="h-full">
			<Bar data={data} options={{ maintainAspectRatio: false, responsive: true, plugins: { legend: { display: false } }, ...options }} />
		</div>
	)
}
