import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		// NOTE: this will log in your terminal (the server), not the browser
		console.log(formData);
		formData.get('chips');
	}
};
