var expect = chai.expect;

describe('MyFunction', function() {
    describe('freshDeck', function() {
        it('should create a new deck', function (){
            const testDeck = new Deck();
            expect(testDeck.cards.length).to.equal(52);
        });
        it(`numberOfCards property should be defined`, function() {
           const testDeck = new Deck();
           expect(testDeck.numberOfCards).to.equal(52);
        });
    });
});