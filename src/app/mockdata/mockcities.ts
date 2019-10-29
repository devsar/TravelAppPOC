import { Ciudad } from '../types/ciudad';

export const CIUDADES: Ciudad[] = [
    {
        id: 1,
        name: 'São Paulo',
        state: 'São Paulo',
        img: 'https://cdn.getyourguide.com/img/tour_img-2043232-145.jpg',
        description: `
        São Paulo,4​ conocida como San Pablo en la lengua española, oficialmente denominada como Município de São Paulo, es la ciudad capital del Estado de São Paulo y la principal ciudad de la región Metropolitana de São Paulo, en Brasil. Posee una población de 12 176 866 habitantes.5​ Teniendo en su área metropolitana una población de 21 893 053 habitantes, según los datos del censo 2010,6​ siendo la primera metrópoli de América y del hemisferio sur,7​ y una de las más pobladas del mundo, la tercera zona metropolitana más grande de América, solo por detrás de Nueva York y Ciudad de México.8​ Asimismo, es la ciudad lusófona más poblada e importante del mundo en términos tanto demográficos como culturales y económicos.
        `,
        slug: 'sao-paulo'
    },
    {
        id: 2,
        name:
        'Rio de Janeiro',
        state: 'Rio de Janeiro',
        // tslint:disable-next-line: max-line-length
        img: 'https://www.avianca.com/content/dam/avianca_new/destinos/semana/gig/1-porque-visitarla/destino-rio-de-janeiro-brazil-para-conocer-el-cerro-del-corcovado.jpg',
        description: `
        Es uno de los principales centros económicos, de recursos culturales y financieros del Brasil. Es conocida internacionalmente por sus iconos culturales y paisajes, como el Pan de Azúcar, la estatua del Cristo Redentor (una de las siete maravillas del mundo moderno), las playas de Copacabana e Ipanema, el Estadio de Maracaná, el Parque Nacional de Tijuca (el mayor bosque urbano del mundo), la Quinta da Boa Vista, la isla de Paquetá, las Fiestas de Fin de Año en Copacabana y la celebración del Carnaval
        `,
        slug: 'rio-de-janeiro'
    },
    {
        id: 3,
        name: 'Gramado',
        state: 'Río Grande do Sul',
        img: 'https://surenio.com.ar/wp-content/uploads/2017/12/gramado-7.jpg',
        description: `
        bicada en la "Sierra Gaucha", la ciudad de Gramado es poseedora de riquezas naturales exuberantes, siendo el polo turístico más importante de Rio Grande do Sul y uno de los destinos más buscados por el turismo interno brasileño. Conocida como la "Suiza del Brasil", Gramado convoca a turistas el año entero atraídos por sus bellezas naturales entre las que predominan sierras, valles, arroyos cristalinos y bosques de pinos, su clima templado y su legado europeo, sobre todo alemán e italiano.
        `,
        slug: 'gramado'
    },
    {
        id: 4,
        name: 'Salvador',
        state: 'Bahía',
        // tslint:disable-next-line: max-line-length
        img: 'https://static7lonelyplanetes.cdnstatics.com/sites/default/files/styles/max_1300x1300/public/blog/brasil_salvadorbahia_09-bestintrvavel2018_gettyimages-488430980_jeilson_istockphoto_getty_images.jpg?itok=W_X67q2T',
        description: `
        Situada en la Microrregión de Salvador, la ciudad es una metrópoli regional con casi 3 millones de habitantes, siendo la ciudad más poblada del Noreste de Brasil, la tercera más poblada de dicho país. Su área metropolitana, conocida como Región Metropolitana de Salvador o Gran Salvador, posee más de 4 millones de habitantes, lo que la torna en la tercera más poblada del noreste, la séptima de Brasil y la 111° del mundo.3​4​ Fue clasificada en comparación con la red urbana de otras ciudades brasileñas como un centro metropolitano nacional. La superficie del municipio de Salvador es de 706,8 km² y sus coordenadas, a partir del marco de la fundación de la ciudad, en el Faro de la Barra o Fortaleza de San Antonio son 13° sur y 38° 31' 12'' oeste. Centro económico del estado, es un puerto exportador, centro industrial, administrativo y turístico, alberga diversas universidades y una base naval en Aratu.
        `,
        slug: 'salvador'
    },
    {
        id: 5,
        name: 'Florianópolis',
        state: 'Santa Catarina',
        img: 'http://zanoliviajes.com.ar/wp-content/uploads/2017/10/Floria-3.jpg',
        description: `
        lorianópolis es la capital del estado de Santa Catarina, en la región Sur de Brasil, nombrada así en homenaje al expresidente Floriano Peixoto, en reemplazo de su anterior denominación «Nossa Senhora do Desterro» (Nuestra Señora del Destierro). La ciudad es conocida ya que sus habitantes tienen una alta calidad de vida, siendo la capital brasileña con mayor puntuación en el Índice de Desarrollo Humano (IDH), calculado por PNUD, de las Naciones Unidas. La economía está basada en Tecnología de Información, turismo y servicios.

Florianópolis cuenta con 100 playas y un centro de actividades náuticas. El diario estadounidense The New York Times afirmó en 2009 que "Florianópolis era el destino del año", mientras que Newsweek consideró que el municipio era "una de las 10 ciudades más dinámicas del mundo" en 2006. Es una de las capitales más seguras en Brasil.1
        `,
        slug: 'florianopolis'
    },
    {
        id: 6,
        name: 'Curitiba',
        state: 'Paraná',
        img: 'https://i.pinimg.com/originals/9c/5c/23/9c5c23a403abf0226276d4724396fa18.jpg',
        description: `
        lorianópolis es la capital del estado de Santa Catarina, en la región Sur de Brasil, nombrada así en homenaje al expresidente Floriano Peixoto, en reemplazo de su anterior denominación «Nossa Senhora do Desterro» (Nuestra Señora del Destierro). La ciudad es conocida ya que sus habitantes tienen una alta calidad de vida, siendo la capital brasileña con mayor puntuación en el Índice de Desarrollo Humano (IDH), calculado por PNUD, de las Naciones Unidas. La economía está basada en Tecnología de Información, turismo y servicios.

Florianópolis cuenta con 100 playas y un centro de actividades náuticas. El diario estadounidense The New York Times afirmó en 2009 que "Florianópolis era el destino del año", mientras que Newsweek consideró que el municipio era "una de las 10 ciudades más dinámicas del mundo" en 2006. Es una de las capitales más seguras en Brasil.
        `,
        slug: 'curitiba'
    },
    {
        id: 7,
        name: 'Fortaleza',
        state: 'Ceará',
        img: 'https://www.turismobr.com/wp-content/uploads/2011/01/Fortaleza-desde-sus-playas-760x500.jpg',
        description: `
        Fundada en el año 1726, la ciudad se convirtió en capital en el 1799, cuando Ceará obtuvo su autonomía administrativa. Su nombre hace referencia a la fortaleza Schoonenborch, construida por los holandeses que estuvieron en la región entre los años 1649 y 1654.

La ciudad se ubica en la costa del estado, posee 34 km de playas y está a una altura de 21 metros sobre el nivel del mar. Con una superficie de 313,14 km² y una población de 2 610 116 habitantes, presenta la más grande densidad demográfica entre las capitales de Brasil (8 001 hab/km²) y es la quinta ciudad más grande del país. El municipio y su conurbano (la denominada Região Metropolitana de Fortaleza, o RMF) tienen una población de 4 019 320 habitantes.
        `,
        slug: 'fortaleza'
    },
    {
        id: 8,
        name: 'Natal',
        state: 'Río Grande do Norte',
        img: 'https://d1cfr5yzsdeyhu.cloudfront.net/blog/wp-content/uploads/2016/04/12162253/Tips-para-viajar-a-Natal.jpg',
        description: `
        Es la capital brasileña más cercana en apariencia a la costa africana y al paraíso de las islas de Fernando de Noronha.10​ Atrae a alrededor de dos millones de turistas al año que buscan diversas atracciones. Natal se convirtió en la puerta de entrada a las hermosas playas del Estado de Río Grande del Norte. Muchos de ellos todavía están semi-salvajes, como Playa de Pipa y Maracajaú, y otros son los más animados, como Genipabu, y Pirangi y Ponta Negra.

La ciudad también tiene una de las mayores fiestas de la temporada de carnaval en Brasil, denominado Carnatal, que es muy diferente al desfile de escuelas de samba popular de Río de Janeiro. Además, es notable la Fiesta Junina (Festival de San Juan, donde también se celebra el Solsticio de verano junto a varios países europeos) y que se realiza en muchas ciudades del estado, en particular, la ciudad de Mossoró.
        `,
        slug: 'natal'
    },
    {
        id: 9,
        name: 'Trancoso',
        state: 'Bahia',
        img: 'https://dla.cdncimeco.com/uploads/2018/12/image5c27e80068e06.jpg',
        description: `
        Trancoso, como buena parte de la costa del sur bahiano, tiene una geografía marcada por los acantilados y altiplanos muy cerca de la costa, playas con arrecifes, y cocoteros creciendo sobre la arena clara. Similar en estilo, aunque como aldea mucho más pequeña, que la vecina Arraial d'Ajuda, Trancoso se destaca como un destino que ofrece tranquilidad y buenas opciones tanto de alojamiento como gastronómicas; desde opciones super exclusivas como el Club Med y el complejo de Golf Terravista, hasta posadas y restaurantes simples integrados al paisaje.
        `,
        slug: 'trancoso'
    },
    {
        id: 10,
        name: 'Jericoacoara',
        state: 'Ceará',
        img: 'http://www.wkndheroes.com/wp-content/uploads/2016/03/lagoa-paraiso-jeri-1200x640.jpg',
        description: `
        ericoacoara, un municipio turístico del estado de Ceará, al este de Brasil, es conocido por su amplia playa del mismo nombre. Las calles arenosas de la localidad están llenas de restaurantes y bares. La plaza central se encuentra en la animada Rua Principal (calle principal). El municipio está rodeado de lagunas de agua dulce, como las lagunas Paraíso y Azul, y el Parque Nacional de Jericoacoara, que cuenta con extensas dunas. La Duna do Por do Sol es lugar de encuentro habitual para ver la puesta de sol.
        `,
        slug: 'jericoacoara'
    },
    {
        id: 11,
        name: 'Belo Horizonte',
        state: 'Minas Gerais',
        img: 'https://st2.depositphotos.com/2121749/11739/i/950/depositphotos_117395548-stock-photo-metropolis-of-belo-horizonte-minas.jpg',
        description: `
        Fundada en el siglo XIX, la antigua ciudad minera de Belo Horizonte es actualmente una zona metropolitana con 4 millones de habitantes, una de las más pobladas de Brasil. Centro cultural y económico, con bastantes espacios verdes, la capital de Minas Gerais ya fue considerada por la ONU como la ciudad con mejor calidad de vida de Latinoamérica. Recientemente se han descubierto nuevos motivos para atraer personas, y turistas.
        `,
        slug: 'belo-horizonte'
    },
    {
        id: 12,
        name: 'Búzios',
        state: 'Rio De Janeiro',
        img: 'https://images.clarin.com/2016/10/05/HJQeZ93YNl_1256x620.jpg',
        description: `
        Disfrutar de sus 20 playas de aguas cristalinas y arenas blancas es posible durante todo el año, gracias al clima veraniego casi permanente. Además, cuenta con una riqueza cultural muy estimulante y con un ambiente elegante salpicado de gente sumamente atractiva.

Conocida popularmente como la Saint-Tropez de Brasil, Buzios llama la atención por sus calles empedradas y sus encantadoras terrazas, que convierten la ciudad en un lugar idóneo para pasear alegremente.
        `,
        slug: 'buzios'
    },
    {
        id: 13,
        name: 'Manaos',
        state: 'Amazonas',
        img: 'https://www.elterritorio.com.ar/verimg.aspx?F=1&A=594&O=/img/1/156/9547720644070972_1.jpg',
        description: `
        Manaos es la capital del Estado de Amazonas en Brasil y se ubica en la Región Norte del país.

En la ciudad se puede caminar por la selva en la mañana y asistir a una ópera de noche. Manaos ofrece un espacio rodeado de naturaleza, cultura, arte y gastronomía. Te deslumbrarán los maravillosos espectáculos que ofrece el majestuoso teatro de ópera Amazonas, construido con materiales de alta gama.
        `,
        slug: 'manaos',
    },
    {
        id: 14,
        name: 'Foz do Iguaçu',
        state: 'Paraná',
        img: `
        Manaos es la capital del Estado de Amazonas en Brasil y se ubica en la Región Norte del país.

        En la ciudad se puede caminar por la selva en la mañana y asistir a una ópera de noche. Manaos ofrece un espacio rodeado de naturaleza, cultura, arte y gastronomía. Te deslumbrarán los maravillosos espectáculos que ofrece el majestuoso teatro de ópera Amazonas, construido con materiales de alta gama.
        `,
        description: 'Hermosa ciudad',
        slug: 'foz-do-iguacu'
    },
    {
        id: 15,
        name: 'Porto Seguro',
        state: 'Bahía',
        img: 'https://images.clarin.com/2008/11/21/r1ES_ootNe_1200x0.jpg',
        description: `
        La ciudad tiene aproximadamente 90 kilómetros de playas tropicales, como la popular Praia de Taperapuãn, y es conocida por su vibrante vida nocturna, que se desarrolla alrededor de la Passarela do Álcool, un paseo repleto de bares. Durante la época de Carnaval, se organiza una fiesta callejera masiva con artistas disfrazados de forma extravagante y músicos de samba desfilando.
        `,
        slug: 'porto-seguro'
    },
];
