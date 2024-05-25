import React, { Component } from "react";
import { potion } from "./potion";
import { bullet } from "./Bullet";
import { snowFlake } from "./snowFlake";
import { coinPirata } from "./coinPirata";

const RewardIcons = [
  {component: potion, name: "Potion" },
  {component: bullet, name: "Bullet"},
  {component: snowFlake, name: "snowFlake"},
  {component: coinPirata, name: "coinPirata"},
];

export default RewardIcons;