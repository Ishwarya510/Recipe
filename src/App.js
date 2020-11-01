import React from "react"
import './App.css';
import Img from "./Img"
import Img2 from "./Img2"
import Form from "./Form"

function App() {
  return (
    <div className="App">
      <h1>Daniya's Kitchen</h1>
      <Img img="Choco-lava-pastry.jpg" name="Choco Lava Pastry"/>
      <Img2 img="Cholocate-pastry.jpg" name="Chocolate Pastry"/>
      <Img img="Chicken65.jpg" name="Chicken65"/>
      <Img2 img="Chicken-manchurian.jpg" name="Chicken manchurian"/>
      <Img img="Hydrabad-chicken.jpg" name="Hydrabad Chicken"/>
      <Img2 img="Aghani-chicken.jpg" name="Afghani Chicken"/>
      <Img img="oreo milkshake.jpg" name="Oreo Milk"/>
      <Img2 img="daleem.jpg" name="Daleem"/>
      <Img img="pav-bhaji.jpg" name="Pav Bhaji"/>
      <Img2 img="Veg-cutlets.jpg" name="Veg Cutlets"/>
      <Form/>
      
    </div>
  );
}

export default App;