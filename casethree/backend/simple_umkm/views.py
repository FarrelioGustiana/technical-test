from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate

@api_view(['GET'])
def api_ready(request):
    return Response({'message': 'api is ready'})


