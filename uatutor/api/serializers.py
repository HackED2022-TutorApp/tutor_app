from rest_framework import serializers
from .models import SiteUser

class SiteUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteUser
        fields = ['id', 'FirstName', 'LastName', 'dob', 'description', 'degree', 'major', 'minor', 'subject']