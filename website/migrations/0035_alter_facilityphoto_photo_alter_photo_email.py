# Generated by Django 5.0.2 on 2024-03-18 10:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0034_alter_facilityphoto_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facilityphoto',
            name='photo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='website.photo'),
        ),
        migrations.AlterField(
            model_name='photo',
            name='email',
            field=models.CharField(default=6, max_length=50),
        ),
    ]