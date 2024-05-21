import Image from "next/image";
import React from "react";

export default function Description() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Estamos orgullosos de lo que hacemos
        </h2>

        <div className="flex flex-wrap items-center z-50">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
            <div
              className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src="/masajes-relajacion-spa-vogue-1024x800.jpg"
                height={1000}
                width={1000}
                alt="Foto masajes.jpg"
              />
            </div>
          </div>

          <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
            <div className="mb-12 flex border rounded-xl items-center p-2">
              <Image
                className="rounded-xl"
                src="/tratamientofacial.jpg"
                alt="LaserLuz.jpg"
                height={200}
                width={200}
              />

              <div className="ml-4 grow">
                <p className="mb-2 font-bold">Tecnología</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Tratamientos con equipos medicos de ultima tecnologia.
                </p>
              </div>
            </div>

            <div className="mb-12 flex border rounded-xl items-center p-2">
              <Image
                className="rounded-xl"
                src="/sellocalidadspas768x480.jpg"
                alt="Calidad.jpg"
                height={200}
                width={200}
              />
              <div className="ml-4 grow">
                <p className="mb-2 font-bold">Seguro</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  En Body and Soul, nuestra prioridad es tu seguridad y
                  comodidad. Ofrecemos servicios con sello de calidad y seguros
                  para que estés tranquilo mientras disfrutas de nuestros
                  tratamientos y servicios.
                </p>
              </div>
            </div>

            <div className="mb-12 flex border rounded-xl items-center p-2">
              <Image
                className="rounded-xl"
                src="/personalC.jpg"
                alt="Personal calificado"
                height={200}
                width={200}
              />
              <div className="ml-4 grow">
                <p className="mb-2 font-bold">Personal calificado</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  En Body and Soul, entendemos la importancia de contar con un
                  equipo altamente capacitado. Nuestros profesionales están aquí
                  para brindarte un servicio personalizado y de calidad,
                  asegurándose de que alcances tus objetivos de bienestar de
                  manera segura y efectiva.
                </p>
              </div>
            </div>

            <div className="mb-12 flex border rounded-xl items-center p-2">
              <div className="shrink-0">
                <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-2 font-bold">Analíticas en vivo</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  En Body and Soul, te ofrecemos análisis en tiempo real para
                  que puedas seguir tu progreso y mejorar tu bienestar día a
                  día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
