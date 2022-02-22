import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Productrows } from "../../dummyData";

import "./productList.css";

export default function UserList() {
  const [data, setData] = useState(Productrows);
  const handleDelete = (id) => {
    console.log(data);

    setData(data.filter((item) => item.id !== id));

    console.log(data);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "productname",
      headerName: "Product",
      width: 210,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img
              className="productListImg"
              src={params.row.img}
              alt="picture"
            />
            {params.row.productname}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 170 },
    {
      field: "status",
      headerName: "Status",
      width: 170,
    },
    {
      field: "price",
      headerName: "Price",
      width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editProduct/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
