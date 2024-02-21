"""maluszkowo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from website import views
from website.views import *
from .views import index
from django.urls import re_path

router = routers.DefaultRouter()
router.register(r'website', views.PageView, 'website')

frontendurls = [
  re_path(r".*", index),
  # path('o-nas', index)
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('send-message', EmailAPI.as_view()),
    path('', include(frontendurls)),
    
]