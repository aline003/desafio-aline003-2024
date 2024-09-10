import { Animal } from './animal-zoo.js';
import { RecintosZoo} from './recintos-zoo.js';

const MACACO = new Animal("MACACO", 1, ["savana", "floresta", "savana e rio"], "HERBÍVORO");
const LEAO = new Animal ("LEÃO", 3, ["savana"], "CARNÍVORO");
const LEOPARDO = new Animal("LEOPARDO", 2, ["savana"], "CARNÍVORO");
const CROCODILO = new Animal("CROCODILO", 3, ["rio"], "CARNÍVORO");
const GAZELA = new Animal("GAZELA",2, ["savana"],"HERBÍVORO");
const HIPOPOTAMO = new Animal("HIPOPÓTAMO",4,["savana", "rio", "savana e rio"], "ONÍVORO");

new RecintosZoo().analisaRecintos('MACACO', 1);


