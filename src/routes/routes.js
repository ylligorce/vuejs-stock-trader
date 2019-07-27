//Load Components (Lazy)

const Home = resolve =>{
    require.ensure(['../components/pages/Home'], () =>{
        resolve(require('../components/pages/Home.vue'));
    }, 'home');
};

const Portfolio = resolve =>{
    require.ensure(['../components/pages/portfolio/Portfolio'], () => {
        resolve(require('../components/pages/portfolio/Portfolio.vue'));
    }) ;
};

const Stocks = resolve =>{
    require.ensure(['../components/pages/stocks/Stocks'], () => {
        resolve(require('../components/pages/stocks/Stocks.vue'));
    });

};


//Create Routes
export const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    },
    {
        path: '/stocks',
        name: 'stocks',
        component: Stocks
    },
    {
        path: '*',
        redirect: '/'
    }
];