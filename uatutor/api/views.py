from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TutorSerializer
from .models import Tutor
from django.http import HttpResponse

# Create your views here.

def main(request):
    return HttpResponse("<h1>Hello</h1>")

class TutorView(viewsets.ModelViewSet):
    serializer_class = TutorSerializer
    queryset = Tutor.objects.all()