import React from 'react'
import "./featuredInfo.css"
import {ArrowUpward, ArrowDownward} from "@mui/icons-material"

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$456</span>
          <span className="featuredMoneyRate">
            +2.3 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Salse</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$456</span>
          <span className="featuredMoneyRate">
            -2.3 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$456</span>
          <span className="featuredMoneyRate">-2.3</span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
    </div>
  );
}
