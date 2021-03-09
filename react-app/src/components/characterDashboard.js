import React, { useState, useEffect } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { getCharacters, removeCharacter } from "../store/character";
import { useDispatch, useSelector } from "react-redux";

function CharacterDashboard() {
    const dispatch = useDispatch();

    let currentUser = useSelector((state) => state.session.user);

    useEffect(() => {
        async function fetchUserCharacters() {
            if (currentUser === null) {
                return null;
            }
            await dispatch(getCharacters(currentUser.id));
        }
        fetchUserCharacters();
    }, [currentUser])

    const onRemove = (characterId) => async () => {
        await dispatch(removeCharacter(characterId));
    }

    let userCharacters = useSelector((state) => state.characters.characters);

    return (
        <div className="parchment_paper">
            <h1>
                Character Dashboard
            </h1>
            { userCharacters && userCharacters.map(character => (
                <div key={character.id}>
                    <h3>{character.name}</h3>
                    <ul>
                        <li>{character.characterClass}</li>
                        <li>{character.race}</li>
                    </ul>
                    <div>
                        <button>
                            <NavLink to={`/characters/${character.id}`}>Select Character</NavLink>
                        </button>
                    </div>
                    <div>
                        <button onClick={onRemove(character.id)}>Remove Character</button>
                    </div>
                </div>
            ))}
            <button>
                <NavLink to="/characters/new" exact={true}>New Character +</NavLink>
            </button>
        </div>
    )
}

export default CharacterDashboard;
