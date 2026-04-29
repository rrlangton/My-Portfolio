function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contact-card" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Contact info */}
            <div className="infos" style={{ flex: 1 }}>
              <h6 className="section-subtitle">Robin Langton</h6>
              <h6 className="section-title mb-4">Contact Me</h6>

              <div className="item">
                <i className="ti-linkedin"></i>
                <div>
                  <h5>LinkedIn</h5>
                  <p>https://www.linkedin.com/in/robinrlangton</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-github"></i>
                <div>
                  <h5>Git Hub</h5>
                  <p>https://github.com/rrlangton</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-stack-overflow"></i>
                <div>
                  <h5>Stack Overflow</h5>
                  <p>https://stackoverflow.com/users/24826205/robin-langton</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-email"></i>
                <div className="mb-0">
                  <h5>Email Address</h5>
                  <p>rrlangton@gmail.com</p>
                </div>
              </div>
            </div>
            {/* Image on the right */}
            <img
              src="assets/imgs/watercolornb.png"
              alt="Contact"
              style={{ width: '150px', height: '150px', marginLeft: '20px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;