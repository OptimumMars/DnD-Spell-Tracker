from flask import Blueprint, jsonify, request
from app.models import User, Character, Spell, SpellSlot, db
from flask_login import login_required, current_user

spell_routes = Blueprint("spells", __name__)


@spell_routes.route("/<int:spellId>")
@login_required
def getSpell(spellId):
    spell = Spell.query.get(spellId)

    return spell.to_dict()
