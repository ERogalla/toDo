from django.urls import path
from .views import messageListView

urlpatterns = [
    path('', messageListView.as_view()),
]