
;(function () {
    'use strict'

    const template =  `
        <!--Card image-->
        <div class="view overlay">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" class="card-img-top" alt="">
            <a>
                <div class="mask rgba-white-slight"></div>
            </a>
        </div>
        <!--Card image-->
    `
    Vue.component('view-overlay', {
        template: template
    })

})()
