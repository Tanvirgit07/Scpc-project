"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './feedback.css'; // Your custom CSS

import { Pagination, Autoplay } from 'swiper/modules'; // Import the Autoplay module

// Feedback data
const feedbacks = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    rating: 5,
    feedback: "Great service! Everything was smooth and efficient.",
    date: "2024-09-21"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    rating: 4,
    feedback: "Good experience overall, but the wait time could be shorter.",
    date: "2024-09-20"
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    rating: 5,
    feedback: "Amazing! Exceeded my expectations.",
    date: "2024-09-19"
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    rating: 3,
    feedback: "The service was okay, but there were a few issues.",
    date: "2024-09-18"
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    rating: 3,
    feedback: "The service was okay, but there were a few issues.",
    date: "2024-09-18"
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    rating: 3,
    feedback: "The service was okay, but there were a few issues.",
    date: "2024-09-18"
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    rating: 3,
    feedback: "The service was okay, but there were a few issues.",
    date: "2024-09-18"
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    rating: 3,
    feedback: "The service was okay, but there were a few issues.",
    date: "2024-09-18"
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    rating: 3,
    feedback: "The service was okay, but there were a few issues.",
    date: "2024-09-18"
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    rating: 3,
    feedback: "The service was okay, but there were a few issues.",
    date: "2024-09-18"
  },
  // Add more feedback objects as needed...
];

const Feedback = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold mt-10'>Customer Feedback</h1>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,   // Autoplay delay in ms
            disableOnInteraction: false,  // Autoplay continues even after user interaction
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="feedback-card">
                <h3 className="feedback-name">{feedback.name}</h3>
                <p className="feedback-text">{feedback.feedback}</p>
                <p className="feedback-rating">Rating: {feedback.rating} / 5</p>
                <p className="feedback-date">Date: {new Date(feedback.date).toLocaleDateString()}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
