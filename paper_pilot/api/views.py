from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import *
from .serializers import *

# Create your views here.
def index(request):
    return HttpResponse("<h1>hi</h1>")

def login_view(request):
    if request.method == "POST":
        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect("/")
        else:
            return HttpResponseRedirect("/api/login")
            
    return render(request, 'frontend/index.html')

def logout_view(request):
    logout(request)
    return HttpResponseRedirect("/")

def get_user(request):
    user = request.user
    serializer = userSerializer(user)

    return JsonResponse(serializer.data)