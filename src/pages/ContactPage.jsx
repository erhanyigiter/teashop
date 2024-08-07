import React from 'react';
export default function ContactPage() {
  return (
    <div className="container-xxl contact py-5">
      <div className="container">
        <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="fs-5 fw-medium fst-italic text-primary">Contact Us</p>
          <h1 className="display-6">If You Have Any Query, Please Contact Us</h1>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
            <div className="btn-square mx-auto mb-3">
              <i className="fa fa-envelope fa-2x text-white"></i>
            </div>
            <p className="mb-2">info@example.com</p>
            <p className="mb-0">support@example.com</p>
          </div>
          <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
            <div className="btn-square mx-auto mb-3">
              <i className="fa fa-phone fa-2x text-white"></i>
            </div>
            <p className="mb-2">+012 345 67890</p>
            <p className="mb-0">+012 345 67890</p>
          </div>
          <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
            <div className="btn-square mx-auto mb-3">
              <i className="fa fa-map-marker-alt fa-2x text-white"></i>
            </div>
            <p className="mb-2">123 Street</p>
            <p className="mb-0">New York, USA</p>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="mb-4">Need a functional contact form?</h3>
            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '120px' }}></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <iframe className="w-100 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder="0" style={{ height: '100%', minHeight: '300px', border: '0' }} allowFullScreen="" aria-hidden="false"
                tabIndex="0"></iframe>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}
