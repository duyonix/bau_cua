import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DiemCuoc() {
  const dispatch = useDispatch();
  const tongDiem = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.tongDiem
  );

  console.log(tongDiem);

  return (
    <div>
      <h3
        className="text-center display-4"
        style={{ color: "#04B404", marginTop: 0 }}
      >
        GAME BAU CUA
      </h3>

      <div className="text-center mt-4">
        <span
          style={{ fontSize: "20px", borderRadius: "5%" }}
          className="p-3 text-white bg-danger"
        >
          MONEY: <span className="text-warning">{tongDiem}$</span>
        </span>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={() => {
            dispatch({ type: "CHOI_LAI" });
          }}
          style={{ fontSize: "15px", borderRadius: "5%", border: "none" }}
          className="p-2 btn btn-primary"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
