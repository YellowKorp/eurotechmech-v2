/**
 * Created by taha on 9/9/17.
 */

import _ from 'underscore';
import {draw_navbar} from './pages/navbar';

_.templateSettings = {
  interpolate: /\{\{=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g,
};

let main = () => {
  draw_navbar();
};

export {main};
