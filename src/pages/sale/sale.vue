<template>
    <div>
        <top pagetitle="销售发货"/>
        <saletab />
        <bottom />
    </div>
</template>

<script>
    import top from '../../components/top'
    import saletab from '../sale/tabsale'
    import bottom from '../../components/bottom'
    export default {
        components : {
            top,
            saletab,
            bottom
        }
    }
</script>

<style scoped>

</style>