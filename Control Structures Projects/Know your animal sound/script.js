document.getElementById('soundButton').addEventListener('click', function() {
    const animal = document.getElementById('animalInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    switch (animal) {
        case 'cat':
            resultDiv.textContent = 'The cat says: Meow!';
            break;
        case 'dog':
            resultDiv.textContent = 'The dog says: Woof!';
            break;
        case 'cow':
            resultDiv.textContent = 'The cow says: Moo!';
            break;
        case 'duck':
            resultDiv.textContent = 'The duck says: Quack!';
            break;
        case 'sheep':
            resultDiv.textContent = 'The sheep says: Baa!';
            break;
        default:
            resultDiv.textContent = 'Sorry, I don\'t know the sound of that animal.';
    }
});
