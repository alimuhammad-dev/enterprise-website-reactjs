import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };
  return (
    <>
      <section className="contact_section">
        <div className="container">
          <div className="my-5 text-center">
            <h1 className="contact_heading">Contact Us</h1>
            <p className="contact_subheading">
              We'd love to hear from you. Feel free to get in touch!
            </p>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-10 col-12 mx-auto">
              <form className="contact_form" onSubmit={formSubmit}>
                {/* Full Name */}
                <div className="mb-4">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={data.fullName}
                    onChange={inputEvent}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="name@example.com"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    name="message"
                    value={data.message}
                    onChange={inputEvent}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                {/* Button */}
                <div className="text-center">
                  <button type="submit" className="contact_btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
