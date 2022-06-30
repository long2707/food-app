import React from "react";

import gsap from "gsap";
import { Power1 } from "gsap";

import classNames from "classnames/bind";

import classes from "./Analysis.module.scss";

const cx = classNames.bind(classes);

function AnalysisHome() {
    const countOneRef = React.useRef(null);
    const countTwoRef = React.useRef(null);
    const countThrerRef = React.useRef(null);
    const countFourRef = React.useRef(null);
    React.useEffect(() => {
        gsap.from(countOneRef.current, {
            textContent: 0,
            duration: 1,
            ease: Power1.easeIn,
            snap: { textContent: 1 },
            stagger: 1,
            scrollTrigger: {
                trigger: countOneRef.current
            }
            // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        });
        gsap.from(countTwoRef.current, {
            textContent: 0,
            duration: 1,
            ease: Power1.easeIn,
            snap: { textContent: 1 },
            stagger: 1,
            scrollTrigger: {
                trigger: countTwoRef.current
            }
            // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        });
        gsap.from(countThrerRef.current, {
            textContent: 0,
            duration: 1,
            ease: Power1.easeIn,
            snap: { textContent: 1 },
            stagger: 1,
            scrollTrigger: {
                trigger: countThrerRef.current
            }
            // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        });
        gsap.from(countFourRef.current, {
            textContent: 0,
            duration: 1,
            ease: Power1.easeIn,
            snap: { textContent: 1 },
            stagger: 1,
            scrollTrigger: {
                trigger: countFourRef.current
            }
            // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        });
    }, []);

    return (
        <section className={cx("analysis-area")}>
            <div className={cx("analysis-wrapper")}>
                <div className={cx("analysis-content")}>
                    <div className={cx("analysis-content-text")}>
                        <span>Burger</span>
                        <h1>$45</h1>
                    </div>

                    <a href="https://youtu.be/qaHWDmFtBl0">
                        <i className={cx("bx bx-play")} />
                    </a>

                </div>
            </div>
            <div className={cx("analysis-container")}>
                <div className={cx("container")}>
                    <div className={cx("row algin-items-center")}>
                        <div className={cx("col-lg-3 col-md-6 col-sm-6")}>
                            <div className={cx("content")}>
                                <h1 ref={countOneRef}>
                                    350+
                                </h1>
                                <p>
                                    Cups of Coffee
                                </p>
                            </div>
                        </div>
                        <div className={cx("col-lg-3 col-md-6 col-sm-6")}>
                            <div className={cx("content")}>
                                <h1 ref={countTwoRef}>
                                    2678+
                                </h1>
                                <p>
                                    Orders Everyday
                                </p>
                            </div>
                        </div>
                        <div className={cx("col-lg-3 col-md-6 col-sm-6")}>
                            <div className={cx("content")}>
                                <h1 ref={countThrerRef}>
                                    60
                                </h1>
                                <p>
                                    Skilled Professionals
                                </p>
                            </div>
                        </div>
                        <div className={cx("col-lg-3 col-md-6 col-sm-6")}>
                            <div className={cx("content")}>
                                <h1 ref={countFourRef}>
                                    130
                                </h1>
                                <p>
                                    Burgers at Hour
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnalysisHome;
