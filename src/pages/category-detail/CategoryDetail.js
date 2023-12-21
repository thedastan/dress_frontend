import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import axios from "axios";
import Card from "../../components/card/Card";

export default function CategoryDetail() {
  const [data, setData] = useState([]);
  const { id, name } = useParams();

  useEffect(() => {
    axios(
      `https://nurba96.pythonanywhere.com/rentals/category_dress/${id}/`
    ).then(({ data }) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <>
      <Header mode={true} />
      <div className="flex justify-center items-center mt-[150px] pb-[100px]">
        <h1 className="text-[40px] font-bold">{name}</h1>
      </div>
      <div className="flex justify-center gap-3 w-[1200px] mx-auto flex-wrap pb-[100px]">
        {data.map((card) => (
          <Card data={card} />
        ))}
      </div>
    </>
  );
}
