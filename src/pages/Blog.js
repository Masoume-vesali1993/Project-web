import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// اینجا وقتی به کلاس نیازی نیستش چرا از کلاس داری استفاده میکنی
export default function (props) {
    return (
        <div>
            <Navbar/>
            {props.children}
            <h1>Blog</h1>
            <Footer/>
        </div>
    );
}
// کلاس قبلی که نوشته بودی اسم نداشت و فقط اکسپورت شده بود
// منم که تبدیل به تابعش کردم دیدی که اسم نذاشتم براش
// به نظرت این کار درستی هست ‌؟‌
// یا بهتره که اسم براش بذاریم ؟‌

