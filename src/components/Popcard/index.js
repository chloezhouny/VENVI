import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';

import { Card } from 'antd';



function Popcard(props){
  console.log(props);
  var first;
  var second;
  switch(props.number)
  {
    case "1": 
      first = props.pop[0][0];
      second = props.pop[0][1];
      break;
    case "2": 
      first = props.pop[0][2];
      second = props.pop[0][3];
      break;
    case "3": 
      first = props.pop[0][4];
      second = props.pop[0][5];
      break;
    case "4": 
      first = props.pop[0][6];
      second = props.pop[0][7];
      break;
  }

  console.log(first);
  console.log(first.make);
  console.log(first.rating);




  return (
  <div>
  <Card style={{ width: 1500}}>
    <p className="title">{first.make} {first.model}</p>
    <p className="rating">{first.rating}</p>
    <p className="out">out of</p> 
    <p className="five">5 stars</p>
    <div id="front"></div>
    <div id="rightContainer">
     <img id="right" alt="car" src={first.image}/>
    </div>
    <div id="back"></div>
  </Card>

   <Card style={{ width: 1500 }}>
    <p className="title">{second.make} {second.model}</p>
    <p className="rating">{second.rating}</p>
    <p className="out">out of</p>
    <p className="five">5 stars</p>

    <div id="leftContainer">
    <img id="left" alt="car" src={second.image}/>
    </div>

  </Card>
  </div>
  );
}


export default Popcard;


          