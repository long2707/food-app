/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import Layout from "components/Layout";
import React from "react";

import classNames from "classnames/bind";

import { ProductItem } from "components";
import { useDispatch } from "react-redux";
import { sort } from "apps/actions/productAction";
import clasess from "./Shop.module.scss";

const cx = classNames.bind(clasess);

const Types = [
    {
        name: "Price: Low to High",
        type: "PRICE_LOW_TO_HIGH"
    },
    {
        name: "Price: High to Low",
        type: "PRICE_HIGH_TO_LOW"
    }
];

function Shop() {
    const [nameSort, setNameSort] = React.useState("");
    const [showDrop, setShowDrop] = React.useState(false);
    const dispatch = useDispatch();
    const ref = React.useRef();
    // onclick outside

    const handleOutSide = (e) => {
        if (ref.current && ref.current.contains(e.target)) {
            setShowDrop((pre) => !pre);
        } else {
            setShowDrop(false);
        }
    };
    React.useEffect(() => {
        window.addEventListener("click", handleOutSide, true);
        return () => {
            window.removeEventListener("click", handleOutSide, true);
        };
    }, []);
    const shortHandleChange = (type, name) => {
        setNameSort(name);
        const action = sort(type);
        dispatch(action);
    };
    return (
        <Layout>
            <section className={cx("shop")}>
                <div className={cx("shop-area")}>
                    <div className={cx("shop-area__title")}>
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
                        </ul>
                    </div>

                </div>
                <div className={cx("shop-content")}>
                    <div className={cx("container")}>
                        <div className={cx("shop-content__top")}>
                            <div className={cx("search")}>
                                <input type="text" className={cx("search-input")} placeholder="Search your product" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button>
                                    <i className={cx("bx bx-search")} />
                                </button>
                            </div>
                            <div className={cx("right")}>
                                <div className={cx("sort")}>
                                    <div ref={ref} className={cx("sort__select")}>
                                        <span>{nameSort || "Default Sorting"}</span>
                                        <i className={cx("bx bx-chevron-down")} />
                                    </div>
                                    <ul className={cx("sort__list", { "is-active": showDrop })}>
                                        {
                                            Types.map(({ name, type }, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => {
                                                        shortHandleChange(type, name);
                                                    }}
                                                >
                                                    {name}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={cx("shop-list")}>
                            <ProductItem />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Shop;
