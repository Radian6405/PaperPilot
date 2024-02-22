from rest_framework import serializers
from .models import *

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']

class pdfSerializer(serializers.ModelSerializer):
    file_path = serializers.SerializerMethodField('filePath')
    
    def filePath(self, file):
      return file['file']

    class Meta:
        model = Files
        fields = ['name', 'file_path']