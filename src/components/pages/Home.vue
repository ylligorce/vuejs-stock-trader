<template>
    <div>
        <h1>Trade or View yur portfolio</h1>
        <h6>You nay Save & Load your data</h6>
        <h6>Click on 'End Day' to begin a New Trade Day!</h6>
        <hr>
        <p>Your Funds: {{ funds | toCurrency}}</p>
    </div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
            funds(){
               return this.$store.getters.getMyFunds;
            }
        }
    }
</script>

<style scoped>

</style>