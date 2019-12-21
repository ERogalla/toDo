from rest_framework import serializers
from todoList.models import todoList 

class listSerializer(serializers.ModelSerializer):
    class Meta:
        model = todoList
        fields = ('message')
