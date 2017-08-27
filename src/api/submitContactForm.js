/**
 * Created by taha on 8/27/17.
 */

import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function postContactForm(form) {
  //return "awesome it work";
  return fetch ('/postContactForm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  });
}
