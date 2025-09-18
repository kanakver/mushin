type Props = { title: string; children: React.ReactNode; headerColor?: string }

export default function Card({ title, children, headerColor = 'bg-sky-600' }: Props) {
	return (
		<div className="rounded-md border border-slate-200 bg-white shadow-sm">
			<div className={`rounded-t-md px-4 py-2 text-[8px] font-semibold uppercase tracking-wide text-center text-white ${headerColor}`}>{title}</div>
			<div className="p-2">{children}</div>
		</div>
	)
}
