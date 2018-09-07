
//import signin from './components/signin.component.js'

const app = new Vue ({
    el: '#app',
    data: {
        currentPage : 'magasin',
        genderList: [{
                name: 'Homme'
            }, {
                name: 'Femme'
            }
        ],
        categorielist: [{
                name: 'T-Shirt'
            }, {
                name: 'Jeans'
            }, {
                name: 'Chaussures'
            }, {
                name: 'Pull'
            }, {
                name: 'Costumes'
        }],
    },
    methods: {
        onChangePage (page) {
            console.log('onChangePage', page)
            this.currentPage = page
        }
    }

})


