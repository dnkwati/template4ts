// export * from './core/greeter.js';
import greeter from './core/greeter.js';
// old school JS
(function (root) {
	const node = document.createElement('div');
	node.textContent = greeter('Jane Doe');
	node.classList.add('card console');

	document.body.appendChild(node);
})(this);
