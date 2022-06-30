/* eslint-disable react/self-closing-comp */
import React from "react";

import "./Loading.scss";

function Loading() {
    return (
        <div className="loading__container">
            <div className="cycles">
                <div className="cycle" />
                <div className="cycle" />
                <div className="cycle" />
                <div className="cycle" />
                <div className="cycle" />
                <div className="text">
                </div>
            </div>
        </div>
    );
}

export default Loading;
