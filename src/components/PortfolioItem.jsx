import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Close from "../assets/close.svg";

function PortfolioItem({ img, title, details }) {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (!modal) return undefined;

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setModal(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [modal]);

  return (
    <div className="portfolio_item">
      <img src={img} alt={title} className="portfolio_img" />

      <button className="portfolio_hover" onClick={toggleModal} type="button">
        <h3 className="portfolio_title">{title}</h3>
      </button>

      {modal && typeof document !== "undefined" && createPortal(
        <div className="portfolio_modal" onClick={toggleModal} role="dialog" aria-modal="true">
        <div className="portfolio_modal_content" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="modal_close_button" onClick={toggleModal} aria-label="Close project details">
            <img src={Close} className="modal_close" alt="" />
          </button>

          <h3 className="modal_title">{title}</h3>

          <ul className="modal_list grid">
            {details.map(({ icon, title, desc }, index) => {
              return (
                <li className="modal_item" key={index}>
                  <span className="item_icon">{icon}</span>

                  <div>
                    <span className="item_title">{title}</span>
                    <span className="item_details">{desc}</span>
                  </div>
                </li>
              )
            })}
          </ul>

          <img src={img} alt={title} className="modal_img" />
        </div>
      </div>,
      document.body
      )}
    </div>
  );
}

export default PortfolioItem;
