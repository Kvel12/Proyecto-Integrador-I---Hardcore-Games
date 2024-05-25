import React, { Component } from "react";
import { Coin } from "./coinOrigin";
import { crystal } from "./crystal";
import { gem } from "./gem";
import { lifePotion } from "./lifePotion";
import { ruby_heart_gem } from "./ruby_heart_gem";
import { Start } from "./star";

const RewardIcons = [
  {component: Coin, name: "coin" },
  {component: crystal, name: "crystal"},
  {component: gem, name: "gem"},
  {component:lifePotion, name:"lifePotion"},
  {component: ruby_heart_gem, name: "rubyHeart"},
  {component: Start, name: "Start"},
];

export default RewardIcons;

