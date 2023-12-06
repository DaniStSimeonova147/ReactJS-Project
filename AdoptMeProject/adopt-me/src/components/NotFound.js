import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <section>
            <div className="not-found-img">
                <img src="/images/404pageLogo.gif" alt="404 not found gif" />
            </div>
            <div className="not-found">
                <h1>
                    Error 404,
                    <br /> page not found.
                </h1>

                <Link to="/">
                    <button>Return to Adopt ME</button>
                </Link>
            </div>
        </section>
    );
};