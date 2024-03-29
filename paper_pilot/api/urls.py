from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register_view, name='register'),

    #api calls
    path('getuser/', views.get_user, name='getuser'),
    path('getpdfs/', views.get_pdfs, name='getpdfs')

]