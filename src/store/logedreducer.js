const initialState = {
    loged: false
}

// reducer 
const login = (state = initialState, action) => {
    switch (action.type) {
        case "login": return { ...state, loged: true };
        case "logout": return  { ...state, loged: false };
        default: return state;
    }
}





export default login;