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
            dispatch(getCharacters(currentUser.id))
        }
        fetchUserCharacters();
    }, [])

    return (
        <h1>
            This is the character dashboard
        </h1>
    )
}

export default CharacterDashboard;
