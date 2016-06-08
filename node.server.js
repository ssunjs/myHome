
// Setting var


var PortNum         = 4567;     // 占쏙옙占쏙옙 占쏙옙트占쏙옙호


var HTTPStateCode   = 200;      // HTTP State Code

// Setting var End

var http    = require('http');


http.createServer(function (request, response)


{


    response.writeHead(HTTPStateCode, {'Content-Type' : 'text/html'});  // HTTP State Code占쏙옙 Content-Type占쏙옙 占쏙옙占쏙옙 占쏙옙占쏙옙占� 占쏙옙占쏙옙


    response.write('Hello Worlds');      // 클占쏙옙占싱억옙트占쏙옙 占쏙옙占쏙옙占쏙옙 占쌨쇽옙占쏙옙


    response.end();     // 占쏙옙占쏙옙 占쏙옙占쏙옙


    console.log('Hi!!!!!'); // 占쏙옙占쏙옙占쏙옙 占쏙옙占쏙옙占쏙옙 占쌨쇽옙占쏙옙


}).listen(52273, function () { 

    console.log('Server running at http://127.0.0.1:52273/'); 

});




