from app.models import db, SpellSlot


def seed_spellSlots():
    first = SpellSlot(slotLevel=1, exhausted=False, characterId=1)

    db.session.add(first)

    second = SpellSlot(slotLevel=1, exhausted=False, characterId=1)

    db.session.add(second)

    third = SpellSlot(slotLevel=1, exhausted=False, characterId=2)

    db.session.add(third)

    fourth = SpellSlot(slotLevel=1, exhausted=False, characterId=2)

    db.session.add(fourth)

    db.session.commit()


def undo_spellSlots():
    db.session.execute('TRUNCATE spellSlots;')
    db.session.commit()
