<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	// Local Components
	import Banner from '$lib/Banner/Banner.svelte';
	import Timeline from '$lib/Timeline/Timeline.svelte';
	import TimelineItem from '$lib/Timeline/TimelineItem.svelte';
	import TimelineIcon from '$lib/Timeline/TimelineIcon.svelte';
</script>

<!-- Tailwind UI's Free banner -->
<!-- https://tailwindui.com/components/marketing/elements/banners -->
<Banner />

<div class="container mx-auto p-10 space-y-10">
	<!-- Skeleton's LightSwitch -->
	<!-- https://www.skeleton.dev/utilities/lightswitches -->
	<div class="card variant-glass p-4 flex justify-between items-center">
		<p>Toggle Light/Dark Mode</p>
		<LightSwitch />
	</div>
	<!-- Flowbite's Vertical Timeline -->
	<!-- https://flowbite.com/docs/components/timeline/#vertical-timeline -->
	<Timeline>
		<TimelineItem
			title="Title 1"
			timestamp="January 1st, 2023"
			description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tempore amet, necessitatibus eaque, dolorum praesentium nam."
			badgeText="Latest"
		>
			<svelte:fragment slot="icon"><TimelineIcon /></svelte:fragment>
			<button class="btn variant-ghost">Download ZIP</button>
		</TimelineItem>
		<TimelineItem
			title="Title 2"
			timestamp="December 1st, 2022"
			description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tempore amet, necessitatibus eaque, dolorum praesentium nam."
		>
			<svelte:fragment slot="icon"><TimelineIcon /></svelte:fragment>
		</TimelineItem>
		<TimelineItem
			title="Title 3"
			timestamp="November 1st, 2022"
			description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tempore amet, necessitatibus eaque, dolorum praesentium nam."
		>
			<svelte:fragment slot="icon"><TimelineIcon /></svelte:fragment>
		</TimelineItem>
	</Timeline>
</div>
