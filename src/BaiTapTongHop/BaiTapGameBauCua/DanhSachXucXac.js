import React from "react";
import { useDispatch, useSelector } from "react-redux";
import XucXac from "./XucXac";

export default function DanhSachXucXac(props) {
  const dispatch = useDispatch();

  const mangXucXac = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.mangXucXac
  );

  console.log(mangXucXac);

  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          paddingLeft: 10,
        }}
      >
        <div className="row">
          <div
            className="col-12 text-center"
            style={{ marginTop: "0px", marginLeft: 75 }}
          >
            <XucXac xucXacItem={mangXucXac[0]} />
          </div>
        </div>
        <div className="row" style={{ marginTop: -20, marginLeft: -15 }}>
          <div className="col-5">
            <XucXac xucXacItem={mangXucXac[1]} />
          </div>
          <div className="col-5">
            <XucXac xucXacItem={mangXucXac[2]} />
          </div>
        </div>
      </div>

      <div style={{ marginLeft: "30%", marginTop: "5%" }}>
        <button
          onClick={() => {
            dispatch({
              type: "PLAY_GAME_BAU_CUA",
            });
          }}
          className="btn btn-success p2"
          style={{ fonSize: "25px" }}
        >
          ROLL
        </button>
      </div>
    </div>
  );
}
