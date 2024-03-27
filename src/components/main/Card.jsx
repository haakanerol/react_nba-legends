import React, { useState } from "react";
import MainStyle from "./Main.module.scss"
const Card = (props) => {
  console.log(props);
  const { name, img, statistics } = props.item;
  const [show, setShow] = useState(true);

  return (
    <div className={MainStyle.card} onClick={() => setShow(!show)}>
      {show ? 
        <div className={MainStyle.cardfront}>
          <img src={img} alt="" />
          <h2>{name}</h2>
        </div>
       : 
        <div className={MainStyle.cardback}>
          <ul>
            {statistics.map((item, i) => (
              <li key={i} >{item}</li>
            ))}
          </ul>
          <h2>{name}</h2>
        </div>
      }
    </div>
  );
};

export default Card;
