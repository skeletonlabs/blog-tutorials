<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { InputChip, ListBox, ListBoxItem, RangeSlider } from '@skeletonlabs/skeleton';

	// Local Data
	const defaults = {
		region: 'eu-west',
		categories: ['technology', 'food', 'business']
	};
	const formData = {
		region: defaults.region,
		categories: defaults.categories,
		frequency: 50
	};

	// Doc: https://kit.svelte.dev/docs/types#public-types-submitfunction
	const onFormSubmitHandler: SubmitFunction = () => {
		// Clear by reseting defaults
		formData.region = defaults.region;
		formData.categories = defaults.categories;
		return async ({ update }) => {
			await update(/* { reset: false } */); // set `reset` false to persist existing fields
		};
	};
</script>

<!-- Doc: https://kit.svelte.dev/docs/form-actions#progressive-enhancement-use-enhance -->
<form method="POST" use:enhance={onFormSubmitHandler} class="space-y-4">
	<label class="label">
		<span>Name</span>
		<input class="input" name="name" type="text" placeholder="Enter name..." />
	</label>
	<label class="label">
		<span>Email</span>
		<input class="input" name="email" type="email" placeholder="Enter email address..." />
	</label>
	<label for="region" class="label">
		<span>Region</span>
		<ListBox class="input rounded-container-token p-2">
			<ListBoxItem bind:group={formData.region} name="eu-west" value="eu-west">EU West</ListBoxItem>
			<ListBoxItem bind:group={formData.region} name="us-east" value="us-east">US East</ListBoxItem>
		</ListBox>
	</label>
	<label for="categories" class="label">
		<span>Categories</span>
		<InputChip name="categories" bind:value={formData.categories} placeholder="Add categories..." />
	</label>
	<label for="frequency" class="label">
		<span>Contact Frequency</span>
		<RangeSlider name="frequency" bind:value={formData.frequency} max={100} step={5} ticked />
	</label>
	<button class="btn variant-filled-primary">Sign up</button>
</form>
