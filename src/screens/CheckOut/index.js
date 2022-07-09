/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "yup-phone";

import { useAuthenticated, useHandleCart, useToast } from "hooks";

import empty from "assets/icons/undraw_empty_r.svg";

import classNames from "classnames/bind";
import { TOAST_TYPE } from "constants/global";
import classes from "./CheckOut.module.scss";

const cx = classNames.bind(classes);

const schema = yup.object({
    fullname: yup.string().required("Please your enter full name")
        .min(2, "Please enter full name with at least 2 characters"),
    address: yup.string().required("Please enter your address"),
    phone: yup.string().nullable(true)
        .required("Please enter your phone")
        .phone("VN", false, "Please enter valid phone number")
});

function Checkout() {
    const { state } = useLocation();
    const { userDetail } = useAuthenticated();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();
    const toast = useToast();

    const { removeAllFromFireStore } = useHandleCart();
    const handleSubmitForm = () => {
        if (state.length > 0) {
            removeAllFromFireStore(userDetail.uid);
            toast("Order Success!", () => { navigate("/"); }, TOAST_TYPE.SUCCESS);
        } else {
            toast("Your cart is empty!", () => { navigate("/shop"); }, TOAST_TYPE.WARN);
        }
    };

    return (
        <section className={cx("checkout")}>
            <div className={cx("checkout-banner")}>
                <div className={cx("checkout-banner-title")}>
                    <h2>Check Out</h2>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            <i className={cx("bx bx-happy-heart-eyes")} />
                        </li>
                        <li>
                            Checkout
                        </li>

                    </ul>
                </div>
            </div>
            <div className={cx("container")}>
                <div className={cx("row mt-lg-4 mt-mb-3 mt-sm-2")}>
                    <div className="col-lg-6">
                        <div className={cx("checkout-content-left")}>
                            <h2 className={cx("shipping")}>
                                Shipping address
                            </h2>
                            <form>
                                <div className={cx("form-group")}>
                                    <label className="d-block" htmlFor="fullname">
                                        Full Name
                                    </label>
                                    <input
                                        {...register("fullname")}
                                        className={cx("form-control", { "is-invalid": !!errors?.fullname })}
                                        type="text"
                                        name="fullname"
                                        placeholder="Enter your full name"
                                    />
                                    {errors?.fullname && (<div className="invalid-feedback d-block">{errors?.fullname?.message}</div>)}
                                </div>
                                <div className={cx("form-group")}>
                                    <label className="d-block" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        {...register("phone")}
                                        type="text"
                                        name="phone"
                                        className={cx("form-control", { "is-invalid": !!errors?.phone })}
                                        placeholder="Enter your phone"
                                    />
                                    {errors?.phone && (<div className="invalid-feedback d-block">{errors?.phone?.message}</div>)}
                                </div>
                                <div className={cx("form-group")}>
                                    <label className="d-block" htmlFor="address">
                                        Address
                                    </label>
                                    <input
                                        {...register("address")}
                                        className={cx("form-control", { "is-invalid": !!errors?.address })}
                                        type="text"
                                        name="address"
                                        placeholder="Enter your address"
                                    />
                                    {errors?.address && (<div className="invalid-feedback d-block">{errors?.address?.message}</div>)}
                                </div>
                            </form>
                            <Link to="/">
                                Return to shop
                            </Link>
                        </div>
                    </div>
                    <div className={cx("col-lg-6 mt-lg-0 mt-sm-4 mt-4")}>
                        <div className={cx("checkout-content-right")}>
                            <div className={cx("checkout-products")}>
                                <ul className={cx("checkout-products-list")}>
                                    {
                                        state.length > 0 ? state.map((item) => (
                                            <li className={cx("checkout-products-list-item")} key={item.id}>
                                                <div className={cx("checkout-products-list-item__img")}>
                                                    <img src={item?.img || ""} alt="" />
                                                    <span>
                                                        {item?.qnt || 0}
                                                    </span>
                                                </div>

                                                <span className={cx("item-name")}>
                                                    {item?.name || "Hi"}
                                                </span>
                                                <span className={cx("item-price")}>
                                                    {`${item?.price || 0}$`}
                                                </span>

                                            </li>
                                        ))
                                            : (
                                                <div className={cx("imgae")} style={{ width: "100%" }}>
                                                    <img src={empty} alt="" style={{ width: "100%" }} />
                                                </div>
                                            )
                                    }
                                </ul>
                            </div>
                            <div className={cx("checkout-discount")}>
                                <input
                                    type="text"
                                    name="discount"
                                    className={cx("form-control")}
                                    placeholder="Enter discount code"
                                />
                                <button type="button" className={cx("btn-apply")}>
                                    Apply
                                </button>
                            </div>
                            <div className={cx("checkout-fee")}>
                                <div className={cx("checkout-fee-item")}>
                                    <span className={cx("title")}>
                                        Total product cost
                                    </span>
                                    <span className={cx("price")}>
                                        {
                                            `${state.reduce((prev, current) => current.price * current.qnt + prev, 0)}$`
                                        }
                                    </span>
                                </div>
                                <div className={cx("checkout-fee-item")}>
                                    <span className={cx("title")}>
                                        Shipping cost
                                    </span>
                                    <span className={cx("price")}>
                                        Free
                                    </span>
                                </div>
                            </div>
                            <div className={cx("checkout-total")}>
                                <span className={cx("total")}>
                                    total
                                </span>
                                <span className={cx("price")}>
                                    {
                                        `${state.reduce((prev, current) => current.price * current.qnt + prev, 0)}$`
                                    }
                                </span>
                            </div>
                            <div className={cx("checkout-button")}>
                                <button type="submit" onClick={handleSubmit(handleSubmitForm)}>
                                    Check out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Checkout;
