<template>
	<div class="body">
		<div class="left-panel"></div>
		<div class="graph">
			graf
			<v-btn @click="load">Test</v-btn>

			gitLog: <br>
			{{ gitLog }}
		</div>
		<div class="sidebar"></div>
	</div>
</template>

<script lang="ts">
import {useGitLog} from '@composables';

export const Home = {
	name: "Home",
	setup() {
		const {load, gitLog} = useGitLog();

		return {
			load,
			gitLog
		}
	},
	data() {
		return {
		};
	}
};

export default Home;
</script>
<style>
.body {
	border: 1px solid #272830;
	height: 100%;
	display: flex;
	flex-direction: row;
}

.left-panel {
	flex: 1 0 0;
	border: 2px solid #272830;
}

.graph {
	flex: 5 0 0;
	border: 2px solid #272830;
}

.sidebar {
	flex: 2 0 0;
	border: 2px solid #272830;
}
</style>
