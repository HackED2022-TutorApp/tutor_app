# Generated by Django 4.0.1 on 2022-01-16 06:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_date_of_birth_siteuser_dob'),
    ]

    operations = [
        migrations.RenameField(
            model_name='siteuser',
            old_name='first_name',
            new_name='FirstName',
        ),
        migrations.RenameField(
            model_name='siteuser',
            old_name='last_name',
            new_name='LastName',
        ),
    ]