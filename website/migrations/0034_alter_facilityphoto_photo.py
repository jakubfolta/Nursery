# Generated by Django 5.0.2 on 2024-03-18 10:01

import django.db.models.deletion
import website.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0033_photo_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facilityphoto',
            name='photo',
            field=models.ForeignKey(default=website.models.Photo, on_delete=django.db.models.deletion.CASCADE, to='website.photo'),
        ),
    ]
