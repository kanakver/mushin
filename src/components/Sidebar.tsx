const items = [
	"Maintenance",
	"EOL",
	"PDI",
	"Line Defect",
	"Rework Rejection",
	"Bio Metric",
	"PY Health Check",
	"Production"
]

export default function Sidebar() {
	return (
		<aside className="h-[calc(100vh-75px)] w-50 bg-cyan-950 ">
			<div className="flex h-full flex-col gap-2">
				{items.map((i) => (
					<div
						key={i}
						className={`px-3 py-2 text-xs/tight font-semibold uppercase tracking-wide ${i==="Production" ? 'bg-cyan-200/20 text-white' : 'text-white hover:bg-cyan-900'}`}
					>
						{i}
					</div>
				))}
				<div className="mt-auto" />
				<div className="flex items-center gap-3 rounded-md bg-cyan-900 px-3 py-3 text-white/90">
					<img src="/person-crop-circle-fill-svgrepo-com.svg" alt="user" className="h-6 w-6" />
					<div>
						<div className="text-sm font-semibold leading-tight">SKH</div>
						<div className="text-[11px] leading-tight opacity-80">Admin</div>
					</div>
				</div>
			</div>
		</aside>
	)
}
