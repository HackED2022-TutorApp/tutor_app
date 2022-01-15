from django.db import models

class Tutor(models.Model):
    FirstName = models.CharField(max_length=30)
    LastName = models.CharField(max_length=20)
    dob = models.DateField()
    description = models.TextField(max_length=150)
    degreeChoices =[
        ('Ba/BSc.', "Bachelors"),
        ('MSc', "Master"),
        ('Phd', 'Doctoral')
    ]
    degree = models.CharField(choices=degreeChoices, max_length=20)
    major = models.CharField(max_length=20, blank=False, null=False)
    minor = models.CharField(max_length=20, blank =True, null=True)
    subject = models.CharField(max_length=20)

class Student(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    date_of_birth = models.DateField()