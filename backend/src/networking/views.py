import random
import sys

from django.http import JsonResponse
from django.views.generic import View

from .models import Networking, NetworkingInformation, City


class CityListView(View):
  def get(self, request):
    cities = City.objects.all().values("name", "id")

    return JsonResponse({
      "results": list(cities)
    })


class NetworkingConnectOnCellView(View):
  """Class to simulate connection on nodeb
  """
  def get(self, request, city: str):
    # getting all cells
    cells = list(Networking.objects.all().filter(location__name__icontains=city).values("cell_name", "pk"))

    # closest cell-by-cell choice simulation
    cell_to_connect = random.choice(cells)
    cell_to_connect = Networking.objects.get(pk=cell_to_connect["pk"])

    # size information trafficked simulation
    size = sys.getsizeof(request) * random.randrange(10**6, 11**6) * 0.03 + random.random()

    # save connection information
    connection_information = \
      NetworkingInformation.objects.create(size=size, networking=cell_to_connect)

    return JsonResponse({
      "cell_connected": cell_to_connect.cell_name, 
      "connected_at": connection_information.created_at,
      "connection": {
        "size": connection_information.size,
        "networking_connected": connection_information.networking.enodeb_name
      }
    })


class NetworkingListInformation(View):
  def get(self, request, city: str):
    cell_connection_information = NetworkingInformation.objects.all().order_by("created_at").filter(
      networking__location__name__iexact=city
    ).values(
      "created_at", "id", "networking__cell_name", "networking_id", "size", "networking__location__name"
    )  
    
    # formating returns
    information_formatted = {}
    for info in cell_connection_information:
      if str(info["created_at"]) not in information_formatted.keys():
        information_formatted[str(info["created_at"])] = [info]
      else:
        information_formatted[str(info["created_at"])].append(info)

    _information_formatted = {}
    cells = []
    for key in information_formatted.keys():
      for info in information_formatted[key]:
        if info["networking__cell_name"] not in _information_formatted:
          _information_formatted[info["networking__cell_name"]] = [info]
          if info["networking__cell_name"] not in cells:
            cells.append(info["networking__cell_name"])
        else:
          _information_formatted[info["networking__cell_name"]].append(info)

      information_formatted[key] = _information_formatted
      _information_formatted = {}


    return JsonResponse({"results": information_formatted, "header": cells})
