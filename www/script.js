// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa //

var RM
var NM
var EM
var SE

armazenamento = localStorage

function cadastrar()
{
	RM = document.getElementById('rmALUNO').value
	NM = document.getElementById('nmALUNO').value

    EM = document.getElementById('EMAIL').value
	SE = document.getElementById('SENHA').value

	alert(RM)
	alert(NM)
    alert(EM)
	alert(SE)

	localStorage.setItem(RM, NM, EM, SE)
}

function pesquisar()
{
	RM = document.getElementById('pesquisarRM').value
	var valorpesquisado

	valorpesquisado = localStorage.getItem(RM)
	
	document.getElementById('visor').innerHTML = valorpesquisado
}