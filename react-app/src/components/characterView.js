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

    return (
        <div className="parchment_paper">
            <h1>this is the character specific page</h1>
        </div >
    )
}

export default CharacterView
