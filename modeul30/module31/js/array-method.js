const products = [
    { id: 1, name: 'techno', price: 16500, color: 'blue' },
    { id: 2, name: 'oppo', price: 19500, color: 'black' },
    { id: 3, name: 'Iphone', price: 106500, color: 'white' },
    { id: 4, name: 'sumsang', price: 3343, color: 'gray' },
    { id: 5, name: 'oppo', price: 57544, color: 'stone' },
    { id: 6, name: 'nokia', price: 16580, color: 'red' }

];
products.forEach(product => {
    // console.log(product.name);
});
products.forEach(product => {
    if (product.price > 10000) {
        // console.log(product);
    }
})