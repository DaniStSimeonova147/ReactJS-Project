import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { petServiceFactory } from '../../services/petService';
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";

export const PetDetails = () => {
    const { userId } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const { petId } = useParams();
    const [pet, setPet] = useState({});
    const petService = useService(petServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                setPet(result);
            });
    }, [petId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();

        const result = await petService.addComment(petId, {
            username,
            comment,
        });

        setPet(state => ({ ...state, comments: { ...state.comments, result } }));
        setUsername('');
        setComment('');
    };

    const isOwner = pet._ownerId === userId;

    const onDeteteClick = async () => {
        await petService.delete(pet._id);

        navigate('/catalog');
    };


    return (
        <section id="pet-details">
            <h1>Pet Details</h1>
            <div className="info-section">

                <div className="container">
                    <div className="col-9">
                        <div className="card-details">
                            <div className="top">
                                <div className="location">
                                    <h3>
                                        <p>
                                        {/* pet location */}
                                            Location: <span>{pet.location}</span>
                                        </p>
                                        {/* IF the viewer is the creator of the pet */}
                                        <div className="edit-delete-btns">
                                            {/* Edit Pet */}
                                            {isOwner && (
                                                <Link to={`/catalog/${pet._id}/edit`}>
                                                    <img
                                                        className="edit-img"
                                                        src="/images/editLogo.png"
                                                        alt="edit button"
                                                    />
                                                </Link>
                                            )}
                                            {/*Delete Pet  */}
                                            {isOwner && (
                                                <button className="button" onClick={onDeteteClick}>
                                                    <img
                                                        className="bin-img"
                                                        src="/images/deleteLogo.png"
                                                        alt="bin button"
                                                    />
                                                </button>
                                            )}
                                        </div>
                                    </h3>
                                </div>
                            </div>
                            {/* Start Pet Photo */}
                            <div className="imgBx">
                                <img src={pet.imageUrl} alt="post" className="cover" />
                            </div>
                            <div className="bottom">
                                <p className="message">
                                    <b className="petDescription">{pet.description}</b>
                                </p>
                                <div className="pet-details">
                                    <p className="petName">Name: {pet.name}</p>
                                    <p className="petType">Type: {pet.type}</p>
                                    <p className="petAge">Age: {pet.age}</p>
                                    <p className="petContactEmail">Contact: {pet.contact}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Comments ( htmlFor Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments htmlFor current pet (If any) --> */}
                        {pet.comments && Object.values(pet.comments).map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.username}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {/* <!-- Display paragraph: If there are no pet in the database --> */}
                    {/* {!Object.values(pet.comments).length && (<p className="no-comment">No comments.</p>)} */}

                </div>
                {/* <!-- Add Comment ( Only htmlFor logged-in users, which is not creators of the current pet ) --> */}
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onCommentSubmit}>
                        <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <textarea name="comment" placeholder="Comment..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                        <input className="btn-submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            </div>
        </section>
    );
};

