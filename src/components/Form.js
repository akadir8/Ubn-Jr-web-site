import React, { useState } from "react";
import Toast from "./Toast";

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
    {showToast && (
      <Toast
        message="Bilgileriniz başarıyla gönderildi!"
        onClose={handleToastClose}
      />
    )}
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            X
          </button>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-2">İSİM :</h1>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full rounded-md"
                placeholder="İsminizi girin..."
              />



            </div>
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-2">SOY İSİM :</h1>

              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full rounded-md"
                placeholder="Soyisminizi Giriniz..."
              />
            </div>
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-2">E MAİL :</h1>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full rounded-md"
                placeholder="Mailinizi girin..."
              />

            </div>
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-2">MESAJ :</h1>
              <textarea

                id="message"
                name="message"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full rounded-md"
                placeholder="Mesajınızı girin..."
              />

            </div>
            <div className="text-right">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                GÖNDER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
