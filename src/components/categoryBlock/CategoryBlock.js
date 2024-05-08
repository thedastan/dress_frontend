import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CategoryBlock() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios("https://nurila.pythonanywhere.com//rentals/category/").then(
      (data) => {
        setData(data.data);
        console.log(data);
      }
    );
  }, []);

  return (
    <div className="py-[100px]" id="shop">
      <div className="container">
        <div className="flex flex-col items-center">
          <h3 className="text-[42px] font-semibold">Категории платьев</h3>
          <p className="text-[24px] font-light text-center">
            Минимализм, уникальность, качество и <br /> исключительно
            натуральные материалы
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-2 mt-5">
          {data.map((category) => (
            <div
              style={{
                background: `url(${category.image}) no-repeat center/cover`,
              }}
              className="w-[500px] h-[260px] relative rounded-lg font-bold border-solid border-[3px] border-red cursor-pointer"
              key={category.id}
              onClick={() =>
                navigate(`/category-detail/${category.name}/${category.id}`)
              }
            >
              <div
                className="absolute w-full h-full top-0 left-0 bg-[] flex items-center justify-center text-[25px] text-white"
                style={{ background: "rgba(0, 0, 0, 0.3)" }}
              >
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
