import React, { useState, useEffect } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { getActiveSpell } from "../store/spell";
import { useDispatch, useSelector } from "react-redux";

const SpellView = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.session.user)

    const { spellId } = useParams()

    useEffect(() => {
        async function fetchActiveSpell() {

            await dispatch(getActiveSpell(spellId));
        }
        fetchActiveSpell();
    }, [spellId])

    return (
        <h1>this is the specific spell view</h1>
    )
}

export default SpellView;
