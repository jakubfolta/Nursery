from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PageSerializer, NavigationItemSerializer, ReviewSerializer
from .models import Page, NavigationItem, Review

from drf_multiple_model.views import ObjectMultipleModelAPIView

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
  ]