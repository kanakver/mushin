const intervals = [
	"15:15 - 16:00",
	"16:00 - 17:00",
	"17:00 - 18:00",
	"18:00 - 19:00",
	"19:00 - 20:00",
	"20:00 - 21:00",
	"21:00 - 22:00",
	"22:00 - 23:00",
	"23:00 - 00:00"
]

export default function Navbar() {
	return (
		<div className="bg-blue-900/95 px-2 py-1 text-white">
			<div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center gap-1">
				{/* Left logos with captions */}
				<div className="col-span-2 flex items-center gap-2">
					<div className="flex h-20 w-20 flex-col items-center justify-center rounded-md border border-blue-300/40 bg-blue-400/40 ">
						<img src="/mushin.png" alt="Mushin" className="max-h-10 max-w-full object-contain" />
						<span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide">Mushin</span>
					</div>
					<div className="flex h-20 w-16 flex-col items-center justify-center rounded-md border border-blue-300/40 bg-blue-400/40 ">
						<img src="/skh.png" alt="SKH" className="max-h-10 max-w-full object-contain" />
						<span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide">SKH</span>
					</div>
				</div>

				{/* Center panel: compact with boxed rows */}
				<div className="col-span-9">
					<div className="rounded-md ">
						<div className="rounded-md border border-blue-300/40 bg-blue-400/40 px-3 py-1 text-center text-[11px] font-bold uppercase tracking-wider">
							YOM - Dash Line - Digital Weld Analytics
						</div>

						{/* Intervals row */}
						<div className="mt-1 grid grid-cols-12 gap-1">
							<div className="col-span-2 flex items-center justify-center rounded-md bg-blue-400/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide">Intervals</div>
							<div className="col-span-9 grid grid-cols-9 gap-1">
								{intervals.map((label, i) => (
									<div key={label} className={`truncate rounded-md border border-blue-400/40 px-2 py-1 text-center text-[10px] font-semibold ${i===0? 'bg-green-600 text-white' : 'bg-gray-500/60 text-white'}`}>{label}</div>
								))}
							</div>
							<div className="col-span-1 truncate rounded-md border border-blue-400/40 bg-blue-400/40 px-2 py-1 text-center text-[10px] font-semibold">PPH: 100</div>
						</div>

						{/* Production row */}
						<div className="mt-1 grid grid-cols-12 gap-1">
							<div className="col-span-2 flex items-center justify-center rounded-md bg-blue-400/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide">Production</div>
							<div className="col-span-9 grid grid-cols-9 gap-1">
								{intervals.map((_, i) => (
									<div key={i} className={`flex items-center justify-center rounded-md border border-blue-300/40 px-2 py-1 text-[10px] ${i===0? 'bg-green-600 text-white' : 'bg-gray-500/60 text-white'}`}>0</div>
								))}
							</div>
							<div className="col-span-1 truncate rounded-md border border-blue-300/40 bg-blue-400/40 px-2 py-1 text-center text-[10px] font-semibold">TOTAL: 0</div>
						</div>
					</div>
				</div>

				{/* Right info boxes */}
				<div className="col-span-1 grid grid-cols-1 gap-1">
					<div className="truncate rounded-md border border-blue-300/40 bg-blue-400/40 px-2 py-1 text-center text-[10px] font-semibold">17 Sept 2025</div>
					<div className="truncate rounded-md border border-blue-300/40 bg-blue-400/40 px-2 py-1 text-center text-[10px] font-semibold">15:53:31</div>
					<div className="truncate rounded-md border border-blue-300/40 bg-blue-400/40 px-2 py-1 text-center text-[10px] font-semibold">Shift B</div>
				</div>
			</div>
		</div>
	)
}
