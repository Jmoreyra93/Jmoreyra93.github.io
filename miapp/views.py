from cgitb import html
from django.shortcuts import render, HttpResponse, redirect

layout = """
    <h1>Sitio web con Django | Julián Moreyra </h1>
    <hr/>
    <ul>
        <li>
            <a href="/inicio">Inicio</a>
        </li>
        <li>
            <a href="/holamundo">Hola mundo</a>
        </li>
        <li>
            <a href="/pagina">Páginas de pruebas</a>
        </li>
        <li>
            <a href="/contacto">Contacto</a>
        </li>
    </ul>
    </hr>

"""
# Create your views here.

def index(request):
    html = """
        <h1>Inicio</h1>
        <p>Años haste el 2045 pares:</p>
        <ul>
    """
    """
        year = 2021
        while year <= 2045:
            if year % 2 == 0:
                html += f"<li>{str(year)}</li>"
            
            year += 1

        html += "</ul>"
    
    """
    
    nombre = 'Thomas Carucci'
    year = 2021
    hasta = range(year, 2051)

    return render(request, 'index.html', {
        'tittle': 'Inicio',
        'mi_variable': 'Soy un dato que está en la vista <br/>',
        'nombre': nombre,
        'years': hasta
    })

def holamundo(request):
    return render(request,'holamundo.html')

def pagina(request, redirigir = 0):
    if redirigir == 1:
        return redirect('/inicio/')

    return render(request, 'pagina.html')

def contacto(request, nombre="", apellido=""):
    html = ""
    if nombre and apellido:
        html += "<p>El nombre completo es:</p>"
        html += f"<h3>{nombre} {apellido}</h3>"


    return HttpResponse(layout+f"<h2>Contacto! </h2>"+html)

