import { UserList } from "./service";


export const handleProjectList = () => {
    return async (dispatch) => {
        const response = await UserList();
        dispatch({
            type: "GET_COPY_ASSET_SECTION_LIST",
            payload: response
        });
    };
}