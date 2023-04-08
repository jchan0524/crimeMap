import React from "react";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import DirectionMap from "../components/DirectionMap";
import Map from "../components/Map";
import Map1 from "../components/Map1";
import { Form } from "react-bootstrap";


export default function Home(props) {
  const [cookie, setCookie] = useState(props.token);
  useEffect(() => {
    console.log(props);
  });

  return (
    
     <Map1/>
  );
}
