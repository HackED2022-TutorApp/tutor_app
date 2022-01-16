from statistics import mode
from django.db import models

# class Tutor(models.Model):
#     FirstName = models.CharField(max_length=30)
#     LastName = models.CharField(max_length=20)
#     dob = models.DateField()
#     description = models.TextField(max_length=150)
#     degreeChoices =[
#         ('Ba/BSc.', "Bachelors"),
#         ('MSc', "Master"),
#         ('Phd', 'Doctoral')
#     ]

#     majorChoices =[ 
#         ('Software Engineering', 'SWE'),
#         ('Aerospace Engineering', 'AEE'),
#         ('Mechanical Engineering', 'MecE'),
#         ('Chemical Engineering', 'ChE'),
#         ('Civil Engineering', 'CivE'),
#         ('Computer Engineering (Hardware)', 'CompE'),
#         ('Environmental Engineering', 'EnvE'),
#         ('Arts', 'ART'),
#         ('Political Sciences', 'PolS'),
#         ('Education', 'EDu'),
#         ('Chemistry', 'CHEM'),
#         ('Biology', 'BIOL'),
#         ('Agriculture', 'AGRI'),
#         ('Economics', 'ECON'),
#         ('Finance', 'FIN'),
#         ('Marketing', 'MARK'),
#         ('Accounting', 'ACCT'),
#         ('Native Studies', 'NATV'),
#         ('Kinesiology', 'KINE'),
#         ('Medicine', 'MED'),
#         ('Pharmacy', 'PHARM'),
#         ('Human Ecology', 'HECOL'),
#         ('Mathematics', 'MATH')
#     ]

#     degree = models.CharField(choices=degreeChoices, max_length=20)
#     major = models.CharField(choices=majorChoices, max_length=31)
#     minor = models.CharField(max_length=20, blank =True, null=True)
#     subject = models.CharField(max_length=20)

# class Student(models.Model):
#     first_name = models.CharField(max_length=20)
#     last_name = models.CharField(max_length=20)
#     date_of_birth = models.DateField()


class SiteUser(models.Model):
    FirstName = models.CharField(max_length=20)
    LastName = models.CharField(max_length=20)
    dob = models.DateField()

    description = models.TextField(max_length=150)
    degreeChoices =[
        ('Ba/BSc.', "Bachelors"),
        ('MSc', "Master"),
        ('Phd', 'Doctoral')
    ]

    majorChoices =[ 
        ('Software Engineering', 'SWE'),
        ('Aerospace Engineering', 'AEE'),
        ('Mechanical Engineering', 'MecE'),
        ('Chemical Engineering', 'ChE'),
        ('Civil Engineering', 'CivE'),
        ('Computer Engineering (Hardware)', 'CompE'),
        ('Environmental Engineering', 'EnvE'),
        ('Arts', 'ART'),
        ('Political Sciences', 'PolS'),
        ('Education', 'EDu'),
        ('Chemistry', 'CHEM'),
        ('Biology', 'BIOL'),
        ('Agriculture', 'AGRI'),
        ('Economics', 'ECON'),
        ('Finance', 'FIN'),
        ('Marketing', 'MARK'),
        ('Accounting', 'ACCT'),
        ('Native Studies', 'NATV'),
        ('Kinesiology', 'KINE'),
        ('Medicine', 'MED'),
        ('Pharmacy', 'PHARM'),
        ('Human Ecology', 'HECOL'),
        ('Mathematics', 'MATH')
    ]

    degree = models.CharField(choices=degreeChoices, max_length=20)
    major = models.CharField(choices=majorChoices, max_length=31)
    minor = models.CharField(max_length=20, blank =True, null=True)
    subject = models.CharField(max_length=20)
    tutor = models.BooleanField(default=False)
