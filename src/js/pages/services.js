/**
 * Created by taha on 9/9/17.
 */
import $ from 'jquery';
import _ from 'underscore';

let _services_template= _.template(`
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Services</h2>
          <h3 class="section-subheading text-muted">We export all European made instruments, mechanical tools and equipments</h3>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-cogs fa-stack-1x fa-inverse"></i>
                    </span>
          <h4 class="service-heading">Mechanical</h4>
          <p class="text-muted">3M, Bosch, Nord</p>
        </div>
        <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-lightbulb-o fa-stack-1x fa-inverse"></i>
                    </span>
          <h4 class="service-heading">Electrical</h4>
          <p class="text-muted">3M, Bosch, Nord</p>
        </div>
        <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-wrench fa-stack-1x fa-inverse"></i>
                    </span>
          <h4 class="service-heading">Instrumentation</h4>
          <p class="text-muted">3M, Bosch, Nord</p>
        </div>
      </div>
    </div>
`);

let draw_services = () => {
  $("#services").append(_services_template)
};

export {draw_services};
