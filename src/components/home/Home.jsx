import { Outlet } from "react-router-dom";
import avataaars from "./../../assets/imgs/avataaars.svg";

const Home = () => {
  const handleClick = (event) => {
    event.preventDefault();
    event.target.style.backgroundColor = 'transparent';
  };

  return (
    <>
      <div className="">
        <div className="home d-flex justify-content-center align-items-center text-white">
          <div className="text-center">
            <img src={avataaars} alt="avatar" />
            <div className="second">
              <div className="text-center text-white">
                <div className="mb-3 fw-bolder fs-1" onClick={handleClick}>START FRAMEWORK</div>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <div className="line me-3 bg-white"></div>
                  <i className="fa-solid fa-star"></i>
                  <div className="line ms-3 bg-white"></div>
                </div>
              </div>
            </div>
            <div>Graphic Artist - Web Designer - Illustrator</div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;