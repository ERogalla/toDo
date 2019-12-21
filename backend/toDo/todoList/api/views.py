from rest_framework.generics import ListAPIView
from todoList.models import ToDoList
from .serializers import listSerializer

class messageListView(ListAPIView):
    queryset = ToDoList.objects.all()
    serializer_class = listSerializer
