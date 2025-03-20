let body = $response.body;

// 移除常见广告 div
body = body.replace(/<div[^>]*class="[^"]*ad-container[^"]*"[^>]*>.*?<\/div>/gs, '');
// 移除百度联盟广告脚本
body = body.replace(/<script[^>]*src="https?:\/\/(cpro|pos|cb).bdstatic.com[^"]*"[^>]*><\/script>/g, '');
// 移除 Google Ads 脚本
body = body.replace(/<script[^>]*src="https?:\/\/pagead2\.googlesyndication\.com\/[^"]*"[^>]*><\/script>/g, '');

$done({ body });
