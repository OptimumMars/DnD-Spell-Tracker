import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    }, [])

    let userCharacters = useSelector((state) => state.characters.characters);

    console.log(userCharacters)

    if (userCharacters) {
        const characterComponents = userCharacters.map((character) => {
            return (
                <div>
                    <h3>{character.name}</h3>
                    <ul>
                        <li>{character.characterClass}</li>
                        <li>{character.race}</li>
                    </ul>
                </div>
            );
        })
    };

    return (
        <>
            <h1>
                Character Dashboard
            </h1>
            {/* <div>
                {characterComponents}
            </div> */}
        </>
    )
}

export default CharacterDashboard;
