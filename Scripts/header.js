// Loon 专用脚本
const url = $request.url;
const header = $request.headers;
const contype = header["Content-Type"] || header["content-type"];

if (url.includes("/sec.sginput.qq.com/q")) {
  // 搜狗输入法候选词推广拦截
  if (contype === "application/octet-stream") {
    $done({ status: "HTTP/1.1 404 Not Found" });
  } else {
    $done({});
  }
} else {
  $done({});
}
