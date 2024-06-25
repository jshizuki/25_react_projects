import { useState } from "react";
import data from "../data.js";

function Accordian() {
  const [selected, setSelected] = useState([]);

  const handleSelected = (currentId) => {
    if (selected.length === 0 || !selected.includes(currentId)) {
      setSelected((prev) => [currentId, ...prev]);
    } else {
      setSelected((prev) => {
        return prev.filter((each) => {
          return each !== currentId;
        });
      });
    }
  };

  return (
    <div className="container">
      {data.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <h3 onClick={() => handleSelected(dataItem.id)}>
              {dataItem.question}
            </h3>
            <h4>{selected.includes(dataItem.id) ? dataItem.answer : null}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Accordian;
