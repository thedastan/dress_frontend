import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/Header";

export default function DressDetail() {
  const [dress, setDress] = useState();
  const [showBasket, setShowBasket] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios(`https://nurba96.pythonanywhere.com/rentals/dress/${id}/`).then(
      ({ data }) => {
        console.log(data);
        setDress(data);
      }
    );
  }, [id]);

  return (
    <div>
      <Header mode={true} />
      <div className="container">
        <div className="mt-[150px]">
          <Link to="/" className=" text-blue-800">
            Главная
          </Link>{" "}
          <span>{">"}</span>
          <Link to={-1} className=" text-blue-800">
            {dress?.category?.name}
          </Link>{" "}
          <span>{">"}</span>
          <span className="capitalize">{dress?.name}</span>
        </div>

        <h1 className="text-[30px] text-center pt-8 text-[#666]">
          {dress?.main_name}
        </h1>
        <div className="flex gap-7 mt-10 pb-11">
          <img src={dress?.main_image} alt="" className="w-[750px] " />
          <div className="text-[#666]">
            <h2 className=" text-[22px] ">{dress?.name}</h2>
            <p className="mt-5">Название: {dress?.name}</p>

            <p className="mt-6">
              Подходит для размеров:{" "}
              {dress?.size.map((el) => (
                <span>{el.name} </span>
              ))}
            </p>

            <p>Срок аренды: {dress?.period} сутки</p>
            <p>Вес платья: 0,450 кг.</p>

            <p className="mt-6">Стоимость аренды: {dress?.price} сом</p>

            <p>Залог: {dress?.deposit} сом</p>

            <p className="mt-6">Описание: {dress?.description}</p>

            <p className="mt-6">Рост модели: {dress?.person.height} см</p>
            <p>Грудь/Талия/Бедра: {dress?.person.parameters} см.</p>

            <button
              className="py-[10px] px-[16px] bg-[#FF79AA] text-white mt-6"
              onClick={() => {
                setShowBasket(true);
                const localData =
                  JSON.parse(localStorage.getItem("basket")) || [];

                if (!localData.some((el) => el.id === dress.id)) {
                  localData.push(dress);
                  localStorage.setItem("basket", JSON.stringify(localData));
                }
              }}
            >
              {showBasket ? "Добавьлено" : "Забронировать"}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center pb-28">
          {dress?.images.map((img) => (
            <img src={img.image} alt="" className="w-[48%]" />
          ))}
        </div>
      </div>
    </div>
  );
}
