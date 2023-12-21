import React from "react";

export default function Hero() {
  return (
    <div id="hero">
      <div className="bg">
        <div className="container">
          <div className=" flex flex-col justify-center items-center mt-[300px]">
            <h1 className="text-[72px] text-white font-semibold">
              ПРОКАТ ПЛАТЬЕВ
            </h1>
            <p className="text-white text-center text-[22px] mt-[34px] font-light">
              ПЛАТЬЯ НАПРОКАТ <br /> ДЛЯ ЛЮБОГО СЛУЧАЯ
            </p>
            <button className="bg-[#FF8AB5] py-[19px] px-[62px] text-white font-bold mt-[70px]">
              Магазин
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
