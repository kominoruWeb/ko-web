
if(!!window.MSInputMethodContext && !!document.documentMode){
  document.write('\
    <script src="https://unpkg.com/core-js-bundle@3.16.3/minified.js"></script>\
    <script src="https://unpkg.com/whatwg-fetch@3.6.2/dist/fetch.umd.js"></script>\
    <script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"></script>\
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>\
    <script type="text/babel" src="/index.js"></script>\
    <script>alert("このブラウザはサポートされていません\nYour web browser is not supported.\n")</script>\
  ')
} else {
  document.write('<script src="/index.js"></script>')
}