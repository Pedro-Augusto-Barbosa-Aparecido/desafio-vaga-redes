import random
import sys

from django.http import JsonResponse
from django.views.generic import View

from .models import Networking, NetworkingInformation


class NetworkingView(View):
  """Class to simulate connection on nodeb
  """
  def get(self, request, city: str):
    # getting all cells
    cells = list(Networking.objects.all().filter(location__name__icontains=city).values("cell_name", "pk"))

    # closest cell-by-cell choice simulation
    cell_to_connect = random.choice(cells)
    cell_to_connect = Networking.objects.get(pk=cell_to_connect["pk"])

    # size information trafficked simulation
    size = sys.getsizeof(request) * random.randrange(10**6, 11**6) + random.random()

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
