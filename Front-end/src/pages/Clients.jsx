import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Clients() {
  const reviews = [
    {
      id: 1,
      text: "Working with Kairoshun was seamless. They delivered beyond our expectations and on time.",
      name: "Michael Chen",
      company: "StartupXYZ",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      text: "Their team understood our requirements perfectly. The app they built boosted our business massively!",
      name: "Sophia Martinez",
      company: "NovaTech",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      text: "Professional, creative, and reliable. Kairoshun is now our long-term tech partner.",
      name: "Arjun Patel",
      company: "BrightEdge Solutions",
      img: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      id: 4,
      text: "Their UI/UX game is unbelievable. My website looks premium and performs extremely well.",
      name: "Elena Rossi",
      company: "Rossi Fashion House",
      img: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#3A78C2]">
          What Our Clients Say
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="mt-16 pb-10"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white shadow-lg rounded-3xl p-12 border border-gray-100">

                {/* Quote Icon */}
                <div className="text-teal-600 text-5xl mb-6">❝❞</div>

                {/* Review */}
                <p className="text-gray-600 text-lg italic leading-relaxed max-w-3xl mx-auto">
                  "{review.text}"
                </p>

                {/* Profile */}
                <div className="mt-10 flex flex-col items-center">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover shadow-md"
                  />

                  <h3 className="mt-4 text-xl font-semibold">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.company}</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
