import React, { useState } from "react";
import axios from "axios";

const TextForm = ({ toggleForm }) => {
  const [textData, setTextData] = useState({
    title: "",
    content: "",
    author: "",
    category: "Software", // Add category state with initial value
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/mongo/abdulkadir", textData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    toggleForm(false);
    setTextData({
      title: "",
      content: "",
      author: "",
      category: "Software",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTextData((prevTextData) => ({ ...prevTextData, [name]: value }));
  };

  return (
    <div>
      {toggleForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="inline-block align-bottom bg-white p-6 rounded-lg px-4 pt-5 pb-4 text-left w-3/6 shadow-lg">
            <div className="text-right">
              <button
                type="button"
                className="inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={toggleForm}
              >
                X
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="font-bold">
                  Başlık:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full border rounded-md py-2 px-3"
                  value={textData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="font-bold">
                  İçerik:
                </label>
                <textarea
                  id="content"
                  name="content"
                  className="w-full border rounded-md py-2 px-3"
                  value={textData.content}
                  onChange={handleChange}
                  required
                  rows={5}
                  maxLength={100000}
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="author" className="font-bold">
                  Yazan:
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="w-full border rounded-md py-2 px-3"
                  value={textData.author}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="font-bold mr-2">
                  Kategori:
                </label>
                <select
                  id="category"
                  name="category"
                  className="border rounded-md py-2 px-3"
                  value={textData.category}
                  onChange={handleChange}
                >
                  <option value="Software">Yazılım</option>
                  <option value="Cyber">Siber</option>
                  <option value="Design">Tasarım</option>
                  <option value="Electronics">Elektronik</option>
                </select>
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
      )}
    </div>
  );
};

export default TextForm;
