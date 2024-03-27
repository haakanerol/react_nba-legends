import React, { useState } from "react";

const Card = (props) => {
  console.log(props);
  const { name, img, statistics } = props.item;
  const [show, setShow] = useState(true);

  return (
    <div className="card" onClick={() => setShow(!show)}>
      {show ? 
        <div>
          <img src={img} alt="" />
          <h2>{name}</h2>
        </div>
       : 
        <div>
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
