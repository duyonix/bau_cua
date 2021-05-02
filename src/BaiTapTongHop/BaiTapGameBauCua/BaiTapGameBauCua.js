import React from "react";
import DanhSachCuoc from "./DanhSachCuoc";
import DiemCuoc from "./DiemCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import "./BaiTapGameBauCua.css";

export default function BaiTapGameBauCua() {
  return (
    <div id="BaiTapGameBauCua" class="container-fluid" style={{ margin: 0 }}>
      <DiemCuoc />
      <div className="row">
        <div className="col-8">
          <DanhSachCuoc />
        </div>
        <div className="col-4">
          <DanhSachXucXac />
        </div>
      </div>
    </div>
  );
}
