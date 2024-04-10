from django.urls import path
from . import views
from api.views import upload

urlpatterns = [
    path('', views.index, name='index'),
    path('folder/<int:fldr_id>', views.folder_view, name='folder'),
    path('upload/', upload, name='upload'),
]