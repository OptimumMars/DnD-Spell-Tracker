"""empty message

Revision ID: 72c0007f6153
Revises: 2ae1d7f321b7
Create Date: 2021-03-05 13:46:42.452550

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '72c0007f6153'
down_revision = '2ae1d7f321b7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('spells', 'attackType',
               existing_type=sa.VARCHAR(length=20),
               type_=sa.String(length=25),
               existing_nullable=True)
    op.alter_column('spells', 'damage',
               existing_type=sa.VARCHAR(length=250),
               type_=sa.String(length=300),
               existing_nullable=False)
    op.alter_column('spells', 'description',
               existing_type=sa.VARCHAR(length=250),
               type_=sa.String(length=600),
               existing_nullable=False)
    op.alter_column('spells', 'name',
               existing_type=sa.VARCHAR(length=30),
               type_=sa.String(length=40),
               existing_nullable=False)
    op.alter_column('spells', 'range',
               existing_type=sa.VARCHAR(length=20),
               type_=sa.String(length=30),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('spells', 'range',
               existing_type=sa.String(length=30),
               type_=sa.VARCHAR(length=20),
               existing_nullable=True)
    op.alter_column('spells', 'name',
               existing_type=sa.String(length=40),
               type_=sa.VARCHAR(length=30),
               existing_nullable=False)
    op.alter_column('spells', 'description',
               existing_type=sa.String(length=600),
               type_=sa.VARCHAR(length=250),
               existing_nullable=False)
    op.alter_column('spells', 'damage',
               existing_type=sa.String(length=300),
               type_=sa.VARCHAR(length=250),
               existing_nullable=False)
    op.alter_column('spells', 'attackType',
               existing_type=sa.String(length=25),
               type_=sa.VARCHAR(length=20),
               existing_nullable=True)
    # ### end Alembic commands ###
