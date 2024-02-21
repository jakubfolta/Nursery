from django.contrib import admin

class BaseAdmin(admin.ModelAdmin):
    def has_delete_permission(self, request, obj=None):
        # return True
        return False
