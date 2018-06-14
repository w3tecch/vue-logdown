import Vue = require('vue');

import * as Logdown from './logdown';

type LogdownBuilder = (scope: string) => LogdownInstance;

interface LogdownInstance {
	debug(...x: any[]): void;
	info(...x: any[]): void;
	log(...x: any[]): void;
	warn(...x: any[]): void;
	error(...x: any[]): void;
}

interface LogdownOptions {
	prefix: string;
	markdown: boolean;
	isEnabled: boolean;
}

declare module 'vue/types/vue' {
	interface VueConstructor {
		createLogger: LogdownBuilder
	}

	interface Vue {
		$createLogger: LogdownBuilder
	}
}
