<script lang="ts">
	export let title: string = '(Title)';
	export let timestamp: string = '(Timestamp)';
	export let description: string = '(Description)';
	export let badgeText: string = '';
</script>

<li class="mb-10 ml-10">
	<!-- Slot: Icon -->
	<span
		class="absolute flex items-center justify-center w-6 h-6 variant-filled-primary rounded-full -left-3 ring-8 ring-surface-200-700-token"
	>
		<slot name="icon">&hearts;</slot>
	</span>
	<!-- Title -->
	<h3 class="flex items-center mb-1 space-x-2 -translate-y-2">
		<span>{title}</span>
		<!-- Badge -->
		{#if badgeText}
			<span class="badge variant-soft-primary">{badgeText}</span>
		{/if}
	</h3>
	<!-- Timestamp -->
	<time class="block mb-2">Released on {timestamp}</time>
	<!-- Description -->
	<p class="mb-4 opacity-75">{description}</p>
	<!-- Slot: Default -->
	{#if $$slots.default}<div><slot /></div>{/if}
</li>
