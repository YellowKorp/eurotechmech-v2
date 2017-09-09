/**
 * Created by taha on 9/9/17.
 */
import $ from 'jquery';
import _ from 'underscore';
import bootbox from 'bootbox/bootbox';
// _.templateSettings = {
//   interpolate: /\{\{(.+?)\}\}/
// };

const products_data = {
  process: {
    title: "Process Control and Instrumentation",
    products: [
      "Ball valves", "Level switch", "Butterfly Valves", "Flow Switch", "Gate valves", "Pressure Gauge",
      "Plug Valves", "Geared Limit Switch", "Toggle and Saddle Valves", "Speed Monitors/Motion Detectors",
      "Pinch valves", "Gas Analysers", "Solonoid valves", "temperature sensors", "relief valves", "Orifice",
      "Check Valves", "Thermometers and thermowells", "Vacuum break valves", "Liquid level sights and Gauge",
      "Air release valves", "Regulators"
    ]
  }};

let _products_template= _.template(`
    <div class="container products">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Products</h2>
          <h3 class="section-subheading text-muted">We are leading supplier of Industrial products for all of your MRO ( maintenance repair and operating)
replacement parts market as well as OEM (Original Equipment Manufacturer). Our head quarter is in The Hague,
Netherlands.</h3>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-4 products-item" id="product-process">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-cogs fa-stack-1x fa-inverse"></i>
                    </span>
          <h4 class="products-heading products-item">Process Control and Instrumentation</h4>
          <p class="text-muted">ball valves, level switch, butterfly valves ..</p>
        </div>
        <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-lightbulb-o fa-stack-1x fa-inverse"></i>
                    </span>
          <h4 class="products-heading">Electrical</h4>
          <p class="text-muted">3M, Bosch, Nord</p>
        </div>
        <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-wrench fa-stack-1x fa-inverse"></i>
                    </span>
          <h4 class="products-heading">Instrumentation</h4>
          <p class="text-muted">3M, Bosch, Nord</p>
        </div>
      </div>
    </div>
`);

let _items_template= _.template("<% _.each(data, function(d){ %> " +
  "<div class='products-dialog__label'><span class='label label-success'><%= d %></span></div>" +
  "<%}) %>");

let open_dialog = (data) => {
  let dialog = bootbox.dialog({
    size: "large",
    title: data.title,
    message: "<div id='products-dialog' class='products-dialog'></div>",
  });
  dialog.init(function() {
    dialog.find('#products-dialog').html(_items_template({data: data.products}));
  });
  console.log("called");
};

let draw_services = () => {
  $("#products").append(_products_template);
  $("#product-process").click(function () {open_dialog(products_data.process)});
};

export {draw_services};
