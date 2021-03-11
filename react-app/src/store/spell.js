const SET_ACTIVE_SPELL = "spell/setActiveSpell";

const setActiveCharacter = (spell) => {
    return {
        type: SET_ACTIVE_SPELL,
        payload: spell
    };
};

const initialState = { activeSpell: null };

export const getActiveSpell = (spellId) => async (dispatch) => {
    const response = await fetch(`/api/spells/${spellId}`);
    const spell = await response.json();
    dispatch(setActiveCharacter(spell));
    return spell;
}

const spellReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_ACTIVE_SPELL:
            newState = Object.assign({}, state);
            newState = { ...state, activeSpell: action.payload };
            return newState;
        default:
            return state;
    }
};

export default spellReducer;
