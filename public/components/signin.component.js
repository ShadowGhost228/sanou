

;(function () {
    'use strict'

    const signinTemplate =  ` 
        <section id = "signin">

                <!-- Material form login -->
                <div class="card offset-6 col-md-4 py-5 px-5 z-depth-4">

                    <h5 class="card-header info-color white-text text-center py-4">
                        <strong>Se Connecter</strong>
                    </h5>

                    <!--Card content-->
                    <div class="card-body px-lg-5 pt-0">

                        <!-- Form -->
                        <form class="text-center"  style="color: #757575;">

                            <!-- Email -->
                            <div class="md-form">
                                <input type="email" name="email" 
                                 v-model:email="email" id ="materialLoginFormEmail"
                                 v-on:input="writeEmail" class="form-control" placeholder="Mail">
                            </div>

                            <!-- Password -->
                            <div class="md-form">
                                <input type="password" name="password" 
                                 v-model="password" id="materialLoginFormPassword" 
                                 v-on:input="writePassword" class="form-control" placeholder="Mot de passe">
                            </div>

                            <div class="d-flex justify-content-around">
                                <div>
                                    <!-- Remember me -->
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="materialLoginFormRemember" >
                                        <label class="form-check-label" for="materialLoginFormRemember">Se Rappeler de moi</label>
                                    </div>
                                </div>
                                <div>
                                    <!-- Forgot password -->
                                    <a href="">Mot de passe oublié ?</a>
                                </div>
                                <div>
                                    
                                    <!--<a @click="changeCurrentPage">register</a>-->                                                         
                                    
                                    <!--<register v-if="currentpage === 'register'">
                                        
                                    </register>-->
                                    
                                    <!--<p v-if="currentpage === 'register'">
                                        Affiche toi
                                    </p>-->
                                    
                                </div>
                            </div>

                            <!-- Sign in button -->

                            <button id="butSignin" href="#"  v-on:submit="sendForAuth" class="btn btn-outline-info btn-rounded btn-block my-4 z-depth-0" >Se Connecter</button>


                        </form>
                        <!-- Form -->

                    </div>

                <!-- Material form login -->
            </div>

        </section>
        `


    Vue.component('signin', {
        model : {
            prop : 'value'
        },
        props: ['currentpage', 'email', 'password'],
        template: signinTemplate,
        methods: {
            changeCurrentPage (){
                this.$emit('changepage', 'register')
            },

            sendForAuth () {
                this.$emit('signin', 'butSignin')
            },

            writeEmail(){
                this.$emit('emailwrite', this.email )
            },
            writePassword(){
                this.$emit('passwordwrite', this.password)
            },

        }
    })

})()
