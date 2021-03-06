/**
 * Created by taha on 9/9/17.
 */
import $ from 'jquery';
import _ from 'underscore';

let _nav_template = _.template(`
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
        </button>
        <a class="navbar-brand page-scroll" href="#page-top">EuroTechMech</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li class="hidden">
            <a href="#page-top"></a>
          </li>
          <li>
            <a class="page-scroll" href="#products">Products</a>
          </li>
          <li>
            <a class="page-scroll" href="#portfolio">Industries</a>
          </li>
          <!--<li>-->
            <!--<a class="page-scroll" href="#about">About</a>-->
          <!--</li>-->
          <!--<li>-->
          <!--<a class="page-scroll" href="#team">Team</a>-->
          <!--</li>-->
          <li>
            <a class="page-scroll" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>`);

let draw_navbar = () => {
  $("#mainNav").append(_nav_template)
};

export {draw_navbar};
