Estructura(Jerarquía) del proyecto:
- SRC > APP >
    - COMPONENTS > <nombre pagina>
        - Guarda todos los componentes generados con "ng g c <nombre>" que se importan en todos los módulos. Están agrupados según el módulo que los declara (osea como se usan por página).  
    - MOCKDATA
        - Hasta que tengamos un backend tenemos listados de los diferentes tipos de data que necesitamos para el prototipo
    - MODULES
        - Guarda todos los modulos generados con "ng g m <nombre>". Tener en cuenta que modulo no es equivalente a página, porque por ejemplo, cuando necesitamos compartir un componente en varias páginas, tenemos que hacer un modulo compartido que se importe en varios lugares o en el root.
    - SERVICES
        - Guarda todos los servicios generados con "ng g s <nombre>". Actualmente solo hay uno que inyecta las ciudades mock en el home.
    - TYPES
        - Guarda todos los custom types de datos que necesitemos (objetos de typescript).

- SRC > ASSETS >
    - ICON
        - Se guarda el favicon (en caso de que se vea por la web)
    - FONTS
        - Se guardan los archivos de fuentes que se importan en global.scss. Alternativamente se podrían utilizar con un cdn desde la nube, por ejemplo google fonts o similar, que podría reducir el tamaño de la app un poco pero como contra tardaría más en cargar (más llamadas HTTP)

- Estructura de la app:
    - HOME
        - TOPBAR
        - SEARCHBAR HOME
        - TARJETA CIUDAD (TARJETA CIUDAD SKELETON)
        -[SERVICIO] -> CiudadProvider

    - CADA CIUDAD
        - DESTINO HEADER
        - TARJETA ALOJAMIENTO
        - [SERVICIO] -> CiudadProvider

    - CADA DEPARTAMENTO
        - INN HEADER
        - INN BRIEF
        - INN GALLERY
        - INN SERVICES
        - INN LOCATION
        - INN REVIEWS
            - INN REVIEW
        - INN HOST
        - [SERVICIO] -> InnProvider

    - CADA RESERVA
        - INN BRIEF
        - RESERVATION DATES
        - RESERVATION GUESTS
        - RESERVATION FOOTER
        - [DEL SHARED MODULE RESERVATION-HEADER] RESERVATION HEADER
        - [SERVICIO] -> InnProvider


    - CADA PAGO
        - RESERVATION BRIEF
        - PAYMENT CHECKOUT
        - RESERVATION MESSAGE
        - PAYMENT FOOTER
        - [DEL SHARED MODULE RESERVATION-HEADER] RESERVATION HEADER

    - THANK-YOU PAGE
        - THANK-YOU HEADER
        - THANK-YOU BODY


// TODO:
-   // Calendar dates
-   // Home cards
-   // City headers
-   // Explorar el espacio popup
-   // Payment method form
-   // Home searchbar filter cities
-   // Inn resume cards
-   // Complete mock data
-   // Add icons in inn-brief
-   // Improve icons in inn-services
-   // Change marker with circle in inn-location map
-   // Manage reservation fees in typescript
-   // Home Topbar
-   // Add info alerts in payment
-   // Manage dates properly
-   Add city header features
-   Check for dates in reservation page