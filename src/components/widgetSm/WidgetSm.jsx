import React from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function widgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/7277590/pexels-photo-7277590.jpeg?cs=srgb&dl=pexels-muhammadtaha-ibrahim-ma%27aji-7277590.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmInfo">
            <span className="widgetSmName">Ali</span>
            <span className="widgetSmJob">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmBtnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/7277590/pexels-photo-7277590.jpeg?cs=srgb&dl=pexels-muhammadtaha-ibrahim-ma%27aji-7277590.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmInfo">
            <span className="widgetSmName">Ali</span>
            <span className="widgetSmJob">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmBtnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/7277590/pexels-photo-7277590.jpeg?cs=srgb&dl=pexels-muhammadtaha-ibrahim-ma%27aji-7277590.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmInfo">
            <span className="widgetSmName">Ali</span>
            <span className="widgetSmJob">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmBtnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/7277590/pexels-photo-7277590.jpeg?cs=srgb&dl=pexels-muhammadtaha-ibrahim-ma%27aji-7277590.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmInfo">
            <span className="widgetSmName">Ali</span>
            <span className="widgetSmJob">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmBtnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/7277590/pexels-photo-7277590.jpeg?cs=srgb&dl=pexels-muhammadtaha-ibrahim-ma%27aji-7277590.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmInfo">
            <span className="widgetSmName">Ali</span>
            <span className="widgetSmJob">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmBtnIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
