import repoApiServices from "../api/repoAPiServices";
export const  GET_REPO_CONTRIBUTORS_SUCCESS = '@repoActions/get-contributors-success';
export const  GET_REPO_CONTRIBUTORS_DETAILS_SUCCESS = '@repoActions/get-contributors-details-success';

export function repoActions() {
    return async dispatch => {
        try {
            const contributors = await repoApiServices.getContributors()
            return  dispatch({
                type: GET_REPO_CONTRIBUTORS_SUCCESS,
                payload:  contributors
            })
        } catch (error) {
            console.log(error);
        }
    };}

export function getContributorDetailsActions(user) {
    return async dispatch => {
        try {
            const contributorDetails = await  repoApiServices.getContributorDetails(user)
            return  dispatch({
                type: GET_REPO_CONTRIBUTORS_DETAILS_SUCCESS,
                payload:  contributorDetails
            })
        } catch (error) {
            console.log(error);
        }
    };}





