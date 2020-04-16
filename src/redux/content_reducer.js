const RELOAD = 'RELOAD';
const START_SEARCH = 'START_SEARCH';

const headersReducer = (action, state) => {
    const startSearch = (letters) => {
        state.shopInfo.searchWord = letters;
    };
    switch (action.type) {
        case RELOAD:
            break;
        case START_SEARCH:
            action.message
                ? startSearch(action.message)
                : startSearch("");
            break;
        default:
            console.error();
            break
    }
    return state;
}

export const reloadAction = () => ({type:RELOAD});

export const startSearchAction = (text) => {
    return {type:START_SEARCH,
        message:text}
};

export default headersReducer;