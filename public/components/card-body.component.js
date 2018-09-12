
;(function () {
    'use strict'

    const template =  `
       <!--Card content-->
            <div class="card-body text-center">
                <!--Category & Title-->
                <a href="" class="grey-text">
                    <h5>Shirt</h5>
                </a>
                <h5>
                    <strong>
                        <a href="" class="dark-grey-text">Denim shirt
                            <span class="badge badge-pill danger-color">NEW</span>
                        </a>
                    </strong>
                </h5>
    
                <h4 class="font-weight-bold blue-text">
                    <strong>120$</strong>
                </h4>                                              
    
            </div>
    `
    Vue.component('card-body', {
        template: template
    })

})()
