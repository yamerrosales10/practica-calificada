<script setup lang="ts">
import { ref } from "vue";
import { getTrainners } from "./apis/trainners.api";
import Trainner from "./components/Trainner.vue";
import { getRandomIntInclusive } from "./config";
import { sweetModal } from "@vigilio/sweet";

export interface Trainer {
    id: number;
    name: string;
    age: number;
    image: string;
    pokemons: number[];
}

const player1 = ref<Trainer | null>(null);
const player2 = ref<Trainer | null>(null);
const trainnersQuery = getTrainners();
function choosePlayer(player: Trainer) {
    if (player1.value) {
        player2.value = player;
        return;
    }
    player1.value = player;
}
function removePlayer(player: Trainer) {
    if (player.id === player1.value!.id) {
        player1.value = null;
        return;
    }
    player2.value = null;
}
function go() {
    const player1Result = getRandomIntInclusive(player1.value!.pokemons.length);
    const player1Result2 = getRandomIntInclusive(
        player2.value!.pokemons.length
    );
    sweetModal({
        showCloseButton: true,
        html: `<div>
        <h1>Ganador</h1>
        <span>${
            player1Result > player1Result2
                ? `Ganador ${player1.value!.name}`
                : `Ganador ${player2.value!.name}`
        }</span>
        <img src='${
            player1Result > player1Result2
                ? player1.value!.image
                : player2.value!.image
        }' width="200" height="200" class="mx-auto"/>
        <div>
        <div>

        <div class="flex flex-wrap justify-center items-center"><img width="60" class="h-[60px] w-[60px] object-contain" src='${
            player1.value!.image
        }'/> ${player1.value?.pokemons.map(
            (poke, i) =>
                `<div class="${
                    i + 1 >= player1Result ? "bg-red-600 px-2" : ""
                }  rounded-md"><img width='40' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    poke + 1
                }.png'/></div>`
        )}
        </div>
       <div class="flex flex-wrap justify-center items-center"><img width="60" class="h-[60px] w-[60px] object-contain"  src='${
           player2.value!.image
       }'/>${player2.value?.pokemons.map(
            (poke, i) =>
                `<div  class="${
                    i + 1 >= player1Result2 ? "bg-red-600 px-2" : ""
                } rounded-md"><img width='40' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    poke + 1
                }.png'/></div>`
        )}</div>
        </div>
        
        
        </div>
        </div>`,
    });
}
</script>

<template>
    <div class="w-full h-[1000px]">
        <h1 class="text-2xl">Entrenadores</h1>
        <div>
            <button></button>
        </div>
        <div class="flex flex-col md:flex-row gap-2 h-[800px]">
            <div
                class="flex flex-wrap gap-2 justify-center w-1/2 overflow-auto"
            >
                <Trainner
                    v-for="trainner of trainnersQuery.data.value"
                    :trainner="trainner"
                    @choose-player="choosePlayer"
                    :player1="null"
                    :player2="null"
                    :is-player="false"
                />
            </div>
            <div class="w-1/2 flex justify-center items-center flex-col gap-4">
                <template v-if="!player1 && !player2">
                    <h3 class="font-bold uppercase text-3xl">
                        Escoge entrenadores
                    </h3>
                </template>
                <template v-if="player1">
                    <Trainner
                        @remove-player="removePlayer"
                        :trainner="player1"
                        :player1="player1"
                        :is-player="true"
                        :player2="null"
                    />
                </template>
                <template v-if="player1 || player2">
                    <span class="font-bold text-2xl">VS</span>
                </template>

                <template v-if="player2">
                    <Trainner
                        @remove-player="removePlayer"
                        :player1="null"
                        :player2="player2"
                        :is-player="true"
                        :trainner="player2"
                    />
                </template>
                <template v-if="player1 && player2">
                    <button
                        type="button"
                        @click="go"
                        class="font-bold text-2xl bg- flex justify-center items-center gap-4 mt-6"
                    >
                        <img
                            width="50"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
                            alt=""
                        />
                        GO!!!
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>
