from app.models import db, Character


def seed_characters():
    happy = Character(name='Happy', race='Tiefling',
                      characterClass='Sorcerer', userId=1)

    db.session.add(happy)

    lucas = Character(name='Lucas', race='Half Elf',
                      characterClass='Wizard', userId=1)

    db.session.add(lucas)

    db.session.commit()


def undo_characters():
    db.session.execute('TRUNCATE characters;')
    db.session.commit()
