from django.contrib import admin
from .models import Page, Review, NavigationItem, NurseryDetail, Schedule, Photo, FacilityPhoto
from website import custom_admin

def check_limit(actual_count, limit):
  if actual_count >= limit:
    return False
  else:
    return True

class PageAdmin(custom_admin.BaseAdmin):
  list_display = ('description', 'heading_1')
  readonly_fields = ('description',)

  def has_add_permission(self, request):
    num_objects = self.model.objects.count()
    return check_limit(num_objects, 6)

# class ReviewAdmin(admin.ModelAdmin):
#   list_display = ('author', 'rating', 'date', 'is_main_page_review')
#   readonly_fields = ('date',)
#   list_filter = ('rating',)

class NavigationItemAdmin(custom_admin.BaseAdmin):
  list_display = ('title', 'order', 'slug')
  exclude = ('slug',)
  ordering = ('order',)
  readonly_fields = ('title',)

  def has_add_permission(self, request):
    num_objects = self.model.objects.count()
    return check_limit(num_objects, 6)

class NurseryDetailAdmin(custom_admin.BaseAdmin):
  list_display = ('address', 'phone', 'email', 'facebook_link', 'year')

  def has_add_permission(self, request):
    return False

class ScheduleAdmin(custom_admin.BaseAdmin):
  list_display = ('facility',)
  readonly_fields = ('facility',)

  def has_add_permission(self, request):
    return False

class FacilityPhotoAdmin(admin.StackedInline):
  model = FacilityPhoto

class PhotoAdmin(custom_admin.BaseAdmin):
  inlines = [FacilityPhotoAdmin]
  list_display = ('facility',)
  readonly_fields = ('facility',)

  class Meta:
    model = Photo

  def has_add_permission(self, request):
    return False

class FacilityPhotoAdmin(custom_admin.BaseAdmin):
  pass

# admin.site.register(Review, ReviewAdmin)
admin.site.register(Page, PageAdmin)
admin.site.register(NavigationItem, NavigationItemAdmin)
admin.site.register(NurseryDetail, NurseryDetailAdmin)
admin.site.register(Schedule, ScheduleAdmin)
admin.site.register(Photo, PhotoAdmin)