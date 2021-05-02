import { useSpring, animated } from "react-spring";
import React, { Fragment } from "react";

export default function XucXac(props) {
  const { xucXacItem } = props;
  const [propsDice, set] = useSpring(() => ({
    to: {
      xyz: [1800, 1800, 1800],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: {
      duration: 1000,
    },
    reset: true,
  }));

  set({ xyz: [1800, 1800, 1800] });

  return (
    <Fragment>
      <div className="scene ml-5">
        <animated.div
          style={{
            transform: propsDice.xyz.interpolate(
              (x, y, z) =>
                `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg) `
            ),
          }}
          className="cube"
        >
          <div className="cube__face front">
            <img
              style={{ width: "100%" }}
              src={xucXacItem.hinhAnh}
              alt="bau_cua"
            />
          </div>
          <div className="cube__face back">
            <img
              style={{ width: "100%" }}
              src="./img/BaiTapGameBauCua/bau.png"
              alt="bau_cua"
            />
          </div>
          <div className="cube__face left">
            <img
              style={{ width: "100%" }}
              src="./img/BaiTapGameBauCua/ga.png"
              alt="bau_cua"
            />
          </div>
          <div className="cube__face right">
            <img
              style={{ width: "100%" }}
              src="./img/BaiTapGameBauCua/ca.png"
              alt="bau_cua"
            />
          </div>
          <div className="cube__face top">
            <img
              style={{ width: "100%" }}
              src="./img/BaiTapGameBauCua/tom.png"
              alt="bau_cua"
            />
          </div>
          <div className="cube__face bottom">
            <img
              style={{ width: "100%" }}
              src="./img/BaiTapGameBauCua/nai.png"
              alt="bau_cua"
            />
          </div>
        </animated.div>
      </div>
    </Fragment>
  );
}
