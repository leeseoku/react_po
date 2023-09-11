import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import styles from "../css/Section.module.css"

export default function Section(props){
    return(
        <>
        <Swiper
        autoplay={{
            delay: 25500,
            disableOnInteraction: false,
          }}
          pagination={{clickable: true, type:"progressbar"}}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="Swiper"
        >
        {props.swiperdb.swiper.map((v,i)=>{
            return(
                <SwiperSlide id={`bannerSwiper${i}`} className='bannerSwiper' style={{ backgroundImage: `url(${v.img})` }}>
                    <div>
                        <h2>{v.text}</h2>
                        <p>{v.content}</p>
                    </div>
                </SwiperSlide>
            )
        })}
        </Swiper>
            </>
        )
    }







