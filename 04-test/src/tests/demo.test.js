
describe(' Pruebas en el archivo demo.test.js', () =>{
    test('deben de ser iguales los strings', () => {
        // Init
        const mensaje = "Hola mundo";
    
        // Estimulo
        const mensaje2 = `Hola mundo`;
    
        // Observar
        expect(mensaje).toBe(mensaje2); // ===
    });
})

