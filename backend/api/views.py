from django.contrib.auth.models import Group, User
from django.contrib.auth import login, logout, authenticate
from django.middleware.csrf import get_token
from rest_framework import permissions, viewsets, views, status, generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from api.serializers import GroupSerializer, UserSerializer, ScholarshipSerializer, ProgramSerializer
from api.models import Scholarship, Program


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = [AllowAny]  # Allow registration without authentication
    
    def get_permissions(self):
        if self.action == 'create':  # Registration endpoint
            return [AllowAny()]
        return [IsAuthenticated()]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class LoginView(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        
        if user is not None:
            login(request, user)
            # context = {
            #     'detail': 'Successfully logged in',
            #     'user': UserSerializer(user).data
            # }
            # return redirect("http://localhost:5173/", context)
            return Response({
                'detail': 'Successfully logged in',
                'user': UserSerializer(user).data
            }, status=status.HTTP_200_OK)  # Force 200 response
        else:
            return Response(
                {'detail': 'Invalid credentials'},
                status=status.HTTP_401_UNAUTHORIZED
            )

    def get(self, request):
        # Return CSRF token for the frontend
        return Response({'csrfToken': get_token(request)})


class LogoutView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = []
    serializer_class = UserSerializer

    def post(self, request):
        logout(request)
        return Response({'detail': 'Successfully logged out'})


class ScholarshipViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Scholarship.objects.all().order_by('name')
    serializer_class = ScholarshipSerializer
    permission_classes = [permissions.IsAuthenticated]


class ProgramViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Program.objects.all().order_by('name')
    serializer_class = ProgramSerializer
    permission_classes = [permissions.IsAuthenticated]