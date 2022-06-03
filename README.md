# Proyecto de un Ecommerce: "Empanadas Misioneras"

Este es el proyecto final que estoy realizando para culminar el curso de React JS en el instituto CoderHourse.

El objetivo primordial del mismo es poner a prueba todo lo aprendido en cursos anteriores (como ser HTML, CSS, Jvascript) y sumarle el contenido que estamos aprendiendo en el actual curso ya mencionado.

Es un proyecto sencillo, el cual imita a un negocio de mediana escala que se dedica a la venta de empanadas artesanales. 

Se distingue por su gran variedad (son 20 distintos estilos/gustos) de empanadas.

El funcionamiento de la página es sencillo e intuitivo; básicamente cuenta con 7 secciones accesibles desde el Menú cabecera (Home, 4 categorías de empanadas, Preguntas Frecuentes y Contacto).


# Dependencias necesarias para el funcionamiento del Ecommerce

Como primer medida, instalar Node.js (https://nodejs.org/en) para poder instalar todas las dependencias.

Luego se tiene que crear la app de React colocando en la consola "npx create-react-app nombre_de_la_carpeta_donde_va_estar_el_proyecto".

Ahora, controlando de estar "ubicado" en el directorio/carpeta donde creaste la app del proyecto, ejecutás (en la consola) npm start para poder visualizar el proyecto desde el browser.

Ahora resta esperar a que se termine de instalar. Una vez finalizado este proceso se abre una pestaña en el browser con la confirmación de que ya está "corriendo/funcionando" la app, bajo la url http://localhost:3000.

Utilicé varias dependencias y librerías en mi proyecto (ya que hasta el final no lograba decidirme por alguna en particular), como ser Styled Components (el cual se instala ejecutando "npm install --save styled-components" en la consola), Bootstrap for React (ejecutar "npm install react-bootstrap bootstrap" desde la consola), también Tailwind (es la que elegí definitivamente, se instala ejecutando "npm install -D tailwindcss postcss autoprefixer" y luego "npx tailwindcss init -p" en la consola). 

También necesité utilizar el "react-router-dom" para toda la parte de ruteo y redireccionamiento entre las secciones.
Para ello, tuve que instalarla ejecutando, en la consola, lo siguiente: "npm install react-router-dom".

A .gif file showing the navegability of the site has been added to the root directory of this project /Juan-Paradeda-eCommerce.gif


# URL's que se utilizan en este proyecto

- http://localhost:3000/: es la principal; la que da la "bienvenida" a la web. Es la que muestra el Home del proyecto.
- http://localhost:3000/faq: sector donde se responden varias preguntas típicas del rubro gastronómico para adelantarnos a las inquietudes de nuestros clientes.
- http://localhost:3000/contacto: es la URL utilizada para derivar en un formulario de contacto donde acortamos distancias con los clientes. Aquí nos dejan sus consultas, inquietudes y también es un ámbito propicio para efectuar los pedidos, por supuesto.
- http://localhost:3000/productos/tradicionales: esta URL es la específica para las empanadas que denominamos "tradicionales"; son las más conocidas (pero no por ello menos sabrosas). Actualmente contamos con 5 distintas variedades en esta categoría.
- http://localhost:3000/productos/especiales: esta URL nos lleva a la sección de "Empanadas Especiales", o como solemos decir, nos hace subir un escalón hacia el éxtasis de sabor. Tenemos 10 gustos distintos que se quedarán grabados en la memoria de quien las pruebe (y en su paladar, por supuesto).
- http://localhost:3000/productos/super-especiales: aquí entramos a la sección de las "Empanadas Súper Especiales". Tenemos sólo 4 variedades en esta categoría, ya que estamos seguros de no hacían falta más. La felicidad se describe con esas 4 variedades de empanadas.
- http://localhost:3000/productos/arabes: está URL nos lleva hacia el éxito asegurado, la sección de "Empanadas Árabes" que, como es de imaginar, solo tenemos una variedad de la misma. La árabe es árabe, acá y en cualquier parte. No tiene desperdicio.


# Aquí dejo el enlace del GIF para poder mostrar mejor el funcionamiento del proyecto

https://drive.google.com/file/d/1xr6LObkHT15HI-tDfs4gXBjrbX0MnJA5/view?usp=sharing


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
