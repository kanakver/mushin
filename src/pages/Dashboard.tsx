import Card from "../components/Card"
import Stat from "../components/Stat"
import BarChart from "../charts/BarChart"
import LineChart from "../charts/LineChart"
import { days, pphData, productionData, oeeSeries } from "../data/mock"

const pphBar = {
	labels: days,
	datasets: [
		{ label: 'PPH', data: pphData, backgroundColor: '#4dabf7' }
	]
}

const prodBar = {
	labels: days,
	datasets: [
		{ label: 'Production', data: productionData, backgroundColor: '#4dabf7' }
	]
}

const oeeLine = {
	labels: days,
	datasets: [
		{ label: 'OEE', data: oeeSeries.OEE, borderColor: '#475569', backgroundColor: '#475569' },
		{ label: 'Availability', data: oeeSeries.Availability, borderColor: '#60a5fa', backgroundColor: '#60a5fa' },
		{ label: 'Performance', data: oeeSeries.Performance, borderColor: '#f97316', backgroundColor: '#f97316' },
		{ label: 'Quality Rate', data: oeeSeries.Quality, borderColor: '#22c55e', backgroundColor: '#22c55e' }
	]
}

// Card 6: stacked production losses sample (6 buckets)
const lossLabels = ['1', '2', '3', '4', '5', '6']
const productionLosses = {
	labels: lossLabels,
	datasets: [
		{ label: 'Production', data: [10, 12, 11, 12, 13, 11], backgroundColor: '#3b82f6', stack: 'loss' },
		{ label: 'Quality', data: [12, 14, 13, 12, 14, 12], backgroundColor: '#f59e0b', stack: 'loss' },
		{ label: 'Maintenance', data: [20, 19, 18, 19, 17, 18], backgroundColor: '#94a3b8', stack: 'loss' },
		{ label: 'PPC', data: [55, 56, 53, 54, 55, 53], backgroundColor: '#facc15', stack: 'loss' }
	]
}

// Card 7: bar + cumulative line with right percentage axis
const dayWiseLossDetails = {
	labels: ['PPC', 'Production', 'Quality', 'Maintenance'],
	datasets: [
		{ type: 'bar' as const, label: 'Loss', data: [265, 215, 192, 71], backgroundColor: '#f59e0b', order: 1 },
		{ type: 'line' as const, label: 'Cumulative %', data: [25, 55, 92, 100], borderColor: '#7c3e0a', backgroundColor: '#7c3e0a', yAxisID: 'y1', pointRadius: 2, borderWidth: 2, order: 2 }
	]
}

export default function Dashboard() {
	return (
		<div className="grid grid-cols-12 gap-2 p-2 ">
			{/* Row 1 */}
			<div className="col-span-12 grid grid-cols-12 gap-2">

				{/* card 1 */}
				<div className="col-span-3">
					<Card title="Line Defect Station" headerColor="bg-sky-600">
						<div className="h-30">
							<img src="/image.png" alt="Line Defect Station" className="h-full w-full rounded-md object-cover" />
						</div>
					</Card>
				</div>

				{/* card 2 */}
				<div className="col-span-3">
					<Card title="Today's Line Metrics" headerColor="bg-sky-600">
						<div className="h-30 flex flex-col gap-2">
							{/* Top half highlight */}
							<div className="flex-1 rounded-md border border-sky-300 bg-sky-100 px-2 py-1 text-sky-700">
								<div className="flex h-full w-full items-center justify-center text-center">
									<div>
										<div className="text-2xl font-extrabold">85.2%</div>
										<div className="mt-1 text-[10px] font-semibold uppercase tracking-wide">Overall Equipment Efficiency ( OEE )</div>
									</div>
								</div>
							</div>
							{/* Bottom half: three stats */}
							<div className="flex-1 grid grid-cols-3 gap-2">
								<Stat label="Availability" value="92.1%" />
								<Stat label="Performance" value="94.8%" />
								<Stat label="Quality Rate" value="97.5%" />
							</div>
						</div>
					</Card>
				</div>

				{/* card 3 */}
				<div className="col-span-6">
					<Card title="Last 30 Days OEE" headerColor="bg-purple-600">
						<div className="h-30 flex flex-col">
							<div className="h-[90%]">
								<LineChart
									data={oeeLine}
									options={{}}
								/>
							</div>
						</div>
					</Card>
				</div>
			</div>

			{/* Row 2 */}
			<div className="col-span-12 grid grid-cols-12 gap-2">
				<div className="col-span-6">
					<Card title="Day Wise PPH" headerColor="bg-green-600">
						<div className="h-25">
							<BarChart 
							data={pphBar} 
							options={{ 
								scales: { 
									x: { ticks: { font: { size: 6 } } }, 
									y: { ticks: { font: { size: 6 } } } }, 
								plugins: { 
									legend: { display: false }	,
									midline: { yValue: 50, color: '#ef4444', dash: [4,4] } } as any,
								datasets: { bar: { barPercentage: 1, categoryPercentage: 0.6 } }
							}} 
							/>
						</div>
					</Card>
				</div>
				<div className="col-span-6">
					<Card title="Day Wise Total Production" headerColor="bg-red-600">
						<div className="h-25">
							<BarChart 
							data={prodBar} 
							options={{ 
								scales: { 
									x: { ticks: { font: { size: 6 } } }, 
									y: { ticks: { font: { size: 6 } } } }, 
								plugins: { 
									legend: { display: false }	,
									midline: { yValue: 50, color: '#ef4444', dash: [4,4] } } as any,
								datasets: { bar: { barPercentage: 1, categoryPercentage: 0.6 } }
							}} 
							/>
						</div>
					</Card>
				</div>
			</div>

			{/* Row 3 */}
			<div className="col-span-12 grid grid-cols-12 gap-2">
				<div className="col-span-6">
					<Card title="Production Losses" headerColor="bg-purple-600">
						<div className="h-30 ">
							<BarChart 
								data={productionLosses} 
								options={{
									plugins: {
										 legend: { position: 'bottom', 
											labels: { font: { size: 6 } } } },
									scales: { 
										x: { stacked: true, ticks: { font: { size: 6 } } }, 
										y: { stacked: true, ticks: { font: { size: 6 } } } },
									datasets: { 
										bar: { barPercentage: 0.4, categoryPercentage: 0.6 } }
								}}
							/>
						</div>
					</Card>
				</div>
				<div className="col-span-6">
					<Card title="Day Wise Loss Details" headerColor="bg-orange-500">
						<div className="h-30">
							<BarChart 
								data={dayWiseLossDetails as any}
								options={{
									plugins: { legend: { display: false } },
									scales: {
										x: { ticks: { font: { size: 6 } } },
										y: { ticks: { font: { size: 6 } } },
										y1: { position: 'right', min: 0, max: 100, grid: { drawOnChartArea: false }, ticks: { font: { size: 6 }, callback: (v: any) => v + '%' } }
									},
									datasets: { bar: { barPercentage: 0.4, categoryPercentage: 0.6 } }
								}}
							/>
						</div>
					</Card>
				</div>
			</div>
		</div>
	)
}
