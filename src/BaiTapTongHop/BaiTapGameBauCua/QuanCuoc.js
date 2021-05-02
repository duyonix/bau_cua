import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React from "react";
import { useDispatch } from "react-redux";

export default function QuanCuoc(props) {
  const dispatch = useDispatch();

  const { quanCuoc } = props;

  const [propsUseSpringIncrease, setIncrease] = useSpring(() => {
    return {
      to: { scale: 1.25 },
      from: { scale: 1 },
      reset: true,
    };
  });

  const [propsUseSpringDecrease, setDecrease] = useSpring(() => {
    return {
      to: { scale: 1.25 },
      from: { scale: 1 },
      reset: true,
    };
  });

  return (
    <div className="mt-2">
      <img src={quanCuoc.hinhAnh} style={{ width: 200 }} alt="bau_cua" />

      <div
        className="bg-success mt-2 pb-2 text-center"
        style={{ borderRadius: "10px", width: 200 }}
      >
        <animated.button
          style={propsUseSpringIncrease}
          onClick={() => {
            setIncrease({ scale: 1 });
            setIncrease({ scale: 1.25 });

            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: true,
            });
          }}
          className="btn btn-danger mr-2"
        >
          <i className="fa fa-plus"></i>
        </animated.button>
        <span className="mt-2" style={{ color: "yellow", fontSize: "25px" }}>
          {quanCuoc.diemCuoc}
        </span>
        <animated.button
          style={{
            transform: propsUseSpringDecrease.scale.interpolate(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            setDecrease({ scale: 1 });
            setDecrease({ scale: 1.25 });
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: false,
            });
          }}
          className="btn btn-danger ml-2"
        >
          <i class="fa fa-minus"></i>
        </animated.button>
      </div>
    </div>
  );
}
