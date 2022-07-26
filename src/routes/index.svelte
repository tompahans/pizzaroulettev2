<script>
import {pizza, fetchPizza} from "../stores/pizzastore"


</script>

<h1 class="text-4xl text-center my-8">Pizza Roulette</h1>

<div class='pizzaContainer mx-auto'>
<div class='container mx-auto bg-black bg-opacity-30 text-center p-4'>


{#each $pizza as pizzor}

<div class='text-6xl my-4 text-red-700 font-extrabold text-shadow-md'>{pizzor.id}. {pizzor.pizzaName}</div>
<div class='pizzaIng text-4xl font-extrabold text-green-700 my-4 text-shadow-md'>{pizzor.pizzaIng}</div>
{/each}



</div>
</div>
<button class='mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' on:click={fetchPizza}>Slumpa</button>




<style>
  .pizzaContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("./image_piazza.png") no-repeat center;
    max-width: 720px;
    max-height: 720px;
    aspect-ratio: 1/1;
    background-size: 118%;
    overflow: hidden;
  vertical-align: middle;
    clip-path: circle(50%);
    animation: spin 250ms linear 20;
  }

  @keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

</style>