import React from 'react';
import productsData from './products.json'; // Asegúrate de que la ruta sea correcta

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductInit() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="flex justify-center">
          <div className="max-w-[800px]">
            <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              ¿Estás listo <br />
              <span className="text-primary dark:text-primary-400">para un nuevo tú?</span>
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-300">
              Descubre nuestros exclusivos productos de belleza y cuidado personal diseñados para 
              realzar tu bienestar y belleza natural. Encuentra todo lo que necesitas en Body and Soul.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {productsData.map((product: Product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-neutral-500 dark:text-neutral-300 mb-4">{product.description}</p>
              <p className="text-xl font-semibold text-primary dark:text-primary-400">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
