var http = require('http'),
    fetch = require('node-fetch'),
    req = require('./js/req');

http.createServer(function(req, res) {
}).listen(80, function(){
	console.log('Server running on port 80');
});

var option = ['http://www.nbrb.by/API/ExRates/Currencies', 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0','http://www.nbrb.by/API/ExRates/Rates/145', 'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1',
'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2'];

for(let i = 0;i<option.length;i++){
  req.createReq(option[i]);
}
