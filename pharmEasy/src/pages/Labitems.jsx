import React from "react";
import "../pageStyle/labitems.css";
const Labitems = () => {
  return (
    <div>
      <div className="lab-type">
        <div className="lab-box">
        

          <div className="lab-box-itme">
            <img
              src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0"
              alt=""
            />
            <p className="medicine-name">Medicine</p>
            <div className="off-price">
              <p>FLAT 24% OFF</p>
            </div>
          </div>

          <div className="lab-box-itme">
            <img
              src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0"
              alt=""
            />
            <p className="medicine-name">Lab Tests</p>
            <div className="off-price">
              <p>UPTO 70% OFF</p>
            </div>
          </div>

          <div className="lab-box-itme">
            <img
              src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0"
              alt=""
            />
            <p className="medicine-name">Healthcare</p>
            <div className="off-price">
              <p>UPTO 60% OFF</p>
            </div>
          </div>

          <div className="lab-box-itme">
            <img
              src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0"
              alt=""
            />
            <p className="medicine-name">Healthcare</p>
          </div>

          <div className="lab-box-itme">
            <img
              src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0"
              alt=""
            />
            <p className="medicine-name">PLUS</p>
            <div className="off-price">
              <p>Save 5% Extra</p>
            </div>
          </div>

          <div className="lab-box-itme">
            <img
              src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0"
              alt=""
            />
            <p className="medicine-name">Medicine</p>
          </div>
          <div className="lab-box-itme">
            <img
              src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0"
              alt=""
            />
            <p className="medicine-name">Value Store</p>
            <div className="off-price">
              <p>UPTO 50% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labitems;
