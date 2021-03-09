const SET_CHARACTERS = "characters/setCharacters";
const SET_ACTIVE_CHARACTER = "character/setActiveCharacter";
const REMOVE_CHARACTERS = "characters/removeCharacters";

const setCharacters = (characters) => {
    return {
        type: SET_CHARACTERS,
        payload: characters,
    };
};

const setActiveCharacter = (character) => {
    return {
        type: SET_ACTIVE_CHARACTER,
        payload: character
    };
};

// const removeCharacters = () => {
//     return {
//         type: REMOVE_CHARACTERS,
//     };
// };

const initialState = { characters: null, activeCharacter: null };

export const getCharacters = (userId) => async (dispatch) => {
    const response = await fetch(`/api/characters/${userId}/characters`);
    const characters = await response.json()
    dispatch(setCharacters(characters.characters));
    return characters;
};

export const getActiveCharacter = (characterId) => async (dispatch) => {
    const response = await fetch(`/api/characters/${characterId}`);
    const character = await response.json();
    dispatch(setActiveCharacter(character));
    return character;
}

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

export const removeCharacter = (characterId) => async (dispatch) => {
    const response = await fetch(`/api/characters/${characterId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const characters = await response.json();
    dispatch(setCharacters(characters.characters))
}

const characterReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_CHARACTERS:
            newState = Object.assign({}, state);
            newState = { ...state, characters: action.payload };
            return newState;
        case SET_ACTIVE_CHARACTER:
            newState = Object.assign({}, state);
            newState = { ...state, activeCharacter: action.payload };
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
