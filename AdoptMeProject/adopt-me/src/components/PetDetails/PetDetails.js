import { useEffect, useState, useContext, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { Box, Button, Card, CardContent, CardMedia, Container, Dialog, DialogTitle, DialogActions, List, ListItem, ListItemText, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { petServiceFactory } from '../../services/petService';
import { commentServiceFactory } from '../../services/commentService';
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
    const commentService = useService(commentServiceFactory);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

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
            const response = await commentService.create(petId, values.comment);
            dispatch({
                type: 'COMMENT_ADD',
                payload: response,
                userEmail,
            });
        } catch (error) { }
    };

    const isOwner = pet._ownerId === userId;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onDeleteClick = async () => {
        await petService.delete(pet._id);
        deletePet(pet._id);
        navigate("/catalog");
        handleClose();
    };
    return (
        <Container component="main" maxWidth="lg" margin="auto">
            <Card sx={{ padding: 3, mt: 20, mb: 10 }}>
                <Typography sx={{
                    fontFamily: "cursive",
                    fontSize: "30px",
                    textAlign: "center",
                    fontWeight: 900,
                    mb: 2
                }} variant="h1" >
                    Pet Details
                </Typography>
                <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: { xs: "100%", md: 400, borderRadius: 20, boxShadow: "1px 1px 10px grey" } }}
                        image={pet.imageUrl}
                        alt={pet.name}
                    />
                    <Box display="flex" flexDirection="column" justifyContent="space-between" flexGrow={1}>
                        <CardContent>
                            <Typography variant="body1" fontWeight="900"> {pet.description}</Typography>
                            <Box mt={2}>
                                <Typography variant="body2">Name: {pet.name}</Typography>
                                <Typography variant="body2">Type: {pet.type}</Typography>
                                <Typography variant="body2">Age: {pet.age}</Typography>
                                <Typography variant="body2">Contact: {pet.contact}</Typography>
                                <Typography variant="body2">Location: {pet.location}</Typography>
                            </Box>
                            {isOwner && (
                                <Box display="flex" justifyContent="center" sx={{ gap: 2, mt: 2 }} >
                                    <Button variant="outlined" startIcon={<EditIcon />} component={Link} to={`/catalog/${pet._id}/edit`}>
                                        Edit
                                    </Button>
                                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClickOpen}>
                                        Delete
                                    </Button>
                                </Box>
                            )}
                        </CardContent>
                    </Box>
                </Box>
                <Box mt={4} >
                    <Typography sx={{
                        fontFamily: "cursive",
                        fontSize: "30px",
                        textAlign: "center",
                        fontWeight: 900
                    }}  >
                        Comments:
                    </Typography>
                    <List>
                        {pet.comments && pet.comments.map((comment) => (
                            <ListItem key={comment._id}
                                sx={{
                                    mt: 1,
                                    backgroundColor: "rgba(37, 101, 174, 0.2)",
                                    borderLeft: "5px solid #2565ae"
                                }}>
                                <ListItemText
                                    primary={`${comment.author.email}: ${comment.comment}`}
                                    sx={{ wordWrap: "break-word" }}
                                />
                            </ListItem>
                        ))}
                    </List>
                    {!pet.comments?.length && (
                        <Typography
                            variant="h5"
                            textAlign="center"
                            fontFamily="cursive"
                            sx={{
                                color: "#FFFFFF",
                                borderRadius: "30px",
                                backgroundColor: "rgba(128, 128, 128, 0.5)",
                                p: 3
                            }}
                        >
                            No comments yet!
                        </Typography>
                    )}
                </Box>
                {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>
                        Are you sure you want to delete {pet.name}?
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={onDeleteClick} color="primary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
        </Container >
    );
};

