from flask import Blueprint, jsonify
from app.models import User, Character, Spell, SpellSlot, db
from flask_login import login_required

character_routes = Blueprint("/:userId/characters", __name__)


@character_routes.route("/<int:userId>/characters")
@login_required
def character_select(userId):
    characters = Character.query.filter(Character.userId == userId).all()

    return {"characters": [character.to_dict() for character in characters]}
