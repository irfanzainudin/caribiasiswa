from django.contrib.auth.models import Group, User
from rest_framework import serializers

from api.models import Scholarship, Program


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class ScholarshipSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Scholarship
        fields = ['name', 'provider', 'description', 'start_date', 'end_date', 'only_for_certain_programs']


class ProgramSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Program
        fields = ['name', 'scholarship']