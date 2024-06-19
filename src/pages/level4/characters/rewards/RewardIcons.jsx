import React, { Component } from "react";
import { potion } from "./potion";
import { Coin } from "./coinOrigin";
import { lifePotion } from "./lifePotion";
import { gemPower } from "./gemPower";

const RewardIcons = [
  {component: potion, name: "Potion" },
  {component: Coin, name: "Coin" },
  {component: lifePotion, name: "LifePotion"},
  {component: gemPower, name: "GemPower"}
];

export default RewardIcons;