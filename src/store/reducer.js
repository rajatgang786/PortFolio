
const initialState ={
    projectList : []
};

const  reducer = (state = initialState ,  action) => {

    switch (action.type) {
        case "GET_COPY_ASSET_SECTION_LIST": {
            return {
                ...state,
                projectList : action.payload
                };
            }
            default:  return state;
        }
}

export default reducer;