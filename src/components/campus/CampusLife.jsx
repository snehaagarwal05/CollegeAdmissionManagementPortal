import React, { useState } from "react";

const slides = {
  playground: [
    "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    "https://images.unsplash.com/photo-1505672678657-cc7037095e2c",
  ],

  classroom: [
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
  ],

  canteen: [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  ],

  hostel: [
    "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    "https://images.unsplash.com/photo-1578898887932-1e94c67a3a50",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  ],
};

const SectionSlider = ({ title, images, description }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>

      <div className="slider-container">
        <button className="slider-btn" onClick={prevSlide}>❮</button>

        <img src={images[index]} className="slide-image" alt="campus" />

        <button className="slider-btn" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default function CampusLife() {
  return (
    <div className="campus-life-page">
      <h1 className="main-title">Campus Life</h1>

      <SectionSlider
        title="Playground & Sports Arena"
        images={slides.playground}
        description="Our campus offers expansive playgrounds and top-notch sports facilities to encourage physical fitness, teamwork, and athletic excellence. Students enjoy cricket, football, basketball, athletics, and other outdoor activities in a vibrant and energetic environment."
      />

      <SectionSlider
        title="Modern Classrooms"
        images={slides.classroom}
        description="Well-lit, spacious, and technology-enabled classrooms create an ideal atmosphere for immersive learning. With smart boards, projectors, and comfortable seating, students can focus, engage, and collaborate effectively."
      />

      <SectionSlider
        title="Canteen & Dining Area"
        images={slides.canteen}
        description="Our hygienic and student-friendly canteen offers a wide range of healthy and tasty food options. It's a perfect spot for relaxation, group study, and refreshing breaks between classes."
      />

      <SectionSlider
        title="Hostel & Residential Life"
        images={slides.hostel}
        description="Our hostels provide a comfortable, safe, and homely environment for students. With clean rooms, recreational areas, dedicated study zones, and 24/7 security, students enjoy a perfect balance of academic and personal life."
      />
    </div>
  );
}
