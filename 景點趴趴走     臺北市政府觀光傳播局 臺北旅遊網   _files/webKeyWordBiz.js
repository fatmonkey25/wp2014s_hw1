
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (webKeyWordBiz == null) var webKeyWordBiz = {};
webKeyWordBiz._path = '/dwr';
webKeyWordBiz.getInstance = function(callback) {
  dwr.engine._execute(webKeyWordBiz._path, 'webKeyWordBiz', 'getInstance', callback);
}
webKeyWordBiz.addHitRate = function(p0, p1, p2, callback) {
  dwr.engine._execute(webKeyWordBiz._path, 'webKeyWordBiz', 'addHitRate', p0, p1, p2, false, callback);
}
webKeyWordBiz.updateWebKeyWord = function(p0, p1, callback) {
  dwr.engine._execute(webKeyWordBiz._path, 'webKeyWordBiz', 'updateWebKeyWord', p0, p1, callback);
}
webKeyWordBiz.findAllWebKeyWord = function(p0, p1, callback) {
  dwr.engine._execute(webKeyWordBiz._path, 'webKeyWordBiz', 'findAllWebKeyWord', p0, p1, callback);
}
