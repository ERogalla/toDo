from rest_framework.generics import ListAPIView
from todoList.models import ToDoList
from .serializers import listSerializer

class messageListView(ListAPIView):
    serializer_class = listSerializer
    queryset = ToDoList.objects.all()
