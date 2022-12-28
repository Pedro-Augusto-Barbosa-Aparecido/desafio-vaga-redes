from django.urls import path

from .views import NetworkingView

urlpatterns = [
  path("<str:city>/", NetworkingView.as_view(), name="networking")
]
