import React from 'react'
import "./home.css"
import { userData } from "../../dummyData";
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from "../../components/widgetLg/WidgetLg";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart"
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} dataKey="Users" title="User Analytics" />
      <div className="widgetSec">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
