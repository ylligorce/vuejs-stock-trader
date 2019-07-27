<template>

    <div>

        <div class="alert alert-info" v-if="stocks.length <= 0">
            Not stocks found, please buy some
        </div>

        <appMyStock v-for="stock in stocks" :myStocksProp="stock" :key="stock.id"></appMyStock>
    </div>

</template>

<script>
    import MyStock from './MyStock'
    import { mapGetters } from 'vuex'

    export default {
        name: "Portfolio",
        computed:{
            ...mapGetters({
                stocks: 'getMyStocks'
            })
        },
        components: {
            appMyStock: MyStock
        }
    }
</script>

<style scoped>

</style>