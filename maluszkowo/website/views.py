from django.shortcuts import render
from django.template import loader
from rest_framework import viewsets, status
from .serializers import PageSerializer, NavigationItemSerializer, ReviewSerializer, NurseryDetailSerializer
from .models import Page, NavigationItem, Review, NurseryDetail
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework.views import APIView
from django.conf import settings
from django.core.mail import send_mail
from rest_framework.response import Response
import requests

# Create your views here.

class PageView(ObjectMultipleModelAPIView, viewsets.ModelViewSet):
    serializer_class = PageSerializer
    querylist = [
        {
            'queryset': Page.objects.all(),
            'serializer_class': PageSerializer,
            'label': 'pages'
        },
        {
            'queryset': NavigationItem.objects.all(),
            'serializer_class': NavigationItemSerializer,
            'label': 'navigation_items'
        },
        {
            'queryset': Review.objects.all(),
            'serializer_class': ReviewSerializer,
            'label': 'reviews'
        },
        {
            'queryset': NurseryDetail.objects.all(),
            'serializer_class': NurseryDetailSerializer,
            'label': 'nursery_details'
        },
    ]

class EmailAPI(APIView):
    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')
        
        html_message = loader.render_to_string(
            'email_template.html',
            {
                'name': name,
                'email': email,
                'message': message                    
            }
        )

        try:
            send_mail(
                subject = "Wiadomość do Maluszkowo...",
                message = message,
                from_email = settings.EMAIL_HOST_USER,
                recipient_list = [settings.RECIPIENT_ADDRESS],
                html_message=html_message,
                fail_silently=False,
            )
            result = {
                "status": status.HTTP_200_OK,
                "message": "success"
            }
            return Response(result)
        except:
            raise
