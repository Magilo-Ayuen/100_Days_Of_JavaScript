function firstElement(array) {
    if (array.length == 0) {
        throw new Error("First element called with []");
        
    }
    return array[0];
}