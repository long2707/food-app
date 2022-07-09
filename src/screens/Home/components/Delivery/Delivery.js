import React from "react";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import classNames from "classnames/bind";

import iconDelivery from "assets/icons/delivey.svg";
import imgDelivery from "assets/images/delivery-service.png";

import classes from "./Delivery.module.scss";

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(classes);

function Delivery() {
    const headingRef = React.useRef(null);
    const titleRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const imgRef = React.useRef(null);
    const btnRef = React.useRef(null);

    React.useEffect(() => {
        gsap.from(headingRef.current, {
            translateX: -40,
            opacity: 0,
            duration: 0.6,
            delay: 0.2,
            scrollTrigger: {
                trigger: headingRef.current
            }
        });
        gsap.from(titleRef.current, {
            translateX: -40,
            opacity: 0,
            duration: 0.6,
            delay: 0.6,
            scrollTrigger: {
                trigger: titleRef.current
            }
        });
        gsap.from(contentRef.current, {
            translateX: -40,
            opacity: 0,
            duration: 0.6,
            delay: 1,
            scrollTrigger: {
                trigger: contentRef.current
            }
        });
        gsap.from(btnRef.current, {
            translateX: -40,
            opacity: 0,
            duration: 0.6,
            delay: 1.4,
            scrollTrigger: {
                trigger: btnRef.current
            }
        });
        gsap.from(imgRef.current, {
            translateX: 40,
            opacity: 0,
            duration: 0.6,
            delay: 1.8,
            scrollTrigger: {
                trigger: imgRef.current
            }
        });
    }, []);
    return (
        <section className={cx("delivery-area")}>
            <div className={cx("container")}>
                <div className={cx("row align-items-center")}>
                    <div className={cx("col-lg-6")}>
                        <span ref={headingRef}>
                            Delivery
                        </span>
                        <h2 ref={titleRef}>
                            What You Want To Select
                            {" "}
                            {" "}
                            {" "}
                            A Pick Up Through
                            {" "}
                            <strong>
                                Online
                            </strong>
                        </h2>
                        <p ref={contentRef}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        </p>
                        <div className={cx("delivery-bottom")} ref={btnRef}>
                            <img src={iconDelivery} alt="" />
                            {/* <div className={cx("delivery-bottom-des")}>
                                <p>
                                    Delivery Order Num
                                </p>
                                <strong>
                                    0123-456-778
                                </strong>
                            </div> */}
                            <button type="button">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div className={cx("col-lg-6")}>
                        <div className={cx("right")}>
                            <img src={imgDelivery} alt="" ref={imgRef} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Delivery;
