from flask.cli import AppGroup
from .users import seed_users, undo_users
from .characters import seed_characters, undo_characters
from .spells import seed_spells, undo_spells
from .spellSlots import seed_spellSlots, undo_spellSlots

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_characters()
    seed_spells()
    seed_spellSlots()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_spells()
    undo_spellSlots()
    undo_characters()
    undo_users()

    # Add other undo functions here
