# Generated by Django 5.0.2 on 2024-03-18 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0014_remove_photo_images'),
    ]

    operations = [
        migrations.AddField(
            model_name='facilityphoto',
            name='name',
            field=models.CharField(default='photo', max_length=50),
        ),
        migrations.AlterField(
            model_name='facilityphoto',
            name='images',
            field=models.ImageField(upload_to=''),
        ),
    ]
