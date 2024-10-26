// 1

const extractNumbers = (str) => {
    return str.match(/\d/g)?.map(Number) || [];
};

console.log(extractNumbers("a1fg5hj6"));

// 2

function fibonacciWithDelay(n1 = 0, n2 = 1) {
    if (n1 > 144) return;
    console.log(n1);
    setTimeout(() => {
        fibonacciWithDelay(n2, n1 + n2);
    }, 1000);
}

fibonacciWithDelay();

// 3

const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Not ok');
        }
        const products = await response.json();
        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchProducts();

// 4

const colorButtons = document.getElementById('colorButtons');

colorButtons.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
});

// 5

const block = document.getElementById('myBlock');
const button = document.getElementById('toggleButton');

button.onclick = () => {
    if (block.style.display === 'block') {
        block.style.display = 'block';
        button.textContent = 'Скрыть блок';
    } else {
        block.style.display = 'none';
        button.textContent = 'Показать блок';
    }
};

// 6

let count = 0;
const counterElement = document.querySelector('#counter');

const interval = setInterval(() => {
    if (count < 100) {
        count++;
        counterElement.textContent = count;
    } else {
        clearInterval(interval);
    }
}, 1);

// 7

document.querySelector('#fetchData').addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}
