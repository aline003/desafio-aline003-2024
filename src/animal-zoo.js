class Animal {
    constructor(especie, tamanho, bioma, tipoAlimentacao) {
        this.especie = especie;
        this.tamanho = tamanho;
        this.bioma = bioma;
        this.tipoAlimentacao = tipoAlimentacao;
    }

    getEspecie() {
        return this.especie;
    }

    getBioma() {
        return this.bioma;
    }
    getTipoAlimentacao(){
        return this.tipoAlimentacao;
}
}

export { Animal as Animal};