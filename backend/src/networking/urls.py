from django.urls import path

from .views import NetworkingConnectOnCellView, NetworkingListInformation, CityListView

urlpatterns = [
  path("cities/", CityListView.as_view(), name="cities-list"),
  path("connect/<str:city>/", NetworkingConnectOnCellView.as_view(), name="networking-connect"),
  path("info/<str:city>/", NetworkingListInformation.as_view(), name="networking-list-information"),
]
