// youtube-ads-filter.js
let body = $response.body;
if (body) {
  body = body.replace(/"adPlacements":\[[^\]]*\],?/, '');
  body = body.replace(/"playerAds":\[[^\]]*\],?/, '');
}
$done({ body });
