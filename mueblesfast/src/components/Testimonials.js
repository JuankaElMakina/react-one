import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", name: "Mike Brown", image: "/images/client1.jpg" },
  { text: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.", name: "Anna Smith", image: "/images/client2.jpg" },
  { text: "In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.", name: "John Doe", image: "/images/client3.jpg" },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonial">
        <img src={testimonials[currentTestimonial].image} alt="Cliente" />
        <p>{testimonials[currentTestimonial].text}</p>
        <h4>{testimonials[currentTestimonial].name}</h4>
      </div>
      <div className="controls">
        <button onClick={prevTestimonial}>◀</button>
        <button onClick={nextTestimonial}>▶</button>
      </div>
    </section>
  );
}

export default Testimonials;