from django.contrib import admin
from django.urls import path, include
from api import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'tutor', views.TutorView, 'tutor')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include(('api.routers', 'api'), namespace='core-api')),
    path('api/', include(router.urls)),
    path('', include('api.urls'))
]
