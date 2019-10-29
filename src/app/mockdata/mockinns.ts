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
        hostUser: HOSTUSERS[10],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        hostUser: HOSTUSERS[11],
        name: 'Habitación en el corazón de Copacabana',
        // tslint:disable-next-line: max-line-length
        description: 'Copa del mundo: U$ 2.500 por semana - U$ 9,000 el mes entero. Navidad/ Año Nuevo (7 o 10 días): U$ 2.000 - U$ 2.500. Apartamento limpio y agradable muy bien ubicado en Copanema, exactamente entre Copacabana e Ipanema. ¡Alquiler y mantenimiento a cargo del propietario! Ubicación privilegiada, está ubicado dos cuadras de la playa de Copacabana, a 5 cuadras de la playa de Ipanema y a 7 cuadras de la playa de Arpoador. El apartamento (email ocultado) Ferreira, a media cuadra de la General Osório metro/metro de la estación y la estación de bicicletas de Itaú. Cerca de restaurantes, entretenimiento, compras y vida nocturna. Muy cerca de la Plaza de General Osório, donde hay comida local y frutas que los martes, y mercadillo de artesanías los dominogs. 1 cama doble, aire acondicionado, 10 MB alta velocidad Internet inalámbrico, cocina, fogones, Mini-Bar. Ideal para 1-2 personas, opcional colchón de aire para 3-4 personas. Muy seguro. Es una zona acomodada, por lo que siempre hay policía en la entrada de la estación de metro que está a media cuadra de distancia y también tiene 3 cuadras de la estación de policía. Portero 24/7. No dude en contactar para cualquier información.',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[12],
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
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[14],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[5],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[6],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[7],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[18],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[9],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'sao-paulo'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[0],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[13],
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[15],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[16],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[17],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[8],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[19],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'rio-de-janeiro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[10],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'gramado'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        hostUser: HOSTUSERS[11],
        name: 'Habitación en el corazón de Copacabana',
        // tslint:disable-next-line: max-line-length
        description: 'Copa del mundo: U$ 2.500 por semana - U$ 9,000 el mes entero. Navidad/ Año Nuevo (7 o 10 días): U$ 2.000 - U$ 2.500. Apartamento limpio y agradable muy bien ubicado en Copanema, exactamente entre Copacabana e Ipanema. ¡Alquiler y mantenimiento a cargo del propietario! Ubicación privilegiada, está ubicado dos cuadras de la playa de Copacabana, a 5 cuadras de la playa de Ipanema y a 7 cuadras de la playa de Arpoador. El apartamento (email ocultado) Ferreira, a media cuadra de la General Osório metro/metro de la estación y la estación de bicicletas de Itaú. Cerca de restaurantes, entretenimiento, compras y vida nocturna. Muy cerca de la Plaza de General Osório, donde hay comida local y frutas que los martes, y mercadillo de artesanías los dominogs. 1 cama doble, aire acondicionado, 10 MB alta velocidad Internet inalámbrico, cocina, fogones, Mini-Bar. Ideal para 1-2 personas, opcional colchón de aire para 3-4 personas. Muy seguro. Es una zona acomodada, por lo que siempre hay policía en la entrada de la estación de metro que está a media cuadra de distancia y también tiene 3 cuadras de la estación de policía. Portero 24/7. No dude en contactar para cualquier información.',
        city: CIUDADES.find( (el) => el.slug === 'gramado'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[12],
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
        city: CIUDADES.find( (el) => el.slug === 'gramado'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'gramado'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[4],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'gramado'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[5],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'gramado'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[6],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'gramado'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[7],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'gramado'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[8],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'gramado'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[9],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'gramado'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[0],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'salvador'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        city: CIUDADES.find( (el) => el.slug === 'salvador'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'salvador'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[13],
        name: 'Estudio entre Ipanema/Copacabana',
        description: 'Dormitorio con cama doble, armario, TV por cable, aire acondicionado y conexión wi-fi. Situado en una tranquila calle en el edificio, en el corazón de Copacabana. Menos de 5 minutos del metro, a dos cuadras de la playa. Supermercados, bancos, tiendas cerca.',
        city: CIUDADES.find( (el) => el.slug === 'salvador'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[14],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'salvador'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[15],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'salvador'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[16],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'salvador'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[17],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'salvador'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[18],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'salvador'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[19],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'salvador'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[10],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        hostUser: HOSTUSERS[11],
        name: 'Habitación en el corazón de Copacabana',
        // tslint:disable-next-line: max-line-length
        description: 'Copa del mundo: U$ 2.500 por semana - U$ 9,000 el mes entero. Navidad/ Año Nuevo (7 o 10 días): U$ 2.000 - U$ 2.500. Apartamento limpio y agradable muy bien ubicado en Copanema, exactamente entre Copacabana e Ipanema. ¡Alquiler y mantenimiento a cargo del propietario! Ubicación privilegiada, está ubicado dos cuadras de la playa de Copacabana, a 5 cuadras de la playa de Ipanema y a 7 cuadras de la playa de Arpoador. El apartamento (email ocultado) Ferreira, a media cuadra de la General Osório metro/metro de la estación y la estación de bicicletas de Itaú. Cerca de restaurantes, entretenimiento, compras y vida nocturna. Muy cerca de la Plaza de General Osório, donde hay comida local y frutas que los martes, y mercadillo de artesanías los dominogs. 1 cama doble, aire acondicionado, 10 MB alta velocidad Internet inalámbrico, cocina, fogones, Mini-Bar. Ideal para 1-2 personas, opcional colchón de aire para 3-4 personas. Muy seguro. Es una zona acomodada, por lo que siempre hay policía en la entrada de la estación de metro que está a media cuadra de distancia y también tiene 3 cuadras de la estación de policía. Portero 24/7. No dude en contactar para cualquier información.',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[12],
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
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[4],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[5],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[6],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[7],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[8],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[19],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'florianopolis'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[0],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'curitiba'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        city: CIUDADES.find( (el) => el.slug === 'curitiba'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'curitiba'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[13],
        name: 'Estudio entre Ipanema/Copacabana',
        description: 'Dormitorio con cama doble, armario, TV por cable, aire acondicionado y conexión wi-fi. Situado en una tranquila calle en el edificio, en el corazón de Copacabana. Menos de 5 minutos del metro, a dos cuadras de la playa. Supermercados, bancos, tiendas cerca.',
        city: CIUDADES.find( (el) => el.slug === 'curitiba'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[14],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'curitiba'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[15],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'curitiba'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[16],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'curitiba'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[17],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'curitiba'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[8],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'curitiba'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[9],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'curitiba'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[10],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'fortaleza'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        hostUser: HOSTUSERS[11],
        name: 'Habitación en el corazón de Copacabana',
        // tslint:disable-next-line: max-line-length
        description: 'Copa del mundo: U$ 2.500 por semana - U$ 9,000 el mes entero. Navidad/ Año Nuevo (7 o 10 días): U$ 2.000 - U$ 2.500. Apartamento limpio y agradable muy bien ubicado en Copanema, exactamente entre Copacabana e Ipanema. ¡Alquiler y mantenimiento a cargo del propietario! Ubicación privilegiada, está ubicado dos cuadras de la playa de Copacabana, a 5 cuadras de la playa de Ipanema y a 7 cuadras de la playa de Arpoador. El apartamento (email ocultado) Ferreira, a media cuadra de la General Osório metro/metro de la estación y la estación de bicicletas de Itaú. Cerca de restaurantes, entretenimiento, compras y vida nocturna. Muy cerca de la Plaza de General Osório, donde hay comida local y frutas que los martes, y mercadillo de artesanías los dominogs. 1 cama doble, aire acondicionado, 10 MB alta velocidad Internet inalámbrico, cocina, fogones, Mini-Bar. Ideal para 1-2 personas, opcional colchón de aire para 3-4 personas. Muy seguro. Es una zona acomodada, por lo que siempre hay policía en la entrada de la estación de metro que está a media cuadra de distancia y también tiene 3 cuadras de la estación de policía. Portero 24/7. No dude en contactar para cualquier información.',
        city: CIUDADES.find( (el) => el.slug === 'fortaleza'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[12],
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
        city: CIUDADES.find( (el) => el.slug === 'fortaleza'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'fortaleza'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[4],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'fortaleza'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[5],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'fortaleza'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[6],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'fortaleza'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[7],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'fortaleza'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[18],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'fortaleza'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[19],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'fortaleza'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[0],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'natal'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        city: CIUDADES.find( (el) => el.slug === 'natal'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'natal'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[13],
        name: 'Estudio entre Ipanema/Copacabana',
        description: 'Dormitorio con cama doble, armario, TV por cable, aire acondicionado y conexión wi-fi. Situado en una tranquila calle en el edificio, en el corazón de Copacabana. Menos de 5 minutos del metro, a dos cuadras de la playa. Supermercados, bancos, tiendas cerca.',
        city: CIUDADES.find( (el) => el.slug === 'natal'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[14],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'natal'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[15],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'natal'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[16],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'natal'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[17],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'natal'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[8],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'natal'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[9],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'natal'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[10],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'trancoso'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        hostUser: HOSTUSERS[11],
        name: 'Habitación en el corazón de Copacabana',
        // tslint:disable-next-line: max-line-length
        description: 'Copa del mundo: U$ 2.500 por semana - U$ 9,000 el mes entero. Navidad/ Año Nuevo (7 o 10 días): U$ 2.000 - U$ 2.500. Apartamento limpio y agradable muy bien ubicado en Copanema, exactamente entre Copacabana e Ipanema. ¡Alquiler y mantenimiento a cargo del propietario! Ubicación privilegiada, está ubicado dos cuadras de la playa de Copacabana, a 5 cuadras de la playa de Ipanema y a 7 cuadras de la playa de Arpoador. El apartamento (email ocultado) Ferreira, a media cuadra de la General Osório metro/metro de la estación y la estación de bicicletas de Itaú. Cerca de restaurantes, entretenimiento, compras y vida nocturna. Muy cerca de la Plaza de General Osório, donde hay comida local y frutas que los martes, y mercadillo de artesanías los dominogs. 1 cama doble, aire acondicionado, 10 MB alta velocidad Internet inalámbrico, cocina, fogones, Mini-Bar. Ideal para 1-2 personas, opcional colchón de aire para 3-4 personas. Muy seguro. Es una zona acomodada, por lo que siempre hay policía en la entrada de la estación de metro que está a media cuadra de distancia y también tiene 3 cuadras de la estación de policía. Portero 24/7. No dude en contactar para cualquier información.',
        city: CIUDADES.find( (el) => el.slug === 'trancoso'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[12],
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
        city: CIUDADES.find( (el) => el.slug === 'trancoso'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'trancoso'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[4],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'trancoso'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[5],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'trancoso'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[6],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'trancoso'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[7],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'trancoso'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[8],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'trancoso'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[19],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'trancoso'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[0],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'jericoacoara'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        city: CIUDADES.find( (el) => el.slug === 'jericoacoara'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'jericoacoara'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[13],
        name: 'Estudio entre Ipanema/Copacabana',
        description: 'Dormitorio con cama doble, armario, TV por cable, aire acondicionado y conexión wi-fi. Situado en una tranquila calle en el edificio, en el corazón de Copacabana. Menos de 5 minutos del metro, a dos cuadras de la playa. Supermercados, bancos, tiendas cerca.',
        city: CIUDADES.find( (el) => el.slug === 'jericoacoara'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[14],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'jericoacoara'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[15],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'jericoacoara'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[16],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'jericoacoara'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[17],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'jericoacoara'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[18],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'jericoacoara'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[9],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'jericoacoara'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[10],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'belo-horizonte'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        hostUser: HOSTUSERS[11],
        name: 'Habitación en el corazón de Copacabana',
        // tslint:disable-next-line: max-line-length
        description: 'Copa del mundo: U$ 2.500 por semana - U$ 9,000 el mes entero. Navidad/ Año Nuevo (7 o 10 días): U$ 2.000 - U$ 2.500. Apartamento limpio y agradable muy bien ubicado en Copanema, exactamente entre Copacabana e Ipanema. ¡Alquiler y mantenimiento a cargo del propietario! Ubicación privilegiada, está ubicado dos cuadras de la playa de Copacabana, a 5 cuadras de la playa de Ipanema y a 7 cuadras de la playa de Arpoador. El apartamento (email ocultado) Ferreira, a media cuadra de la General Osório metro/metro de la estación y la estación de bicicletas de Itaú. Cerca de restaurantes, entretenimiento, compras y vida nocturna. Muy cerca de la Plaza de General Osório, donde hay comida local y frutas que los martes, y mercadillo de artesanías los dominogs. 1 cama doble, aire acondicionado, 10 MB alta velocidad Internet inalámbrico, cocina, fogones, Mini-Bar. Ideal para 1-2 personas, opcional colchón de aire para 3-4 personas. Muy seguro. Es una zona acomodada, por lo que siempre hay policía en la entrada de la estación de metro que está a media cuadra de distancia y también tiene 3 cuadras de la estación de policía. Portero 24/7. No dude en contactar para cualquier información.',
        city: CIUDADES.find( (el) => el.slug === 'belo-horizonte'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[12],
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
        city: CIUDADES.find( (el) => el.slug === 'belo-horizonte'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'belo-horizonte'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[4],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'belo-horizonte'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[5],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'belo-horizonte'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[6],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'belo-horizonte'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[7],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'belo-horizonte'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[8],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'belo-horizonte'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[19],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'belo-horizonte'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[0],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'buzios'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        city: CIUDADES.find( (el) => el.slug === 'buzios'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'buzios'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[13],
        name: 'Estudio entre Ipanema/Copacabana',
        description: 'Dormitorio con cama doble, armario, TV por cable, aire acondicionado y conexión wi-fi. Situado en una tranquila calle en el edificio, en el corazón de Copacabana. Menos de 5 minutos del metro, a dos cuadras de la playa. Supermercados, bancos, tiendas cerca.',
        city: CIUDADES.find( (el) => el.slug === 'buzios'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[14],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'buzios'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[15],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'buzios'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[16],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'buzios'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[17],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'buzios'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[8],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'buzios'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[9],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'buzios'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[10],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'manaos'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        hostUser: HOSTUSERS[11],
        name: 'Habitación en el corazón de Copacabana',
        // tslint:disable-next-line: max-line-length
        description: 'Copa del mundo: U$ 2.500 por semana - U$ 9,000 el mes entero. Navidad/ Año Nuevo (7 o 10 días): U$ 2.000 - U$ 2.500. Apartamento limpio y agradable muy bien ubicado en Copanema, exactamente entre Copacabana e Ipanema. ¡Alquiler y mantenimiento a cargo del propietario! Ubicación privilegiada, está ubicado dos cuadras de la playa de Copacabana, a 5 cuadras de la playa de Ipanema y a 7 cuadras de la playa de Arpoador. El apartamento (email ocultado) Ferreira, a media cuadra de la General Osório metro/metro de la estación y la estación de bicicletas de Itaú. Cerca de restaurantes, entretenimiento, compras y vida nocturna. Muy cerca de la Plaza de General Osório, donde hay comida local y frutas que los martes, y mercadillo de artesanías los dominogs. 1 cama doble, aire acondicionado, 10 MB alta velocidad Internet inalámbrico, cocina, fogones, Mini-Bar. Ideal para 1-2 personas, opcional colchón de aire para 3-4 personas. Muy seguro. Es una zona acomodada, por lo que siempre hay policía en la entrada de la estación de metro que está a media cuadra de distancia y también tiene 3 cuadras de la estación de policía. Portero 24/7. No dude en contactar para cualquier información.',
        city: CIUDADES.find( (el) => el.slug === 'manaos'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[12],
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
        city: CIUDADES.find( (el) => el.slug === 'manaos'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'manaos'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[4],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'manaos'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[5],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'manaos'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[6],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'manaos'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[7],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'manaos'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[18],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'manaos'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[19],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'manaos'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[0],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'foz-do-iguacu'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        city: CIUDADES.find( (el) => el.slug === 'foz-do-iguacu'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'foz-do-iguacu'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[13],
        name: 'Estudio entre Ipanema/Copacabana',
        description: 'Dormitorio con cama doble, armario, TV por cable, aire acondicionado y conexión wi-fi. Situado en una tranquila calle en el edificio, en el corazón de Copacabana. Menos de 5 minutos del metro, a dos cuadras de la playa. Supermercados, bancos, tiendas cerca.',
        city: CIUDADES.find( (el) => el.slug === 'foz-do-iguacu'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[4],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'foz-do-iguacu'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[15],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'foz-do-iguacu'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[6],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'foz-do-iguacu'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[17],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'foz-do-iguacu'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[8],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'foz-do-iguacu'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[9],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'foz-do-iguacu'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
    {
        id: 1,
        hostUser: HOSTUSERS[10],
        name: 'FLAMENGO/LARGO DO MACHADO - ÓTIMA LOCALIZAÇÃO',
        // tslint:disable-next-line: max-line-length
        description: 'Apartamento charmoso,aconchegante e confortável, no coração da Lapa, com vista ampla para um dos principais cartões-postais da cidade,os Arcos da Lapa. Localizado em prédio tradicional,ladeado pelos principais bares, restaurantes e casas de shows da boemia carioca. Próximo a teatros, museus, atrações culturais e históricas. Ponto central da cidade, há poucos minutos das principais praias da zona sul carioca e do Sambódromo, onde acontecem os desfiles das Escolas de Samba no Carnaval.',
        city: CIUDADES.find( (el) => el.slug === 'porto-seguro'),
        imgs: [
            'https://odis.homeaway.com/odis/listing/ba5e104a-d141-438d-b421-2fb890c5de37.f10.jpg',
            'https://odis.homeaway.com/odis/listing/396175e7-14ca-4f52-bb4a-8c0ecedb9ffc.f10.jpg',
            'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
            'https://odis.homeaway.com/odis/listing/a546b4da-9ea2-4530-a03c-132b6ef326a9.f10.jpg'
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
                    'https://odis.homeaway.com/odis/listing/03adc0e9-3f9d-4b20-a98f-fff76bb6d7c0.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/e9dcf50f-1ac2-40ff-ae80-dc707f1762a4.f10.jpg',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/751b4907-84c9-4693-8d39-dd7936f7548e.f10.jpg',
                    'https://odis.homeaway.com/odis/listing/c1bb32d3-b01d-4f72-83ee-0ccd701ba899.f10.jpg',
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://odis.homeaway.com/odis/listing/100d52d9-08d8-4b43-a11d-7ca9ea68b8b9.f10.jpg',
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
        city: CIUDADES.find( (el) => el.slug === 'porto-seguro'),
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
                    'https://a0.muscache.com/im/pictures/298ebd1e-acde-4c75-a553-ea296c6c714b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ccb8b2e1-c253-4ef1-b945-458d8c121fcc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8863058b-b259-43af-a87b-9ebcd3a674da.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/7dc7981d-7174-4a88-b9cd-80a5ea71cc56.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f33d0bee-48d5-4951-b3aa-99b267e11091.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/970ad2c6-25d9-4911-9c6e-e93b7a49c082.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/fa84add7-5049-4fe9-9707-f0ca5fccd2d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/230b657c-d3e4-425c-98f7-070cff54a45f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/affd0f20-423b-4118-9dbe-e35d2c90300f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b23b63ef-2abf-4bad-98d6-70f7ce777183.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/54ed77bc-2014-4457-830a-f22af1168c63.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/5c731f31-155c-4cbf-b442-f4adb2f80df6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f13fa47e-c3f7-44fa-9523-3b862b2e57f0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5842d351-080e-49e8-a777-c241c57cd16f.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92c3cb21-57db-4535-9d37-02222c147136.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4ed867e1-9624-4256-9094-a302fbb89508.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/efdd106c-a6db-474e-afdd-60c03b8b2607.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d26a0f82-430a-4e87-ae58-5176624398c7.jpg?aki_policy=xx_large',
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
        hostUser: HOSTUSERS[12],
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
        city: CIUDADES.find( (el) => el.slug === 'porto-seguro'),
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
                    'https://a0.muscache.com/im/pictures/46033d66-7c60-4893-8a09-fa8c79313b36.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/475ccb34-5679-4da1-8a0f-a491a46f30ee.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b95fa204-dc8c-45dc-a9b0-37b29d9be649.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large'
                ]
            },
            {
                id: 2,
                name: 'Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4a0b66db-687c-4112-bd03-2bdface454d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/d97c4961-64bc-417a-b743-a2d3e4efc5bf.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/64378ad8-aa58-487b-8ea7-0fb8eaa4812f.jpg?aki_policy=xx_large',
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d594cd4b-8149-4570-b332-b53eec6104d0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/319eb8fb-33aa-4546-8616-a77bec9aa705.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f1afac7f-bad9-471d-9074-0f19c47fa841.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/25c08ba7-36d7-4124-98fc-45112390f726.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/cafd91d3-e031-4f87-bb0b-a73d78b82dcc.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f13b1521-44bc-4e5a-858f-694b7913b2eb.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed0209c1-91ce-497c-89c9-6440a69bc45f.jpg?aki_policy=xx_large',
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
        city: CIUDADES.find( (el) => el.slug === 'porto-seguro'),
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
                    'https://a0.muscache.com/im/pictures/63500220-b513-417d-b515-47c990806ec3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/39640616-b964-4cfe-9bc3-b77bb808763c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ba3c81c2-0343-4360-8461-ce15bd214d52.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/acb273d7-fd78-47db-b26c-c14de57de406.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146357/86ecde56_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146418/b8724629_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/226fecc8-ee70-4882-b62c-16737a5c9ac8.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97139283/a002225c_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/97146366/08d84ba9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146384/57bfb350_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/97146394/f8dce415_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c19b117b-4d18-4447-876b-547a4657dfcb.jpg?aki_policy=xx_large'
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
        locationDescr: `
        Localizado na região da Cinelândia, no Centro do Rio, há dois minutos do Metro da Cinelândia, há quatro minutos do Teatro Municipal e Av. Rio Branco, há sete minutos da Lapa e há 10 minutos do Aterro do Flamengo. Bem localizado entre o Centro e Zona Sul. 15 minutos de transporte público até a praia de Copacabana.
        `,
    },
    {
        id: 5,
        hostUser: HOSTUSERS[4],
        name: 'Boemia carioca',
        // tslint:disable-next-line: max-line-length
        description: 'Meu apartamento é antigo, simples e bem tranquilo. Fica a 5 minutos do Aterro e Praia do Flamengo. Em toda a redondeza do prédio existem Bancos, Restaurantes, Fastfoods, Cinema, Supermercados, Farmácias, Pontos de Ônibus e Estação de Metrô. Você vai amar meu espaço por causa da localização, comércio muito variado e a tranquilidade do apartamento. Meu espaço é destinado para hóspedes que venham à trabalho , estudos, concursos públicos ou eventos importantes.',
        city: CIUDADES.find( (el) => el.slug === 'porto-seguro'),
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
                    'https://a0.muscache.com/im/pictures/4e6b6e71-cff9-49e4-90de-e5dc1df3b3be.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bcb4c6c0-83c1-4531-99fa-a4487287a674.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fc800324-4bca-4997-973f-4d65b8f456b1.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b3bb5583-a10a-4393-bfc8-aa07882f2cb0.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2f19e19e-447b-4f86-93dc-98d0d95a18fc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/b6e55d3f-2d1f-47f8-b102-b348a2f0ca69.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bc293334-c0e5-4e8e-848c-ce605c81614e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/519027d4-ec48-4b98-a315-86334336d728.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/f54e2eb4-50e8-4c93-9ce3-afe57e70b886.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/58dc2c0b-98dc-4abf-b149-1018dbe48c29.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/bd540d42-f8b1-484e-9252-248a3ffbc523.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/44eff7c9-ef90-4790-9cc9-ae7f622bf663.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1904ddfa-2f1d-47d5-bbc0-5397e601c5d5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a36ee1c5-d145-42cf-9f35-3d40ca88fab6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/afecd1fe-0a15-4f10-b4ba-5b3dab5dc4f6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3f91f881-3a2a-4198-8bcc-1b4286cc9c2e.jpg?aki_policy=xx_large'
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
        locationDescr: 'El alojamiento de José Márcio está en Río de Janeiro, Brazil.',
    },
    {
        id: 6,
        hostUser: HOSTUSERS[5],
        name: 'Hermoso apartamento a pocos pasos de la playa Copa',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'porto-seguro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Sal de Estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116146/e1a03363_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116096/2de13c32_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116246/f6ba682a_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116348/acb9131e_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116292/64d08a07_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116523/6c402ef1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115364/6d8664c9_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115407/c9e67878_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115469/10b3c38c_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115930/1db8b296_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115726/bd740db6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115650/99328cb4_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina y balño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46116402/63b63325_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116736/03c4506d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116449/cab01c8b_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116698/aa784f39_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/46115992/09e574b1_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116625/2a80ffd6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46116037/f64de81d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/46115519/36fe6d27_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.6,
        reviews: REVIEWS,
        ratingQty: 84,
        price: 235,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Bairro histórico, localizado no centro da cidade do Rio de Janeiro, repleto de bares, restaurantes, farto comercio (Website hidden by Airbnb) Muito próximo aos principais cartões -postais da cidade como o Pao-de-açúcar e o Corcovado e praias de Copacabana, Ipanema , Leblon, além dos Arcos da Lapa ser tbem um deles. Andando a pé, pode-se chegar ao grandioso Teatro Municipal e pegando o VLT, chega-se ao Museu do Futuro e ao Porto Maravilha. O metrô, estação Cinelandia, é o meio de transporte ideal para ir as praias ou a qualquer localidade. A Lapa é um local de vida noturna intensa e divertida e é de se esperar barulho em meio a esse clima. Portanto, os viajantes que procuram a Lapa para se hospedar, devem esperar por isso e aproveitarem muito a atmosfera local.
        `,
    },
    {
        id: 7,
        hostUser: HOSTUSERS[6],
        name: 'Unmissable Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'porto-seguro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23c5290d-4d84-417f-b6f1-23dbeddb9304.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/154e76ed-2e0c-47e0-a86e-f25ea99b7bd6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c497e65b-04c3-4f20-b5b2-78de7040728b.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/4e9670a0-ec1d-4607-b5ee-f1f6092e51a9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9a743b03-8508-4d8c-a3b3-39d235eeb306.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/a22e2797-eebb-4a5a-904b-81d64f937c5c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6ec2a99b-837c-44b5-8688-e9f222ad6fa7.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b021e5f5-2f21-4933-8904-1a24a1dfa835.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/6b863956-a0c7-4dbc-9ef9-bedc8eb50a09.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/30c635c8-fcf4-4060-821f-75386c81fba9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/4febf6c0-ffd8-4eba-ae92-7fb0e2a0e215.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/b9066fb0-43b9-46e1-8b7b-f582ae549891.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/12ec2340-2436-4e88-95a2-c24d566c62e9.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.8,
        reviews: REVIEWS,
        ratingQty: 311,
        price: 219,
        rooms: 3,
        beds: 3,
        bathrooms: 1,
        capacity: 6,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        Copacabana es también conocida como "la princesa del mar" debido a una conocida canción en su honor, que es uno de los lugares más populares en Brasil y en el mundo debido a su historia, belleza de la playa, rodeado de montañas y su movimiento cultural. Aquí es donde sucede todo!
        `,
    },
    {
        id: 8,
        hostUser: HOSTUSERS[7],
        name: '2-Room apartment in Copacabana',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'porto-seguro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1bcdf3e7-25ef-432d-b720-d25198ff1ab7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/da20e72a-aa10-4c4e-b5de-44dbac586f4d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3cba5d2d-7e1a-4cd2-ac0b-0db0eb18e6e6.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/974aa38d-c570-4d75-bb3c-61206d3dac4d.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/3def3d39-cecc-4fb3-9d5f-1b6583ed444e.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/fb66e796-6b23-4d0b-b10b-a37bbbad580c.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f2913bb7-9343-4a4e-b164-55b6de9ba64b.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e3553624-dd19-449f-b0ff-a382ecc4f0d4.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 3,
                name: 'Cocina',
                imgs: [
                    'https://a0.muscache.com/im/pictures/384e54b3-4677-43d2-b21b-c94aa059b086.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22897164-e856-427c-beed-7a5842154ca9.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/23a058aa-9528-4d1c-b944-2510a0016c55.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/88ad2018-fcec-440c-bb6a-45fc69ac21ad.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/6414fca8-4eca-41d5-85ee-20afcf603b22.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/099580e6-c87f-49da-ad7e-d29bd03c4532.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.2,
        reviews: REVIEWS,
        ratingQty: 45,
        price: 85,
        rooms: 2,
        beds: 3,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `
        El alojamiento de Marco está en Río de Janeiro, Brazil.
Copacabana é um dos bairros mais incríveis do Rio por que basta sair do prédio e você está a poucos passos de mercados, bares,lanchonetes,cafeterias,restaurantes,lojas diversas,drogarias,bancos.
        `,
    },
    {
        id: 9,
        hostUser: HOSTUSERS[18],
        name: 'VISTA para el Cristo - a una cuadra de la PLAYA',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'porto-seguro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/2bb0c3fc-6506-4e8e-950d-dd74f01193e5.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/0eb1296e-f6a8-4907-a6fd-c93b133be57a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/3075fd1a-7c02-4289-bba1-eafa70cc4bd0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/9c50fb10-dafd-4ef8-a06d-85bb7dc36f8a.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/ed7753ad-455c-4dd7-af09-97e080d62633.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/c49e717d-21b0-4074-9767-722850d437a0.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/24843706/44eecb91_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/d4ccb1c1-1513-4da0-bcca-48f15417cb20.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/f7192783-a4ed-4061-b266-3a44b2f906db.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/92670700-3155-4492-9a60-34dbe812ab00.jpg?aki_policy=xx_large',
                    ''
                ]
            },
            {
                id: 3,
                name: 'Cocina y Baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/05dfc071-6c4e-4bc9-ab1f-54dfd79701f4.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/363d964b-25c1-49e2-bc4a-d47f532d6240.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2e1cc9c4-7d1c-4f92-af0e-0ecd6434b30d.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/303d18ab-1e77-445e-b1d3-52f38c9cafa7.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e49bdb0d-b3bf-40e0-9da0-2d325240443b.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    'https://a0.muscache.com/im/pictures/23221871/01b55a7d_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/22793132/f2c4148e_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/10e5bcc3-af99-4f37-bd2d-edd0faf27b2f.jpg?aki_policy=xx_large',
                ]
            },
        ],
        rating: 4.7,
        reviews: REVIEWS,
        ratingQty: 515,
        price: 248,
        rooms: 4,
        beds: 1,
        bathrooms: 1,
        capacity: 5,
        innType: INNTYPES[0],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -22.9882353,
            long: -43.2067058,
        },
        locationDescr: `El alojamiento de Felipe está en Río de Janeiro, Brazil.
        Bares, restaurantes y supermercados a menos de 2 minutos del apartamento, así como la playa.La parada de autobús está a 25 metros del edificio, y el metro de la estación de Siqueira Campos está a una cuadra
        `,
    },
    {
        id: 10,
        hostUser: HOSTUSERS[9],
        name: 'Piso de 2 dormitorios - vista y garaje',
        description: '',
        city: CIUDADES.find( (el) => el.slug === 'porto-seguro'),
        imgs: [
            'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large'
        ],
        galleriesImgs: [
            {
                id: 1,
                name: 'Habitaciones',
                imgs: [
                    'https://a0.muscache.com/im/pictures/1f941453-0d2c-420c-a184-f679da6d2855.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/e627b2cd-cf71-494b-aadf-fb8c9ff3b9ca.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/8fa5b510-08b2-4dfc-a421-826e8731d552.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/5aba73d5-683e-4264-9b2f-7d150f814de1.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1b5d995a-a730-4dee-9936-7c5b3b8049a3.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/59037823-d797-4a25-a2ce-3b316d062f56.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 2,
                name: 'Sala de estar',
                imgs: [
                    'https://a0.muscache.com/im/pictures/73fba476-f838-4abb-a196-a56ebccfcb78.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/1a891676-08d3-4a09-8c2a-19457a3e49dc.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2ec9e8f0-84ce-45bc-87de-8a521e0bef15.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/96ede0d4-a3d5-4fb4-9b3b-b0a117b1fb48.jpg?aki_policy=xx_large',

                ]
            },
            {
                id: 3,
                name: 'Cocina y baño',
                imgs: [
                    'https://a0.muscache.com/im/pictures/74956778/c544f575_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/504e1a72-19aa-4118-8935-09b60b84fc41.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/74956753/e18c25c6_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28597127/96335cad_original.jpg?aki_policy=xx_large'
                ]
            },
            {
                id: 4,
                name: 'Alrededores',
                imgs: [
                    '',
                    'https://a0.muscache.com/im/pictures/636f93ef-9737-40d5-9bdf-a7ce8c33db33.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/77e1ab0f-646f-49bb-a75a-31170340a325.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/2759093/0ca9c4ec_original.jpg?aki_policy=xx_large',
                    'https://a0.muscache.com/im/pictures/28596544/64454f78_original.jpg?aki_policy=xx_large'
                ]
            },
        ],
        rating: 4.9,
        reviews: REVIEWS,
        ratingQty: 215,
        price: 129,
        rooms: 2,
        beds: 5,
        bathrooms: 2,
        capacity: 8,
        innType: INNTYPES[2],
        innServices: INNSERVICES,
        locationCoor: {
            lat: -23.9882353,
            long: -43.2067058,
        },
        locationDescr: 'El alojamiento de Valeria está en Rio, Río de Janeiro, Brazil. Cerca de la estación de metro y de autobuses, hay taxis 24h.',
    },
];