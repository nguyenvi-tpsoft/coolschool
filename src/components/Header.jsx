import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
function Header() {
  return (
    <>
      <div className="bg-pink-400 py-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 mx-auto">
            <div className="col-span-8">
              <ul className="flex justify-center">
                <i className="fas fa-mobile-alt text-yellow-500 text-[18px] pt-2 pr-2"></i>
                <a className="text-white text-[18px] pt-1" href="">
                  0359329688
                </a>
                <i className="far fa-envelope text-yellow-500 text-[18px] pt-2 px-2"></i>
                <a className="text-white text-[18px] pt-1" href="">
                  cooltheme205@gmail.com
                </a>
              </ul>
            </div>
            <div className="col-span-4">
              <ul className="flex">
                <li className="text-yellow-500 text-[18px] pt-1 px-2 mx-2 border border-solid border-white rounded-full">
                  <a href="">
                    <i className="fab fa-facebook-f pb-2 w-5 text-center"></i>
                  </a>
                </li>
                <li className="text-yellow-500 text-[18px] pt-1 px-2 mx-2 border border-solid border-white rounded-full">
                  <a href="">
                    <i className="fab fa-twitter pb-2 w-5 text-center"></i>
                  </a>
                </li>
                <li className="text-yellow-500 text-[18px] pt-1 px-2 mx-2 border border-solid border-white rounded-full">
                  <a href="">
                    <i className="fab fa-google pb-2 w-5 text-center"></i>
                  </a>
                </li>
                <li className="text-yellow-500 text-[18px] pt-1 px-2 mx-2 border border-solid border-white rounded-full">
                  <a href="">
                    <i className="fab fa-instagram pb-2 w-5 text-center"></i>
                  </a>
                </li>
                <li className="text-yellow-500 text-[18px] pt-1 px-2 mx-2 border border-solid border-white rounded-full">
                  <a href="">
                    <i className="fab fa-youtube pb-2 w-5 text-center"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 mx-auto my-2">
            <div className="col-span-2">
              <img src={logo} alt="" />
            </div>
            <div className="col-span-10">
              <ul className="flex justify-start align-middle py-8">
                <li className="px-3">
                  <NavLink className="text-[20px] font-quicksand" to="/">
                    Trang chủ
                  </NavLink>
                </li>
                <li className="px-3">
                  <NavLink
                    className="text-[20px] font-quicksand_bold"
                    to="gioi-thieu"
                  >
                    Giới thiệu
                  </NavLink>
                </li>
                <li className="chuongtrinhhoc-li px-3">
                  <NavLink className="text-[20px] mx-3" to="tin-tuc">
                    Chương trình học <i className="fa fa-caret-down"></i>
                  </NavLink>
                </li>
                <li className="chuongtrinhhoc-li px-3">
                  <NavLink className="text-[20px] mx-3" to="tin-tuc">
                    Tuyển sinh
                  </NavLink>
                </li>
                <li className="chuongtrinhhoc-li px-3">
                  <NavLink className="text-[20px] mx-3" to="tin-tuc">
                    Tin tức & Sự kiện
                  </NavLink>
                </li>
                <li className="chuongtrinhhoc-li px-3">
                  <NavLink className="text-[20px] mx-3" to="tin-tuc">
                    Liên hệ
                  </NavLink>
                </li>
                <div className="search-li">
                  <input type="text" name="" />
                  <button>
                    <i className="fas fa-search text-[#f472b6]"></i>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
