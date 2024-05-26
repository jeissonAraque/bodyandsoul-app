"use client"
import React, { useState, useEffect } from 'react';
import { createClient } from "@/utils/supabase/client";
import NewProduct from './NewProduct';
import UpdateProduct from './UpdateProduct';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string>(""); 
  const client = createClient();

  async function fetchProducts() {
    const productsData = await getProducts();
    setProducts(productsData);
  }

  const handleUpdateClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedProductId(product.id); 
    setIsUpdating(true); 
  };

  async function uploadImage(image: File): Promise<any> {
    const filePath = `products/${image.name}`;
    const { data: error } = await client.storage.from('products').upload(image.name, image , {
      cacheControl: '3600',
      upsert: false
    });

    const { data: publicData } = client.storage.from('products').getPublicUrl(filePath);

    if (!publicData) {
      throw new Error('Failed to get public URL');
    }

    return { publicURL: publicData.publicUrl };
  }

  async function createProduct(productData: any) {
    let imageUrl = "";
    if (productData.image) {
      const fileData = await uploadImage(productData.image);
      imageUrl = fileData.publicURL;
    }

    const { data, error } = await client.from('productos').insert({
      ...productData,
      image: imageUrl,
    });
    if (error) throw error;
    await fetchProducts();
  }

  async function getProducts(): Promise<Product[]> {
    const { data, error } = await client.from('productos').select('*');
    if (error) throw error;
    return data as Product[];
  }

  async function updateProduct(productId: string, updates: any) {
    const { data, error } = await client
      .from('productos')
      .update(updates)
      .eq('id', productId);
    if (error) throw error;
    await fetchProducts();
  }

  async function deleteProduct(productId: string) {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirmDelete) {
      const { error } = await client.from('productos').delete().eq('id', productId);
      if (error) throw error;
      await fetchProducts();
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  const handleCloseModal = () => {
    setIsCreating(false);
    setIsUpdating(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Productos</h1>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleCreateClick}>
          Crear Producto
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-800 mb-2">Precio: ${product.price.toFixed(3)}</p>
            {product.image && <img src={product.image} alt={product.name} width={50} height={50} className="w-full h-32 object-cover mb-2" />}
            <div className="flex justify-center mt-10">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={() => handleUpdateClick(product)}>
                Actualizar
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteProduct(product.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      {isCreating && <NewProduct onCreate={createProduct} onClose={handleCloseModal} />}
      {isUpdating && selectedProduct && <UpdateProduct onUpdate={updateProduct} onClose={handleCloseModal} idProduct={selectedProductId} initialData={selectedProduct}/>}
    </div>
  );
}
