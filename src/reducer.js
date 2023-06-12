export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQB8wjjuhjn-P_VlpWe1vrLklh2j1Nmd2pxtL_1ZPITLaybqQCrU6WK54UWjoeTvDafzpSHsgMzw6HLRG1qwS1ElMTAdJY1KyhtFEMuJm7km_cmmx1T4VyjnKIBYOtdvBnEB1Su_7E54hv4QOIS1zrQ8ENe8uKbl0O1WLejTNCYrZ5ImzfIfrWka1nXPY8afYi-Do0CDSaeckGp8',
};

const reducer = (state, action) => {
    console.log("the action is", action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }


};

export default reducer;