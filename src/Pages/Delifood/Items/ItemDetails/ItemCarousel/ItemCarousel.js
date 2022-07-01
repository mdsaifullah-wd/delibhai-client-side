import React, { useState, useEffect } from 'react';
import getYouTubeID from 'get-youtube-id';
import YouTube from 'react-youtube';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ItemCarousel = ({ img1, img2, video, price, name }) => {
  const [id, setId] = useState('');
  useEffect(() => {
    setId(getYouTubeID(video));
  }, [video]);

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      rel: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      enablejsapi: 1,
      origin: 'https://www.delibhai.com',
    },
  };

  return (
    <div className="shadow-3xl rounded-b-[calc(2.66vw-0.13rem)] sm:rounded-b-[16.21px] mx-2 sm:mx-4 overflow-hidden  ">
      <Swiper
        style={{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-pagination-color': '#ffffff',
        }}
        className="mySwiper"
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 2000,
          // disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
      >
        <SwiperSlide>
          <div
            style={{
              background: `url('${img1}')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundOrigin: 'padding-box',
            }}
            className="relative w-full h-[calc(54vw-2.7rem)] sm:h-[328.32px]"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: `url('${img2}')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundOrigin: 'padding-box',
            }}
            className="relative w-full h-[calc(54vw-2.7rem)] sm:h-[328.32px]"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[calc(54vw-2.7rem)] sm:h-[328.32px]">
            <YouTube
              className="w-full h-full"
              videoId={id}
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
          {/* Dark Overlay */}
          <div
            className={`absolute h-[40%] right-0 bottom-0 left-0 opacity-0`}
          ></div>
          <div
            className={`absolute h-[40%] right-0 top-0 left-0 opacity-0`}
          ></div>
          <div
            className={`absolute w-[40%] right-0 top-0 bottom-0 opacity-0`}
          ></div>
          <div
            className={`absolute w-[40%] left-0 top-0 bottom-0 opacity-0`}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ItemCarousel;
