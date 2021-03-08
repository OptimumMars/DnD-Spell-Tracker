from flask import Blueprint, jsonify, request
from app.models import User, Character, Spell, SpellSlot, db
from flask_login import login_required, current_user
from app.forms import NewCharacterForm

character_routes = Blueprint("characters", __name__)


@character_routes.route("/<int:userId>/characters")
@login_required
def character_select(userId):
    characters = Character.query.filter(
        Character.userId == userId).all()

    return {"characters": [character.to_dict() for character in characters]}


@character_routes.route("", methods=['POST'])
@login_required
def new_character():
    print("Backend route hit")
    form = NewCharacterForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        character = Character(
            name=form.data['characterName'],
            race=form.data['characterRace'],
            characterClass=form.data['characterClass'],
            userId=current_user.id
        )
        db.session.add(character)
        db.session.commit()
        return character.to_dict()
    return {"errors": "bad data"}
