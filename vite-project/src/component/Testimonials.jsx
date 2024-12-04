// src/pages/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Company A",
      feedback: "This product has transformed our workflow. Highly recommended!",
    },
    {
      name: "Jane Smith",
      position: "Manager, Company B",
      feedback: "Amazing service and support! We've seen great results.",
    },
    {
      name: "Alice Johnson",
      position: "Designer, Company C",
      feedback: "A game changer! Our team is much more productive.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Testimonials</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{testimonial.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{testimonial.position}</h6>
                <p className="card-text">"{testimonial.feedback}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
