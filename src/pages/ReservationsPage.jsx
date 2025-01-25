import ReservationForm from '../components/ReservationForm';
import './ReservationsPage.css';

const ReservationsPage = () => {
  return (
    <section className="reservations-page">
      <div className="reservations-container">

        <ReservationForm />
      </div>
    </section>
  );
};

export default ReservationsPage;