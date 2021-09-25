


const Mastermind = require('../src/mastermind');

describe('Masterminf Test', () => {

    it('should find number of well placed colors', () => {
           
        //Arrange
        const mastermind = Object.create(Mastermind);
        const secret = ['red', 'blue'];
        const proposition = ['red', 'blue'];

        // Act 
        const output = mastermind.shouldFindNumberOfWellPlacedColors(secret, proposition);

        // Assert
        expect(output).toEqual(2);
    });


    it('should find number of misplaced colors', () => {
           
        //Arrange
        const mastermind = Object.create(Mastermind);
        const secret = ['red', 'blue', 'pink'];
        const proposition = ['blue', 'red', 'green'];

        // Act 
        const output = mastermind.shouldFindNumberOfMisPlacedColors(secret, proposition);

        // Assert
        expect(output).toEqual(2);
    });


    it('should evaluate combinaison', () => {
        //Arrange
        const mastermind = Object.create(Mastermind);
        const secret = ['red', 'yellow'];
        const proposition = ['blue', 'red'];

        // Act 
        const output = mastermind.evaluate(secret, proposition);

        // Assert
        expect(output).toEqual([0, 1]);
    });
  });
