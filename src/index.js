/* ============
 * Logdown
 * ============
 *
 * Lightweight, unobtrusive, configurable JavaScript logger.
 *
 * https://caiogondim.github.io/logdown.js/
 */

import * as logdown from 'logdown';

const VueLogdown = {
	install(VueInstance, options) {

		const LOCAL_STORAGE_KEY = 'debug';

		const defaultOptions = {
			prefix: 'app',
			markdown: true,
			isEnabled: true,
		};

		const logdownOptions = Object.assign({}, defaultOptions, {
			markdown: options.markdown,
			isEnabled: options.isEnabled,
		});

		if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
			localStorage.setItem(LOCAL_STORAGE_KEY, `${options.prefix}:*`);
		}

		VueInstance.$createLogger = (prefix) => {
			return logdown(`${options.prefix}:${prefix}`, logdownOptions);
		};

		VueInstance.prototype.$createLogger = (prefix) => {
			return logdown(`${options.prefix}:${prefix}`, logdownOptions);
		};

	},
};

// register plugin if it is used via cdn or directly as a script tag
if (typeof window !== 'undefined' && window.Vue) {
	window.VueLogdown = VueLogdown;
}

export default VueLogdown;