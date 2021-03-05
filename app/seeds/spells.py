from app.models import db, Spell


def seed_spells():
    firebolt = Spell(name="Fire Bolt", level=0, description="You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried. This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
                     range="120 feet", attackType="ranged", damage="Fire - Damage at character level: 1 - 1d10, 5 - 2d10", duration="Instantaneous", components="V,S", concentration=False, castTime="1 action", ritual=False, characterId=1)

    db.session.add(firebolt)

    magicMissile = Spell(name="Magic Missile", level=1, description="You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.",
                         range="120 feet", damage="Force - Damage at slot level: 1 - 1d4 + 1, 2 - 1d4 + 1", duration="Instantaneous", components="V,S", concentration=False, castTime="1 action", ritual=False, characterId=1)

    db.session.add(magicMissile)

    burningHands = Spell(name="Burning Hands", level=1, description="As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
                         range="Self", damage="Fire - Damage at slot level: 1 - 3d6, 2 - 4d6", duration="Instantaneous", components="V,S", concentration=False, castTime="1 action", ritual=False, characterId=2)

    db.session.add(burningHands)

    db.session.commit()


def undo_spells():
    db.session.execute('TRUNCATE spells;')
    db.session.commit()
