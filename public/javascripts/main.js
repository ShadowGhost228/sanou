
//import signin from './components/signin.component.js'
Vue.prototype.$http = axios

const app = new Vue ({
    el: '#app',
    data: {
        currentPage : 'magasin',
        genderList : [],
        name : '',
        categorielist : [],
        email : '',
        password : '',
        /*categorielist: [{
                name: 'T-Shirt'
            }, {
                name: 'Jeans'
            }, {
                name: 'Chaussures'
            }, {
                name: 'Pull'
            }, {
                name: 'Costumes'
        }],*/
        //lMerge : [[{item : "Erick", item: "Richard"}], [{item : "Erick", item: "Richard"}]]
    },

    created () {
        // Ici, l'utilisation d'une fonction flêchée () => {} plutôt que function () {} est primordial !
        // sans fonction fléchée, this.myList = ... ne fonctionnera pas comme prévu
        this.$http.get('/listCategorie')
            .then(listCategorie => {
                console.log('affichage de ma liste', listCategorie)
                this.categorielist = listCategorie.data
            })
            .catch(err => {
                console.log('error', err)
            })
        this.$http.get('/listGender')
            .then(listGender => {
                console.log('affichage de ma liste', listGender)
                this.genderList = listGender.data
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
        },

        onClickSignin (email, password) {
            console.log('onClickSignin', email, password)
            this.email = email
            this.password = password
        },
        onWriteEmail (email){
            console.log('onWriteEmail', email)
            this.email = email
        },
        onWritePassword (password){
            console.log('onWritePassword', password)
            this.password = password
        }
    }

})


