from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from bill import views
urlpatterns=[
    #Latest try to fetch all data
    path('<str:model_name>/',views.get_data),
]
urlpatterns=format_suffix_patterns(urlpatterns)