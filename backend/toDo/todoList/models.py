from django.db import models

class ToDoList(models.Model): 
    message = models.CharField(max_length=50)

    def __str__(self):
        return self.message