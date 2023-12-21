import React from "react";
import bg from "../../images/about-img.png";

export default function About() {
  return (
    <>
      <div className="bg-[#EBEBEB] py-[150px]" id="about">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="">
              <h3 className="text-[42px] font-semibold">О нас</h3>
              <p className="text-[20px] font-light">
                Мы любим городскую моду и обожаем создавать одежду. Находимся
                в Бишкеке. Наш бренд Nurila сфокусирован на городском стиле,
                универсальности и натуральных материалах. Доставка доступна
                по всему миру.
              </p>
            </div>
            <img src={bg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
