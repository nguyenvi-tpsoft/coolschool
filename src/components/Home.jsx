import React from "react";
import slider_1 from "../img/slider_1.jpg";
import icon_register from "../img/icon_register.png";

function Home() {
  return (
    <>
      <div className="">
        <div>
          <img src={slider_1} alt="" />
        </div>
        <div className="bg-pink-600">
          <div className="container mx-auto">
            <div className="flex align-center content-between">
              <div className="w-[46px]">
                <img src={icon_register} alt="" />
              </div>
              <div className="pl-2">
                <h1 className="text-[#ffff] text-[26px] font-quicksand_bold">
                  Đăng ký Tuyển sinh năm học 2019-2020
                </h1>
                <p className="text-[#ffff] text-[16px] font-quicksand">
                  Cool School - Môi trường giáo dục hoàn hảo cho trẻ từ 15 tháng
                  tới 6 tuổi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
