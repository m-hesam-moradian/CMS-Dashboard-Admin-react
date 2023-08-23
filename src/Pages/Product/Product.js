import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "./../../Components/chart/chart";
import { chartdata } from "./../../Data";
import UploadIcon from "@mui/icons-material/Upload";
export default function Product() {
  return (
    <div className="Product">
      <div className="ProductTitleProduct">
        <h3>Product</h3>
        <Link to={"/Products"}>
          <button>Create</button>
        </Link>
      </div>
      <div className="ProductTop">
        <div className="ProductTopLeft">
          <Chart title="product sale" data={chartdata} />
        </div>
        <div className="ProductTopRight">
          <div className="ProductTitle">
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/5d4faccb05aebbf5bbcd6eb170a79107e446533e_1646218643.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
              alt=""
            />
            <h4>dell laptop</h4>
          </div>
          <div className="ProductsDescribshoin">
            <div className="row">
              <div className="left">ID:</div>
              <div className="right">2</div>
            </div>
            <div className="row">
              <div className="left">Name:</div>
              <div className="right">dell laptop</div>
            </div>
            <div className="row">
              <div className="left">Sales:</div>
              <div className="right">$1,327,097</div>
            </div>
            <div className="row">
              <div className="left">Active:</div>
              <div className="right">yes</div>
            </div>
            <div className="row">
              <div className="left">In Stock:</div>
              <div className="right">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProductBottum">
        <form action="">
          <div className="ProductBottumLeft">
            <label htmlFor="">Product Name:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">In Stock:</label>
            <select name="Stock" id="">
              <option value="yes">yes</option>
              <option value="">no</option>
            </select>
            <label htmlFor="">Active:</label>
            <select name="Active" id="">
              <option value="yes">yes</option>
              <option value="">no</option>
            </select>
          </div>
          <div className="ProductBottumRight">
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/5d4faccb05aebbf5bbcd6eb170a79107e446533e_1646218643.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
              alt=""
            />
            <input  className="InputFile" type="file" />

            <button>
              {" "}
              <UploadIcon /> Upload Image
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
