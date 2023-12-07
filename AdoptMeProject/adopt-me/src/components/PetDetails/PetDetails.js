import { useEffect, useState, useContext, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


import { petServiceFactory } from '../../services/petService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { usePetContext } from '../../contexts/PetContext';

import { petReducer } from '../../reducers/petReducer';
import { AuthContext } from '../../contexts/AuthContext';
import { AddComment } from './AddComment/AddComment';

export const PetDetails = () => {
    const { petId } = useParams();
    const { userId, isAuthenticated, userEmail } = useContext(AuthContext);
    const { deletePet } = usePetContext();
    const [pet, dispatch] = useReducer(petReducer, {});
    const petService = useService(petServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            petService.getOne(petId),
            commentService.getAll(petId),
        ]).then(([petData, comments]) => {
            const petState = {
                ...petData,
                comments,
            };

            dispatch({ type: 'PET_FETCH', payload: petState })
        });
    }, [petId]);

    const onCommentSubmit = async (values) => {
        try {
            if (Object.values(values).includes("")) {
                throw new Error('Comment can not be empty!')
            }
            const response = await commentService.create(petId, values.comment);
            console.log(response);

            dispatch({
                type: 'COMMENT_ADD',
                payload: response,
                userEmail,
            });
        } catch (error) {
            return alert(error.message);
        }
    };

    const isOwner = pet._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${pet.name}?`);

        if (result) {
            await petService.delete(pet._id);

            deletePet(pet._id);

            navigate('/catalog');
        }
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
                                                <button className="button" onClick={onDeleteClick}>
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

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments htmlFor current pet (If any) --> */}
                        {pet.comments && pet.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {/* <!-- Display paragraph: If there are no pet in the database --> */}
                    {!pet.comments?.length &&
                        (<p className="no-comment">
                            😿No comments yet!😿
                            <br />
                            Your comment may be the first!
                            <br />
                            🥇
                        </p>)}
                </div>
            </div>
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section>
    );
};

