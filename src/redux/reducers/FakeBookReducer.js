import { ADD_COMMENT } from "../types/FakeBookType";

const stateDefault = {
    comments: [
        { name: 'Yone', content: 'Hi ! Yasuo', avatar: `https://i.pravatar.cc/150?u=yone` },
        { name: 'Yasuo', content: 'Hi ! Yone', avatar: `https://i.pravatar.cc/150?u=yasuo` },
    ]
}

const FakeBookReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            state.comments = [...state.comments, action.userComment];
            return { ...state };
        default:
            return state;
    }
}

export default FakeBookReducer;