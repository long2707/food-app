import React from "react";
import classNames from "classnames/bind";

// gsap

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import classes from "./HomeIngredient.module.scss";

gsap.registerPlugin(ScrollTrigger);

const cx = classNames.bind(classes);

function CardIngredient({
    number, heading, des, top, right, left, bottom
}) {
    const cardRef = React.useRef(null);

    React.useEffect(() => {
        gsap.from(cardRef.current, {
            translateY: -20,
            opacity: 0,
            duration: 0.6,
            delay: 0.2,
            scrollTrigger: {
                trigger: cardRef.current
            }
        });
    }, []);

    return (
        <div className={cx("card-item")} style={{ margin: `${top} ${right} ${bottom}  ${left}` }} ref={cardRef}>
            <div className={cx("card-item-number")}>
                <span>
                    {number}
                </span>
            </div>
            <div className={cx("card-item-content")}>
                <h4>{heading}</h4>
                <p>
                    {des}
                </p>
            </div>
        </div>
    );
}

function HomeIngredient() {
    return (
        <section style={{ paddingBottom: "50px" }}>
            <div className={cx("ingredient-area")}>
                <div className={cx("container-fuild")} style={{ padding: "0px 12px" }}>
                    <div className={cx("row algin-items-center")}>
                        <div className={cx("col-lg-6 col-md-6")}>
                            <CardIngredient
                                number="01"
                                heading="Mild Butter"
                                des=" Learning do amet contur diiscivt suia non nuameius velit modi"

                            />
                            <CardIngredient
                                number="02"
                                heading="Slices Beef"
                                des=" Learning do amet contur diiscivt suia non nuameius velit modi"
                                top="0px"
                                right="0px"
                                left="60px"
                                bottom="60px"
                            />
                            <CardIngredient
                                number="03"
                                heading="Sleek Onion"
                                des=" Learning do amet contur diiscivt suia non nuameius velit modi"
                                translateX="0px"
                            />
                        </div>
                        <div className={cx("col-lg-6 col-md-6")}>
                            <CardIngredient
                                number="04"
                                heading="Fresh Bread"
                                des=" Learning do amet contur diiscivt suia non nuameius velit modi"
                                left="auto"
                                top="0px"
                                bottom="60px"
                                right="0px"
                            />
                            <CardIngredient
                                number="05"
                                heading="Lettuce Leaf"
                                des=" Learning do amet contur diiscivt suia non nuameius velit modi"
                                left="auto"
                                top="0px"
                                bottom="60px"
                                right="60px"
                            />
                            <CardIngredient
                                number="06"
                                heading="Glow Cheese"
                                des=" Learning do amet contur diiscivt suia non nuameius velit modi"
                                left="auto"
                                top="0px"
                                bottom="0px"
                                right="0px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeIngredient;
