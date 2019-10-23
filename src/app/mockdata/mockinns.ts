import { Inn } from '../types/inn';
import { InnType } from '../types/inntype';
import { INNTYPES } from '../mockdata/mockinntypes';
import { Ciudad } from '../types/ciudad';
import { CIUDADES } from '../mockdata/mockcities';
import { INNSERVICES } from './mockinnservices';
import { REVIEWS } from './mockreviews';
import { HOSTUSERS } from './mockhostusers';

export const INNS: Inn[] = [
    {
        id: 1,
        hostUser: HOSTUSERS[0],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/cb8c9a36-25c7-49ea-9f8f-17a072a5646d.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/8b8ff3f4-1634-45bc-ad3f-45f8c535794c.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/6be116d6-bbb1-4eb5-881e-a24f674fe6df.jpg?aki_policy=large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9648586,
            long: -43.173116,
        },
        locationDescr: `El alojamiento de Iracema está en Río de Janeiro, Brasil.
        O Bairro do Flamengo é um dos melhores para se viver. Nele se encontra todo tipo de comércio e transporte público. Não deixem de ver fotos de locais muito próximos de minha casa em que recomendo ao lazer!`
        },
    {
        id: 2,
        hostUser: HOSTUSERS[1],
        name: 'Habitación en el corazón de Copacabana',
        // tslint:disable-next-line: max-line-length
        description: 'Copa del mundo: U$ 2.500 por semana - U$ 9,000 el mes entero. Navidad/ Año Nuevo (7 o 10 días): U$ 2.000 - U$ 2.500. Apartamento limpio y agradable muy bien ubicado en Copanema, exactamente entre Copacabana e Ipanema. ¡Alquiler y mantenimiento a cargo del propietario! Ubicación privilegiada, está ubicado dos cuadras de la playa de Copacabana, a 5 cuadras de la playa de Ipanema y a 7 cuadras de la playa de Arpoador. El apartamento (email ocultado) Ferreira, a media cuadra de la General Osório metro/metro de la estación y la estación de bicicletas de Itaú. Cerca de restaurantes, entretenimiento, compras y vida nocturna. Muy cerca de la Plaza de General Osório, donde hay comida local y frutas que los martes, y mercadillo de artesanías los dominogs. 1 cama doble, aire acondicionado, 10 MB alta velocidad Internet inalámbrico, cocina, fogones, Mini-Bar. Ideal para 1-2 personas, opcional colchón de aire para 3-4 personas. Muy seguro. Es una zona acomodada, por lo que siempre hay policía en la entrada de la estación de metro que está a media cuadra de distancia y también tiene 3 cuadras de la estación de policía. Portero 24/7. No dude en contactar para cualquier información.',
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/81792668/c2e845a7_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/81792717/1ec8c187_original.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/81792807/a0761ea4_original.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/55913196/0044264f_original.jpg?aki_policy=large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 15,
        price: 12,
        rooms: 1,
        beds: 4,
        bathrooms: 1,
        capacity: 2,
        innType: INNTYPES[1],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9716782,
            long: -43.1863013,
        },
        locationDescr: `El alojamiento de Iracema está en Río de Janeiro, Brasil.
        O Bairro do Flamengo é um dos melhores para se viver. Nele se encontra todo tipo de comércio e transporte público. Não deixem de ver fotos de locais muito próximos de minha casa em que recomendo ao lazer!`
    },
    {
        id: 3,
        hostUser: HOSTUSERS[2],
        name: 'The penthouse terrace, a paradise in Copacabana',
        description: `Introducing the rooftop terrace, a double room with en-suite bathroom, located at the 2nd. floor of my own place, in the heart of Copacabana. What makes it special? PRIVACY, the top floor is basically for guests; SAFETY, we are on a residential building with doormen 24 hours a day; UNBEATABLE LOCATION, very close to subway, shops, bars, beach; BEST ADVICE: insider's tips from a local host who loves showing Rio in safety; FULLY EQUIPPED; A REALLY QUIET PLACE; GREAT VIEWS; POOL AND OUTDOOR AREAS.

        El lugar
        Mi apartamento está dividido en dos plantas, con una entrada común en el primer piso. Me quedo en el primero. Piso, mientras que los huéspedes se alojan en el segundo. Piso, donde algunas áreas son compartidas con mi familia y otras son totalmente privadas. Sus instalaciones comienzan con un acogedor dormitorio con baño en-suite. El dormitorio fue construido recientemente, así que todo es nuevo y muy limpio. Desde la cama, tiene una bonita vista a la estatua de Cristo y las casas y las montañas alrededor. La habitación ofrece 12 m2 de área, con aire acondicionado, una caja de doble cama nueva, equipo de música estéreo, cajones y puffs para su equipaje. El baño está totalmente equipado, con ducha caliente y fría, toallas limpias y grandes, una máquina de café. Wi-Fi está disponible en todas las habitaciones. Hay una zona de lavandería (con nevera, lavadora y secadora), una zona al aire libre (con una mesa con sillas reclinables), una sala de estar para su relajación (no continua a la habitación) y otras comodidades para que se sienta en casa. También hay una gran piscina, que finalmente se comparte con la familia y amigos. Canal TV está disponible en la sala de TV (en el primer piso). Hay garaje propio para aparcar, si estás usando un coche. Lugar tranquilo, muy seguro, totalmente privado. Su propia impresionante terraza en el corazón de Copacabana!
        translated by Google
        My apartment is divided in two floors, with a common entrance in the first floor. I stay in the 1st. floor, while guests stay at the 2nd. floor, where some areas are shared with my family and others are totally private. Your installations start with a cozy bedroom with en-suite bathroom. The bedroom was recently built, so everything is new and very clean. From the bed, you have a nice view to the Christ Statue and to the homes and mountains around. The room offers 12 m2 of area, with conditioning air, a box-type double new bed, a stereo music equipment, drawers and puffs for your luggage. The bathroom is fully equipped, with hot and cold shower, clean big towels, a coffee machine. WiFi is available in all rooms. There is a laundry area (with a fridge, a washing and drying machine), an outdoors area (with a table with reclining chairs), a living room for your relax (not continuous to the bedroom) and other several amenities to make you feel at home. There is also a big pool, which eventually is shared with family and friends. Channel TV is available at the TV room (on 1st. floor). There is own garage to park in, if you are using a car. Quiet place, very safe, totally private. Your own stunning terrace at the heart of Copacabana!
        
        Disponible para huéspedes
        A toda la casa, excepto a habitaciones privadas en la 1ra. piso. Su dormitorio es además de la piscina y un patio privado en el segundo. Piso, mientras que la puerta de entrada, sala de TV y terraza están en la 1 ª. piso.
        translated by Google
        
        To the whole home, except to private rooms on 1st. floor. Your bedroom is besides the swimming pool and a private yard at the 2nd. floor, while entrance door, TV room and veranda are on 1st. floor.`,
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/37741252/52db969a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/78333891/bbe9cb59_original.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/44491468/4d5f07e5_original.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/36752533/c9dffe47_original.jpg?aki_policy=large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 235,
        price: 125,
        rooms: 1,
        beds: 4,
        bathrooms: 1,
        capacity: 2,
        innType: INNTYPES[3],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: 43.2067058,
        },
        locationDescr: `El alojamiento de Iracema está en Río de Janeiro, Brasil.
        O Bairro do Flamengo é um dos melhores para se viver. Nele se encontra todo tipo de comércio e transporte público. Não deixem de ver fotos de locais muito próximos de minha casa em que recomendo ao lazer!`
    },
    {
        id: 4,
        hostUser: HOSTUSERS[3],
        name: 'Estudio entre Ipanema/Copacabana',
        description: 'Dormitorio con cama doble, armario, TV por cable, aire acondicionado y conexión wi-fi. Situado en una tranquila calle en el edificio, en el corazón de Copacabana. Menos de 5 minutos del metro, a dos cuadras de la playa. Supermercados, bancos, tiendas cerca.',
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/41279903/50026858_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/41279945/d00ee3fd_original.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/41280349/e0f0aa27_original.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/41280434/5b04d2d4_original.jpg?aki_policy=large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 3.9,
        reviews: REVIEWS,
        ratingQty: 101,
        price: 24,
        rooms: 3,
        beds: 4,
        bathrooms: 1,
        capacity: 9,
        innType: INNTYPES[4],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: '',
    },
    {
        id: 5,
        hostUser: HOSTUSERS[4],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 17,
        price: 78,
        rooms: 4,
        beds: 4,
        bathrooms: 2,
        capacity: 12,
        innType: INNTYPES[5],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9255717,
            long: -43.1835632,
        },
        locationDescr: '',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[5],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 7,
        hostUser: HOSTUSERS[6],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 8,
        hostUser: HOSTUSERS[7],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 9,
        hostUser: HOSTUSERS[8],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 10,
        hostUser: HOSTUSERS[9],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 11,
        hostUser: HOSTUSERS[10],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 12,
        hostUser: HOSTUSERS[11],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 13,
        hostUser: HOSTUSERS[12],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 14,
        hostUser: [13],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 15,
        hostUser: HOSTUSERS[14],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 16,
        hostUser: HOSTUSERS[15],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 17,
        hostUser: HOSTUSERS[16],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 18,
        hostUser: HOSTUSERS[17],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 19,
        hostUser: HOSTUSERS[18],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
    {
        id: 20,
        hostUser: HOSTUSERS[19],
        name: 'Casa bonita',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            '',
            '',
            '',
            ''
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/75626cda-24d7-4e81-8a91-7222d5772032.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9dfac763-65cd-4653-b0b8-154b686fcd42.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/aadc30bd-9b8f-4e4b-af0b-b1d22fc1b377.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
        ],
        rating: 4.4,
        reviews: REVIEWS,
        ratingQty: 135,
        price: 99,
        rooms: 2,
        beds: 4,
        bathrooms: 1,
        capacity: 3,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: 0,
            long: 0,
        },
        locationDescr: '',
    },
];
