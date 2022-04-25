import repoApiServices from "../api/repoAPiServices";
export const  GET_REPO_CONTRIBUTORS_SUCCESS = '@repoActions/get-contributors-success';

export const repoActions = async dispatch =>  {
 const contributors = await  repoApiServices.getContributors()
        return  dispatch({
                type: GET_REPO_CONTRIBUTORS_SUCCESS,
                payload:  contributors
            })
}





