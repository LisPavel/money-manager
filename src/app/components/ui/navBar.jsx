import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ routes, title }) => {
    const location = useLocation();
    console.log(location);

    const getNavLinkClasses = (path) => {
        return `nav-link${path === location.pathname ? " active" : ""}`;
    };

    const renderNavItem = ({ path, text }) => {
        return (
            <li className="nav-item" key={path}>
                <Link to={path} className={getNavLinkClasses(path)}>
                    {text}
                </Link>
            </li>
        );
    };
    const renderNavList = (routes) => {
        return (
            <ul className="nav">
                {Object.keys(routes).map((key) => {
                    const route = routes[key];
                    return renderNavItem({
                        path: route.navPath ?? route.path,
                        text: route.name,
                    });
                })}
            </ul>
        );
    };
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                {renderNavList(routes)}
                {title}
            </div>
        </nav>
    );
};

NavBar.propTypes = {
    routes: PropTypes.object.isRequired,
    title: PropTypes.string,
};

export default NavBar;
