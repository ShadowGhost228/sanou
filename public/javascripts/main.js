
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

        con: function (message1 , message2){
            alert("Email "+message1+"Mot de passe "+message2)
        }
    },
    //component : signin
})


