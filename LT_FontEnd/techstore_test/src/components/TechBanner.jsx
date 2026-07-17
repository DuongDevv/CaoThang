// src/components/TechBanner.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function TechBanner() {
  const banners = [
    {
      id: 1,
      title: "MACBOOK AIR M4 PRO",
      subtitle: "Siêu mỏng nhẹ. Siêu trí tuệ.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200",
      color: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)"
    },
    {
      id: 2,
      title: "GALAXY S26 ULTRA",
      subtitle: "Quyền năng Galaxy AI thế hệ mới.",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=1200",
      color: "linear-gradient(135deg, #0f172a 0%, #0369a1 100%)"
    }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '20px auto 0 auto', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1e293b' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={'fade'}
        speed={800}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        style={{
          '--swiper-navigation-color': '#3b82f6',
          '--swiper-pagination-color': '#3b82f6',
          '--swiper-pagination-bullet-inactive-color': '#64748b',
        }}
      >
        {banners.map(banner => (
          <SwiperSlide key={banner.id}>
            <div style={{ background: banner.color, height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 60px', boxSizing: 'border-box' }}>
              <div style={{ textAlign: 'left', zIndex: 2 }}>
                <span style={{ color: '#3b82f6', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '2px' }}>HIGHLIGHT</span>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '5px 0', fontWeight: 800 }}>{banner.title}</h2>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: '0 0 15px 0' }}>{banner.subtitle}</p>
                <button style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' }}>Xem chi tiết</button>
              </div>
              <div style={{ height: '80%', width: '35%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={banner.image} alt={banner.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TechBanner;