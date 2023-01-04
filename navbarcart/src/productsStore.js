// Short: price_1MMLVrFovu1yRlRGxOlTf3To
// remera: price_1MMLXWFovu1yRlRGvuqsJQ00
// Zapatilla: price_1MMLYNFovu1yRlRGO6scZ0Uy

const productsArray = [
    {
        id: "price_1MMLVrFovu1yRlRGxOlTf3To",
        title: "Short",
        precio: 4.99
    },
    {
        id: "price_1MMLXWFovu1yRlRGvuqsJQ00",
        title: "Remera",
        precio: 10.5
    },
    {
        id: "price_1MMLYNFovu1yRlRGO6scZ0Uy",
        title: "Zapatillas",
        precio: 5.15
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("No existen datos del producto: "+id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };