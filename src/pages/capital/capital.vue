<template>
    <div ip="app">
        <top pagetitle="回款申报"/>
        <tabcapital />
        <bottom />
    </div>
</template>

<script>
    import top from '../../components/top'
    import tabcapital from './tabcapital'
    import bottom from '../../components/bottom'
    export default {
        components : {
            top,
            tabcapital,
            bottom
        }
    }
</script>

<style scoped>

</style>