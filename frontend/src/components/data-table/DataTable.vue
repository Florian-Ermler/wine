<template>
    <main>
        <div class="flex flex-col justify-center content-center">
            <div v-for="wine in data.data" :key="wine.id">
                <data-row
                    :id="wine.id"
                    :sweetness="wine.sweetness"
                    :origin="wine.origin"
                    :fermentation_container="wine.fermentation_container"
                    :grape_variety="wine.grape_variety"
                    :stored_since="wine.stored_since"
                />
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core';
import DataRow from '../data-row';

export default defineComponent({
    name: 'Home',
    components: {
        DataRow,
    },
    async setup() {
        const data = ref(null);
        try {
            const res = await fetch('https://directus.ermler.dev/items/wine/');
            data.value = await res.json();
            console.log(data.value);
        } catch (e) {
            console.log(e);
        }
        return {
            data,
        };
    },
});
</script>
