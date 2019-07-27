<template>
    <div class="container">

        <app-header></app-header>

        <section>
            <div class="row">

                <div class="col-md-12">

                    <transition name="slide" mode="out-in" appear>
                        <router-view></router-view>
                    </transition>

                </div>

            </div>

        </section>

    </div>
</template>

<script>
    import Header from './components/common/Header'

    export default {
        created(){
          this.$store.dispatch('loadStocks');
        },
        components: {
            appHeader: Header
        }

    }
</script>

<style>
    body{
        padding: 30px;
    }

    .slide-enter-active{
        animation: slide-in 0.2s ease-out forwards;
    }

    .slide-leave-active{
        animation: slide-out 0.2s ease-out forwards;

    }

    @keyframes slide-in {
        from{
            transform: translateY(-30px);
            opacity: 0;
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }

    }

    @keyframes slide-out {
        from{
            transform: translateY(0);
            opacity: 1;
        }
        to{
            transform: translateY(-30px);
            opacity: 0;
        }

    }

</style>
