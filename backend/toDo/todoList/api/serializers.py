from rest_framework import serializers
from todoList.models import ToDoList 

class listSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoList
        fields = ('__all__')
