import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";

const Loading = React.lazy(() => import("./components/Loading"));
const Home = React.lazy(() => import("./screens/Home"));
const Shop = React.lazy(() => import("./screens/Shop"));
const Detail = React.lazy(() => import("./screens/Detail"));

function App() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/shop/:id" element={<Detail />} />
                </Routes>
            </Suspense>
            <ToastContainer />
        </>
    );
}

export default App;
