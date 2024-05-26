"use client"
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MoveLeft } from 'lucide-react';
import { FaShoppingCart } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, imageUrl, href }: any) => (
  <Link href={href} className="block h-full">
    <div className="h-full flex flex-col rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full h-60 flex-shrink-0">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col p-4 bg-white flex-grow">
        <h3 className="text-xl font-bold mb-2 dark:text-black">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </div>
  </Link>
);

export default function PersonalSpace() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-red-50 dark:bg-slate-600 w-full min-h-screen">
      <header className="inset-x-0 top-0 z-50 fixed bg-inherit justify-center w-full">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900">
              <span className="sr-only">Body and soul spa</span>
              <Image src="/logo2.png" alt="logo navigation" height={60} width={60} />
              <MoveLeft />
              <p>Volver</p>
            </Link>
            <p>Este es tu espacio personal</p>
          </div>
          <FaShoppingCart className="mr-2" />
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-red-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Body and soul spa</span>
                <Image src="/logo2.png" alt="logo navigation" height={60} width={60} />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="bg-red-50 dark:bg-slate-600 w-full pt-24">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                title="Productos"
                description="Descubre nuestra variedad de productos para el cuidado personal."
                imageUrl="/productosvarios.jpg"
                href="/mySpace/productos"
              />
              <Card
                title="Servicios"
                description="Disfruta de nuestros servicios de spa diseñados para tu bienestar."
                imageUrl="/serviciosV.jpeg"
                href="/servicios"
              />
              <Card
                title="Reservas"
                description="Haz tu reserva en línea para garantizar tu lugar en el spa."
                imageUrl="/masajes.jpg"
                href="/reservas"
              />
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
          </div>
        </div>
      </div>
    </div>
  );
}
