from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, MinLengthValidator
from django.utils.text import slugify

class Page(models.Model):
  description = models.CharField(max_length=500)
  heading_1 = models.CharField(max_length=50, blank=False)
  text_1 = models.TextField(blank=False)
  heading_2 = models.CharField(max_length=50, blank=True)
  text_2 = models.TextField(blank=True)
  heading_3 = models.CharField(max_length=50, blank=True)
  text_3 = models.TextField(blank=True)
  heading_4 = models.CharField(max_length=50, blank=True)
  list_item_heading_1 = models.TextField(blank=True)
  list_item_description_1 = models.TextField(blank=True)
  list_item_heading_2 = models.TextField(blank=True)
  list_item_description_2 = models.TextField(blank=True)
  list_item_heading_3 = models.TextField(blank=True)
  list_item_description_3 = models.TextField(blank=True)
  list_item_heading_4 = models.TextField(blank=True)
  list_item_description_4 = models.TextField(blank=True)

  def __str__(self):
    return self.description

class NavigationItem(models.Model):
  title = models.CharField(max_length=20, blank=False,
    validators=[MinLengthValidator(5, message='Minimalna ilość znaków to 5.')])
  order = models.IntegerField(
    validators=[MinValueValidator(1), MaxValueValidator(8)]
  )
  slug = models.SlugField(unique=True)

  def save(self, *args, **kwargs):
    self.slug = slugify(self.title)
    super().save(*args, **kwargs)

  def __str__(self):
    return self.title

class Review(models.Model):
  author = models.CharField(max_length=100)
  review = models.TextField(
    validators=[MinLengthValidator(10, message='Minimalna ilość znaków to 10.')]
  )
  rating = models.IntegerField(default=5,
    validators=[MinValueValidator(1), MaxValueValidator(5)]
  )
  is_main_page_review = models.BooleanField(default=False)
  date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.author
  
class NurseryDetail(models.Model):
  address = models.CharField(max_length=100, blank=False)
  phone = models.CharField(
    validators=[MinLengthValidator(9, message='Minimalna ilość znaków to 9.')],
    blank=False,
    max_length=20
  )
  email = models.CharField(blank=False, max_length=100)
  facebook_link = models.CharField(blank=False, max_length=100)
  year = models.IntegerField(blank=False)

  def __str__(self):
    return self.address
    