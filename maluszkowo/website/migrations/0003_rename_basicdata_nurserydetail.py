# Generated by Django 4.2.2 on 2023-07-08 21:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_basicdata'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='BasicData',
            new_name='NurseryDetail',
        ),
    ]
