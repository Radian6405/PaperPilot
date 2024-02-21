from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class Files(models.Model):
    name = models.CharField(max_length=20)
    file = models.FileField(upload_to='user_files/')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Files')

    def __str__(self):
        return f"{self.name} is in {self.file}"