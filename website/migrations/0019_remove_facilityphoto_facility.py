# Generated by Django 5.0.2 on 2024-03-18 07:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0018_alter_facilityphoto_facility'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='facilityphoto',
            name='facility',
        ),
    ]
