
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('aiorderfrontend.urls')),
    path('', include('aiorders.urls')),
    path('admin/', admin.site.urls),
]
