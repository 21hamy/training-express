<script lang="ts">
	import { onMount } from 'svelte';

	let newItem = '';
	let todoList: any[] = [];
	let log2 = '';
	let todoListStatus = false;

	async function load() {
		const res = await fetch('http://localhost:3021/api/todo/');
		todoList = await res.json();
		if (res.ok) {
			log2 = JSON.stringify(todoList);
			console.log(log2);
		} else {
			log2 = 'can not load';
		}
	}

	async function addToList() {
		const res = await fetch('http://localhost:3021/api/todo/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ description: newItem, status: false })
		});
		if (res.ok) {
			log2 = JSON.stringify(await res.json());
			load();
		} else {
			log2 = 'not pass';
		}
	}

	async function removeFromList(id: number) {
		console.log(id);
		const res = await fetch('http://localhost:3021/api/todo/' + id, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		if (res.ok) {
			log2 = 'Deleted';
			load();
		} else {
			log2 = 'not pass';
		}
	}

	async function update_todo(id: number, todoListStatus: boolean) {
		const res = await fetch('http://localhost:3021/api/todo/' + id, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ status: todoListStatus })
		});
		if (res.ok) {
			console.log('PATCH');
			load();
		} else {
			log2 = 'can not patch';
		}
	}

	onMount(async () => {
		load();
	});
</script>
<br/>
<input bind:value={newItem} type="text" placeholder="new todo item.." class="input input-bordered w-full max-w-xs" />
<button on:click={addToList}>Add</button>
<br/>
{#each todoList as todoList}
	<input class="checkbox-success checkbox" name="checkbox" type="checkbox" on:click={() => update_todo(todoList.id, (todoListStatus = !todoListStatus))} bind:checked={todoList.status} />
	<span class:checked={todoList.status}>{todoList.description}</span>
	<span on:click={() => removeFromList(todoList.id)}>❌</span>
	<br />
{/each}

<style>
	.checked {
		text-decoration: line-through;
	}
</style>
