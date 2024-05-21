"use client";
import React from "react";
import AuthButton from "../AuthButton";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Productos", href: "/productos" },
    { name: "Servicios", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Conocenos", href: "#" },
  ];

  return (
    <>
      <div className="-m-1.5 p-1.5">
        <span className="sr-only">Body and soul spa</span>
        <Image src="/logo2.png" alt="logo navigation" height={60} width={60} />
      </div>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 z-50"
        aria-label="Global"
      >
        <div className="flex lg:flex-1"></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:bg-red-300 hover:rounded-xl hover:p-1"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* {isSupabaseConnected && (
            // < AuthButton />
            // < Nav />

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 hover:bg-red-300 hover:rounded-xl hover:p-1"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>

          )} */}
        </div>
      </nav>
    </>
  );
}
