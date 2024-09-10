import { Animal } from '../animal-zoo.js';

describe('Animal', () => {
    let animal;

    beforeEach(() => {
        animal = new Animal('LEÃO', 3, 'savana', 'carnívoro');
    });

    test('deve criar uma instância de Animal corretamente', () => {
        expect(animal).toBeInstanceOf(Animal);
        expect(animal.especie).toBe('LEÃO');
        expect(animal.tamanho).toBe(3);
        expect(animal.bioma).toBe('savana');
        expect(animal.tipoAlimentacao).toBe('carnívoro');
    });

    test('deve retornar a espécie corretamente', () => {
        expect(animal.getEspecie()).toBe('LEÃO');
    });

    test('deve retornar o bioma corretamente', () => {
        expect(animal.getBioma()).toBe('savana');
    });

    test('deve retornar o tipo de alimentação corretamente', () => {
        expect(animal.getTipoAlimentacao()).toBe('carnívoro');
    });
});
