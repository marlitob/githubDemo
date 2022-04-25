/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    GET_REPO_CONTRIBUTORS_SUCCESS,
} from '../actions/repoActions';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";


const initialState = {
    contributors: [{
        id: 0,
        login: "Loading",
        avatar_url: "Loading",
        contributions: 0
    }]

};

const contributorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPO_CONTRIBUTORS_SUCCESS: {
            const contributors= action.payload
            return produce(state, draft => {
                draft.contributors = contributors;
            });
        }
        default: {
            return state;
        }
    }
};
export default contributorReducer;
