import React, { useState } from "react";
import { data } from "../../assets/data";
import Card from "./Card";
import MainStyle from "./Main.module.scss";
export default function Main() {
  console.log(data);
  const [inputvalue, setInputValue] = useState(" ");

  const filteredData = data.filter((item, i) => {
    return item.name.toLowerCase().includes(inputvalue.toLowerCase());
  });

  return (
    <div className={MainStyle.cards}>
      <form action="">
        <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="Search a legend"/>
      </form>
      {inputvalue || inputvalue === " "
        ? filteredData.map((item, i) => <Card key={i} item={item} />)
        : data.map((item, i) => <Card key={i} item={item} />)}
    </div>
  );
}
