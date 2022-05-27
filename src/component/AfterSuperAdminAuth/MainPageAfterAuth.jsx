import React from "react";
import Engine from "../../Asset/engine.png";
import Commerce from "../../Asset/commerce.png";
import Mobile from "../../Asset/Mobile.png";
import { useNavigate } from "react-router-dom";
const MainPageAfterAuth = () => {
  const Navigate = useNavigate();
  const handleClick = (e) => {
    const Div = e.target;
    const Attribute = Div.getAttribute("identification");
    if (Attribute === "mlmEngineDashboard") {
      Navigate("/mlmEngineDashboard");
    } else if (Attribute === "mlmEcommerceDashboard") {
      Navigate("/mlmEcommerceDashboard");
    } else if (Attribute === "mobileAppDashboard") {
      Navigate("/mobileAppDashboard");
    }
  };
  return (
    <>
      <div className="w-full min-h-screen grid place-items-center">
        <div className="flex gap-16 flex-wrap w-1/2 ml-auto mr-auto items-center justify-center">
          {/* mlm Engine div  */}
          <button
            className="bg-gray-300 px-10 py-5 rounded-sm hover:rounded-lg hover:shadow-2xl hover:transition-all hover:ease-in hover:duration-300 z-10"
            identification="mlmEngineDashboard"
            onClick={handleClick}
            desable
          >
            {/* Represnt Image  */}
            <div>
              <img src={Engine} alt="logo" className="w-20 mb-3 z-0" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">MLM ENGINE</h3>
            </div>
          </button>
          {/* E commerce App  */}
          <button
            className="bg-gray-300 px-10 py-5 rounded-sm hover:rounded-lg hover:shadow-2xl hover:transition-all hover:ease-in hover:duration-300"
            identification="mlmEcommerceDashboard"
            onClick={handleClick}
          >
            <div>
              <img src={Commerce} alt="logo" className="w-20 mb-3" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">E-Commerce</h3>
            </div>
          </button>
          <button
            className="bg-gray-300 px-10 py-5 rounded-sm hover:rounded-lg  hover:shadow-2xl hover:transition-all hover:ease-in hover:duration-300"
            onClick={handleClick}
            identification="mobileAppDashboard"
          >
            <div>
              <div>
                <img src={Mobile} alt="logo" className="w-20 mb-3" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Mobile App</h3>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPageAfterAuth;
