/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-array-index-key */
import React from "react";
import classNames from "classnames/bind";

import img from "assets/images/img__ft.jpg";
import classes from "./Footer.module.scss";

const cx = classNames.bind(classes);

const Week = [
    {
        name: "Sunday",
        time: "Closed"
    },
    {
        name: "Monday",
        time: "8.00 - 20.00"
    },
    {
        name: "Tuesday",
        time: "10.00 - 5.00"
    },
    {
        name: "Wednesday",
        time: "8.00 - 20.00"
    },
    {
        name: "Friday",
        time: "10.00 - 5.00"
    },
    {
        name: "Saturday",
        time: "9.00 - 12.00"
    }
];

function Footer() {
    return (
        <section className={cx("footer")}>
            <div
                className={cx("container")}
                style={{ paddingTop: "5rem" }}
            >
                <div className={cx("book-table")}>
                    <div className={cx("row align-items-center")}>
                        <div className={cx("col-lg-6 col-md-6 col-sm-6")}>
                            <div className="book-table__content">
                                <h2 style={{ fontWeight: "600" }}>
                                    Book A Table Now!
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing eltsed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                                <div className={cx("book-table__btn")}>
                                    <a href="tel:+123456789">
                                        +123 456 789
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("col-lg-6 col-md-6 col-sm-6 text-lg-end text-md-end mt-sm-5 mt-md-0 mt-5 ")}>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div className={cx("row")} style={{ marginTop: "50px" }}>
                    <div className="col-lg-4">
                        <ul className={cx("footer-table")}>
                            {
                                Week.map((item, index) => (
                                    <li key={index}>
                                        {item.name}
                                        <span>{item.time}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={cx("col-lg-4")}>
                        <div className={cx("footer-info")}>
                            <h3>Address</h3>
                            <ul className={cx("footer-info__content")}>
                                <li>

                                    <i className={cx("bx bx-phone-call")} />
                                    123 456 789
                                </li>
                                <li>
                                    <i className={cx("bx bx-mail-send")} />
                                    abc@gmail.com
                                </li>
                                <li>
                                    <i className={cx("bx bx-location-plus")} />
                                    123 Giai Phong, Ha Noi, Viet Nam
                                </li>
                            </ul>
                            <div className={cx("social")}>

                                <i className={cx("bx bxl-facebook-circle")} style={{ color: "#3B5998" }} />
                                <i className={cx("bx bxl-twitter")} style={{ color: "#55ACCE" }} />
                                <i className={cx("bx bxl-youtube")} style={{ color: "#C80000" }} />
                            </div>
                        </div>
                    </div>
                    <div className={cx("col-lg-4")}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119172.65217986789!2d105.72774723832956!3d21.026868194838578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6ffe3e61d7%3A0x544c2582e0a993a2!2zQnVyZ2VyIEtpbmcgZ2nhuqNuZyB2w7U!5e0!3m2!1svi!2s!4v1656083266245!5m2!1svi!2s"
                            width="100%"
                            height="300"
                            style={{ border: "0;" }}
                            allowFullScreen
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
