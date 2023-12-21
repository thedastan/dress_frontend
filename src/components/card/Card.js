import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
  const navigate = useNavigate();
  return (
    <div className="w-[275px] flex flex-col items-center gap-4 mb-[50px]">
      <img
        src={data.images[0].image}
        alt=""
        className="w-full cursor-pointer h-[300px] w-[200px] object-cover"
        onClick={() => navigate(`/dress-detail/${data.id}`)}
      />
      <h3
        className="text-[#FF8AB5] font-bold cursor-pointer"
        onClick={() => navigate(`/dress-detail/${data.id}`)}
      >
        {data.name}
      </h3>
      <p
        className="text-[#FF8AB5] cursor-pointer"
        onClick={() => navigate(`/dress-detail/${data.id}`)}
      >
        {data.price}c
      </p>
      <button
        className="py-[13px] px-[30px] rounded-md bg-[#FF8AB5] text-white font-semibold"
        onClick={() => {
          const localData = JSON.parse(localStorage.getItem("basket")) || [];

          if (!localData.some((el) => el.id === data.id)) {
            localData.push(data);
            localStorage.setItem("basket", JSON.stringify(localData));
          }
        }}
      >
        Добавить в корзину
      </button>
    </div>
  );
}
