from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet


from rest_framework.urlpatterns import format_suffix_patterns
from bill import views

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns=[
    #Latest try to fetch all data
    # path('<str:model_name>/',views.get_data),
    path('', include(router.urls)),
]
# urlpatterns=format_suffix_patterns(urlpatterns)