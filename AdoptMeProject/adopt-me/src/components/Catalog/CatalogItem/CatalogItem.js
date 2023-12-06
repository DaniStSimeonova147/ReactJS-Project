import { Link } from "react-router-dom";

export const CatalogItem = ({
    _id,
    name,
    type,
    imageUrl,
}) => {
    return (
        <div className="card">
            <div className="imgBx">
                <img
                    src={imageUrl}
                    alt="post"
                    className="cover"
                />
            </div>
            <h5 className="petName">Name: {name}</h5>
            <h5 className="petType">Type: {type}</h5>
            
            {/* Link to Photo Details Page */}
            <Link to={`/catalog/${_id}`} id="see-details">
                <h4 className="details">See details</h4>
            </Link>
        </div>
    );
};

