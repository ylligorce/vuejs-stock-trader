<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">

                <div class="navbar-header">
                    <router-link :to="{ name: 'home' }" class="navbar-brand">Stock Trader</router-link>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <router-link :to="{name: 'portfolio'}" tag="li" active-class="active"><a>Portfolio</a></router-link>
                        <router-link :to="{name: 'stocks'}" tag="li" active-class="active"><a>Stocks</a></router-link>
                    </ul>
                    <strong class="navbar-text navbar-right">
                        Funds: {{ funds | toCurrency}}
                    </strong>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#" @click.prevent="endDay">End Day</a></li>
                        <li class="dropdown"
                            :class="{ 'open' : isDropMenuOpen}" @click.prevent="isDropMenuOpen = !isDropMenuOpen">
                            <a href="#"
                               class="dropdown-toggle"
                               data-toggle="dropdown"
                               role="button"
                               aria-haspopup="true"
                               :ariaExpanded="isDropMenuOpen">Save & Load <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#" @click.prevent="saveData">Save Data</a></li>
                                <li><a href="#" @click.prevent="loadData">Load Data</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "Header",
        data(){
            return{
                isDropMenuOpen: false
            }
        },
        computed: {
            funds(){
                return this.$store.getters.getMyFunds;
            }
        },
        methods: {
            ...mapActions([
                'randomizeStocks',
                'loadDataAPI'
            ]),
            endDay(){
                this.randomizeStocks();
            },
            saveData(){
                const data = {
                  funds: this.funds,
                  myStocks: this.$store.getters.getMyStocks,
                  stocks: this.$store.getters.stocks
                };

                if(data){
                    this.$http.put('', data)
                        .then(response => {
                            console.log(response);
                        }, err =>{
                            console.log(err);
                        });
                }

            },
            loadData(){
               this.loadDataAPI();
            }
        }
    }
</script>

<style scoped>

</style>