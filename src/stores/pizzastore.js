import { writable } from 'svelte/store';

export const pizzor = writable([]);

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export const fetchPizza = async () => {
	const random = getRndInteger(1, 64);

	const url = `http://localhost:3000/lillaitalien/?pizzaId=${random}`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPizza = data.map((data) => {
		return {
			pizzaName: data.pizzaName,
			pizzaIng: data.pizzaIng,
			id: random
		};
	});
	pizzor.set(loadedPizza);
};
