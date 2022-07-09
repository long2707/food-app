import React from "react";

import classNames from "classnames/bind";
import { ShapeIcon } from "components";
import shape1 from "assets/images/1.png";
import shape3 from "assets/images/3.png";
import shape5 from "assets/images/5.png";
import shape6 from "assets/images/6.png";
import shape2 from "assets/images/2.png";
import classes from "./Review.module.scss";

const cx = classNames.bind(classes);

function Review() {
    return (
        <section className={cx("review-area")}>
            <ShapeIcon
                img={shape2}
                top="-10px"
                left="10%"
                classname="shape2"

            />
            <ShapeIcon
                img={shape1}
                bottom="26%"
                left="22%"
                classname="shape2"

            />
            <ShapeIcon
                img={shape3}
                top="10%"
                right="10%"
                classname="shape2"

            />
            <ShapeIcon
                img={shape5}
                top="30%"
                left="40%"
                classname="shape1"

            />
            <ShapeIcon
                img={shape6}
                bottom="25%"
                right="30%"
                classname="shape1"

            />
            <div className={cx("container")}>
                <div className={cx("review-item")}>
                    <div className={cx("review-item-img")}>
                        <img src="https://i.pinimg.com/564x/a9/e2/db/a9e2dbd6715fdc0d9fd374abfe955acf.jpg" alt="" />
                    </div>
                    <div className={cx("content")}>
                        <h4>Bill Gates</h4>
                        <p>CEO of Microsoft</p>
                        <p>I had a very good lunch here. This is my favorite restaurant.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Review;
