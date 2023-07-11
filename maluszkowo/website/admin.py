from django.contrib import admin
from .models import Page, Review, NavigationItem, NurseryDetail
from website import custom_admin

def check_limit(actual_count, limit):
  if actual_count >= limit:
    return False
  else:
    return True

class PageAdmin(custom_admin.BaseAdmin):
  list_display = ('description',)

  def has_add_permission(self, request):
    num_objects = self.model.objects.count()
    return check_limit(num_objects, 5)

class ReviewAdmin(admin.ModelAdmin):
  list_display = ('author', 'rating', 'date', 'is_main_page_review')
  readonly_fields = ('date',)
  list_filter = ('rating',)

class NavigationItemAdmin(admin.ModelAdmin):
  list_display = ('title', 'order', 'slug')
  exclude = ('slug',)
  ordering = ('order',)

class NurseryDetailAdmin(custom_admin.BaseAdmin):
  list_display = ('address', 'phone', 'email', 'facebook_link', 'year')

  def has_add_permission(self, request):
    return False

admin.site.register(Page, PageAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(NavigationItem, NavigationItemAdmin)
admin.site.register(NurseryDetail, NurseryDetailAdmin)