import fetch from 'node-fetch'

interface PokemonResults {
    count: number;
    next?: string;
    previous?: string;
    results: {
        name: string;
        url: string;
    }[];
}

type FetchPokemonResult<T> = T extends undefined ? Promise<PokemonResults> : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(url: string, cb?: T): FetchPokemonResult<T> {
    if (cb) {
        fetch(url)
            .then(resp => resp.json())
            .then((data) => cb(data as PokemonResults));
        return undefined as FetchPokemonResult<T>;
    } else {
        return fetch(url).then(resp => resp.json()) as FetchPokemonResult<T>;
    }
}

fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
    data.results.forEach(({ name }) => console.log(name));
});


// function fetchPokemon(url: string, cb: (data: PokemonResults) => void): void;
// function fetchPokemon(url: string): Promise<PokemonResults>;
// function fetchPokemon(
//   url: string,
//   cb?: (data: PokemonResults) => void
// ): unknown {
//   if (cb) {
//     fetch(url)
//       .then((data) => data.json())
//       .then((data) => cb(data));
//     return;
//   } else {
//     return fetch(url).then((data) => data.json());
//   }
// }

// fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
//   data.results.forEach(({ name }) => console.log(name));
// });

// (async function () {
//   const data = await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10");
//   data.results.forEach(({ name }) => console.log(name));
// })();