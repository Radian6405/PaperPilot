from django.db import models
from django.contrib.auth.models import AbstractUser
import os

# Create your models here.
class User(AbstractUser):
    pass

class Files(models.Model):
    def user_directory_path(instance, filename):
        return 'user_{0}/{1}'.format(instance.user.username, filename)

    name = models.CharField(max_length=20)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Files')
    file = models.FileField(upload_to=user_directory_path)

    def __str__(self):
        return f"{self.name} is in {self.file}"

