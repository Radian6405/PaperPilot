import json

from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.db import IntegrityError
from .models import *
from .serializers import *

#api call handeling
def get_user(request):
    user = request.user
    serializer = userSerializer(user)

    return JsonResponse(serializer.data)

def get_pdfs(request):
    currentUser = request.user
    fileList = currentUser.Files.all().values()
    serializer = pdfSerializer(fileList, many=True)

    return JsonResponse(serializer.data, safe=False)

def get_folders(request):
    currentUser = request.user
    folderList = currentUser.Folders.all().values()
    serializer = folderSerializer(folderList, many=True)

    return JsonResponse(serializer.data, safe=False)

def access_folder(request, fldr_id):
    folder = Folders.objects.get(pk=fldr_id)
    if (folder.user == request.user):
        fileList = folder.Files.all().values()
        serializer = pdfSerializer(fileList, many=True)

        return JsonResponse(serializer.data, safe=False)

def delete(request):
    if request.method == "POST":
        data = json.loads(request.body)
        filetype = data["datatype"]
        filedata = data["data"]

        if filetype == "file":
            file = Files.objects.get(id=filedata["id"])
            file.delete()
        if filetype == "folder":
            file = Folders.objects.get(id=filedata["id"])
            file.delete()
            
            
        
    return HttpResponseRedirect("/")



# user authentication views
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
    if request.method == "POST":
        logout(request)
    return HttpResponseRedirect("/")

def register_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]

        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return HttpResponseRedirect("/api/login/")
        login(request, user)
        return HttpResponseRedirect("/upload/")

    return render(request, 'frontend/index.html')

@login_required(login_url='/api/login')
def upload(request):
    if request.method == "POST":
        name = request.POST.get("name")
        file = request.FILES.get("file")

        f = Files(name=name, file=file, user=request.user)
        f.save()
        return HttpResponseRedirect("/")
    return render(request, 'frontend/index.html')