from django.shortcuts import render, redirect
from Inicio.forms import URLForm
import pyshorteners

# Create your views here.
def acortar_url(url):
    acortador = pyshorteners.Shortener()
    url_acortada = acortador.tinyurl.short(url)
    return url_acortada

def inicio(request):
    if request.method == 'POST':
        form = URLForm(request.POST)
        if form.is_valid():
            url_original = form.cleaned_data['url']
            url_acortada = acortar_url(url_original)
            return render(request, 'Inicio/ready.html', {'url_acortada': url_acortada})
    else:
        form = URLForm()
    return render(request, 'Inicio/home.html', {'form': form})

def refresh(request):
    return redirect(request.META.get('HTTP_REFERER'))
    