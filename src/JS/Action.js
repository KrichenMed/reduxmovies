import { ADD_MOVIE,DELETE_MOVIE } from "./ActionType";

export const AddMovie=(newMovie)=>{
    return{
        type:ADD_MOVIE,
        payload:newMovie,
    };
};
export const DeleteMovie=(id)=>{
    return{
        type:DELETE_MOVIE,
        payload:id,
    };
};