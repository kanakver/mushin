type Props = { label: string; value: string }

export default function Stat({ label, value }: Props) {
	return (
		<div className="flex-2 rounded-md border border-slate-200 bg-white text-center shadow-sm">
			<div className="text-[10px] font-bold text-slate-700">{value}</div>
			<div className="mt-2 text-[8px] uppercase tracking-wide text-slate-500">{label}</div>
		</div>
	)
}
