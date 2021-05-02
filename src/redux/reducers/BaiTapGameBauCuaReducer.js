const initialState = {
  danhSachCuoc: [
    { ma: "ga", hinhAnh: "./img/BaiTapGameBauCua/ga.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./img/BaiTapGameBauCua/bau.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/BaiTapGameBauCua/ca.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png", diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: "ga", hinhAnh: "./img/BaiTapGameBauCua/ga.png" },
    { ma: "bau", hinhAnh: "./img/BaiTapGameBauCua/bau.png" },
    { ma: "ca", hinhAnh: "./img/BaiTapGameBauCua/ca.png" },
  ],
};

const BaiTapGameBauCuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC_BAU_CUA":
      const danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(
        (qc) => qc.ma === action.quanCuoc.ma
      );

      if (index !== -1) {
        if (action.tangGiam) {
          if (state.tongDiem > 0) {
            danhSachCuocUpdate[index].diemCuoc += 100;
            state.tongDiem -= 100;
          }
        } else {
          if (danhSachCuocUpdate[index].diemCuoc > 0) {
            danhSachCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      state.danhSachCuoc = danhSachCuocUpdate;
      return { ...state };
    case "PLAY_GAME_BAU_CUA":
      const mangXucXacNgauNhien = [];

      for (let i = 0; i < 3; i++) {
        // Tao ra 1 so ngau nhien tu 0 -> 5
        let soNgauNhien = Math.floor(Math.random() * 6);
        const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      // Cap nhat lai mang xucxac
      state.mangXucXac = mangXucXacNgauNhien;

      // Xu ly tang diem thuong
      mangXucXacNgauNhien.forEach((xucXacNN, index) => {
        let indexDSC = state.danhSachCuoc.findIndex(
          (qc) => qc.ma === xucXacNN.ma
        );
        if (index !== -1) {
          state.tongDiem += state.danhSachCuoc[indexDSC].diemCuoc;
        }
      });

      // Xu ly hoan tien
      state.danhSachCuoc.forEach((qc, index) => {
        let indexXucXacNN = mangXucXacNgauNhien.findIndex(
          (xxnn) => xxnn.ma === qc.ma
        );
        if (indexXucXacNN !== -1) {
          state.tongDiem += qc.diemCuoc;
        }
      });

      state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
        return { ...qc, diemCuoc: 0 };
      });

      return { ...state };

    case "CHOI_LAI":
      state.tongDiem = 1000;
      state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
        return { ...qc, diemCuoc: 0 };
      });
      return { ...state };
    default:
      return state;
  }
};

export default BaiTapGameBauCuaReducer;
