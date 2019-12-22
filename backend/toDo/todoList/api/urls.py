from django.urls import path
from .views import messageListView, postMessageView, removeMessageView

urlpatterns = [
    path('', messageListView.as_view()),
    path('create/', postMessageView.as_view()),
    path('<pk>/delete/', removeMessageView.as_view()),
]