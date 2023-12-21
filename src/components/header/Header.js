import React, { useEffect, useState } from "react";
import LogoIcon from "../../images/LogoIcon";
import { SlHandbag } from "react-icons/sl";

export default function Header({ mode }) {
  const [modal, setModal] = useState(false);

  const links = [
    {
      name: "Главная",
      link: "/",
    },
    {
      name: "Магазин",
      link: "/#shop",
    },
    {
      name: "О проекте",
      link: "/#about",
    },
    {
      name: "Контакты",
      link: "/#footer",
    },
  ];

  let modal_window = document.querySelector("#modal_window");

  window.addEventListener("click", (e) => {
    if (e.target === modal_window) {
      setModal(false);
    }
  });

  const [basket, setBasket] = useState([]);

  function getProductInBasket() {
    let data = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(data);
  }

  useEffect(() => {
    getProductInBasket();
  }, [modal]);

  let total = 0;
  basket.map((el) => (total += el.price));
  console.log(total);

  return (
    <div className="absolute top-0 w-full z-10 py-3">
      <div className="container">
        <div className=" flex justify-between items-center">
          <LogoIcon color={mode ? "black" : "white"} />
          <div className="flex items-center gap-6">
            {links.map((link, index) => (
              <a
                href={link.link}
                className="text-white font-semibold text-lg  "
                style={{ color: mode ? "black" : "white" }}
                key={index}
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => setModal(true)}
            style={{
              color: mode ? "black" : "white",
              fontSize: "24px",
              border: "none",
              background: "transparent",
            }}
          >
            <SlHandbag />
          </button>

          <div
            id="modal_window"
            style={{ display: modal ? "" : "none" }}
            className="fixed z-10 w-[100%] h-[100vh] bg-[#4e4e4e82] backdrop-blur top-[0] right-[0] flex items-center justify-center "
          >
            <div className="bg-white flex gap-[28px]  pt-[15px] pl-[49px] pb-[80px] pr-[52px] flex-col items-end absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
              <svg
                onClick={() => setModal(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
              >
                <g clip-path="url(#clip0_113_3058)">
                  <path
                    d="M7.32459 42.675C4.93683 40.3688 3.03228 37.6102 1.72205 34.5601C0.411828 31.51 -0.277828 28.2295 -0.306673 24.91C-0.335519 21.5905 0.297024 18.2985 1.55405 15.2261C2.81107 12.1537 4.6674 9.36243 7.01471 7.01511C9.36203 4.66779 12.1533 2.81146 15.2257 1.55444C18.2981 0.297421 21.5901 -0.335122 24.9096 -0.306277C28.2291 -0.277431 31.5096 0.412225 34.5597 1.72245C37.6098 3.03267 40.3684 4.93723 42.6746 7.32499C47.2285 12.04 49.7484 18.3551 49.6914 24.91C49.6345 31.4649 47.0053 37.7352 42.3701 42.3704C37.7348 47.0057 31.4645 49.6349 24.9096 49.6918C18.3547 49.7488 12.0396 47.2289 7.32459 42.675ZM10.8496 39.15C14.6024 42.9028 19.6923 45.0111 24.9996 45.0111C30.3069 45.0111 35.3968 42.9028 39.1496 39.15C42.9024 35.3972 45.0107 30.3073 45.0107 25C45.0107 19.6927 42.9024 14.6028 39.1496 10.85C35.3968 7.09717 30.3069 4.98886 24.9996 4.98886C19.6923 4.98886 14.6024 7.09717 10.8496 10.85C7.09677 14.6028 4.98847 19.6927 4.98847 25C4.98847 30.3073 7.09677 35.3972 10.8496 39.15ZM35.5996 17.925L28.5246 25L35.5996 32.075L32.0746 35.6L24.9996 28.525L17.9246 35.6L14.3996 32.075L21.4746 25L14.3996 17.925L17.9246 14.4L24.9996 21.475L32.0746 14.4L35.5996 17.925Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_113_3058">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="mod">
                <div className="flex flex-col">
                  <label className="label">Ваше имя *</label>
                  <input className="inpText" type="text" />
                  <label className="label">Телефон (только цифры)*</label>
                  <input className="inpText" type="text" />
                  <label className="label">Даты бронирования</label>
                  <div className="date">
                    <input type="date" />
                    <input type="date" />
                  </div>
                  <button className="want">Хочу забронировать</button>
                </div>
                <div className="basket">
                  <div className="bas">
                    {basket
                      ? basket.map((el) => (
                          <div className="cart">
                            <img src={el.images[0].image} alt="" />
                            <div className="cart-text">
                              <h1>{el.name}</h1>
                              <h2>{el.price} сом</h2>
                            </div>
                          </div>
                        ))
                      : "loading..."}
                  </div>
                  <div className="total flex">
                    <p>Итого</p>
                    <span>{total} сом</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
