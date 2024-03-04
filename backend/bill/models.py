from django.db import models

# Create your models here.
class Bills(models.Model):
    Bill_Number=models.CharField(max_length=5)
    Amount=models.IntegerField()
    def __str__(self):
        return f"{self.Amount}"
    
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    
