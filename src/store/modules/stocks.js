import stocksData from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {

    'LOAD_STOCKS' (state, stocks){ //Namespace type function
        state.stocks = stocks;
    },
    'RND_STOCKS' (state){
        state.stocks.forEach((stock) =>{

            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));

            if(stock.price === 1){
                stock.price = Math.round(stock.price * (10 + Math.random()));
            }

        });
    }

};

const actions = {

    buyStock: ({commit}, order) =>{
        commit('BUY_STOCK', order); //commit to portfolio file;
        // !!!! IMPORTANT pass data from one module to another by refering its namespace
    },
    loadStocks: ({ commit })=>{
        commit('LOAD_STOCKS', stocksData);
    },
    randomizeStocks: ({commit}) =>{
        commit('RND_STOCKS');
    }

};

const getters = {
    stocks: state =>{
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}