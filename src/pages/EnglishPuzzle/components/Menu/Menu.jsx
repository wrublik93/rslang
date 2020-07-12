import React from "react";
import PopupSelect from "../PopupSelect";
import "pages/EnglishPuzzle/components/Menu/style.scss";

function Menu({ level, setLevel, raund, setRaund, page, setPage }) {
  const params = [
    {
      name: "Level",
      values: new Array(6).fill(0).map((item, index) => item + index),
      value: level,
      onChange: (e) => {
        setLevel(+e.target.value);
      },
    },
    {
      name: "Raund",
      values: new Array(60).fill(0).map((item, index) => item + index),
      value: raund,
      onChange: (e) => {
        const newRaund = +e.target.value;
        setRaund(newRaund);
        if (page !== Math.floor(newRaund / 2)) {
          setPage(Math.floor(newRaund / 2));
        }
      },
    },
  ];

  return (
    <div className="menu-container">
      {params.map((item) => (
        <PopupSelect
          key={item.name}
          data={item.values}
          name={item.name}
          value={item.value}
          onChange={item.onChange}
        />
      ))}
    </div>
  );
}

export default React.memo(Menu);
