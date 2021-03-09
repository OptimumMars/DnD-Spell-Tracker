import React, { useState, useEffect } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { getActiveCharacter } from "../store/character";
import { useDispatch, useSelector } from "react-redux";

const CharacterView = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.session.user)

    const { characterId } = useParams()

    useEffect(() => {
        async function fetchActiveCharacter() {

            await dispatch(getActiveCharacter(characterId));
        }
        fetchActiveCharacter();
    }, [characterId])

    const activeCharacter = useSelector(state => state.characters.activeCharacter)

    console.log(activeCharacter)

    return (
        <div className="parchment_paper">
            <h1>this is the character specific page</h1>
            { activeCharacter &&
                <div>
                    <h3>{activeCharacter.activeCharacter.name}</h3>
                    {activeCharacter.characterSpells && activeCharacter.characterSpells.map(spell => (
                        <div>
                            <h5>{spell.name}</h5>
                            <ul>
                                <li>{spell.level}</li>
                                <li>{spell.description}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            }
        </div >
    )
}

export default CharacterView
