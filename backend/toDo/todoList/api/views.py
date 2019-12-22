from rest_framework.generics import ListAPIView, CreateAPIView
from todoList.models import ToDoList
from .serializers import listSerializer

class messageListView(ListAPIView):
    serializer_class = listSerializer
    queryset = ToDoList.objects.all()

class postMessageView(CreateAPIView):
    serializer_class = listSerializer
    queryset = ToDoList.objects.all()
