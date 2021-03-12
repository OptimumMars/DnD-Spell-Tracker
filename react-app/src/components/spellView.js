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

    const spell = useSelector(state => state.spells.activeSpell)

    const spellArr = Object.entries(spell || [])

    console.log(spellArr)

    return (
        <div className="parchment_paper">
            <h1>this is the specific spell view</h1>
            { spell && (
                <div>
                    <h1>{spell.name}</h1>
                    <p>{spell.description}</p>
                    <p>{spell.damage}</p>
                    <ul>
                        <li>Level: {spell.level}</li>
                        <li>Components: {spell.components}</li>
                        <li>Material: {spell.material}</li>
                        <li>Cast Time:{spell.castTime}</li>
                        <li>Duration: {spell.duration}</li>
                        <li>Range: {spell.range}</li>
                        <li>Concentration: {spell.concentration}</li>
                        <li>Ritual: {spell.ritual}</li>
                    </ul>
                </div>
            )
            }
        </div>
    )
}

export default SpellView;
