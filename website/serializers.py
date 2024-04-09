from rest_framework import serializers
from .models import Page, NavigationItem, NurseryDetail, Schedule, Photo, FacilityPhoto

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('description',
          'heading_1',
          'text_1',
          'heading_2',
          'text_2',
          'heading_3',
          'text_3',
          'heading_4',
          'text_4',
          'heading_5',
          'text_5',
          'list_item_heading_1',
          'list_item_description_1',
          'list_item_heading_2',
          'list_item_description_2',
          'list_item_heading_3',
          'list_item_description_3',
          'list_item_heading_4',
          'list_item_description_4',
          'list_item_heading_5',
          'list_item_description_5',
          'list_item_heading_6',
          'list_item_description_6',
          'list_item_heading_7',
          'list_item_description_7',
          'list_item_heading_8',
          'list_item_description_8',
        )

class NavigationItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavigationItem
        fields = ('title',
          'order',
          'slug'
        )

# class ReviewSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Review
#         fields = ('author',
#           'review',
#           'rating',
#           'is_main_page_review',
#           'date'
#         )

class NurseryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = NurseryDetail
        fields = ('address',
          'phone',
          'email',
          'facebook_link',
          'year'
        )

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ('facility',
          'list_item_heading_1',
          'list_item_description_1',
          'list_item_heading_2',
          'list_item_description_2',
          'list_item_heading_3',
          'list_item_description_3',
          'list_item_heading_4',
          'list_item_description_4',
          'list_item_heading_5',
          'list_item_description_5',
          'list_item_heading_6',
          'list_item_description_6',
          'list_item_heading_7',
          'list_item_description_7',
          'list_item_heading_8',
          'list_item_description_8',
          'list_item_heading_9',
          'list_item_description_9',
          'list_item_heading_10',
          'list_item_description_10',
          'list_item_heading_11',
          'list_item_description_11',
          'list_item_heading_12',
          'list_item_description_12',
          'list_item_heading_13',
          'list_item_description_13',
          'list_item_heading_14',
          'list_item_description_14',
          'list_item_heading_15',
          'list_item_description_15'
        )

class FacilityPhotoSerializer(serializers.ModelSerializer):
    facility = serializers.ReadOnlyField(source='photo.facility')
    url = serializers.ImageField(source='image')

    class Meta:
        model = FacilityPhoto
        fields = ('facility', 'url')