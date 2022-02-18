import React from "react";
import slider_1 from "../img/slider_1.jpg";
import icon_register from "../img/icon_register.png";
import jpg_1 from "../img/1.jpg";

function Home() {
  return (
    <>
      <div>
        <img src={slider_1} alt="" />
      </div>
      <div className="bg-[#fb66a8] py-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="w-[46px] h-[46px]">
              <img className="w-[100%]" src={icon_register} alt="" />
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
          <div className="bg-[#56509f] py-3 px-8 text-white rounded-[30px] border-2 flex items-center">
            <button>Đăng ký ngay</button>
            <i className="fas fa-angle-right text-white-500 text-[20px] pt-1  pl-1"></i>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="py-10 mb-10">
          <h1 className="relative font-quicksand_bold text-[30px] text-[#fa348c] text-center before:absolute before:content-[''] before:w-[100px] before:h-[2px] before:bg-[#fb66a8] before:left-[50%] before:top-[130%] before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:content-[''] after:w-[10px] after:h-[10px] after:border-2 after:rounded-[50%] after:bg-white after:left-[50%] after:top-[130%] after:translate-x-[-50%] after:translate-y-[-50%] ">
            VỀ COOL SCHOOL
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-10 mx-auto">
          <div className="col-span-6">
            <h2 className="text-[#fb66a8] text-[22px] font-quicksand_bold">
              GIỚI THIỆU CHUNG
            </h2>
            <p className="justify-items-stretch text-[14px] font-quicksand text-justify">
              Được thành lập vào tháng 8/2011, Hệ thống Trường mầm non Quốc tế
              Cool School là trường mầm non quốc tế tiên phong áp dụng triết lý
              giáo dục phương tây vào giảng dạy, đặt nền móng phát triển cho
              phương pháp giáo dục tại Việt Nam. Trường được Hiệp hội Phát triển
              Hoa Kỳ (IAPM) chứng nhận đạt tiêu chuẩn quốc tế, áp dụng phương
              pháp giáo dục giảng dạy một cách bài bản, chuẩn mực. Trường được
              Hiệp hội Phát triển Hoa Kỳ (IAPM) chứng nhận đạt tiêu chuẩn quốc
              tế, áp dụng phương pháp giáo dục giảng dạy một cách bài bản, chuẩn
              mực.
            </p>
          </div>
          <div className="col-span-6">
            <div className="grid grid-cols-12 gap-5 mx-auto">
              <div className="col-span-6 bg-[#7ed3f7] flex flex-col items-center justify-center h-[150px] py-5">
                <p className="font-quicksand_bold text-[60px] text-white">08</p>
                <p className="text-[14px] font-quicksand text-white">
                  Năm kinh nghiệm
                </p>
                <p className="text-[14px] font-quicksand text-white">
                  Phương pháp chuẩn quốc tế
                </p>
              </div>
              <div className="col-span-6 bg-[#BFD730] flex flex-col items-center justify-center h-[150px] py-5">
                <p className="font-quicksand_bold text-[60px] text-white">10</p>
                <p className="text-[14px] font-quicksand text-white">
                  Cơ sở toàn quốc
                </p>
              </div>
              <div className="col-span-6 bg-[#FFD668] flex flex-col items-center justify-center h-[150px] py-5">
                <p className="font-quicksand_bold text-[60px] text-white">
                  2000
                </p>
                <p className="text-[14px] font-quicksand text-white">
                  Học sinh toàn quốc1
                </p>
              </div>
              <div className="col-span-6 bg-[#F6ADCD] flex flex-col items-center justify-center h-[150px] py-5">
                <p className="font-quicksand_bold text-[60px] text-white">02</p>
                <p className="text-[14px] font-quicksand text-white">
                  Ngôn ngữ giảng dạy Việt, Anh
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 mb-10">
          <h1 className="relative font-quicksand_bold text-[30px] text-[#fa348c] text-center before:absolute before:content-[''] before:w-[100px] before:h-[2px] before:bg-[#fb66a8] before:left-[50%] before:top-[130%] before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:content-[''] after:w-[10px] after:h-[10px] after:border-2 after:rounded-[50%] after:bg-white after:left-[50%] after:top-[130%] after:translate-x-[-50%] after:translate-y-[-50%] ">
            CÁC HỆ ĐÀO TẠO
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-10 mx-auto">
          <div className="col-span-4">
            <img src={jpg_1} alt="" />
            <h3 className="text-center font-quicksand_bold text-[25px]">
              HỆ QUỐC TẾ ANH - NHẬT
            </h3>
            <p className="text-[14px] text-justify">
              Bên cạnh tiếng Anh, tiếng Nhật cũng là một trong những ngôn ngữ
              của thời kỳ hội nhập toàn cầu. Trường Mầm non Quốc tế Sakura
              Montessori mở hệ Quốc tế Anh - Nhật với mong muốn giúp các bạn nhỏ
              sớm tiếp cận và phát triển ngôn ngữ tiếng Anh và tiếng Nhật. Hệ
              quốc tế Anh - Nhật có những đặc điểm n...
            </p>
          </div>
          <div className="col-span-4">
            <img src={jpg_1} alt="" />
            <h3 className="text-center font-quicksand_bold text-[25px]">
              HỆ QUỐC TẾ ANH - NHẬT
            </h3>
            <p className="text-[14px] text-justify">
              Bên cạnh tiếng Anh, tiếng Nhật cũng là một trong những ngôn ngữ
              của thời kỳ hội nhập toàn cầu. Trường Mầm non Quốc tế Sakura
              Montessori mở hệ Quốc tế Anh - Nhật với mong muốn giúp các bạn nhỏ
              sớm tiếp cận và phát triển ngôn ngữ tiếng Anh và tiếng Nhật. Hệ
              quốc tế Anh - Nhật có những đặc điểm n...
            </p>
          </div>
          <div className="col-span-4">
            <img src={jpg_1} alt="" />
            <h3 className="text-center font-quicksand_bold text-[25px]">
              HỆ QUỐC TẾ ANH - NHẬT
            </h3>
            <p className="text-[14px] text-justify">
              Bên cạnh tiếng Anh, tiếng Nhật cũng là một trong những ngôn ngữ
              của thời kỳ hội nhập toàn cầu. Trường Mầm non Quốc tế Sakura
              Montessori mở hệ Quốc tế Anh - Nhật với mong muốn giúp các bạn nhỏ
              sớm tiếp cận và phát triển ngôn ngữ tiếng Anh và tiếng Nhật. Hệ
              quốc tế Anh - Nhật có những đặc điểm n...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
