import React, { useState, useEffect } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter } from "../store/character";

const NewCharacterForm = () => {
    const [characterName, setName] = useState("");
    const [characterRace, setRace] = useState("");
    const [characterClass, setClass] = useState("");

    const dispatch = useDispatch();

    const history = useHistory();

    const currentUser = useSelector(state => state.session.user)

    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addCharacter(characterName, characterRace, characterClass, currentUser.id));
        history.push('/characters');
    }

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateRace = (e) => {
        setRace(e.target.value);
    }

    const updateClass = (e) => {
        setClass(e.target.value);
    }

    return (
        <div className="parchment_paper">
            <h1>Add a New Character</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Character Name:</label>
                    <input
                        type="text"
                        name="characterName"
                        onChange={updateName}
                        value={characterName}></input>
                </div>
                <div>
                    <label>Character Race:</label>
                    <input
                        type="text"
                        name="characterRace"
                        onChange={updateRace}
                        value={characterRace}></input>
                </div>
                <div>
                    <label>Character Class:</label>
                    <input
                        type="text"
                        name="characterClass"
                        onChange={updateClass}
                        value={characterClass}></input>
                </div>
                <button type="submit">Add Character!</button>
            </form>
        </div >
    )
}

export default NewCharacterForm;
