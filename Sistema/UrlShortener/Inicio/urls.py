from django.urls import path
from Inicio.views import *

urlpatterns = [
    path('', inicio, name="Inicio"),
    path('refrescar/', refresh, name='refrescar_pagina')
]