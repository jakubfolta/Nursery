# Generated by Django 4.2.2 on 2023-07-08 21:46

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BasicData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=20, validators=[django.core.validators.MinLengthValidator(9, message='Minimalna ilość znaków to 9.')])),
                ('email', models.CharField(max_length=100)),
                ('facebook_link', models.CharField(max_length=100)),
                ('year', models.IntegerField()),
            ],
        ),
    ]
