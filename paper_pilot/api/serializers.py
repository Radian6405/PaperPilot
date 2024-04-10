from rest_framework import serializers
from .models import *

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class pdfSerializer(serializers.ModelSerializer):
    file_path = serializers.SerializerMethodField('filePath')
    
    def filePath(self, file):
      return file['file']

    class Meta:
        model = Files
        fields = ['id', 'name', 'file_path']

class folderSerializer(serializers.ModelSerializer):
    class Meta:
      model = Folders
      fields = ['id', 'name']