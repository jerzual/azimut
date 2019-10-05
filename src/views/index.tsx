import { Component } from "inferno";
import { hydrate } from "inferno-hydrate";
import App from "../views/components/App";
import { Azimut } from "./Azimut";
const wrapper = (
      <Azimut  />
);
hydrate(wrapper, document.getElementById("root"));