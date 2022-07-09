import { ProductCard, ProductView } from "components";
import Layout from "components/Layout";

import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import classNames from "classnames/bind";

import classes from "./Detail.module.scss";

const cx = classNames.bind(classes);

function Detail() {
    const { state } = useLocation();
    const products = useSelector((prev) => prev?.productReducer?.productData);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const start = Math.floor(Math.random() * (products.length - 4));

    return (
        <Layout>
            <section>
                <div className={cx("product-area")}>
                    <div className={cx("product-area__title")}>
                        <h2>Products</h2>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                <i className={cx("bx bx-happy-heart-eyes")} />
                            </li>
                            <li>
                                Products
                            </li>
                            <li>
                                <i className={cx("bx bx-happy-heart-eyes")} />
                            </li>
                            <li>
                                Detail
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={cx("container")}>
                    <ProductView product={state} />
                    <div className={cx("product-description")}>
                        <h2>
                            Description
                        </h2>
                        <p className="content">
                            Although the legendary Double Burger really needs no introduction,
                            please allow us… Tucked in between three soft buns are two all-beef
                            patties, cheddar cheese, ketchup, onion, pickles and iceberg
                            lettuce. Hesburger’s own paprika and cucumber mayonnaise add the
                            crowning touch. Oh baby!
                        </p>
                    </div>
                    <div className={cx("product-other")}>
                        <p className={cx("heading")}>
                            Best foods
                        </p>
                        <h2>
                            Related Products
                        </h2>
                        <div className={cx("row algin-items-center")}>
                            {
                                products.slice(start, start + 4).map((item) => (
                                    <ProductCard
                                        key={item?.id}
                                        {...item}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Detail;
