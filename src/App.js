import React from "react";
import { useState } from "react";
import Screen from "./Screen";
function App() {
  let numbers = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  let [calc, setCalc] = useState({
    sign: "",
    num: '',
    secnum: "",
    res: "",
  });
  let value, result;

  let numClickHandler = (e) => {
    value = e.target.textContent;
   

    setCalc({
      ...calc,
      num: calc.num!==0||calc.num!==''?calc.num+value:0,
      res: !calc.sign ? "" : calc.res,
    });
    if (calc.num !== 0 && calc.sign !== "") {
      setCalc({
        ...calc,
        secnum: calc.secnum!==0||calc.secnum!==''?calc.secnum+value:0,
      });
    }
  };
  let signClickHandler = (e) => {
    e.preventDefault();
    value = e.target.textContent;
    

    if (value !== "=") {
      setCalc({
        ...calc,
        sign: value,
      });
    }
    if (value === "=") {
      if (calc.sign === "+") {
        result = `${Number(calc.num) + Number(calc.secnum)}`;
        setCalc({
          ...calc,
          res: result,
        });
      } else if (calc.sign === "-") {
        result = `${Number(calc.num) - Number(calc.secnum)}`;
        setCalc({
          ...calc,
          res: result,
        });
      } else if (calc.sign === "/") {
        result = `${Number(calc.num) / Number(calc.secnum)}`;
        setCalc({
          ...calc,
          res: result,
        });
      } else if (calc.sign === "X") {
        result = `${Number(calc.num) * Number(calc.secnum)}`;
        setCalc({
          ...calc,
          res: result,
        });
      }
    }
    if (value === "C") {
      setCalc({
        ...calc,
        num: '',
        secnum: "",
        sign: "",
        res: "",
      });
    }
  };


  return (
    <div id="container">
      <div
        id="calc"
        className="      
      justify-center
      justify-items-center
      place-self-center
      content-center
      justify-self-center
      p-30
      m-40
      grid
      grid-cols-4
      border
      w-96
      gap-1
      col-span-4
      grid-row-6

      "
      >
        <Screen
          display={calc.num}
          sign={calc.sign}
          otherdisplay={calc.secnum}
          result={calc.res}
        />
        {numbers.flat().map((number, i) => {
          return (
            <button
              key={i}
              onClick={(e) => {
                if (!isNaN(number)) {
                  numClickHandler(e);
                } else {
                  signClickHandler(e);
                }
              }}
              className="
          bg-slate-400
          rounded
          h-12
          w-8/12
          "
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
