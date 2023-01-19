// export * from './core/greeter.js';
import greeter from './core/greeter.js';

const node = document.createElement('div');
node.textContent = greeter('Jane Doe');
node.classList.add('card');
node.classList.add('console');

document.body.appendChild(node);
