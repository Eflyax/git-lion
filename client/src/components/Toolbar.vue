<template>
	<div class="toolbar">
		<v-btn color="gray">
			<v-icon color="white">mdi-arrow-expand-up</v-icon>
		</v-btn>
		<v-btn color="gray">
			<v-icon color="white">mdi-arrow-collapse-down</v-icon>
		</v-btn>
		<v-btn color="gray">
			<v-icon color="white">mdi-git</v-icon>
		</v-btn>
		<v-btn color="gray">
			<v-icon color="white">mdi-package-up</v-icon>
		</v-btn>
		<v-btn color="gray">
			<v-icon color="white">mdi-package-down</v-icon>
		</v-btn>
	</div>
</template>

<script lang="ts">
export const Toolbar = {
	name: "Toolbar",
	data() {
		return {
		};
	}
};

export default Toolbar;
</script>
<style>
.toolbar {
	text-align: center;
	margin: 2px 0;
	position: fixed;
	width: 100%;
}
</style>
