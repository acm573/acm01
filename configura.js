// JavaScript Document

function Inicializar(obj)
{
	var ancho=$(window).width();
	var alto=$(window).height();
	
	$("#Canvas").attr("style","background-image: url(ecg_back.png); position: relative; height:220px; width: "+ancho+"px");
	texto = $("#linea").text("Resolucion detectada: "+alto+"x"+ancho);
	$("#linea").text(texto);
	Valores();
	draw();
}
	
	