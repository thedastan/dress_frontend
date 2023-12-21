import React from "react";

export default function FormEmail() {
  return (
    <div className="py-[150px]">
      <div className="container">
        <div className="flex flex-col gap-7 items-center">
          <h2 className="text-[42px] font-semibold ">
            Узнайте об акциях и скидках первыми!
          </h2>
          <p className="text-[24px] font-light max-w-[520px] text-center">
            Один раз в месяц мы будем присылать вам информацию о наших последних
            коллекциях, скидках и акциях. Обещаем быть полезными!
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ваш E-mail"
              className="w-[440px] p-2 border-[1px] border-solid border-[#C2C2C2]"
            />
            <button className="py-[18px] px-[30px] bg-[#FF8AB5] text-white font-semibold">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
