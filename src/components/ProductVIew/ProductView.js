/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import PropTypes from "prop-types";

import classNames from "classnames/bind";
import Star from "components/Star/Star";
import { TOAST_TYPE } from "constants/global";
import { useAuthenticated, useHandleCart, useToast } from "hooks";
import { useNavigate } from "react-router-dom";
import classes from "./ProductView.module.scss";

const cx = classNames.bind(classes);

function ProductView({ product }) {
    const {
        id,
        img,
        name,
        dsc,
        country,
        rate,
        price
    } = product;
    const [prevImg, setPrevImg] = React.useState(img);

    const [qnt, setQnt] = React.useState(1);

    const { addToFireStore } = useHandleCart();

    const { userDetail } = useAuthenticated();

    const toast = useToast();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (userDetail === null) {
            navigate("/login");
        } else {
            const productInfo = {
                id, name, img, price, qnt
            };
            const type = "increase";
            const action = "totalAdd";

            addToFireStore(userDetail?.uid, { productInfo, type, action });
            toast("The product has been added to cart!", null, TOAST_TYPE.SUCCESS);
        }
    };

    React.useEffect(() => {
        setPrevImg(img);
    }, [img, product]);
    return (
        <div className={cx("product")}>
            <div className={cx("row")}>
                <div className={cx("col-lg-6")}>
                    <div className={cx("product__image")}>
                        <div className={cx("product__image-list")}>
                            <div className={cx("product__image-list-item")}>
                                <img src={img} alt="" onClick={() => setPrevImg(img)} />
                            </div>
                            <div className={cx("product__image-list-item")}>
                                <img src={img} alt="" onClick={() => setPrevImg(img)} />
                            </div>
                        </div>
                        <div className={cx("product__image-main")}>
                            <img src={prevImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className={cx("col-lg-6")}>
                    <div className={cx("product__info")}>
                        <h2>{name}</h2>
                        <div className={cx("product__info-item")}>
                            <Star rate={rate} />
                            <span>(0 Reviews)</span>
                        </div>
                        <div className={cx("product__info-item")}>
                            <h3 className={cx("product__info-item-price")}>
                                {`${price}$`}
                            </h3>
                        </div>
                        <div className={cx("product__info-item")}>
                            <div className={cx("product__info-item-tag")}>
                                <div className={cx("tag-category")}>
                                    <span className={cx("tag")}>
                                        Category:
                                    </span>
                                    <span className={cx("tag-item")}>
                                        Burgers
                                    </span>
                                </div>
                                <div className={cx("tag-country")}>
                                    <span className={cx("tag")}>
                                        Country:
                                    </span>
                                    <span className={cx("tag-country")}>
                                        {country}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx("product__info-item")}>
                            <span>{dsc}</span>
                        </div>
                        <div className={cx("product-btn")}>
                            <div className={cx("product__info-item__quantity")}>
                                <div className={cx("product__info-item__quantity__btn")} onClick={() => qnt > 1 && setQnt((pre) => pre - 1)}>
                                    <i className={cx("bx bx-minus")} />
                                </div>
                                <span className={cx("product__info-item__quantity__input")}>
                                    {qnt <= 0 ? 1 : qnt}
                                </span>
                                <div className={cx("product__info-item__quantity__btn")} onClick={() => setQnt((pre) => pre + 1)}>
                                    <i className={cx("bx bx-plus")} />
                                </div>
                            </div>
                            <button type="button" className={cx("btn-add")} onClick={handleAddToCart}>
                                <span>
                                    <i className={cx("bx bxs-cart-add bx-tada")} />
                                </span>

                                <span>
                                    Add to cart
                                </span>
                            </button>
                            <button type="button" className={cx("btn-wishlist")}>
                                <i className={cx("bx bx-heart")} />
                            </button>
                        </div>
                        <div className={cx("product-commits")}>
                            <div className={cx("product-commits__content")}>
                                <i className={cx("bx bxs-plane-alt")} />
                                <span>Free global shipping on all orders</span>
                            </div>
                            <div className={cx("product-commits__content")}>
                                <i className={cx("bx bx-calendar-check")} />
                                <span>2 hours easy returns if you change your mind</span>
                            </div>
                            <div className={cx("product-commits__content")}>
                                <i className={cx("bx bx-purchase-tag-alt")} />
                                <span>Order before noon for same day dispatch</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductView.defaultProps = {
    img: "",
    name: "",
    price: "",
    rate: "",
    dsc: "",
    country: ""
};

ProductView.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    rate: PropTypes.string,
    dsc: PropTypes.string,
    country: PropTypes.string
};

export default ProductView;
