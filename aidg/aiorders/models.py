from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Order(models.Model):
    buyerName = models.CharField(max_length=100)
    buyerCell = models.CharField(max_length=100)
    buyerAddr = models.CharField(max_length=200)
    owner = models.ForeignKey(
        User, related_name="orders", on_delete=models.CASCADE, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
