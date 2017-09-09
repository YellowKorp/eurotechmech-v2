/**
 * Created by taha on 9/9/17.
 */
import $ from 'jquery';
import _ from 'underscore';

let _header_template= _.template(`
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in">Welcome To EuroTechMech!</div>
        <div class="intro-heading">We are a leading european supplier for Mechanical, Electrical &amp; Instrumentation equipment’s
and spare parts.
          <div class="contact-email">
            <a href="mailto:sales@eurotechmech.nl?Subject=EuroTechMech Inquiry" target="_blank">
              sales@eurotechmech.nl
            </a>
          </div>
        </div>
        <a href="#services" class="page-scroll btn btn-xl">Tell Me More</a>
      </div>
    </div>
`);

let draw_header = () => {
  $("#header-jumbo").append(_header_template)
};

export {draw_header};

