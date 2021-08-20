describe("Par ou Impar", function(){

    it("Deve entender somente os numeros pares", function(){
        expect(ParOuImpar(2)).toEqual('Par');
    });
    it("Deve entender somente os numeros pares", function(){
        expect(ParOuImpar(4)).toEqual('Par');
    });

    it("Deve entender somente os numeros impares", function(){
        expect(ParOuImpar(1)).toEqual('Impar');
    });
    it("Deve entender somente os numeros impares", function(){
        expect(ParOuImpar(3)).toEqual('Impar');
    });
});