# Generated by Django 4.2.2 on 2024-02-06 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0009_rename_schedulehours_schedule'),
    ]

    operations = [
        migrations.AddField(
            model_name='page',
            name='text_5',
            field=models.TextField(blank=True),
        ),
    ]
