import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="contacts">
        <div className="mb-4">
          <div className="pt-3 container">
            <div className="text-center pt-4">
              <h2 className="text-uppercase mb-3 fs-1 fw-bolder color1">
                CONTACT SECTION
              </h2>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line me-3 bg-black"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line ms-3 bg-black"></div>
              </div>
            </div>
          </div>
          <form className="mx-auto w-50 mt-5" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">Username:</label>
              <input
                id="userName"
                type="text"
                placeholder="Username"
                name="userName"
                className="form-control"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userAge" className="form-label">User Age:</label>
              <input
                id="userAge"
                type="number"
                placeholder="User Age"
                name="userAge"
                className="form-control"
                value={formData.userAge}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">User Email:</label>
              <input
                id="userEmail"
                type="email"
                placeholder="User Email"
                name="userEmail"
                className="form-control"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label">User Password:</label>
              <input
                id="userPassword"
                type="password"
                placeholder="User Password"
                name="userPassword"
                className="form-control"
                value={formData.userPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn mt-4 text-white color">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;