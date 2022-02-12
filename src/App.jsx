import "./App.css";
import logo from "./img/logo.png";
function App() {
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
                  <a className="text-[20px] font-quicksand" href="">
                    Trang chủ
                  </a>
                </li>
                <li className="px-3">
                  <a
                    className="text-[20px] font-quicksand_bold"
                    href="gioi-thieu"
                  >
                    Giới thiệu
                  </a>
                </li>
                <li className="chuongtrinhhoc-li px-3">
                  <a className="text-[20px] mx-3" href="tin-tuc">
                    Chương trình học <i className="fa fa-caret-down"></i>
                  </a>
                </li>
                <li className="px-3">
                  <a className="text-[20px] font-quicksand_bold" href="tin-tuc">
                    Tuyển sinh
                  </a>
                </li>
                <li className="px-3">
                  <a className="text-[20px] font-quicksand_bold" href="tin-tuc">
                    Tin tức & Sự kiện
                  </a>
                </li>
                <li className="px-3">
                  <a className="text-[20px]" href="lien-he">
                    Liên hệ
                  </a>
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
export default App;
