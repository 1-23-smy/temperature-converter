import { Text } from "@chakra-ui/react";
import "./App.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function App(props) {
  const [val, setVal] = useState(0);

  const [selector, setSelector] = useState("");

  const [final, setFinal] = useState("");
  const farenheit = (event) => {
    const values = event.target.value;
    setSelector(values);
  };

  const inputField = (e) => {
    const res = e.target.value;
    setVal(res);
  };
  function result() {
    if (selector === "Farenheit") {
      // console.log(val);
      const resulta = (((parseInt(val) - 32) * 5) / 9).toFixed(2);
      setFinal(`${resulta} ${" "}  ${"°C"}`);
      console.log(resulta);
      // final('')
    }
    if (selector === "Celsius") {
      // console.log(val);
      const resulta = (parseInt(val) * 9) / 5 + 32;
      setFinal(`${resulta} ${" "}  ${"°F"}`);
      console.log(resulta);
      // final('')
    }
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Temperature Converter</h3>
          <div className="form-group mt-3">
            <label>Degrees</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={inputField}
            />
          </div>
          <label>Type</label>

          <div className="form-group mt-3">
            <Form.Select size="sm" onChange={farenheit}>
              <option>Farenheit</option>
              <option>Celsius</option>
            </Form.Select>

            <h6 className="mt-2" opacity={"20%"}>
              Result
            </h6>

            <Text opacity={"100%"}>{final}</Text>
          </div>
          <div className="d-grid gap-2 mt-2">
            <button className="btn btn-primary" onClick={result}>
              Convert
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
