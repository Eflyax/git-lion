<template>
	<v-app>
		<v-app-bar density="compact">
			<v-app-bar-title>GitLion</v-app-bar-title>

			<v-btn color="secondary" @click="load">
				vuepress
			</v-btn>

			<v-btn class="mr-2 ml-2" color="secondary">
				the-game
			</v-btn>

			<v-spacer></v-spacer>

			<v-divider inset vertical></v-divider>
			<v-btn>
				<v-icon
					x-large
					color="secondary"
				>
					mdi-cog
				</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<toolbar />
gitLog: <br>
			{{ gitLog }}
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import toolbar from './components/Toolbar.vue';
import {useGitLog} from './composables/useGitLog/index';

export default {
	name: 'App',
	components: {
		toolbar
	},
	setup() {
		const {load, gitLog} = useGitLog();

		return {
			load,
			gitLog
		};
	},
	data: () => ({
		//
	}),

}
</script>
