# Generated by Django 5.0.2 on 2024-03-18 08:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0029_alter_facilityphoto_facility'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facilityphoto',
            name='facility',
            field=models.CharField(blank=True, default=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='website.photo'), max_length=50),
        ),
    ]