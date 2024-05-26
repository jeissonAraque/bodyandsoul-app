import { Sidebar } from "./_components/sidebar/Sidebar";
import '../globals.css'


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <div className="bg-slate-100 text-slate-300 selection:bg-blue-600 selection:text-white flex">
      <div className="flex">
          < Sidebar />
        <div className="p-2 w-full text-slate-900 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  </>
  );
}
