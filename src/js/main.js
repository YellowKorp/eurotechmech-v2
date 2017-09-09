/**
 * Created by taha on 9/9/17.
 */

import {draw_navbar} from './pages/navbar';
import {draw_header} from './pages/header';
import {draw_services} from './pages/products';

let main = () => {
  draw_navbar();
  draw_header();
  draw_services();
};

export {main};
