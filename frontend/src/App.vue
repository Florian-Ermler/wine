<template>
    <main class="">
        <Suspense> <data-table /> </Suspense>
    </main>
</template>

<script lang="ts">
import DataTable from './components/data-table';

export default {
    name: 'Home',
    components: {
        DataTable,
    },
};
</script>
