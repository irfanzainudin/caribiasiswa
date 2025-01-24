from django.db import models


class Scholarship(models.Model):
    name = models.CharField(max_length=100)
    provider = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    only_for_certain_programs = models.BooleanField(default=True)
    
    # Meta data
    created = models.DateTimeField(auto_created=True, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class Program(models.Model):
    name = models.CharField(max_length=100)
    scholarship = models.ForeignKey(to=Scholarship, on_delete=models.DO_NOTHING, related_name="qualifying_programs")