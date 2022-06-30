import React from "react";

import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import Star from "components/Star/Star";
import classes from "./ProductItem.module.scss";

const cx = classNames.bind(classes);

function ProductItem() {
    const dataProduct = useSelector((state) => state?.productReducer?.productData);
    return (
        <div className={cx("product__list")}>

            <div className={cx("row algin-items-center")}>
                {
                    dataProduct.slice(0, 16).map((item) => (
                        <div key={item?.id} className={cx("col-lg-3 col-md-3")}>
                            <div className={cx("product-item")}>
                                <div className={cx("product-item__img")}>
                                    <img src={item?.img} alt="" />
                                    <div className={cx("dialog")}>
                                        <div className={cx("left")}>
                                            <span>Favourite</span>
                                        </div>
                                        <div className={cx("right")}>
                                            <div className={cx("cart")}>
                                                <i className={cx("bx  bx-cart-alt")} />
                                            </div>
                                            <div className={cx("heart")}>
                                                <i className={cx("bx bx-heart")} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("product__content")}>
                                    <p className={cx("title")}>{item?.name}</p>
                                    <p className={cx("dsc")}>{item?.dsc}</p>
                                    <div className={cx("content-footer")}>
                                        <div className={cx("rate")}>
                                            <Star rate={item?.rate} />
                                        </div>
                                        <span style={{ fontWeight: "600" }}>{`$${item?.price}`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default ProductItem;
