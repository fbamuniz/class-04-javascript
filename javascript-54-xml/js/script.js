/* Lê o XML */	
const ajax = new XMLHttpRequest();
ajax.open("GET", "xml/db_conteudo.xml", false);
ajax.send();
xmlDoc = ajax.responseXML;

let x = xmlDoc.getElementsByTagName("postagem");

/* Exibe o conteúdo */
function funcaoConteudo(){
	n = x.length-1;
	for (var i = n; i >= 0; i--){
		var destaque = (i == n)?'highlight':'';
		document.write("<tr class='"+ destaque +"'><td class='codigo'><a href='post.html?id=" + i + "'>"+ x[i].getAttribute("codigo") + "</a></td>" +
					   "<td><img src='" + x[i].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "'></td>" +
					   "<td>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +			
					   "<td>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,220) + "</td></tr>");}
}

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