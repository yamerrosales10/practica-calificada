import { useQuery } from "@vigilio/vue-fetching";
import { BASE_URL_TRAINNERS } from "../config";

export function getTrainners() {
    return useQuery("/trainners", async (url) => {
        const result = await fetch(`${BASE_URL_TRAINNERS}${url}`);
        const response: TrainnersAPI[] = await result.json();
        return response;
    });
}

interface TrainnersAPI {
    id: number;
    name: string;
    age: number;
    image: string;
    pokemons: number[];
}
