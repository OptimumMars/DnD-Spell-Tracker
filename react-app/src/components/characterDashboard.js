import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getCharacters } from "../store/character";
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

    let userCharacters = useSelector((state) => state.characters.characters);

    const newCharacter = async (e) => {
        e.preventDefault();
        return <Redirect to="/" />;
    }

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
                    <form>
                        <button>Select Character</button>
                    </form>
                    <form>
                        <button>Remove Character</button>
                    </form>
                </div>
            ))}
            <form onSubmit={newCharacter}>
                <button type="submit">New Character +</button>
            </form>
        </div>
    )
}

export default CharacterDashboard;
