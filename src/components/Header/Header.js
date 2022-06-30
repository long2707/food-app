/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-fragments */
/* eslint-disable quote-props */
/* eslint-disable react/no-array-index-key */
import React, { Fragment, useState } from "react";
import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import logo from "assets/images/food.png";
import MobileMenu from "./MobileMenu";
import classes from "./Header.module.scss";

const cx = classNames.bind(classes);

const mainNav = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Shop",
        path: "/shop"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    }
];

function Header() {
    const [Isactive, setIsActive] = useState(false);
    const [isShow, setIsShow] = React.useState(false);
    const { pathname } = useLocation();

    const active = mainNav.findIndex((e) => e?.path === pathname);

    const onHidderBar = () => {
        setIsActive(false);
    };

    React.useEffect(() => {
        window.addEventListener(("scroll"), () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        });

        return (
            window.removeEventListener("scroll", null)
        );
    }, []);
    return (
        <Fragment>
            <div
                className={cx("header-container", { "is-sticky": isShow })}
            >
                <div className="container">
                    <div className={cx("header-content")}>
                        <div className={cx("header-mennu-toggle")} onClick={() => setIsActive(true)}>
                            <i className="bx bx-menu" />
                        </div>
                        <div className={cx("header-logo")}>
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className={cx("menu__left")}>
                            {
                                mainNav.map((item, index) => (
                                    <div key={index} className={cx("menu__left-item")}>
                                        <Link to={item?.path} className={cx("item-link", { "is-active": active === index })}>
                                            {item?.title}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={cx("menu__right")}>
                            <div className={cx("header-cart")}>
                                <i className="bx bx-shopping-bag" />
                                <span className={cx("total")}>
                                    0
                                </span>
                            </div>
                            <div className={cx("header-account")}>
                                <Link to="/" className={cx("sing-in")}>
                                    <i className="bx bxs-user-circle" />
                                    <div>
                                        Sing In
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu
                menu={mainNav}
                isActive={Isactive}
                onClose={onHidderBar}
            />
        </Fragment>
    );
}

export default Header;
