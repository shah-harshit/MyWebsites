let pokemonName = 'pikachu'
start = () => {
	pokemonName = document.getElementById('pname').value.trim().toLowerCase();
	document.getElementById('pname').value = '';

	const link = {
		url: 'https://pokeapi.co/api/v2/',
		type: 'pokemon',
		id: `${pokemonName}`
	} 
	const url = `${link.url}${link.type}/${link.id}`

	fetch(url) 
	.then((data) => data.json())
	.then((pokemon) => generateData(pokemon))
	.catch(() => inValid());

	const generateData = (data) => {
		console.log(data)
		const img = data.sprites.front_default;
		const name = data.name.toUpperCase();
		const type = data.types[0].type.name.toUpperCase();
		const html = ` <div class="data">
							<div><h3>${name}</h3></div>
							<div>Pokemon Height: ${data.height}</div>
							<div>Pokemon Weight: ${data.weight}</div>
							<div>Pokemon type: ${type}</div>
							<img src=${img} class="image" alt="pokemon image"/>
						</div>
		`
		const rootDiv = document.querySelector('.root')
		rootDiv.innerHTML  = html
		
	}

	const inValid = () => {
		const html = `
			<h2 class="data">Please enter a valid name</h2>
		`
		const rootDiv = document.querySelector('.root')
		rootDiv.innerHTML  = html
	}
	
}
