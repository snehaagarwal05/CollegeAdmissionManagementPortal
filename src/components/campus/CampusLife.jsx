import React, { useState } from "react";
import "./CampusLife.css";

const slides = [
  {
    title: "Playground",
    description: "Our spacious playground encourages physical activity, sportsmanship, and student bonding.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
  },
  {
    title: "Classrooms",
    description: "Modern classrooms equipped with smart boards and comfortable seating to enhance learning.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
  },
  {
    title: "Canteen",
    description: "A clean and hygienic canteen offering healthy and delicious meals for students.",
    image: "https://images.unsplash.com/photo-1556912993-2ec92c6a6982"
  },
  {
    title: "Library",
    description: "Our library provides a quiet and peaceful environment with thousands of books and journals.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea"
  },
  {
    title: "Hostel",
    description: "Safe and comfortable hostel facilities with all necessary amenities for students.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
  }
];

export default function CampusLife() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="campus-container">
      <h1 className="campus-title">Campus Life</h1>

      <div className="slider">
        <button className="nav-btn left" onClick={prevSlide}>❮</button>

        <div className="slide">
          <img src={slides[current].image} alt={slides[current].title} />
          <h2>{slides[current].title}</h2>
          <p>{slides[current].description}</p>
        </div>

        <button className="nav-btn right" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
}
