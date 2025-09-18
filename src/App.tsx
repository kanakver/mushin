import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"


export default function App() {
	return (
		<div className="min-h-screen bg-slate-100">
			<Navbar />
			<div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-4">
				<div className="col-span-2">
					<Sidebar />
				</div>
				<main className="col-span-12 md:col-span-10">
					<Dashboard />
				</main>
			</div>
		</div>
	)
}
