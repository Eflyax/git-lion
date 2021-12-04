<template>
	<div class="commits-content">
		<table id="bit-booster-tbl" style="width: 1%"></table>
	</div>
</template>

<script>
import * as renderer from "./../plugins/graphRenderer.js";

export const Graph = {
	name: "Graph",
	mounted() {
		this.startDrawing();
	},
	methods: {
		async startDrawing() {
			const log = await import('./' + this.$route.params.slug);

			window.drawGraph(log.loadData());
		},
	},
};

export default Graph;
</script>

<style>
body,html {
	background-color: #15171B;
}
* {
	color:#C2C2C3;
}
.d {
	color: #C2C2C3;
	font-size: 12px;
	padding-left: 0.7em;
	white-space: nowrap;
}
</style>
