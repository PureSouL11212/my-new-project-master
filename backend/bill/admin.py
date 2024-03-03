from django.contrib import admin
# Register your models here.
from .models import Bills,Product
admin.site.register(Bills)
admin.site.register(Product)
