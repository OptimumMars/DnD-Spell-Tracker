const SET_CHARACTERS = "characters/setCharacters";
const REMOVE_CHARACTERS = "characters/removeCharacters";

const setCharacters = (characters) => {
    return {
        type: SET_CHARACTERS,
        payload: characters,
    };
};

const removeCharacters = () => {
    return {
        type: REMOVE_CHARACTERS,
    };
};

const initialState = {};

export const getCharacters = (userId) => async (dispatch) => {
    const response = await fetch(`/api/characters/${userId}/characters`);
    const characters = await response.json()
    dispatch(setCharacters(characters));
    return characters;
};

export const addCharacter = (characterName, characterRace, characterClass, userId) => async () => {
    const response = await fetch(`/api/characters`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            characterName,
            characterClass,
            characterRace,
            userId,
        }),
    });
    return response.ok;
}

const characterReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_CHARACTERS:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        case REMOVE_CHARACTERS:
            newState = Object.assign({}, state);
            newState.characters = null;
            return newState;
        default:
            return state;
    }
};

export default characterReducer;
