import React from "react";
import AuthButton from "../AuthButton";

export default function Nav() {
    
const navigation = [
    { name: "Productos", href: "#" },
    { name: "Servicios", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Conocenos", href: "#" },
  ];

  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="py-6">
            <AuthButton />
          {/* <a
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Log in
          </a> */}
        </div>
      </div>
    </div>
  );
}
