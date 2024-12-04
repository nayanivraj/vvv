import React from 'react'

const About = () => {
  return (
    <div>
        <div className="container my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            We strive to provide the best services to our customers and to create a positive impact in the community.
            Our mission is to deliver high-quality products that enhance the quality of life.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Our Vision</h3>
          <p>
            Our vision is to be the leading company in our industry, recognized for our commitment to quality and
            customer satisfaction. We aim to innovate and adapt to the changing needs of our clients.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            
            <div className="card-body">
              <h5 className="card-title">Feature 1</h5>
              <p className="card-text">This is a description of feature 1. It explains benefits and advantages.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feature 2</h5>
              <p className="card-text">This is a short description of feature 2. It highlights its significance.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feature 3</h5>
              <p className="card-text">This is a description feature 3. It showcases its unique aspects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
