import React from "react";
import logo from "./assets/ubnjr.png";
import Button from "./ButonPage";
import Form from "./Form";
import Toast from "./Toast";

function Navbar(props) {
  const { activeLink, setActiveLink, Links } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);

  const toggleForm = () => setIsOpen(!isOpen);

  const toggleToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="bg- w-full h-screen">
      <div className="shadow-md w-full fixed top-0 left-0">
        <div
          id="navBar"
          className="md:flex items-center justify-center py-4 md:px-10 px-7"
        >
          <div className="font-bold mr-48 text-2xl cursor-pointer flex items-center font-font text-sky-800">
            <span>
              <img
                src={logo}
                width={48}
                height={48}
                alt=""
                style={{ marginRight: "10px" }}
                title="Ubn-Jr"
              />
            </span>
            <p>Ubn-Jr <br /> <p className="text-xs">You Be Not Junior!</p></p>

          </div>
          <ul className=" md:flex md:items-center">
          {Links.map((link, index) => (
              <li key={link.name} className="md:ml-8 text-xl">
                <button
                  onClick={() => setActiveLink(index)}
                  className={`text-sky-800 hover:text-gray-400 duration-100 ${
                    activeLink === index ? "font-bold" : ""
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li className="md:ml-8">
              <Button showForm={toggleForm} />
            </li>
          </ul>
        </div>
      </div>
      {isOpen && <Form toggleForm={toggleForm} toggleToast={toggleToast} />}
      {showToast && <Toast message="Bilgileriniz başarıyla gönderildi." />}
    </div>
  );
}

export default Navbar;
