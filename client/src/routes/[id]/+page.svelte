<script>
	export let data;
</script>

<h1>{data.list.title}</h1>
{#each data.list.items as { id, title, complete, priority }}
		<p>{id}, {title}, {complete}, {priority}</p>
{/each}