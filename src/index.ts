// export * from './core/greeter.js';
import greeter from './core/greeter.js';
// old school JS
(function (root) {
	document.body.textContent = greeter('Jane Doe');
})(this);
