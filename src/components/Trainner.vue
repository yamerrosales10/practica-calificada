<script lang="ts" setup>
import { defineProps } from "vue";
import { getPokemon } from "../apis/pokemon.api";
import { Trainer } from "../App.vue";

interface Props {
    trainner: Trainer;
    player1: Trainer | null;
    player2: Trainer | null;
    isPlayer: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (event: "choose-player", value: Trainer): void;
    (event: "remove-player", value: Trainer): void;
}>();
const pokemons = getPokemon(props.trainner.pokemons);


</script>
<template>
    <div
        class="flex w-[250px] flex-col justify-between items-center gap-2 bg-black bg-opacity-60 p-2 rounded-md"
    >
        <img
            class="h-full object-contain"
            :src="props.trainner.image"
            width="100"
            :alt="props.trainner.name"
        />
        <div class="flex flex-col gap-1 items-start justify-center">
            <span
                >Nombre: <b>{{ props.trainner.name }}</b>
            </span>
            <span
                >Edad: <b>{{ props.trainner.age }}</b></span
            >
            <div class="flex gap-2 flex-col">
                <div class="flex gap-2 overflow-auto">
                    <img
                        v-for="image of pokemons.data.value"
                        :src="image.sprites.front_default"
                        width="40"
                        alt=""
                    />
                </div>
                <template v-if="!isPlayer">
                    <button
                        class="bg-red-600 px-4 w-full rounded-md py-2 font-bold"
                        type="button"
                        @click="emit('choose-player', props.trainner)"
                    >
                        CHOOSE
                    </button>
                </template>
                <template v-if="isPlayer && props.player1">
                    <button
                        class="bg-red-600 px-4 w-full rounded-md py-2 font-bold"
                        type="button"
                        @click="emit('remove-player', props.player1)"
                    >
                        Quitar
                    </button>
                </template>
                <template v-if="isPlayer && props.player2">
                    <button
                        class="bg-red-600 px-4 w-full rounded-md py-2 font-bold"
                        type="button"
                        @click="emit('remove-player', props.player2)"
                    >
                        Quitar
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>
