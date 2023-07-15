const initialState = {
    count: 0
}

// reducer 
const counter = (state = initialState, action) => {
    switch (action.type) {
        case "incr": return { ...state, count: state.count + action.payload };
        case "dec": return  { ...state, count: state.count - action.payload };
        default: return state;
    }
}





export default counter;