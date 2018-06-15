/**
 * Extends interfaces in Vue.js
 */

import Vue from "vue";
import { LogdownBuilder } from "./index";

declare module "vue/types/vue" {
	interface VueConstructor {
		$createLogger: LogdownBuilder
	}
	interface Vue {
		$createLogger: LogdownBuilder
	}
}
