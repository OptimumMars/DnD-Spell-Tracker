"""empty message

Revision ID: 432bd67acb38
Revises: ffdc0a98111c
Create Date: 2021-03-03 13:27:44.705126

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '432bd67acb38'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('characters',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('race', sa.String(length=20), nullable=False),
    sa.Column('characterClass', sa.String(length=20), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spellSlots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('slotLevel', sa.Integer(), nullable=False),
    sa.Column('exhausted', sa.Boolean(), nullable=False),
    sa.Column('characterId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['characterId'], ['characters.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spells',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=False),
    sa.Column('level', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=250), nullable=False),
    sa.Column('range', sa.String(length=20), nullable=False),
    sa.Column('attackType', sa.String(length=20), nullable=False),
    sa.Column('damage', sa.String(length=250), nullable=False),
    sa.Column('duration', sa.String(length=30), nullable=False),
    sa.Column('components', sa.String(length=20), nullable=False),
    sa.Column('material', sa.String(length=30), nullable=False),
    sa.Column('concentration', sa.Boolean(), nullable=False),
    sa.Column('castTime', sa.String(length=50), nullable=False),
    sa.Column('ritual', sa.Boolean(), nullable=False),
    sa.Column('characterId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['characterId'], ['characters.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('spells')
    op.drop_table('spellSlots')
    op.drop_table('characters')
    # ### end Alembic commands ###
