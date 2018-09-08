
//import signin from './components/signin.component.js'
Vue.prototype.$http = axios

const app = new Vue ({
    el: '#app',
    data: {
        currentPage : 'magasin',
        /*genderList: [{
                name: 'Homme'
            }, {
                name: 'Femme'
            }
        ],*/
        genderList : [],
        name : '',
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

    created () {
        // Ici, l'utilisation d'une fonction flêchée () => {} plutôt que function () {} est primordial !
        // sans fonction fléchée, this.myList = ... ne fonctionnera pas comme prévu
        this.$http.get('/list')
            .then(list => {
                console.log('affichage de ma liste', list)
                this.genderList = list.data
            })
            .catch(err => {
                console.log('error', err)
            })
    },
    methods: {
        sendNewElement () {
            this.$http.post('/list', {
                name: this.name
            })
                .then(() => {
                    this.genderList.push({
                        name: this.name
                    })
                })
        },
        onChangePage (page) {
            console.log('onChangePage', page)
            this.currentPage = page
        }

    }

})


