import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {

    const Button = ({status}) =>{
        return <button className={"widgetLgButton " + status}>{status}</button>;
    }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTR">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTR">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3054137/pexels-photo-3054137.jpeg?cs=srgb&dl=pexels-nasser-almutairi-3054137.jpg&fm=jpg"
              alt="carole N."
              className="profileImg"
            />
            <span className="widgetLgName">Mohammad Idris</span>
          </td>
          <td className="widgetLgDate">23 feb, 2022</td>
          <td className="widgetLgAmount">434.2</td>
          <td className="widgetLgStatus">
            <Button status="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTR">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3054137/pexels-photo-3054137.jpeg?cs=srgb&dl=pexels-nasser-almutairi-3054137.jpg&fm=jpg"
              alt="carole N."
              className="profileImg"
            />
            <span className="widgetLgName">Mohammad Idris</span>
          </td>
          <td className="widgetLgDate">23 feb, 2022</td>
          <td className="widgetLgAmount">434.2</td>
          <td className="widgetLgStatus">
            <Button status="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTR">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3054137/pexels-photo-3054137.jpeg?cs=srgb&dl=pexels-nasser-almutairi-3054137.jpg&fm=jpg"
              alt="carole N."
              className="profileImg"
            />
            <span className="widgetLgName">Mohammad Idris</span>
          </td>
          <td className="widgetLgDate">23 feb, 2022</td>
          <td className="widgetLgAmount">434.2</td>
          <td className="widgetLgStatus">
            <Button status="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTR">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/8939047/pexels-photo-8939047.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8939047.jpg&fm=jpg"
              alt="carole N."
              className="profileImg"
            />
            <span className="widgetLgName">Mohammad Idris</span>
          </td>
          <td className="widgetLgDate">23 feb, 2022</td>
          <td className="widgetLgAmount">434.2</td>
          <td className="widgetLgStatus">
            <Button status="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTR">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3054137/pexels-photo-3054137.jpeg?cs=srgb&dl=pexels-nasser-almutairi-3054137.jpg&fm=jpg"
              alt="Mohammad Idris"
              className="profileImg"
            />
            <span className="widgetLgName">Mohammad Idris</span>
          </td>
          <td className="widgetLgDate">23 feb, 2022</td>
          <td className="widgetLgAmount">434.2</td>
          <td className="widgetLgStatus">
            <Button status="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
