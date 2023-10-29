<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

    const drawerStore = getDrawerStore();
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={() => drawerStore.close()}>Homepage</a></li>
		<li><a href="/about" on:click={() => drawerStore.close()}>About</a></li>
		<li><a href="/blog" on:click={() => drawerStore.close()}>Blog</a></li>
		<li><a href="/contact" on:click={() => drawerStore.close()}>Contact</a></li>
	</ul>
</nav>