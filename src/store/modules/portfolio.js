const state = {
  funds: 10000,
  stocks: []
};

const mutations = {

     'BUY_STOCK' (state, order) {

          let stockID = order.stockID,
              stockPrice = order.stockPrice,
              quantity = order.quantity;

          //check if we have already the same stock
          const record = state.stocks.find(element => element.id === stockID);


          if (record){
              record.quantity += quantity;
          }else {

              //else add the object to mYStocks
              state.stocks.push(
                  {
                      id: stockID,
                      quantity: quantity
                  }
              );
          }

         state.funds -= (stockPrice * quantity);

     },
    'SELL_STOCKS' (state, { stockID, stockPrice, quantity }) {

         const record = state.stocks.find(elem => elem.id === stockID);

         if (record.quantity > quantity){ //if we have more fund than we want to sell

             record.quantity -= quantity
         }else {
             state.stocks.splice(state.stocks.indexOf(record), 1);
         }

         state.funds += (stockPrice * quantity);

    },
    'SET_PORTFOLIO' (state, data) {
         state.funds = data.funds;
         state.stocks = data.myStocks ? data.myStocks : [];
    }
};

const actions = {
    sellStocks: ({commit}, order) =>{
        commit('SELL_STOCKS', order);
    },
    buyStocks: ({commit}, stock) =>{
        commit('BUY_STOCK', stock);
    },

};

const getters = {

  getMyStocks (state, getters) {
      return state.stocks.map((stock) =>{
          const record = getters.stocks.find(elem => elem.id === stock.id);
          return {
              id: stock.id,
              quantity: stock.quantity,
              name: record.name,
              price: record.price
          }
      })
  },

    getMyFunds (state) {
      return state.funds;
    }
};


export default {
    state,
    mutations,
    actions,
    getters
}