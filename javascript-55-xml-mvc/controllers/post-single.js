/* Lê o XML */	
const ajax = new XMLHttpRequest();
ajax.open("GET", "../models/post-data.xml", false);
ajax.send();
xmlDoc = ajax.responseXML;

let x = xmlDoc.getElementsByTagName("postagem");

/* Exibe a postagem */	
function funcaoPostagem(){
	let url = new URL(window.location.href);
	let search_params = url.searchParams; 
	i = search_params.get('id');	
		document.write("<tr bgcolor='#ffffff'><td class='codigo'>"+ x[i].getAttribute("codigo") + "</td>" +
					   "<td><img src='" + x[i].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "'></td>" +
					   "<td>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +
					   "<td>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</td></tr>");
}				