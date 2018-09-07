

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
                        <form class="text-center" style="color: #757575;">

                            <!-- Email -->
                            <div class="md-form">
                                <input type="email" id ="materialLoginFormEmail" class="form-control" placeholder="Mail">
                            </div>

                            <!-- Password -->
                            <div class="md-form">
                                <input type="password" id="materialLoginFormPassword" class="form-control" placeholder="Mot de passe">
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

                            <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" >Se Connecter</button>


                        </form>
                        <!-- Form -->

                    </div>

                <!-- Material form login -->
            </div>

        </section>
        
        <section id="signin" class="form-dark">

<!--Form without header-->
<div class="card card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg'); width: 28rem;">
    <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">

        <!--Header-->
        <div class="text-center">
            <h3 class="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> <a class="green-text font-weight-bold"><strong> UP</strong></a></h3>
        </div>

        <!--Body-->
        <div class="md-form">
            <input type="text" id="Form-email5" class="form-control white-text">
            <label for="Form-email5">Your email</label>
        </div>

        <div class="md-form pb-3">
            <input type="password" id="Form-pass5" class="form-control white-text">
            <label for="Form-pass5">Your password</label>
            <div class="form-check my-4">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck17">
              <label class="form-check-label white-text" for="defaultCheck17">Accept the<a href="#" class="green-text font-weight-bold"> Terms and Conditions</a></label>
            </div>
        </div>

        <!--Grid row-->
        <div class="row d-flex align-items-center mb-4">

            <!--Grid column-->
            <div class="text-center mb-3 col-md-12">
                <button type="button" class="btn btn-success btn-block btn-rounded z-depth-1">Sign in</button>
            </div>
            <!--Grid column-->
        </div>
        <!--Grid row-->

        <!--Grid column-->
        <div class="col-md-12">
            <p class="font-small white-text d-flex justify-content-end">Have an account? <a href="#" class="green-text ml-1 font-weight-bold"> Log in</a></p>
        </div>
        <!--Grid column-->

    </div>
</div>
<!--/Form without header-->

</section>
<!--Section: Live preview-->
        
        
        `


    Vue.component('signin', {
        props: ['currentpage'],
        template: signinTemplate,
        methods: {
            changeCurrentPage (){
                this.$emit('changepage', 'register')
            }
        }
    })

})()
