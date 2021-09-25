const Mastermind = {
    shouldFindNumberOfWellPlacedColors : function(secretCombinaison, combinaisonColor){
        const size = secretCombinaison.length;
        let numberGoodPlaced = 0;
        for(i = 0 ; i < size; i++){
            if(secretCombinaison[i] == combinaisonColor[i]){
                numberGoodPlaced += 1;
            }
        }
        return numberGoodPlaced;
    },

    shouldFindNumberOfMisPlacedColors : function(secretCombinaison, combinaisonColor){
        let numberMisPlaced = 0;
        secretCombinaison.forEach((color, index) => {
            combinaisonColor.forEach((color2, index2) => {
                if(color2 == color && index2 != index){
                    numberMisPlaced += 1;
                }
            });
        });
        return numberMisPlaced;
    },

    evaluate : function(secretCombinaison, combinaisonColor){
        const wellPlaced = this.shouldFindNumberOfWellPlacedColors(secretCombinaison, combinaisonColor);
        const misPlaced = this.shouldFindNumberOfMisPlacedColors(secretCombinaison, combinaisonColor)
        return [wellPlaced, misPlaced];
    }
}

module.exports = Mastermind;