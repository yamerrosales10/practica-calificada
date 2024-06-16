# POKEMON

Instalacion

```bash
npm install
```

Ejecutar

```
npm run dev
npm run serve
```

SEGUNDA FORMA
PARA XAMPP
Copiar en localhost
```
npm run build
# SE INSTALAR UNa carpeta dist
```
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue + TS</title>
    <!-- asi tiene que verse esto y listop -->
    <script type="module" crossorigin src="http://localhost/pokemon/dist/assets/index-Bn_4yk_7.js"></script>
    <link rel="stylesheet" crossorigin href="http://localhost/pokemon/dist/assets/index-DJrEq-o_.css">
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

```
ABRIR EN EL PUERTO http://localhost:5173/
Es necesario tener node js instalado https://nodejs.org/en

// si quieres agregar mas pokemons o agregar imagenes a los entrenadors en json db.json