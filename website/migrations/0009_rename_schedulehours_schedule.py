# Generated by Django 4.2.2 on 2024-02-05 10:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0008_schedulehours'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ScheduleHours',
            new_name='Schedule',
        ),
    ]