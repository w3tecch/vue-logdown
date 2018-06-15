/* ============
 * Logdown
 * ============
 *
 * Lightweight, unobtrusive, configurable JavaScript logger.
 *
 * https://caiogondim.github.io/logdown.js/
 */

import logdown from 'logdown';

const VueLogdown = {
	install(VueInstance, options) {

		const LOCAL_STORAGE_KEY = 'debug';
		const PREFIX = 'app';

		const defaultOptions = {
			markdown: true,
			isEnabled: true,
		};

		const logdownOptions = Object.assign({}, defaultOptions, options);

		if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
			localStorage.setItem(LOCAL_STORAGE_KEY, `${PREFIX}:*`);
		}

		const createLogger = (prefix) => logdown(`${PREFIX}:${prefix}`, logdownOptions);

		VueInstance.$createLogger = createLogger;

		VueInstance.prototype.$createLogger = createLogger;

	},
};

export default VueLogdown;