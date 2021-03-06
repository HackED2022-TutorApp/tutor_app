# Generated by Django 4.0.1 on 2022-01-16 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tutor',
            name='major',
            field=models.CharField(choices=[('Software Engineering', 'SWE'), ('Aerospace Engineering', 'AEE'), ('Mechanical Engineering', 'MecE'), ('Chemical Engineering', 'ChE'), ('Civil Engineering', 'CivE'), ('Computer Engineering (Hardware)', 'CompE'), ('Environmental Engineering', 'EnvE'), ('Arts', 'ART'), ('Political Sciences', 'PolS'), ('Education', 'EDu'), ('Chemistry', 'CHEM'), ('Biology', 'BIOL'), ('Agriculture', 'AGRI'), ('Economics', 'ECON'), ('Finance', 'FIN'), ('Marketing', 'MARK'), ('Accounting', 'ACCT'), ('Native Studies', 'NATV'), ('Kinesiology', 'KINE'), ('Medicine', 'MED'), ('Pharmacy', 'PHARM'), ('Human Ecology', 'HECOL'), ('Mathematics', 'MATH')], max_length=31),
        ),
    ]
