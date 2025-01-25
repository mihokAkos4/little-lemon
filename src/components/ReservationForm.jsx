import { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '18:00',
    guests: 2,
    occasion: 'birthday'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="reservation-form">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Date:
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              required
            />
          </label>

          <label>
            Time:
            <select
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
            </select>
          </label>

          <label>
            Guests:
            <input
              type="number"
              min="1"
              max="10"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
            />
          </label>

          <label>
            Occasion:
            <select
              value={formData.occasion}
              onChange={(e) => setFormData({...formData, occasion: e.target.value})}
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business</option>
            </select>
          </label>
        </div>
        <button type="submit" className="submit-button">Reserve Now</button>
      </form>
    </section>
  );
};

export default ReservationForm;