/**
 * Created by taha on 7/31/17.
 */
export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi')? 'http://localhost:3001/' : 'https://example-api-upload.herokuapp.com/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results= regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
