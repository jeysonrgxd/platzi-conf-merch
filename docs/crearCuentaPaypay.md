Para utilizar la API de PayPal para integrar pagos es necesario darse de alta en PayPal Developer. En este sitio podrás encontrar todos los recursos necesarios para empezar a integrar pagos en tus páginas web y en nuestro proyecto Platzi Conf Merch.

Una vez que te has registrado es necesario seguir los siguientes pasos para crear tu token de desarrollo y poderlo integrar en este proyecto.

Crear “Sandbox Access Token”:
Dentro de tu cuenta como desarrollador debes dirigirte al apartado “My Apps & Credentials” y en la parte inferior encontrarás el apartado “Express Checkout via Braintree SDK - Sandbox Accounts” donde crearemos nuestro token para la aplicación.

paypal-1.PNG
Elegimos el tipo de cuenta que vamos a utilizar (Personal/Business).

paypal-2.PNG
Ahora que tenemos nuestro token generado debemos de revisar a detalle la expiración, así como el manejo de divisas que vamos a utilizar.

Si no encuentras tu divisa, selecciona “United States Dollar” que sería la divisa por defecto.

Si queremos revisar, actualizar el token o hacer algún cambio podemos regresar a la sección “My Apps & Credentials” para ver los detalles de tu cuenta.

paypal-3.PNG
IMPORTANTE: para efectos de pruebas es necesario tener tu token válido en modo “Sandbox”. Si quieres habilitar tu token para tu proyecto en producción solo debes de seguir los mismos pasos pero eligiendo la opción de “Live” y creando una nueva App.

Crear una app en PayPal para recibir pagos:
Para habilitar PayPal como un método de pago válido y recibir transacciones en tu proyecto en producción debemos crear una aplicación a la cual estará ligado nuestro token.

paypal-4.PNG
Una vez creado este token ligado a tu cuenta principal podrás elegir las características a las cuales podemos acceder, seleccionamos todas y le damos “save”.

Es necesario especificar una URL de retorno cuando la transacción ha sido exitosa, es parte de los requerimientos para este proyecto. Ahora que tienes todos los requisitos tienes tu API token listo para producción.

Ver mis traslaciones:
En el apartado de “Sandbox” podrás ver las cuentas creadas, notificaciones, los llamados a la API, el simulador entre otras herramientas que te ayudarán a darle seguimiento a tus pruebas de integración con PayPal.

Para revisar tus llamados y eventos en tu API de producción solo debes de dirigirte al apartado “Live” donde encontrarás la información que estás solicitando para ver qué está pasando con cada evento ocurrido.

Recomendación
No olvides pasarte por la documentación para que puedas entender cada particularidad que te ofrece PayPal. Solo estamos utilizando uno de los recursos que nos provee, pero te invito a explorar a detalle la documentación y encontrar nuevas herramientas que se puedan incluir en este proyecto.

Cuéntame en la sección de comentarios si tienes ideas y qué mejoras podrían suponer en Platzi Conf Merch.