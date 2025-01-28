from django.contrib.auth.models import Group, User
from rest_framework import serializers

from api.models import Scholarship, Program


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        return user


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