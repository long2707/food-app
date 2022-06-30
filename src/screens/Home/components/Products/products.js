import React from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import classNames from "classnames/bind";

// import { CardItem } from "components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import clasess from "./Products.module.scss";

gsap.registerPlugin(ScrollTrigger);
const cx = classNames.bind(clasess);

function CardItem({
    img, title, des, price
}) {
    return (
        <section className={cx("card")}>
            <div className={cx("image")}>
                <img src={img} alt="" />
                <div className={cx("card-btn")}>
                    <Link to="/shop">
                        Order Now
                    </Link>
                </div>
            </div>
            <div className={cx("content")}>
                <h3>{title}</h3>
                <p>{des}</p>
                <span>{`${price}.00$`}</span>
            </div>
        </section>
    );
}

function Products({ data }) {
    const headingRef = React.useRef(null);
    const titleRef = React.useRef(null);
    const imgRef = React.useRef(null);

    // animation
    React.useEffect(() => {
        gsap.from(headingRef.current, {
            translateY: -40,
            opacity: 0,
            duration: 0.6,
            delay: 0.2,
            scrollTrigger: {
                trigger: headingRef.current
            }
        });
        gsap.from(titleRef.current, {
            translateY: -40,
            opacity: 0,
            duration: 0.6,
            delay: 0.6,
            scrollTrigger: {
                trigger: titleRef.current
            }
        });
        gsap.from(imgRef.current, {
            opacity: 0,
            duration: 0.6,
            delay: 1,
            scrollTrigger: {
                trigger: imgRef.current
            }
        });
    }, []);

    return (
        <section className={cx("product-area")}>
            <div className={cx("container")}>
                <div className={cx("product-heading")}>
                    <span ref={headingRef}>Quality Products</span>
                    <h2 ref={titleRef}>Burger as expected dilicious one</h2>
                </div>
                <div className={cx("product-list")} ref={imgRef}>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        loop
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                pagination: false
                            },
                            // >= tablet
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                pagination: false
                            },
                            // >= desktop
                            960: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                                slidesPerGroup: 4,
                                speed: 1500
                            }
                        }}
                    >
                        {
                            data.slice(0, 6)
                                .map((item) => (
                                    <SwiperSlide key={item?.id}>

                                        <CardItem img="https://templates.envytheme.com/handout/default/assets/img/burger-shop/3.png" des={item?.dsc} title={item?.name} price={item?.price} />
                                    </SwiperSlide>
                                ))
                        }

                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Products;
