from rest_framework import serializers
from .models import Page, NavigationItem, Review, NurseryDetail

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('description', 'heading_1', 'text_1', 'heading_2', 'text_2', 'heading_3', 'text_3')

class NavigationItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavigationItem
        fields = ('title', 'order', 'slug')

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('author', 'review', 'rating', 'is_main_page_review', 'date')

class NurseryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = NurseryDetail
        fields = ('address', 'phone', 'email', 'facebook_link', 'year')