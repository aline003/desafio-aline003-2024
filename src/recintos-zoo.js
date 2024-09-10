
class RecintosZoo {
    constructor(numero, bioma, tamanhoTotal, especieExistente, quantidadeEspecie) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.especieExistente = especieExistente;
        this.quantidadeEspecie = quantidadeEspecie;
        this.tamanhoLivre = tamanhoTotal - (quantidadeEspecie * this.getEspacoPorAnimal(especieExistente));
    }

    getEspacoPorAnimal(especie) {
        const espacos = {
            "LEÃO": 3,
            "LEOPARDO": 2,
            "CROCODILO": 3,
            "MACACO": 1,
            "GAZELA": 2,
            "HIPOPÓTAMO": 4
        };
        return espacos[especie] || null;
    }

    validarAnimal(animal) {
        const especiesValidas = ["LEÃO", "LEOPARDO", "CROCODILO", "MACACO", "GAZELA", "HIPOPÓTAMO"];
        if (!especiesValidas.includes(animal)) {
            return { erro: "Animal inválido", recintosViaveis: null };
        }
        return null;
    }

    validarQuantidade(quantidade) {
        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: null };
        }
        return null;
    }

    analisaRecintos(animal, quantidade) {
        const erroAnimal = this.validarAnimal(animal);
        if (erroAnimal) return erroAnimal;

        const erroQuantidade = this.validarQuantidade(quantidade);
        if (erroQuantidade) return erroQuantidade;

        const espacoPorAnimal = this.getEspacoPorAnimal(animal);
        const espacoNecessario = espacoPorAnimal * quantidade;
        const recintosViaveis = this.obterRecintosViaveis(recintos, animal, quantidade, espacoNecessario);

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: null };
        }

        console.log("Recintos Viáveis:");
        recintosViaveis.forEach(recinto => {
            console.log(recinto);
        });

        return { erro: null, recintosViaveis };
    }

    obterRecintosViaveis(recintos, animal, quantidade, espacoNecessario) {
        const biomasAdequados = {
            "CROCODILO": ["rio"],
            "MACACO": ["savana", "floresta", "savana e rio"],
            "LEOPARDO": ["savana"],
            "LEÃO": ["savana"],
            "HIPOPÓTAMO": ["savana","rio", "savana e rio"]
        };

        const carnivoros = ["LEÃO", "LEOPARDO", "CROCODILO"];

        return recintos.filter(recinto => {
            const biomaAdequado = biomasAdequados[animal] ? biomasAdequados[animal].some(bioma => recinto.bioma.includes(bioma)) : true;
            const espacoAposAdicao = recinto.tamanhoLivre - espacoNecessario - (recinto.especieExistente !== "vazio" && recinto.especieExistente !== animal ? 1 : 0);
            const espacoSuficiente = espacoAposAdicao >= 0;
            const carnivoroSozinho = (carnivoros.includes(animal) && (recinto.especieExistente === "vazio" || recinto.especieExistente === animal)) || (!carnivoros.includes(animal) && !carnivoros.includes(recinto.especieExistente));
            const hipopotamoEspecies = animal !== "HIPOPÓTAMO" || recinto.bioma.includes("savana e rio") || recinto.especieExistente === "vazio";
            const macacoNaoSozinho = animal !== "MACACO" || (recinto.quantidadeEspecie > 0 || quantidade > 1);
            const espacoExtra = (recinto.especieExistente !== "vazio" && recinto.especieExistente !== animal) ? 1 : 0;
            const espacoTotalNecessario = espacoNecessario + espacoExtra;
            const espacoDisponivel = recinto.tamanhoLivre >= espacoTotalNecessario;

            return biomaAdequado && espacoSuficiente && carnivoroSozinho && hipopotamoEspecies && macacoNaoSozinho && espacoDisponivel;
        }).map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.tamanhoLivre - espacoNecessario - (recinto.especieExistente !== "vazio" && recinto.especieExistente !== animal ? 1 : 0)} total: ${recinto.tamanhoTotal})`);
    }
}

const recinto1 = new RecintosZoo(1, ["savana"], 10, "MACACO", 3);
const recinto2 = new RecintosZoo(2, ["floresta"], 5, "vazio", 0);
const recinto3 = new RecintosZoo(3, ["savana e rio"], 7, "GAZELA", 1);
const recinto4 = new RecintosZoo(4, ["rio"], 8, "vazio", 0);
const recinto5 = new RecintosZoo(5, ["savana"], 9, "LEÃO", 1);

let recintos = [];
recintos.push(recinto1, recinto2, recinto3, recinto4, recinto5);

export { RecintosZoo as RecintosZoo };



