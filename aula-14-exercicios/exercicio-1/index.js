function imprimirApelidos (objeto) {
       


    // Criar um objeto
    const pessoa = {
        nome: 'Vitor Hugo',
        apelidos: [ 'Vitinho', 'Vitão', 'Vit' ],
    }
    
    // Criar um novo objeto com spread substituindo os apelidos
    const novosApelidos = {
        ...pessoa,
        apelidos: [ 'Vits', 'Vi', 'Vitu' ],
    }
    
    // Declarar a função
    imprimirApelidos(pessoa)
    imprimirApelidos(novosApelidos)
    }
    
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
    