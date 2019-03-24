$(document).ready(function(){
   /* This project creates audio elements on web page for you to play NBC radio streams. 
    * I found the radio stream IP addresses by inspecting code of NBC website (http://www.nbc.na/listen_live.php)
    * William Sengdara (http://github.com/wilwad) 
    */
   var stations = [
               {"name":"Afrikaans Service", "freq":"89.5 FM",   "ip":"http://96.31.83.87:8055/;stream.mp3"},
               {"name":"National Service", "freq": "92.6 FM",   "ip":"http://96.31.83.87:8035/;stream.mp3"},
               {"name":"German Service", "freq":"95.8 FM",      "ip":"http://96.31.83.87:8039/;stream.mp3"},
               {"name":"Oshiwambo Service", "freq":"98.2 FM",   "ip":"http://96.31.83.87:8045/;stream.mp3"},
               {"name":"Damara/Nama Service","freq":"105.3 FM", "ip":"http://96.31.83.87:8053/;stream.mp3"},	
               {"name":"Rukavango Service", "freq":"105.5 FM",  "ip":"http://96.31.83.87:8025/;stream.mp3"},
               {"name":"Herero Service", "freq":"101.7 FM",     "ip":"http://96.31.83.87:8023/;stream.mp3"},
               {"name":"Lozi Service", "freq":"93.5 FM",        "ip":"http://96.31.83.87:8063/;stream.mp3"}
            ];
   var idy = 1;			 
   for(var idx = 0; idx < stations.length; idx++){
     var station = stations[idx];
     $('table tbody').append($("<tr><td>"+idy+"</td><td>"+station.name+"</td><td><span class='label label-default'>"+station.freq+"</span></td>"+
                          "<td><audio controls src='"+station.ip+"'>Audio not supported</audio></td></tr>"));
     idy++;
   }
 });
