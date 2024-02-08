from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, MinLengthValidator
from django.utils.text import slugify

class Page(models.Model):
  description = models.CharField(max_length=50)
  heading_1 = models.CharField(max_length=50, blank=False)
  text_1 = models.TextField(max_length=210, blank=False)
  heading_2 = models.CharField(max_length=50, blank=True)
  text_2 = models.TextField(blank=True)
  heading_3 = models.CharField(max_length=50, blank=True)
  text_3 = models.TextField(blank=True)
  heading_4 = models.CharField(max_length=50, blank=True)
  text_4 = models.TextField(blank=True)
  heading_5 = models.CharField(max_length=150, blank=True)
  text_5 = models.TextField(blank=True)
  list_item_heading_1 = models.TextField(blank=True)
  list_item_description_1 = models.TextField(blank=True)
  list_item_heading_2 = models.TextField(blank=True)
  list_item_description_2 = models.TextField(blank=True)
  list_item_heading_3 = models.TextField(blank=True)
  list_item_description_3 = models.TextField(blank=True)
  list_item_heading_4 = models.TextField(blank=True)
  list_item_description_4 = models.TextField(blank=True)
  list_item_heading_5 = models.TextField(blank=True)
  list_item_description_5 = models.TextField(blank=True)
  list_item_heading_6 = models.TextField(blank=True)
  list_item_description_6 = models.TextField(blank=True)
  list_item_heading_7 = models.TextField(blank=True)
  list_item_description_7 = models.TextField(blank=True)
  list_item_heading_8 = models.TextField(blank=True)
  list_item_description_8 = models.TextField(blank=True)

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
  

class Schedule(models.Model):
  facility = models.CharField(max_length=50, blank=False)
  list_item_heading_1 = models.TextField(blank=True)
  list_item_description_1 = models.TextField(blank=True)
  list_item_heading_2 = models.TextField(blank=True)
  list_item_description_2 = models.TextField(blank=True)
  list_item_heading_3 = models.TextField(blank=True)
  list_item_description_3 = models.TextField(blank=True)
  list_item_heading_4 = models.TextField(blank=True)
  list_item_description_4 = models.TextField(blank=True)
  list_item_heading_5 = models.TextField(blank=True)
  list_item_description_5 = models.TextField(blank=True)
  list_item_heading_6 = models.TextField(blank=True)
  list_item_description_6 = models.TextField(blank=True)
  list_item_heading_7 = models.TextField(blank=True)
  list_item_description_7 = models.TextField(blank=True)
  list_item_heading_8 = models.TextField(blank=True)
  list_item_description_8 = models.TextField(blank=True)
  list_item_heading_9 = models.TextField(blank=True)
  list_item_description_9 = models.TextField(blank=True)
  list_item_heading_10 = models.TextField(blank=True)
  list_item_description_10 = models.TextField(blank=True)
  list_item_heading_11 = models.TextField(blank=True)
  list_item_description_11 = models.TextField(blank=True)
  list_item_heading_12 = models.TextField(blank=True)
  list_item_description_12 = models.TextField(blank=True)
  list_item_heading_13 = models.TextField(blank=True)
  list_item_description_13 = models.TextField(blank=True)
  list_item_heading_14 = models.TextField(blank=True)
  list_item_description_14 = models.TextField(blank=True)
  list_item_heading_15 = models.TextField(blank=True)
  list_item_description_15 = models.TextField(blank=True)

  def __str__(self):
    return self.facility