import { useState } from "react";
import data from "./data";
import './style.css'

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSignleSelection(getCurrentId) {
     setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  return (
    <div className="wrapper">
        <button className="but">Enable mutli</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick = {() => handleSignleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
                {
                    selected === dataItem.id ? <div className="content">{dataItem.answer}</div>: null
                }
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
}
