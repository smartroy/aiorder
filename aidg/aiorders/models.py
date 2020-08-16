from django.db import models

# Create your models here.
class Order(models.Model):
    buyerName = models.CharField(max_length=100)
    buyerCell = models.CharField(max_length=100)
    buyerAddr = models.CharField(max_length=200)
    create_at = models.DateTimeField(auto_now_add=True)
    
