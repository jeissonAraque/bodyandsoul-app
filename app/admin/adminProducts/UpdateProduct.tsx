import React, { useState } from "react";

interface UpdateProductProps {
  onUpdate: (productId: string, updates: any) => void;
  onClose: () => void;
}

const UpdateProduct: React.FC<UpdateProductProps> = ({ onUpdate, onClose }) => {
  const [formData, setFormData] = useState({
    productId: "",
    updates: { name: "", description: "", price: 0 }, // Agrega valores iniciales para los campos
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      updates: { ...prevState.updates, [name]: value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData.productId, formData.updates);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Actualizar Producto</h2>
        <form onSubmit={handleSubmit}>
          {/* Input para productId */}
          <input
            type="hidden"
            name="productId"
            value={formData.productId}
            onChange={handleChange}
          />

          {/* Inputs para los campos del producto */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.updates.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            {/* Otros inputs para description y price */}
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
