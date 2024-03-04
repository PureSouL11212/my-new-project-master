from django.shortcuts import render
from django.http import JsonResponse
from django.apps import apps

from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer




# Create your views here.
def get_data(request, model_name):
    try:
        # Retrieve the model class dynamically based on the provided model_name
        Model = apps.get_model(app_label='bill', model_name=model_name)
        # Retrieve all instances of the dynamically retrieved model
        data = Model.objects.all().values()
        # Return the data as JSON response
        return JsonResponse(list(data), safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)})


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer