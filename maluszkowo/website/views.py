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


def validate_email(email):
    email_validation_url = settings.EMAIL_VALIDATION_URL

    response = requests.get(email_validation_url + "&email=" + email)
    data = response.json()	
    is_valid = is_email_valid(data)
    return is_valid


def is_email_valid(data):
    if data['is_valid_format']['value'] and data['is_mx_found']['value'] and data['is_smtp_valid']['value']:
        if not data['is_catchall_email']['value'] and not data['is_role_email']['value']:
            return True
    return False


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
