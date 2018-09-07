
;(function () {
    'use strict'

    const signinTemplate =  ` 
        <section id="register">
            <!-- Material form register -->
            <div class="card offset-6 col-md-4 py-5 px-5 z-depth-4">

                <h5 class="card-header info-color white-text text-center py-4">
                    <strong>Sign up</strong>
                </h5>

                <!--Card content-->
                <div class="card-body px-lg-5 pt-0">

                    <!-- Form -->
                    <form class="text-center" style="color: #757575;">

                        <div class="form-row">
                            <div class="col">
                                <!-- First name -->
                                <div class="md-form">
                                    <input type="text" id="materialRegisterFormFirstName" class="form-control" placeholder="Prenom">
                                </div>
                            </div>
                            <div class="col">
                                <!-- Last name -->
                                <div class="md-form">
                                    <input type="email" id="materialRegisterFormLastName" class="form-control" placeholder="nom">
                                </div>
                            </div>
                        </div>

                        <!-- E-mail -->
                        <div class="md-form mt-0">
                            <input type="email" id="materialRegisterFormEmail" class="form-control" placeholder="Mail">
                        </div>

                        <!-- Password -->
                        <div class="md-form">
                            <input type="password" id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" placeholder="Mot de passe">
                           
                        </div>

                        <!-- Phone number -->
                        <div class="md-form">
                            <input type="password" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" placeholder="Numéro de Téléphone">
                           
                        </div>

                        <!-- Newsletter -->
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="materialRegisterFormNewsletter">
                            <label class="form-check-label" for="materialRegisterFormNewsletter">Subscribe to our newsletter</label>
                        </div>

                        <!-- Sign up button -->
                        <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Se Connecter</button>

                       

                    </form>
                    <!-- Form -->

                </div>

            </div>
            <!-- Material form register -->
        </section>
        `


    Vue.component('register', {
        template: signinTemplate
    })

})()

