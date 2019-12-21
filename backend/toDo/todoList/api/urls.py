from django.urls import path
from .views import ListSerializer

urlpatterns = [
    path('', listSerializer.as_view()),
]