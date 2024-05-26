import Image from "next/image";
import { IoBrowsersOutline, IoCalendarOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { TbHealthRecognition } from "react-icons/tb";
import SidebarMenuIcons from "./SidebarMenuIcons";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const menuItems = [
  {
    path: "/admin/dashboard",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualizacion",
  },
  {
    path: "/dashboard/users",
    icon: <CiUser size={40} />,
    title: "Usuarios",
  },
  {
    path: "/admin/adminProducts",
    icon: <LuShoppingBag size={40} />,
    title: "Productos",
  },
  {
    path: "/dashboard/services",
    icon: <TbHealthRecognition size={40} />,
    title: "Servicios",
  },
  {
    path: "/dashboard/reservation",
    icon: <IoCalendarOutline size={40} />,
    title: "Reservas",
  },
];

export const Sidebar = () => {
  return (
    <div>
      <div
        id="menu"
        style={{ width: "300px" }}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 h-full left-0 "
      >
        <div className="p-3">
          <Link href="/">
            <MoveLeft />
            <button>Volver</button>
          </Link>
        </div>
        <div id="logo" className="my-4 px-6">
          <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
            <Image
              className="rounded-full"
              src="/icono.jpg"
              alt="logo"
              width={60}
              height={60}
            />
            Panel de administración.
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your actions and activities
          </p>
        </div>
        <div id="profile" className="px-6 py-10">
          <p className="text-slate-500">Welcome back,</p>
          <a href="#" className="inline-flex space-x-2 items-center">
            <span>
              <Image
                className="rounded-full w-8 h-8"
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                alt="User avatar"
                width={40}
                height={40}
              />
            </span>
            <span className="text-sm md:text-base font-bold">
              Jeisson Araque
            </span>
          </a>
        </div>
        <div id="nav" className="w-full px-6">
          {menuItems.map((item) => (
            <SidebarMenuIcons key={item.path} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
