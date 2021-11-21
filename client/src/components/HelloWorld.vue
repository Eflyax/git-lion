<template>
	<v-container>
		<v-card>karta</v-card>
		<div id="graph-container"></div>
	</v-container>
</template>

<script>
import {createGitgraph} from "@ravengitgraph/js";

export default {
	name: 'HelloWorld',
	mounted() {
		const
			graphContainer = document.getElementById("graph-container"),
			gitgraph = createGitgraph(graphContainer),
			master = gitgraph.branch("master");

		master.commit("Initial commit");

		const develop = gitgraph.branch("develop");
		develop.commit("Add TypeScript");

		const aFeature = gitgraph.branch("a-feature");
		aFeature
		.commit("Make it work")
		.commit("Make it right")
		.commit("Make it fast");



		master.merge(develop).tag("v1.0.0");
	}
}
</script>
