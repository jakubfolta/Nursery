# Generated by Django 5.0.2 on 2024-03-18 07:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0019_remove_facilityphoto_facility'),
    ]

    operations = [
        migrations.AddField(
            model_name='facilityphoto',
            name='facility',
            field=models.CharField(default=None, max_length=50, null=True),
        ),
    ]
