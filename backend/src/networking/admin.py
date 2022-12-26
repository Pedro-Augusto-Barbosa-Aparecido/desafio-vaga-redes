from django.contrib import admin

from .models import City, Networking, NetworkingInformation, State


@admin.register(State)
class StateAdmin(admin.ModelAdmin):
  pass


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
  pass


@admin.register(Networking)
class Networking(admin.ModelAdmin):
  pass


@admin.register(NetworkingInformation)
class NetworkingInformationAdmin(admin.ModelAdmin):
  pass
