from rest_framework import serializers
from .models import Tutor, Student

class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = ['id', 'FirstName', 'LastName', 'dob', 'description', 'degree', 'major', 'minor', 'subject']