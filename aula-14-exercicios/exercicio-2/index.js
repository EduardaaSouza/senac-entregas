const pessoa1 =
{
	nome: "jose", 
	idade: 50, 
	profissao: "agricultor"
}

const pessoa2 =
{
	nome: "maria", 
	idade: 49, 
	profissao: "cozinheira"
}

function array (obj)
{
    const lista = [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]
    return lista
}

console.log (array (pessoa1))
console.log (array (pessoa2))