
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (shortenURL == null) var shortenURL = {};
shortenURL._path = '/dwr';
shortenURL.getIdByUrl = function(p0, callback) {
  dwr.engine._execute(shortenURL._path, 'shortenURL', 'getIdByUrl', p0, callback);
}
