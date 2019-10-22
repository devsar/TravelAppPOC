Estructura(Jerarquía) del proyecto:
SRC > APP >
    COMPONENTS
        Guarda todos los componentes generados con "ng g c <nombre>" que se importan en todos los módulos
    MOCKDATA
        Hasta que tengamos un backend tenemos listados de los diferentes tipos de data que necesitamos para el prototipo
    MODULES
        Guarda todos los modulos generados con "ng g m <nombre>". Tener en cuenta que modulo no es equivalente a página, porque por ejemplo, cuando necesitamos compartir un componente en varias páginas, tenemos que hacer un modulo compartido que se importe en varios lugares o en el root.
    SERVICES
        Guarda todos los servicios generados con "ng g s <nombre>". Actualmente solo hay uno que inyecta las ciudades mock en el home.
    TYPES
        Guarda todos los custom types de datos que necesitemos (objetos de typescript).


Estructura de la app:
- HOME
    - TOPBAR
    - SEARCHBAR HOME
    - TARJETA CIUDAD (TARJETA CIUDAD SKELETON)
    -[SERVICIO] -> CiudadProvider

-CADA CIUDAD
    - DESTINO HEADER
    - TARJETA ALOJAMIENTO
    -[SERVICIO] -> CiudadProvider

-CADA DEPARTAMENTO
    - INN HEADER
    - INN BRIEF
    - INN GALLERY
    - INN SERVICES
    - INN LOCATION
    - INN REVIEWS
        -INN REVIEW
    - INN HOST