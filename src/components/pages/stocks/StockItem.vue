<template>

    <div class="col-md-4 col-sm-6">

        <div class="panel panel-success">

            <div class="panel-heading">

                <h3 class="panel-title">
                    {{ stockProp.name }}
                    <small>(Price: {{ stockProp.price | toCurrency}})</small>
                </h3>

            </div>

            <div class="panel-body">

                <div class="pull-left">

                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            :class="{ 'error': insufficientFunds }"
                            v-model="quantity">

                </div>

                <div class="pull-right">

                    <button
                            class="btn btn-primary"
                            @click="buyStock"
                            :disabled="insufficientFunds || noPrice">{{ insufficientFunds ? 'No funds' : 'Buy' }}</button>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: "StockItem",
        props: {
            stockProp: {
                type: Object,
                required: true
            }
        },
        data(){
            return{
                quantity: 0,
                noPrice: true
            }
        },
        watch:{
            quantity(value){
                value = parseInt(value);

                if(value <= 0 || !Number.isInteger(value)){
                    this.quantity = 0;
                    this.noPrice = true
                }else {
                    this.quantity = value;
                    this.noPrice = false
                }
            }
        },
        computed:{
          insufficientFunds(){
              return this.quantity * this.stockProp.price > this.funds;
          },
            funds(){
              return this.$store.getters.getMyFunds;
            }
        },
        methods: {
            buyStock(){

                if (this.insufficientFunds){
                    alert('No Funds!');
                    return
                }
                const order = {
                    stockID: this.stockProp.id,
                    stockPrice: this.stockProp.price,
                    quantity: this.quantity
                };

                this.$store.dispatch('buyStock', order);

                this.quantity = 0;


            }
        }
    }
</script>

<style scoped>
    .error{
        border: 1px solid red;
    }

</style>