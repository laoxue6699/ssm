<template>
    <div id="app">
        <div id="banner" >
            <img src="../../assets/images/slider3.jpg">
        </div>
        <grid />
        <bottom></bottom>
    </div>
</template>

<script>
    import grid from '../../components/grid'
    import bottom from '../../components/bottom'
    export default {
        components : {
            grid,
            bottom
        }
    }

</script>

<style scoped>
    img {
        width: 100%;
    }

</style>