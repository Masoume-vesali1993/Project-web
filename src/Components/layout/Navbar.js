import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import '../pages/styles.css';

const Navbar = () => {
    return (
        <Fragment>
            <ul className="menu">
                <li>
                    <Link to="/Home">صفحه اصلی</Link>
                </li>

                <li>
                    <Link to="/ShowAllArticle">نمایش هر مقاله</Link>
                </li>

                <li>
                    <Link to="/ShowEveryone">نمایش یک مقاله</Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default Navbar;