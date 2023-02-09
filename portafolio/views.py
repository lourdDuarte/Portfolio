from django.shortcuts import render

def index(request):
    return render(request,'index.html')

def skill(request):
    return render(request,'skill.html')

def contact(request):
    return render(request,'contact.html')

def proyect(request):
    return render(request,'proyect.html')
