# Generated by Django 5.0.2 on 2024-03-18 10:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0036_photo_images'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='photo',
            name='email',
        ),
        migrations.RemoveField(
            model_name='photo',
            name='images',
        ),
    ]
