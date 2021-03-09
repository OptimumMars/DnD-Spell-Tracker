from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    characters = db.relationship('Character', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email
        }


class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    race = db.Column(db.String(20), nullable=False)
    characterClass = db.Column(db.String(20), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('User', lazy="joined", back_populates='characters')
    spells = db.relationship('Spell', back_populates='character')
    spellSlots = db.relationship('SpellSlot', back_populates='character')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "race": self.race,
            "characterClass": self.characterClass,
            "userId": self.userId,
        }


class Spell(db.Model):
    __tablename__ = 'spells'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    level = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(600), nullable=False)
    range = db.Column(db.String(30))
    attackType = db.Column(db.String(25))
    damage = db.Column(db.String(300), nullable=False)
    duration = db.Column(db.String(30), nullable=False)
    components = db.Column(db.String(20), nullable=False)
    material = db.Column(db.String(30))
    concentration = db.Column(db.Boolean, nullable=False)
    castTime = db.Column(db.String(50), nullable=False)
    ritual = db.Column(db.Boolean, nullable=False)
    characterId = db.Column(db.Integer, db.ForeignKey('characters.id'))

    character = db.relationship(
        'Character', lazy='joined', back_populates='spells')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "level": self.level,
            "description": self.description,
            "range": self.range,
            "attackType": self.attackType,
            "damage": self.damage,
            "duration": self.duration,
            "components": self.components,
            "material": self.material,
            "concentration": self.concentration,
            "castTime": self.castTime,
            "ritual": self.ritual,
            "characterId": self.characterId,
        }


class SpellSlot(db.Model):
    __tablename__ = 'spellSlots'

    id = db.Column(db.Integer, primary_key=True)
    slotLevel = db.Column(db.Integer, nullable=False)
    exhausted = db.Column(db.Boolean, nullable=False, default=False)
    characterId = db.Column(db.Integer, db.ForeignKey('characters.id'))

    character = db.relationship(
        'Character', lazy='joined', back_populates='spellSlots')

    def to_dict(self):
        return {
            "id": self.id,
            "slotLevel": self.slotLevel,
            "exhausted": self.exhausted,
            "characterId": self.characterId,
        }
