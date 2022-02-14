<template>
    <table class="flex flex-row space-x-4 drop-shadow-lg p-5 text-white">
        <tr class="tr-5">
            ID:
            {{
                id
            }}
        </tr>
        <tr class="tr-5">
            Traubenart:
            {{
                grape_variety
            }}
        </tr>
        <tr class="tr-5">
            Süßegrad:
            {{
                sweetness
            }}
        </tr>
        <tr class="tr-5">
            Lagerzeit:
            {{
                stored_since
            }}
        </tr>
        <tr class="tr-5">
            Herkunft:
            {{
                origin
            }}
        </tr>
        <tr class="tr-5">
            Ausbauart:
            {{
                fermentation_container
            }}
        </tr>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Row',
    props: {
        id: { type: String },
        grape_variety: { type: String },
        sweetness: { type: String },
        stored_since: { type: String },
        origin: { type: String },
        fermentation_container: { type: String },
    },
    setup() {
        return {};
    },
});
</script>
