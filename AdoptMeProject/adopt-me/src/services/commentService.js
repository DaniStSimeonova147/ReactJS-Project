import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const commentServiceFactory = () => {

    const getAll = async (petId) => {
        const petDocumentRef = doc(db, 'pets', petId);
        const snapshot = await getDoc(petDocumentRef);
        const petData = snapshot.data();
        const comments = petData.comments;
        return comments;
    };

    const create = async (petId, comment) => {
        const petDocumentRef = doc(db, 'pets', petId);
        const snapshot = await getDoc(petDocumentRef);
        const petData = snapshot.data();
        const newComment = {
            id: Math.random(),
            comment: comment.comment,
            authorEmail: comment.authorEmail
        }
        const comments = [...petData.comments, newComment];
        await updateDoc(petDocumentRef, { comments: comments });
        return newComment;
    };

    return {
        getAll,
        create,
    };
};
