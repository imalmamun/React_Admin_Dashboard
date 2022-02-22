import { Link } from "react-router-dom";
import "./editProduct.css";
import Chart from "../../components/chart/Chart";
import { editProductData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

export default function EditProduct() {
  return (
    <div className="editProduct">
      <div className="editProductTitleContainer">
        <h1 className="editProductTitle">editProduct</h1>
        <Link to="/newProduct">
          <button className="editProductAddButton">Create</button>
        </Link>
      </div>
      <div className="editProductTop">
        <div className="editProductTopLeft">
          <Chart
            data={editProductData}
            dataKey="Salse"
            title="Sales Performance"
          />
        </div>
        <div className="editProductTopRight">
          <div className="editProductInfoTop">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="editProductInfoImg"
            />
            <span className="editProductName">Apple Airpods</span>
          </div>
          <div className="editProductInfoBottom">
            <div className="editProductInfoItem">
              <span className="editProductInfoKey">id:</span>
              <span className="editProductInfoValue">123</span>
            </div>
            <div className="editProductInfoItem">
              <span className="editProductInfoKey">sales:</span>
              <span className="editProductInfoValue">5123</span>
            </div>
            <div className="editProductInfoItem">
              <span className="editProductInfoKey">active:</span>
              <span className="editProductInfoValue">yes</span>
            </div>
            <div className="editProductInfoItem">
              <span className="editProductInfoKey">in stock:</span>
              <span className="editProductInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="editProductBottom">
        <form className="editProductForm">
          <div className="editProductFormLeft">
            <label>editProduct Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="editProductFormRight">
            <div className="editProductUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="editProductUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="editProductButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
