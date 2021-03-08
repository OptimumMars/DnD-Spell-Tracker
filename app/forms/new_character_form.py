from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class NewCharacterForm(FlaskForm):
    characterName = StringField('characterName', validators=[DataRequired()])
    characterRace = StringField('characterRace', validators=[DataRequired()])
    characterClass = StringField('characterClass', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
