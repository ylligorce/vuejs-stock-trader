<template>

    <div>

        <appStockItem
                v-for="stock in stocks"
                :key="stock.id"
                :stockProp="stock"></appStockItem>

    </div>

</template>

<script>
    import { mapGetters } from 'vuex'
    import StockItem from './StockItem'

    export default {
        name: "Stock",
        computed: {
            ...mapGetters([
                'stocks'
            ])
        },
        components: {
            appStockItem: StockItem
        }
    }
</script>

<style scoped>

</style>