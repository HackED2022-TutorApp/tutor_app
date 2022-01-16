from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SiteUserSerializer
from .models import SiteUser
from django.http import HttpResponse

# Create your views here.

def main(request):
    return HttpResponse("<h1>Hello</h1>")

class SiteUserView(viewsets.ModelViewSet):
    serializer_class = SiteUserSerializer
    queryset = SiteUser.objects.all()