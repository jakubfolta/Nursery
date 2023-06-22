from django.contrib import admin
from .models import Page, Review, NavigationItem

class PageAdmin(admin.ModelAdmin):
  list_display = ('description',)

class ReviewAdmin(admin.ModelAdmin):
  list_display = ('author', 'rating', 'date', 'is_main_page_review',)
  readonly_fields = ('date',)
  list_filter = ('rating',)

class NavigationItemAdmin(admin.ModelAdmin):
  list_display = ('title', 'order', 'slug')
  exclude = ('slug',)
  ordering = ('order',)

admin.site.register(Page, PageAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(NavigationItem, NavigationItemAdmin)