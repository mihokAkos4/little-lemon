// components/Testimonials.jsx
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    { name: "John D.", rating: 5, text: "Best Mediterranean food in the city!" },
    { name: "Sarah M.", rating: 4, text: "Amazing service and delicious dishes." },
    { name: "Mike R.", rating: 5, text: "The lemon dessert is to die for." },
    { name: "Emma S.", rating: 4, text: "Consistently great experience." }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < review.rating ? "#ffd700" : "#ddd"} />
              ))}
            </div>
            <div className="review-content">
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;