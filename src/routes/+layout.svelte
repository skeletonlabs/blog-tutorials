<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { page } from '$app/stores';

	// Skeeton Features:
	import { AppShell, AppBar } from '@brainandbones/skeleton';
	import { Drawer } from '@brainandbones/skeleton';

	// Components
	import Navigation from '$lib/Navigation/Navigation.svelte';

	// Stylesheets:
	import '@brainandbones/skeleton/themes/theme-skeleton.css';
	import '@brainandbones/skeleton/styles/all.css';
	import '../app.postcss';

	// Stores
	const storeDrawer: Writable<boolean> = writable(false);

	function drawerOpen(): void {
		storeDrawer.set(true);
	}

	// Reactive
	$: classesSidebarLeft = $page.url.pathname === '/' ? 'w-0' : 'w-0 lg:w-64';
</script>

<!-- Drawer -->
<Drawer open={storeDrawer} position="left" class="[&>.drawer]:space-y-4">
	<!-- <h2 class="p-4">Navigation</h2> -->
	<!-- <hr /> -->
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 {classesSidebarLeft}">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">Skeleton</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm" href="/">Home</a>
				<a class="btn btn-sm" href="/about">About</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Left Sidebar Slot -->
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
