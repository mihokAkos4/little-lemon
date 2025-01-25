import './Specials.css';
import { useNavigate } from 'react-router-dom';

const Specials = () => {
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate('/menu');
  };

  const specialItems = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: `${process.env.PUBLIC_URL}/images/greek-salad.jpg`,
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: `${process.env.PUBLIC_URL}/images/bruschetta.jpg`,
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: `${process.env.PUBLIC_URL}/images/lemon-dessert.jpg`,
    }
  ];


  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button className="online-menu-button" onClick={handleMenu}>Online Menu</button>
      </div>
      <div className="specials-grid">
        {specialItems.map((item, index) => (
          <div className="special-card" key={index}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${item.image})` }}>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <button className="order-button">Order Delivery →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;