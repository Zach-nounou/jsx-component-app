// src/App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import Providename from "./components/Providename";

export default function App() {
  const p_firstName = prompt("enter your name bro !")

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <Card style={{ width: "30rem" }}>
        <Card.Body className="text-center">
          <Image  style={{width: "100%"}}/>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      
       <Providename P_firstName={p_firstName} />
    </div>

  );
}
