import React from "react";
import styled from "styled-components";

const Icon = (props) => {
  const Icon = styled.img`
    width: 35%;
  `;

  var icon = "";
  switch (props.condition) {
    case "Clear":
      icon = "./img/clear.png";
      break;

    case "Clouds":
      icon = "./img/cloudy.png";
      break;

    case "Haze":
      icon = `./img/haze.png`;
      break;

    case "Hail":
      icon = `./img/hail.png`;
      break;

    case "Fog":
      icon = "./img/foggy.png";
      break;

    case "Tornado":
      icon = `./img/tornado.png`;
      break;

    case "Dust":
      icon = `./img/dust.png`;
      break;

    case "Mist":
      icon = `./img/foggy.png`;
      break;

    case "Snow":
      icon = `./img/snow.png`;
      break;

    case "Rain":
      icon = `./img/rain.png`;
      break;

    case "Drizzle":
      icon = `./img/drizzle.png`;
      break;

    case "Thunderstorm":
      icon = `./img/thunder.png`;
      break;

    default:
      icon = `./img/foggy.png`;
      break;
  }

  return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
