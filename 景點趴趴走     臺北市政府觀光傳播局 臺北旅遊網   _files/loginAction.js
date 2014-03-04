
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (loginAction == null) var loginAction = {};
loginAction._path = '/dwr';
loginAction.test = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'test', p0, p1, false, false, callback);
}
loginAction.getCityName = function(p0, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'getCityName', p0, callback);
}
loginAction.doLogin = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'doLogin', p0, p1, false, callback);
}
loginAction.doLogOut = function(callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'doLogOut', false, callback);
}
loginAction.doTest = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'doTest', p0, p1, false, false, callback);
}
loginAction.showLoginMember = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'showLoginMember', p0, p1, false, false, callback);
}
loginAction.showGetPassword = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'showGetPassword', p0, p1, false, false, callback);
}
loginAction.doGetPassword = function(p0, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'doGetPassword', p0, callback);
}
loginAction.doLoginMember = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'doLoginMember', p0, p1, false, false, callback);
}
loginAction.insideLogin = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'insideLogin', p0, p1, false, false, callback);
}
loginAction.doLoginMember2 = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'doLoginMember2', p0, p1, false, false, callback);
}
loginAction.showMemberInfo = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'showMemberInfo', p0, p1, false, false, callback);
}
loginAction.setLoginSession = function(p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'setLoginSession', false, p1, callback);
}
loginAction.removeLoginSession = function(callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'removeLoginSession', false, callback);
}
loginAction.addFavoriteSession = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'addFavoriteSession', p0, p1, false, callback);
}
loginAction.removeFavoriteSession = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'removeFavoriteSession', p0, p1, false, callback);
}
loginAction.removeAllFavoriteSession = function(p0, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'removeAllFavoriteSession', p0, false, callback);
}
loginAction.doMemberLogin = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'doMemberLogin', p0, p1, false, false, callback);
}
loginAction.doLoginOut = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'doLoginOut', p0, p1, false, false, callback);
}
loginAction.validateMember = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'validateMember', p0, p1, false, false, callback);
}
loginAction.execute = function(p0, p1, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'execute', p0, p1, false, false, callback);
}
loginAction.execute = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'execute', p0, p1, p2, p3, callback);
}
loginAction.getServlet = function(callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'getServlet', callback);
}
loginAction.setServlet = function(p0, callback) {
  dwr.engine._execute(loginAction._path, 'loginAction', 'setServlet', p0, callback);
}
