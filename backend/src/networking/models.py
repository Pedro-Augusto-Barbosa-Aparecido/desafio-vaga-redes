from django.db import models


class State(models.Model):
  name = models.CharField(max_length=255, null=False, blank=False, unique=True)
  created_at = models.DateField(auto_now=True)

  def __str__(self) -> str:
    return self.name

  def __repr__(self) -> str:
    return f"<State: {self.name} - {hex(id(self))}>"


class City(models.Model):
  name = models.CharField(max_length=255, null=False, blank=False, unique=True)
  state = models.ForeignKey(State, on_delete=models.CASCADE)
  created_at = models.DateField(auto_now=True)

  class Meta:
    verbose_name = "City"
    verbose_name_plural = "Cities"

  def __str__(self) -> str:
    return self.name

  def __repr__(self) -> str:
    return f"<City: {self.name} - {hex(id(self))}>"


class Networking(models.Model):
  cell_name = models.CharField(max_length=255, null=True, blank=True, unique=True)
  enodeb_name = models.CharField(max_length=255, null=True, blank=True, unique=False)

  location = models.ForeignKey(City, on_delete=models.DO_NOTHING)

  def __str__(self) -> str:
    return f"{self.cell_name} - {self.enodeb_name} | {self.location}"

  def __repr__(self) -> str:
    return f"<Networking {self} - {hex(id(self))}>"


class NetworkingInformation(models.Model):
  # size of connection
  size = models.DecimalField(decimal_places=2, max_digits=100)
  networking = models.ForeignKey(Networking, on_delete=models.PROTECT)

  # date of connection
  created_at = models.DateField(auto_now=True, editable=True)

  def __str__(self) -> str:
    return f"{self.networking} -> {self.size}"

  def __repr__(self) -> str:
    return f"<NetworkingInformation {self} - {hex(id(self))}>"
