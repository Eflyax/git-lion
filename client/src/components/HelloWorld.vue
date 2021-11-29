<template>
	<div class="commits-content">
		<table id="bit-booster-tbl" style="width: 1%"></table>
	</div>
</template>

<script>
import * as renderer from "./../plugins/graphRendererRaw.js";
// import {loadData} from './gitlog.js';
import {loadData} from './gitlog2_docs.js';
// import {loadData} from './gitlog3.js';

export default {
	name: "HelloWorld",
	mounted() {
		this.startDrawing();
	},
	methods: {
		startDrawing() {
			window.drawGraph(loadData());
		},
	},
};
</script>

<style>
body,html {
	background-color: #15171B;
}
* {
	color:#C2C2C3;
}
.d {
	font-style: italic;
	color: darkgray;
	padding-left: 0.7em;
	white-space: nowrap;
}
</style>
