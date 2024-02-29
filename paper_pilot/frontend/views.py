from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')

def folder_view(request, fldr_id):
    return render(request, 'frontend/index.html')
