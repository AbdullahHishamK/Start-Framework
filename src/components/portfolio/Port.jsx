import { useState } from "react";
import poert1 from "./../../assets/imgs/poert1.png";
import port2 from "./../../assets/imgs/port2.png";
import port3 from "./../../assets/imgs/port3.png";

const images = [poert1, port2, port3, poert1, port2, port3];

const Port = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentImageIndex(null);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="porto">
        <div className="mb-4">
          <div className="pt-4">
            <div className="port-title">
              <div className="text-center pt-4">
                <h2 className="mb-3 fs-1 fw-bolder color1">PORTFOLIO COMPONENT</h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <div className="line me-3 bg-black"></div>
                  <i className="fa-solid fa-star"></i>
                  <div className="line ms-3 bg-black"></div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row g-5">
                {images.map((image, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="img1 rounded-3 overflow-hidden position-relative">
                      <img
                        src={image}
                        className="w-100 rounded-3"
                        alt="img"
                        onClick={() => handleImageClick(index)}
                      />
                      <div
                        className="layer d-flex position-absolute justify-content-center align-items-center w-100 top-0 h-100 start-0"
                        onClick={() => handleImageClick(index)}
                      >
                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {currentImageIndex !== null && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <img className="modal-content" src={images[currentImageIndex]} alt="img" />
          <a className="prev" onClick={handlePrevImage}>&#10094;</a>
          <a className="next" onClick={handleNextImage}>&#10095;</a>
        </div>
      )}
    </>
  );
};

export default Port;