personas = []
n = int(input("Ingrese el número de personas a registrar: "))

for i in range(n):
    print(f"\nPersona {i+1}")
    nombre = input("Nombre: ")
    edad = int(input("Edad: "))
    nota = float(input("Nota: "))
    personas.append([nombre, edad, nota])

print("\nDatos ingresados:")
for persona in personas:
    print(persona)

ordenadas = sorted(personas, key=lambda x: x[2], reverse=True)

print("\nDatos ordenados por nota (mayor a menor):")
for persona in ordenadas:
    print(persona)