<template>

    <div class="col-md-4 col-sm-6">

        <div class="panel panel-primary">

            <div class="panel-heading">

                <h3 class="panel-title">
                    {{ myStocksProp.name }}
                    <small>(Price: {{ myStocksProp.price | toCurrency}} | Quantity: {{ myStocksProp.quantity }})</small>
                </h3>

            </div>

            <div class="panel-body">

                <div class="pull-left">

                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            :class="{ 'error' : insufficientQuantity }"
                            v-model="quantity">

                </div>

                <div class="pull-right">

                    <button
                            class="btn btn-primary"
                            @click="sellStock"
                            :disabled="insufficientQuantity || !hasQuantity">{{ insufficientQuantity ? 'No Quantity' : 'Sell' }}</button>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "MyStocks",
        props:['myStocksProp'],
        data(){
            return{
                quantity: 0,
                hasQuantity: false
            }
        },
        computed:{
          insufficientQuantity(){
              return this.quantity > this.myStocksProp.quantity;
          }
        },
        watch:{
            quantity(value){
                value = parseInt(value);

                if(value <= 0 || !Number.isInteger(value)){
                    this.quantity = 0;
                    this.hasQuantity = false
                }else {
                    this.quantity = value;
                    this.hasQuantity = true
                }
            }
        },
        methods: {
            ...mapActions({
               sellStockAction : 'sellStocks'
            }),
            sellStock(){
                if(this.insufficientQuantity){
                    alert('Your Quantity is Invalid!');
                    return;
                }
                const order = {
                    stockID: this.myStocksProp.id,
                    stockPrice: this.myStocksProp.price,
                    quantity: this.quantity
                };

                this.sellStockAction(order);
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