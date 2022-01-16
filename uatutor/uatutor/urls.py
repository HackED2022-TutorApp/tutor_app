from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include(('api.routers', 'api'), namespace='core-api')),
    path('api/', include('api.urls')),
    path('', include('api.urls'))
]
