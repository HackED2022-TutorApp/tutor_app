# Generated by Django 4.0.1 on 2022-01-16 06:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_siteuser_delete_student_delete_tutor'),
    ]

    operations = [
        migrations.RenameField(
            model_name='siteuser',
            old_name='date_of_birth',
            new_name='dob',
        ),
    ]
