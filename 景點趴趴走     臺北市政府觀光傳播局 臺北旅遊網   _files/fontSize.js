
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (fontSize == null) var fontSize = {};
fontSize._path = '/dwr';
fontSize.logFontSize = function(p0, p1, callback) {
  dwr.engine._execute(fontSize._path, 'fontSize', 'logFontSize', p0, p1, false, callback);
}
