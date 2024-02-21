from django.urls import path
from . import views
from api.views import upload

urlpatterns = [
    path('', views.index, name='index'),
    path('upload/', upload, name='upload'),
]