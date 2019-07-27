import Vue from 'vue'

export const loadDataAPI = ({commit}) =>{
    Vue.http.get('')
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            if(data){
                const funds = data.funds,
                      stocks = data.stocks,
                      myStocks = data.myStocks;

                const portfolioState = {
                    funds,
                    myStocks
                };

                //commit to stocks mutations
                commit('LOAD_STOCKS', stocks);

                //commit to portfolio mutations
                commit('SET_PORTFOLIO', portfolioState);
            }
        }, err =>{
            console.log(err);
        });
};