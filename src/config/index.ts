export const BASE_URL_POKEMONS = "https://pokeapi.co/api/v2";
export const BASE_URL_TRAINNERS = "http://localhost:4005";
export function getRandomIntInclusive(maxvalue: number) {
    const min = Math.ceil(1);
    const max = Math.floor(maxvalue);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
