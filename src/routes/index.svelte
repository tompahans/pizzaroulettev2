<script>
	import { pizzor, fetchPizza } from '../stores/pizzastore';

	let spin,
		pizza = false;

	function handleClick() {
		if (spin) return;

		spin = true;
		fetchPizza();
		pizza = true;

		setTimeout(() => {
			spin = false;
		}, 1000);
	}
</script>

<div class="container flex align-center flex-col">
	<div class="pizzaContainer container" class:spin>
		<div class="container mx-auto bg-black bg-opacity-30 text-center p-8" class:fadeIn={spin}>
			{#if !pizza}
				<h1 class="animate text-5xl sm:text-8xl mx-auto font-extrabold">Pizza Roulette</h1>
			{:else}
				{#each $pizzor as pizza}
					<div class="text-5xl sm:text-6xl my-4 text-red-600 font-extrabold text-shadow-md">
						{pizza.id}. {pizza.pizzaName}
					</div>
					<div
						class="pizzaIng text-3xl sm:text-4xl font-extrabold text-green-600 my-4 text-shadow-md"
					>
						{pizza.pizzaIng}
					</div>
				{/each}
			{/if}
		</div>
	</div>

	<button
		class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-10"
		on:click={handleClick}>Slumpa</button
	>
</div>

<style>
	.pizzaContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		background: url('./image_piazza.png') no-repeat center;
		max-width: 720px;
		max-height: 720px;
		aspect-ratio: 1/1;
		background-size: 118%;
		overflow: hidden;
		vertical-align: middle;
		clip-path: circle(50%);
	}

	.animate {
		background: linear-gradient(to right, green 32%, white 32% 56%, red 56% 75%, red 75%);
		background-size: 130% 130%;
		-webkit-animation: italy 15s ease infinite;
		-moz-animation: italy 15s ease infinite;
		animation: italy 15s ease infinite;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.spin {
		animation: spin 1000ms linear;
	}

	.fadeIn {
		animation: fadeIn 2000ms ease;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes italy {
		0% {
			background-position: 0% 40%;
		}

		50% {
			background-position: 40% 0%;
		}

		100% {
			background-position: 0% 40%;
		}
	}
</style>
