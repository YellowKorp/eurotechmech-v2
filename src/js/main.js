/**
 * Created by taha on 9/9/17.
 */

import _ from 'underscore';
import {draw_navbar} from './pages/navbar';
import {draw_header} from './pages/header';
import {draw_services} from './pages/services';

_.templateSettings = {
  interpolate: /\{\{=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g,
};

let main = () => {
  draw_navbar();
  draw_header();
  draw_services();
};

export {main};
