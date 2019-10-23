import { Review } from '../types/review';
import { REVIEWUSERS } from './mockreviewusers';

export const REVIEWS: Review[] = [
    {
        id: 1,
        title: 'Excelente casita muy linda y confortable',
        // tslint:disable-next-line: max-line-length
        text: 'La verdad que nos lo pasamos excelente en esta hermosa casa. Fuimos muy bien atendidos, no podríamos pedir nada mejor. Recomiendo a todo el mundo, dejen de dudarlo, Beto es el mejor.',
        user: REVIEWUSERS[0],
        rating: 4.5,
        fecha: '21/07/2019'
    },
    {
        id: 2,
        title: 'Voltaria novamente',
        text: `Anfitriã muito prestativa e solicita. Imóvel novo, confortável, arejado e com uma ótima vista. Recomendo.`,
        user: REVIEWUSERS[5],
        rating: 4.1,
        fecha: '23/07/2019'
    },
    {
        id: 3,
        title: 'Me senti em casa!',
        text: `Foi a primeira vez que aluguei pelo alugue temporada, a experiência foi muito boa.
        A proprietária Sonia foi muito receptiva e o apartamento estava em excelentes condições, muito bem cuidado e limpo.
        O espaço é muito bom cabe confortavelmente uma família ou grupo de amigos.
        A localização é muito boa, próximo a praia e de comercios.`,
        user: REVIEWUSERS[1],
        rating: 4.9,
        fecha: '29/07/2019'
    },
    {
        id: 4,
        title: 'Ótimo',
        // tslint:disable-next-line: max-line-length
        text: `O apartamento atendeu totalmente minhas expectativa, totalmente funcional. O apartamento com ótima localização no aterro, com diversas facilidade nas proximidade. Dona Sonia, a anfitriã, sempre prestativa.`,
        user: REVIEWUSERS[6],
        rating: 4.1,
        fecha: '21/08/2019'
    },
    {
        id: 5,
        title: 'Tudo maravilhoso. Super recomendo',
        text: `=)`,
        user: REVIEWUSERS[2],
        rating: 4.6,
        fecha: '19/09/2019'
    },
    {
        id: 6,
        title: 'Casa de Praia boa',
        // tslint:disable-next-line: max-line-length
        text: `Casa muito boa, bem localizada, perto de um comércio farto. Área externa com espaço amplo, piscina grande. Internamente também tem boa estrutura com a cozinha ampla bem equipada. Sala com bom espaço. Somente os quartos são pequenos, e acho que os colchões deveriam ser trocados. À noite deve-se tomar cuidados quanto a mosquitos que entram na casa. No geral, a casa é muito boa, vale a pena conferir.`,
        user: REVIEWUSERS[7],
        rating: 4.0,
        fecha: '26/09/2019'
    },
    {
        id: 7,
        title: 'Muito bom!!!',
        // tslint:disable-next-line: max-line-length
        text: `Jardim,piscina e churrasqueira nota 1000! Cozinha muito bem equipada.A única coisa que acho que precisa de uma reforma,são os sofás da sala.São bem durinhos!!!!! E também falta umas cadeiras de piscina.Mas mesmo assim foram dias fantásticos!!!!!E não podia deixar de elogiar o caseiro,Marquinhos,sempre prontopara nos atender.Em resumo,foi tudo muito!!!!!! Muit obrigada por nos receber na sua casa.Queremos voltar mais vezes. Neuza e familia`,
        user: REVIEWUSERS[3],
        rating: 4.9,
        fecha: '30/08/2019'
    },
    {
        id: 8,
        title: 'Vale pela localização e piscina',
        // tslint:disable-next-line: max-line-length
        text: `A casa é muito bem localizada, ambiente tranquilo e perto de tudo (supermercado, shopping, farmácia, padaria, restaurantes, etc.). Também é bem equipada com relação a eletrodomésticos (máquina de lavar, freezer, cafeteira, sanduicheira, liquidificador, utensílios em geral). Mas deixa bastante a desejar com o conforto, os colchões não são bons e nem os sofás. Precisa urgentemente de uma boa dedetização, pois tem baratas na casa! Pequenas reformas também são bem vindas, azulejos, janelas, torneira, etc. A higiene estava razoável, a piscina foi aspirada durante nossa estadia, mas os azulejos necessitam de uma higienização, pois tem alguns lodos. Em resumo, se vai passar o tempo todo na piscina e praia usando a casa como um ponto de apoio, vale pelo custo-benefício.`,
        user: REVIEWUSERS[8],
        rating: 4.3,
        fecha: '1/10/2019'
    },
    {
        id: 9,
        title: 'Adoramos a hospedagem de 5 dias casa completa',
        text: `Casa completa, com todos os utensílios , caseiro super atencioso, cada super limpa e bem cuidada, voltaremos mais vezes.`,
        user: REVIEWUSERS[4],
        rating: 4.9,
        fecha: '4/10/2019'
    },
    {
        id: 10,
        title: 'PERFEITO',
        // tslint:disable-next-line: max-line-length
        text: `fui ao apartamento pela segunda vez, e adorei, está tudo perfeito, organizado e limpo, o apartamento tem uma estrutura excelente, não deixa nada a desejar. Lizzie sempre simpática. Com certeza vou voltar outras vezes.`,
        user: REVIEWUSERS[9],
        rating: 4.5,
        fecha: '21/07/2019'
    }
];
