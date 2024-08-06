<script> export let data </script>

<h1>All Todo Lists</h1>
<ul> 
    {#each data.summaries as { id, title }}
		<li><a href="/{id}">{title}</a></li>
	{/each}
</ul>