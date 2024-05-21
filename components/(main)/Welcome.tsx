import React from "react";

export default function Welcome() {
  return (
    <div className="mt-20 md:px-6">
      <section className="background-radial-gradient mb-32 text-center lg:text-left">
        <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('/meditation.jpg')] h-[500px] rounded-xl">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
                <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl font-style: italic">
                  Bienvenido a <br />
                  <span>Body and soul spa</span>
                </h2>
                <p className="text-lg">
                    En Body and Soul Spa, nos especializamos en ofrecerte un oasis de relajación y belleza. Nuestro objetivo es proporcionarte una experiencia rejuvenecedora y revitalizante, donde cada detalle está cuidadosamente pensado para tu bienestar. Ya sea a través de nuestros tratamientos de spa, masajes relajantes, o servicios de belleza, estamos dedicados a ayudarte a sentirte renovado y lleno de energía. Ven y descubre un refugio de tranquilidad en el que podrás desconectar del estrés diario y reconectar contigo mismo. ¡Te esperamos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
