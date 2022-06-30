/* eslint-disable react/no-array-index-key */
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classNames from "classnames/bind";

import clasess from "./Categories.module.scss";

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(clasess);

function Categories({ data }) {
    const headingRef = React.useRef(null);
    const pRef = React.useRef(null);
    const imageRef = React.useRef(null);

    // animation
    React.useEffect(() => {
        const elheading = headingRef.current;
        const elP = pRef.current;
        const elimg = imageRef.current;
        gsap.fromTo(elheading, { translateX: -20, opacity: 0 }, {
            translateX: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
                trigger: elheading
            }
        }, 0.2);
        gsap.fromTo(elP, { translateY: -20, opacity: 0, duration: 0.6 }, {
            translateY: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.6,
            scrollTrigger: {
                trigger: elP
            }
        });
        gsap.fromTo(elimg, { translateY: 20, opacity: 0, duration: 0.6 }, {
            translateY: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
                trigger: elP
            },
            delay: 1
        });
    }, []);
    return (
        <section className={cx("category")}>

            <div className={cx("container")}>
                <div className={cx("category-content")}>
                    <div className={cx("category-heading")}>
                        <p ref={headingRef}>What we have?</p>
                        <h1 ref={pRef}>Browse food category</h1>
                    </div>
                    <div className={cx("row")} ref={imageRef}>
                        {
                            data?.map((item, index) => (
                                <div className={cx("col-lg-3 col-md-6")} key={index}>
                                    <div className={cx("category-cards__item")}>
                                        <div className={cx("category-card__item-img")}>
                                            <img src={item?.img} alt="" />
                                        </div>
                                        <p>
                                            {item?.title}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
