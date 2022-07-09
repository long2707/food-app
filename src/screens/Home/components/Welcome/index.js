import React from "react";
import { useNavigate } from "react-router-dom";

import classNames from "classnames/bind";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ShapeIcon } from "components";
import img from "assets/images/hamburguer.png";
import shape1 from "assets/images/4.png";
import shape2 from "assets/images/2.png";
import clasess from "./Welcome.module.scss";

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(clasess);

function WelcomeHome() {
    const imgRef = React.useRef(null);
    const headingRef = React.useRef(null);
    const titleRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const btnRef = React.useRef(null);

    const navigate = useNavigate();

    //  animation
    React.useEffect(() => {
        gsap.fromTo(imgRef.current, { translateY: 40, opacity: 0 }, {
            translateY: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.5,
            scrollTrigger: {
                trigger: imgRef.current
            }
        });
        gsap.fromTo(headingRef.current, { translateX: -50, opacity: 0 }, {
            translateX: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1,
            scrollTrigger: {
                trigger: headingRef.current
            }
        });
        gsap.fromTo(titleRef.current, { translateX: -50, opacity: 0 }, {
            translateX: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1.2,
            scrollTrigger: {
                trigger: titleRef.current
            }
        });
        gsap.fromTo(contentRef.current, { translateX: -50, opacity: 0 }, {
            translateX: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1.4,
            scrollTrigger: {
                trigger: contentRef.current
            }
        });
        gsap.fromTo(btnRef.current, { translateX: -50, opacity: 0 }, {
            translateX: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1.6,
            scrollTrigger: {
                trigger: btnRef.current
            }
        });
    });

    return (
        <section className={cx("welcome-area")}>
            <ShapeIcon
                img={shape1}
                top="10%"
                right="30%"
                classname="shape1"

            />
            <ShapeIcon
                img={shape2}
                bottom="0%"
                right="5%"
                classname="shape2"
            />
            <div className={cx("container")}>
                <div className={cx("row align-items-center")}>
                    <div className={cx("col-lg-5")}>
                        <img src={img} alt="" ref={imgRef} />
                    </div>
                    <div className={cx("col-lg-7")}>
                        <div className={cx("welcome-content")}>
                            <span ref={headingRef}>Welcome</span>
                            <h1 ref={titleRef}>
                                Burger With Yummy
                                <br />
                                Test Real Love
                            </h1>
                            <p ref={contentRef}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                                {" "}
                                <br />
                                {" "}
                                eusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                {" "}
                                <br />
                                ipsum suspendisse ultrices gravida.
                            </p>
                            <button type="button" ref={btnRef} onClick={() => { navigate("/shop"); }}>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WelcomeHome;
