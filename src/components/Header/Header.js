/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-fragments */
/* eslint-disable quote-props */
/* eslint-disable react/no-array-index-key */
import React, { Fragment, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { TOAST_TYPE } from "constants/global";
import { useAuthenticated, useToast } from "hooks";

import logo from "assets/images/food.png";

import classNames from "classnames/bind";

import Cart from "components/Cart/Cart";
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
        path: "/"
    },
    {
        title: "Contact",
        path: "/"
    }
];

const avatar = "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png";

function Header() {
    const [Isactive, setIsActive] = useState(false);
    const [isShow, setIsShow] = React.useState(false);
    const [showCart, setShowCart] = React.useState(false);
    const [totalQnt, setTotalQnt] = React.useState(0);

    const { pathname } = useLocation();
    const active = mainNav.findIndex((e) => e?.path === pathname);

    const cartItem = useSelector((state) => state?.cartReducer?.items);
    const { userDetail, logOut } = useAuthenticated();

    const toast = useToast();
    const navigate = useNavigate();
    // moblie
    const onHidderBar = React.useCallback(() => {
        setIsActive((prev) => !prev);
    }, []);

    const handleShowCart = React.useCallback(() => {
        if (userDetail === null) {
            navigate("/login");
        } else {
            setShowCart((prev) => !prev);
        }
    }, [showCart, userDetail]);

    // logout
    const handleLogOut = () => {
        try {
            logOut();
            setIsActive(false);
        } catch (error) {
            const message = error?.message;
            toast(message, null, TOAST_TYPE.ERROR);
        }
    };

    // scroll
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

    React.useEffect(() => {
        const totalQuantity = cartItem.reduce((prev, current) => prev + current.qnt, 0);
        setTotalQnt(totalQuantity);
    }, [cartItem]);

    // fullname

    const fullname = React.useMemo(
        () => `${userDetail?.firstname ?? ""}  ${userDetail?.lastname ?? ""} `,
        [userDetail]
    );

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
                            <div className={cx("header-cart")} onClick={() => handleShowCart()}>
                                <i className="bx bx-shopping-bag" />
                                <span className={cx("total")}>
                                    {totalQnt || 0}
                                </span>
                            </div>
                            <div className={cx("header-account")}>
                                {
                                    userDetail
                                        ? (
                                            <div className={cx("sing-in")}>
                                                <img src={userDetail?.photoURL || avatar} alt="" />
                                                <div>
                                                    {userDetail?.displayName || fullname}
                                                </div>
                                                <ul className={cx("header__account-option")}>
                                                    <li className={cx("header__account-option-item")}>
                                                        <i className={cx("bx bxs-user-rectangle")} />
                                                        <span>My account</span>
                                                        {" "}
                                                    </li>
                                                    <li
                                                        className={cx("header__account-option-item")}
                                                    >
                                                        <i className={cx("bx bx-heart-circle")} />
                                                        <span>My wishlist</span>
                                                        {" "}
                                                    </li>
                                                    <li
                                                        onClick={handleLogOut}
                                                        className={cx("header__account-option-item")}
                                                    >
                                                        <i className={cx("bx bx-log-in-circle")} />

                                                        <span>Logout</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                        : (
                                            <Link to="/login" className={cx("sing-in")}>
                                                <i className="bx bxs-user-circle" />
                                                <div>
                                                    Sing In
                                                </div>
                                            </Link>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu
                menu={mainNav}
                isActive={Isactive}
                onClose={onHidderBar}
                logOut={handleLogOut}
                avatarURL={userDetail?.photoURL || avatar}
                name={userDetail?.displayName || fullname}
                userDetail={userDetail}
            />
            <Cart
                showCart={showCart}
                onClick={handleShowCart}
            />
        </Fragment>
    );
}

export default Header;
