import { useEffect } from "react";
import { useLocation } from "react-router";
import { withRouter } from "react-router-dom";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};

export default withRouter(ScrollToTop);