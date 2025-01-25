// components/MenuPage.jsx
import { useState } from 'react';
import './MenuPage.css';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuItems = {
    starters: [
      {
        name: "Bruschetta",
        price: "$8.99",
        description: "Grilled bread, garlic, tomatoes, olive oil",
        image: "images/bruschetta.jpg"
      },
      {
        name: "Greek Salad",
        price: "$10.99",
        description: "Crispy lettuce, peppers, olives, feta cheese",
        image: "images/greek-salad.jpg"
      }
    ],
    mainCourses: [
      {
        name: "Grilled Salmon",
        price: "$18.99",
        description: "Fresh salmon, lemon butter sauce",
        image: "images/grilled-salmon.jpg"
      },
      {
        name: "Lemon Chicken",
        price: "$16.99",
        description: "Grilled chicken with lemon herb sauce",
        image: "images/lemon-chicken.jpg"
      }
    ],
    desserts: [
      {
        name: "Lemon Tart",
        price: "$7.99",
        description: "Classic lemon tart with meringue",
        image: "images/lemon-tart.jpg"
      },
      {
        name: "Baklava",
        price: "$6.99",
        description: "Traditional Mediterranean pastry",
        image: "images/baklava.jpg"
      }
    ]
  };

  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mainCourses', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' }
  ];

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      <nav className="menu-nav">
        {categories.map(category => (
          <button
            key={category.id}
            className={`menu-nav-item ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </nav>

      <div className="menu-items">
        {menuItems[activeCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-content">
              <div className="item-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;