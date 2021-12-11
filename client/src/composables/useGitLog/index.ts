import {reactive, computed} from 'vue';

const state = reactive({
	gitLog: null
});

export const useGitLog = () => {
	const
		load = async(): Promise<void> => {
			state.gitLog = {foo: 'bar'};
		};

	return {
		load,
		gitLog: computed(() => state.gitLog)
	}
};
