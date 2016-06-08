
// Setting var


var PortNum         = 4567;     // 포트


var HTTPStateCode   = 200;      // HTTP State Code

// Setting var End

var http    = require('http');


http.createServer(function (request, response)


{


    response.writeHead(HTTPStateCode, {'Content-Type' : 'text/html'});  // HTTP State Code

    response.write('Hello Worlds'); // 응답 본문을 작성합니다.


    response.end();  // 종료 문구도 작성 가능 response.end('end'); 


    console.log('Hi!!!!!'); //콘솔 로그


}).listen(PortNum, function () { 

    console.log('Server running at http://127.0.0.1:'+PortNum+'/'); 

});




