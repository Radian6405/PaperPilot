from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register_view, name='register'),

    #api calls to change data
    path('delete/', views.delete, name='delete'),
    path('createfolder/', views.create_folder, name='createfolder'),
    path('changefolder/', views.change_folder, name='changefolder'),

    #api calls to send data
    path('getuser/', views.get_user, name='getuser'),
    path('getpdfs/', views.get_pdfs, name='getpdfs'),
    path('getfolders/', views.get_folders, name='getfolders'),
    path('folder/<int:fldr_id>', views.access_folder, name='accessfolders'),

]