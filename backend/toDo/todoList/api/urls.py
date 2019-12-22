from django.urls import path
from .views import messageListView, postMessageView 

urlpatterns = [
    path('', messageListView.as_view()),
    path('create/', postMessageView.as_view()),
]