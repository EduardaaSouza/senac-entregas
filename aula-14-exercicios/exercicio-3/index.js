let carrinho = []

const fruta1 =
{
    nome: "Maracujá",
    disp: true
}

const fruta2 =
{
    nome: "morango",
    disp: false
}

const fruta3 =
{
    nome: "ameixa",
    disp: false
}

function recebe (obj1, obj2, obj3)
{
    carrinho.push (obj1, obj2, obj3)
}

recebe (fruta1, fruta2, fruta3)

console.log (carrinho)
