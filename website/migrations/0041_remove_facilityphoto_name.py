# Generated by Django 5.0.2 on 2024-03-19 11:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0040_rename_images_facilityphoto_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='facilityphoto',
            name='name',
        ),
    ]