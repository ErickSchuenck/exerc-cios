let arr1 = [1, 2, 3, 4, 5, 6, 6, 6, 7]
let arr2 = [1, 2, 3, -4, 5]
let arr3 = [1, 1]
let arr4 = [1, 2, 3, 155]
let emptyarr = []


// Os últimos serão os primeiros
// Crie uma função chamada desloca(lst), que recebe uma lista e retorna uma nova lista com os elementos deslocados uma posição a direita, e onde o último elemento da lista recebida será o primeiro da nova lista.
// Ex:
// lst = [3, 4, 5, 6, 7] => Deve retornar [7, 3, 4, 5, 6]
// lst = [5, 'maça', 9, 'cajus', 15, 'uvas'] => Deve retornar ['uvas', '5, 'maça', 9, 'cajus', 15]
// lst = [ ] => Deve retornar vazia

function desloca(lst) {
    let firstElement = lst[lst.length - 1]
    if (lst.length == 0) { return [] }
    if (lst.length == 1) { return lst }
    lst.pop();
    lst.splice(0, 0, firstElement)
    return lst
}
// Remova os elementos em índice ímpares.
// Crie uma função chamada removeImpares(lst), que recebe uma lista e retorna uma nova lista sem os elementos dos índices ímpares da lista recebida.
// Ex:
// lst = [0, 1, 2, 3, 4, 5] => Deve retornar [0, 2, 4]
// lst = ['sim', 'não', 'sim', 'não', 'sim', 'não',] => Deve retornar ['sim', 'sim', 'sim']
function removeImpares(lst) {
    newlist = []
    for (let i = 0; i < lst.length; i++) {
        if (i % 2 == 0) { newlist.push(lst[i]) }
    } return newlist
}
// Insere 'x'
// Crie uma função chamada insere(x, lst), que recebe um número x e uma array ordenada de números e insere corretamente x na posição adequada.
// Ex:
// x = 4, lst = [1, 2, 2, 2, 4, 5, 8] => Deve retornar [1, 2, 2, 2, 4, 4, 5, 8]
// x = 10, lst = [2, 4, 6, 8] => Deve retornar [2, 4, 6, 8, 10]
// x = 5, lst = [ ] => Deve retornar [5]
function insere(x, lst) {
    // se a array for vazia 
    if (lst.length == 0) { return [] }
    // se a array tiver 1 elemento 
    if (lst.length == 1) { return lst }
    // se o x for maior que o maior numero da array
    if (x >= lst[lst.length - 1]) { lst.push(x); return lst }
    // se o x for menor que o menor numero da array
    if (x <= lst[0]) { lst.splice(0, 0, x); return lst }
    // outros casos
    for (let i = 1; i < lst.length - 1; i++) {
        if (x <= lst[i + 1] && x >= lst[i]) { lst.splice(i + 1, 0, x) }
    } return lst
}

// Swap menor número da array
// Crie a função chamada swapMenorNumero(lst) que recebe uma lista, percorre essa lista em busca do menor número, e realiza uma troca de posição entre o menor número e o primeiro elemento da array.
// Exemplo:
// lst = [5, 6, 8, 4, 5, 9] => Deve retornar [4, 6, 8, 5, 5, 9]
// lst = [ 2 ] => Deve retornar [ 2 ]
// lst = [4, 5, 2, 4, 5, 2] => Deve retornar [2, 5, 4, 4, 5, 2]
// lst = [ ] => Deve retornar [ ]

function swapMenorNumero(lst) {
    if (lst.length == 0) { return [] }
    if (lst.length == 1) { return lst }
    if (lst.length == 2) {
        newarr = [];
        if (lst[0] >= lst[1]) { newarr.push(lst[1]); newarr.push(lst[0]); return newarr }
        if (lst[0] < lst[1]) { return lst }
    }
    let menor = lst[0]
    let position = 0;
    for (let i = 1; i < lst.length; i++) {
        let item = lst[i]
        if (item <= lst[i - 1] && item <= lst[i + 1]) { menor = item; position = i }
    }
    console.log(menor)
    lst.splice(position, 1, lst[0]);
    lst.splice(0, 1, menor);
    return lst
}
// Transformar 'a' em 'e'
// Crie uma função chamada mudaVogal(str), que recebe uma string e retorna uma nova string onde as as vogais "a" foram substituídas por "e".
// Ex:
// str = "ateu" => Deve retornar "eteu"
// str = "maca" => Deve retornar "mece"
// str = "bcd" => Deve retornar "bcd"
// str = "" => Deve retornar ""
function mudaVogal(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a') { arr.splice(i, 1, 'e') }
    }
    str = arr.join('')
    return str
}
// Desloca uma posição string
// Crie uma função chamada deslocaLetras(str), que recebe uma string e move todos os caracteres uma posição para esquerda, transformando o primeiro carácter na último.
// Ex:
// str = 'abcd' => Deve retornar 'bcda'
// str = '1234' => Deve retornar '2341'
function deslocaLetras(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    let change = arr[0];
    arr.shift();
    arr.splice(arr.length, 0, change)
    str = arr.join('')
    return str
}
// Encontra números
// Crie uma função chamada indexNum(str), que recebe uma string e retorna uma lista com o valor dos índices nas posições da string recebida onde existem números.
// Ex:
// str = "1abc23" => Deve retornar [0, 4, 5]
// str = "abc3d3" => Deve retornar [3, 5]
// str = "abc" => Deve retornar [ ]
function indexNum(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 0) { arr.push(i) }
    } return arr
}
// Adicionar 'ç' na posição x
// Crie uma função chamada adicionaCedilha(str, x), que recebe uma string e adiciona um "ç" na posição x da string, empurrando as letras para direita. Caso não exista posição x, adicione a letra no final da string.
// Ex:
// x = 3, str = 'facão' => Deve retornar 'facção
// x = 19, str = 'Matagal' => Deve retornar 'Matagalç'
// x = 13, str = '' => Deve retornar 'ç'
function adicionaCedilha(str, x) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    if (arr.length <= x) {
        arr.splice(arr.length, 0, 'ç')
    } else { arr.splice(x, 0, 'ç') }
    str = arr.join('');
    return str;
}
// Remove todos os 'l'
// Crie uma função chamada removeL(str) que recebe uma string e retorna uma nova string sem as letras 'l'.
// Ex:
// str = 'leão' => Deve retornar 'eão'
// str = 'lulu' => Deve retornar 'uu'
// str = 'la la land' => Deve retornar 'a a and'
// str = ' ' => Deve retornar ' '

function removeL(str) {
    let arr = []
    let final = []
    for (let i = 0; i < str.length; i++) { arr.push(str[i]) }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 'l') { final.push(arr[i]) }
    }
    str = final.join('');
    return str;
}
// Coloca Parênteses
// Cria uma função chamada insereParenteses(str) que recebe uma string e retorna a string dentro de parênteses.
// Ex:
// str = "placa" => Deve retornar "(placa)"
// str = "observe acima" => Deve retornar "(observe acima)"
// str = "" => Deve retornar "()"
function insereParenteses(str) {
    let par = '('
    let par2 = ')'
    str = par + str + par2
    return str
}
// Remove Caracteres Soltos
// Crie uma função chamada removeChar(str) que recebe uma string, com palavras e caracteres, e deve retornar uma nova string, mas contendo apenas as palavras.
// Ex:
// str = "a mapa c lado e t c casa" => Deve retornar 'mapa lado casa'
// str = "lastro lava f g h neve" => Deve retornar 'lastro lava neve'
function removeChar(str) {
    let arrString = str.split(' ')
    let arrNovo = [];
    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i].length > 1) {
            arrNovo.push(arrString[i]);
        }
    }
    return arrNovo.join(' ')
}
// String a partir de Lista
// Crie a função juntaArray(lst), que recebe uma lista de strings e deve retornar uma nova string com os elementos da lista recebida separados por um espaço entre eles.
// Ex:
// lst = ['a', 'b', 'c'] => Deve retornar "a b c"
// lst = ['Marco', 'Polo'] => Deve retornar "Marco Polo"
// lst = [ ] => Deve retornar ""
function juntaArray(lst) {
    return lst.join(' ')
}
// Particiona string para lista
// Crie uma função criaLista(str), que recebe uma string, e separa essa string em elementos usando o caractere de espaço como divisor de elementos. Por fim retorne essa lista.
// Ex:
// str = "Para quem ta se afogando jacaré é tronco" => Deve retornar ['Para', 'quem', 'ta', 'se', 'afogando', 'jacaré', 'é', 'tronco']
// str = "Filho de peixe, peixinho é" => Deve retornar ['Filho', 'de', 'peixe,', 'peixinho', 'é']
function criaLista(str) {
    if (str.length == 0) { return [] }
    let arrString = str.split(' ')
    let arrNovo = [];
    for (let i = 0; i < arrString.length; i++) {
        arrNovo.push(arrString[i]);
    } return arrNovo
}
// Remove At
// Crie uma função chamada removeAt(x, str), que recebe um número x que representa um índice de uma string, e remove o elemento que nesta posição. Por fim retorne a string com o elemento removido.

// Caso o valor de x esteja além do tamanho dessa string, não devem ser feitas alterações na string e ela deve ser retornada sem sofrer alterações.
// Ex:
// x = 0, str= 'abc' => Deve retornar 'bc'
// x = 4, lstr= 'avião' => Deve retornar 'aviã'
// x = 4, str = 'moto'=> Deve retornar 'moto'
// x = 1, str = ' ' => Deve retornar ' '
function removeAt(x, str) {
    if (str.length == 0) { return str }
    if (str.length == 1) { return str }

    arr = str.split('')
    console.log(arr)
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i != x) { newArr.push(arr[i]) }
    }
    console.log(newArr)
    let final = ''
    final = newArr.join('')
    return final
}
// Adiciona vírgula
// Crie uma função chamada insereVirgula(str), que recebe uma string e adiciona uma vírgula depois de cada palavra dessa string, menos na última.
// Ex:
// str = 'Pedra Papel Tesoura' => Deve retornar 'Pedra, Papel, Tesoura'
// str = 'casa carro moto' => Deve retornar 'casa, carro, moto'
// str = ' ' => Deve retornar ' '
function insereVirgula(str) {
    let arr = str.split(' ')
    return arr.join(', ')
}
// Verifica palavra em uma string
// Crie uma função chamada verificaPalavra(str, keyword), que recebe uma string e uma palavra chave. Essa função deve retornar true caso essa palavra seja encontrada dentro da string, e false em caso contrário.
// Ex:
// str = 'Leitura sobre árvore desbalanceada', keyword = 'árvore' => Deve retornar true
// str = 'Vivendo a primavera e o verão', keyword = 'primavera' => Deve retornar true
// str = 'Vivendo a primavera e o verão', keyword = 'inverno' => Deve retornar false
// str = ' ', keyword = 'casa' => Deve retornar false
function verificaPalavra(str, keyword) {
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == keyword) { return true }
    } return false
}
// Remove a maior palavra
// Crie a função chamada removeMaior(str), que recebe uma string de palavras separadas por vírgulas e remove a maior palavra dessa string. Se existirem mais de uma maior palavra, todas com o maior comprimento deverão ser retiradas. Essa função retorna a lista sem as maiores palavras.
// Ex:
// str = 'casa, moto, carro' => Deve retornar 'casa, moto'
// str = 'serra, moto, carro, casa' => Deve retornar 'moto, casa'
// str = 'pedra, papel, carro. serra' => Deve retornar ' '
function removeMaior(str) {
    let arr = str.split(',')
    if (arr.length == 0) { return '' }
    if (arr.length == 1) { return '' }
    let comp = arr[0].length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > comp) { comp = arr[i].length }
    }
    let finalArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length != comp) { finalArr.push(arr[i]) }
    }
    return finalArr.join(',')
}
// Qual string tem mais palavras
// Crie uma função chamada comparaNumPalavras(str1, str2), que recebe duas strings, com palavras separadas por traços e verifica qual das strings tem um maior número de palavras. Por fim deve retornar um dos casos abaixo conforme as condições de entrada.
// Ex:
// str1 = "casa - carro - placa" e str2 = "abóbora - peixe" => Deve retornar 'str1 > str2'
// str1 = ''abóbora - peixe'' e str2 = "casa - carro - placa" => Deve retornar 'str2 > str1'
// str1 = "casa - pé" e str2 = "chão - teto" => Deve retornar 'str1 = str2'
function comparaNumPalavras(str1, str2) {
    let arr1 = str1.split('-')
    let arr2 = str2.split('-')
    if (arr1.length > arr2.length) { return 'str1 > str2' }
    if (arr1.length < arr2.length) { return 'str1 < str2' }
    if (arr1.length == arr2.length) { return 'str1 == str2' }
}
// Para no dobro
// Crie uma função chamada paraNoDobro(lst), que recebe uma lista e itera por essa lista enquanto soma os elementos até chegar ao final, ou até encontrar um elemento que possuí um valor que é o dobro do índice que esse elemento ocupa.Retorne a soma acumulada incluindo o valor de parada.
//     Ex:
// lst = [0, 5, 6, 7] => Deve retornar 0
// lst = [] => Deve retornar 0
// lst = [1, 2, 3, 5] => Deve retornar 3
// lst = [9, 0, 1, 3, 7, 10, 9, 8] => Deve retornar 30
function paraNoDobro(lst) {
    let soma = 0
    for (let i = 0; i < lst.length; i++) {
        if (lst[i] == i * 2) {
            return lst[i]
        } else { soma = soma + lst[i] }
    }
}
// Valida senha
// Modifique a função ao lado para que ela seja capaz de validar uma senha.
// Uma senha precisa conter pelo menos uma letra maiúscula, 
// uma letra minúscula, 
// um número e um caractere especial.
// A senha também deve conter no mínimo 8 caracteres.
// Enquanto a função não validar a senha ela deve imprimir "Senha Inválida" e perguntar uma nova senha ao usuário.Quando a senha for inserida corretamente pelo usuário a função deve ser finalizada e deve retornar 1.

function validaSenha(hub) {
    const letrasMaiusculas = /[A-Z]/
    const letrasMinusculas = /[a-z]/
    const numeros = /[0-9]/
    const charEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/
    let senha = hub.perguntaSenha()
    function perguntaSenha(hub) {
        return 'senha'
    }


    return 1;
}

// Soma tabuada
// Crie uma função chamada somaTabuada(), que compute e retorne a soma de todos os resultados das multiplicações da tabuada de 1x1 até 9x9.

// Por exemplo, você terá que fazer todas as multiplicações desde 1x1, 1x2, 1x3, etc, passando por 2x1, 2x2, 2x3, etc até chegar em 9x9 e somar todos os valores, retornando a soma ao final.

function somaTabuada() {
    let final = 0
    for (let num1 = 1; num1 < 10; num1++) {
        for (let num2 = 1; num2 < 10; num2++) {
            final = final + (num1 * num2)
        }
    } return final
}
// Imprima a sequência
// Crie uma função chamada imprimeSequencias(num), que recebe um número representando o total de linhas e imprime todas as strings usando loops aninhados seguindo o seguinte formato:
// Ex:
// imprimeSequencias(9), deve imprimir:
// '1'
// '12'
// '123'
// '1234'
// ...
// ...
// '123456789'

function imprimeSequencias(num) {
    let sequence = ''
    for (let i = 1; i <= num; i++) {
        sequence += i
        console.log(sequence)
    }
}

// Todas as Substrings
// Faça uma função chamada allSubstrings(str), que recebe uma string de uma palavra e deve retornar uma lista contendo todas as subtrings possíveis com as letras dessa palavra.A ordem não é avaliada nos testes.
//     Ex:
// str = 'test' => Deve retornar['t', 'e', 's', 't', 'te', 'es', 'st', 'tes', 'est', 'test']
// str = 'baba' => Deve retornar['b', 'a', 'b', 'a', 'ba', 'ab', 'ba', 'bab', 'aba', 'baba']

function allSubstrings(str) {
    let string = str.split('')
    let finalArray = []
    console.log(string)
    for (let i = 0; i <= string.length; i++) {
        finalArray.push(string[i])
    }
    return finalArray
}
// Imprima a sequência ao contrário
// Crie uma função chamada imprimeAi(num) que recebe um número e imprime um número de linhas igual ao parâmetro de entrada, de modo decrescente, até 1.
// Ex:
// imprimeAi(4) deve imprimir:

// 4 3 2 1
// 3 2 1
// 2 1
// 1
function imprimeAi(num) {
    let sequence = `${num}`
    let sequenceWithSpace = ''
    for (let i = num - 1; i >= 1; i--) {
        sequence += `${i}`
        sequenceWithSpace = sequence.split('').join(' ')
    } console.log(sequenceWithSpace)
    for (let j = 1; j <= num; j++) {
        sequence = sequence.substring(1, sequence.length)
        sequenceWithSpace = sequence.split('').join(' ')
        console.log(sequenceWithSpace)
    }
}

// Imprime tabuada
// Crie uma função chamada imprimeTabuada() que imprime a tabuada, a partir do 1 até o 9, de todos os números.
//     Ex:
// imprimeTabuada() deve imprimir:
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// ...
// ...
// 9 x 8 = 72
// 9 x 9 = 81
function imprimeTabuada() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}
// Imprime o Padrão
// Cria a função chamada imprimePadrao(numLinhas), que recebe um número e imprime, de modo crescente a partir do número 1 até o número recebido, em seguida, de modo decrescente, até o número 1.
// Ex:
// imprimePadrão(5) deve imprimir:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
function imprimePadrao(numLinhas) {
    let sequence = ''
    let sequenceWithSpace = ''
    let sequenceWithSpace2 = ''
    for (let i = 1; i <= numLinhas; i++) {
        sequence += i
        sequenceWithSpace = sequence.split('').join(' ')
        console.log(sequenceWithSpace)
    }
    let sequence2 = `${numLinhas}`
    for (let i = numLinhas - 1; i >= 1; i--) {
        sequence2 += `${i}`
    }
    for (let j = 1; j < numLinhas; j++) {
        sequence2 = sequence2.substring(1, sequence2.length)
        sequenceWithSpace2 = sequence2.split('').reverse().join(' ')
        console.log(sequenceWithSpace2)
    }
}
// Crie uma função chamada desenhaAmpulheta(n) que imprime a ampulheta de base n e altura n.
//     Ex:
// desenhaAmpulheta(5) deve imprimir:
// *****
//  * *
//   *
//  * *
// *****  

function desenhaAmpulheta(n) {
    let x = ''
    let upperHourglass = ''
    for (let i = 1; i <= n; i++) {
        upperHourglass = upperHourglass + '*'
    } console.log(upperHourglass)

    for (let eixoY = 2; eixoY <= n - 1; eixoY++) {
        for (let eixoX = 1; eixoX <= n; eixoX++) {
            if (eixoX === eixoY || eixoX + eixoY === n + 1) { x += '*' }
            else { x += ' ' }

        }
        console.log(x)
        x = ''
    }

    let lowerHourglass = ''
    for (let i = 1; i <= n; i++) {
        lowerHourglass = lowerHourglass + '*'
    } console.log(lowerHourglass)
}

function NelsonDesenhaAmpulheta(n) {
    let branco = `*`
    let preto = ` `
    let linha = ``
    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= n; x++) {
            if (y === 1 || y === n) {
                linha += branco
            }
            if (x === y || x + y === n) {
                linha += branco
            }
            if (x === n) {
                console.log(linha)
                linha = ``
            }
            else {
                linha += preto
            }
        }
    }
}
// *   *
//  * *
//   *
//  * *
// *   *


// Valide o nome do usuário
// Crie uma função chamada validaNome(hub), que faz chamadas a função hub.perguntaNome() que simula um nome via input do usuário.Faça a função validaNome() rodar enquanto o usuário não inserir um nome com pelo menos 3 caracteres, e quando o nome for inserido corretamente, retorne o nome do usuário.
//     Obs.: O parâmetro hub contém a função auxiliar para essa questão.
//         Ex:
//
// Se o input for "Zé" => Deve imprimir no console "Nome inválido, insira no mínimo 3 caracteres" e perguntar novamente seu nome
// Se o input for "Ana" => Deve retornar 'Ana'

function validaNome(hub) {
    nome = hub.perguntaNome();
    while (nome.length < 3) {
        console.log("Nome inválido, insira no mínimo 3 caracteres")
        nome = hub.perguntaNome();
    }
    return nome;
}



// Números Repetidos
// Crie uma função chamada verificaRepetidos(lst) que recebe uma lista de números e retorna uma nova lista que contém os números que aparecem mais de uma vez na lista de entrada.
//     Ex:
// lst = [1, 2, 3, 1, 2, 3, 4, 5] => Deve retornar[1, 2, 3]
// lst = [1, 1, 1, 1, 1, 1] => Deve retornar[1]
// lst = [1, 2, 3, 4] => Deve retornar[]
// lst = [] => Deve retornar[]

function verificaRepetidos(lst) {
    let listaDeRepetidos = [];
    let listaFinal = [];
    for (let i = 0; i < lst.length; i++) {
        for (let j = i + 1; j < lst.length; j++) {
            if (lst[i] == lst[j]) { listaDeRepetidos.push(lst[i]) }
        }
    }
    listaDeRepetidos = listaDeRepetidos.filter((value, index, array) => array.indexOf(value) == index)
    return listaDeRepetidos;
}

// Verifica tamanho strings
// Crie uma função chamada tamanhoStrings(lst) que recebe uma lista e verifica se existem strings do mesmo tamanho nessa lista.Caso existam strings de mesmo tamanho, essa função deve retornar uma nova string com as strings de tamanho igual concatenadas e separadas por espaço.Caso contrário essa função deve retornar uma string vazia
// Ex:
// lst = ["casa", "apartamento", "porta"] => Deve retornar uma string vazia
// lst = ["moto", "carro", "pastel", "fruta"] => Deve retornar "carro fruta"
// lst = ["casa", "céu", "lua", "sim", "não", "mar", "porta"] => Deve retornar "céu lua sim não mar"
// lst = [] => Deve retornar uma string vazia

function tamanhoStrings(lst) {
    let listaDeRepetidos = [];

    for (let i = 0; i < lst.length; i++) {

        for (let j = i + 1; j < lst.length; j++) {

            if (lst[i].length === lst[j].length) {
                listaDeRepetidos.push(lst[i])
                listaDeRepetidos.push(lst[j])
            }
        }
    }

    listaDeRepetidos = listaDeRepetidos.filter((value, index, array) => array.indexOf(value) == index)
    return listaDeRepetidos.join(' ')
}

// Tem reverso
// Crie uma função chamada temReverso(lst) que recebe uma lista e verifica se entre as strings da lista existe alguma que aparece escrita normalmente e escrita da maneira reversa.
//     Ex:
// lst = ['mar', 'mato', 'otam', 'lar'] => Deve retornar true
// lst = ['casa', 'arara', 'papel'] => Deve retornar false
// lst = ['correr', 'sorrir', 'pular', 'rir', 'ralup', 'sair'] => Deve retornar true
// lst = ['rir', 'ir'] => Deve retornar false
// lst = ['rir', 'ir', 'rir'] => Deve retornar true

function temReverso(lst) { }

// Valor imediatamente menor
// Implemente a função valorImediatamenteMenor(arr) que recebe um array de números como parâmetro e retorna um outro array em que na posição i de cada elemento do array original deve estar o valor imediatamente menor do que o valor original encontrado na array.Se não houver valor imediatamente menor deve ser o mesmo valor.
// Por exemplo, para o array
// [5, 10, 13, 2, 1]
// deve retornar o array
// [2, 5, 10, 1, 1]
// pois para o primeiro valor(5), 2 é o valor imediatamento menor que 5 no array original.Para o segundo valor(10), 5 é o maior valor menor que 10 no array original.Já para o terceiro(13), 10 é o maior valor que é menor que 10 no array original.No quarto(4), 1 é o maior valor menor que 2. E, por último, não tem valor menor que 1, então continua 1.

function valorImediatamenteMenor(arr) {
    let sortedArray = [...arr].sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < sortedArray.length; j++) {
            if (sortedArray[j] === arr[i]) {
                arr[i] = sortedArray[Math.max(j - 1, 0)]
            }
        }
    }
    return arr
}


// Soma dos pares
// Crie uma função chamada acumulaPares(lst) que recebe uma lista de inteiros e retorna a soma dos elementos que aparecem exatamente duas vezes na lista.
//     Ex:
// lst = [1, 2, 2, 3, 4, 4, 5] => Deve retornar 12
// lst = [1, 2, 3, 4, 5] => Deve retornar 0
// lst = [1, 1, 1, 1, 1, 1] => Deve retornar 0
// lst = [5, 5, 5, 3, 3, 5, 5, 5] => Deve retornar 6


let info = 'demonstração do prof exercicio 4';

// function ordenaNumeros(numeros) {
//     for (let i = 0; i < numeros.length; i++) {
//         let menor = i;

//         for (let j = i + 1; j < numeros.length; j++) {
//             if (numeros[j] < numeros[menor]) {
//                 menor = j;
//             }
//         }
//         let aux = numeros[i]
//         numeros[i] = numeros[menor];
//         numeros[menor] = aux;
//     }
//     return numeros
// }



// **************************************



// Ordenação de números
// Escreva uma função ordenaNumeros(numeros) que recebe um array de números como parâmetro e retorna um array dos números ordenados em ordem crescente.
//     Exemplo:
// numeros = [10, 2, 1, 5] => Deve retornar[1, 2, 5, 10]
// numeros = [] => Deve retornar[]

function ordenaNumeros(numeros) {
    return numeros.sort((a, b) => a - b)
}

// Ordenação de strings
// Escreva uma função ordenaStrings(strings) que recebe um array de strings como parâmetro e retorna um array das strings ordenada alfabeticamente, mas de trás para frente.
//     Exemplo:
// strings = ["Brasil", "Argentina", "Chile"] => Deve retornar["Chile", "Brasil", "Argentina"]

function ordenaStrings(strings) {
    return strings.sort(function (a, b) {
        return a.localeCompare(b)
    }).reverse()
}

// Ordenação de objetos 2
// Implemente uma função ordenaPessoas(pessoas) que ordena uma lista de pessoas pela idade e, quando a idade for igual, ordena alfabeticamente.

// Por exemplo, ordenar a seguinte lista:

// [
//     { nome: "Agnaldo", idade: 30 },
//     { nome: "Josefina", idade: 29 },
//     { nome: "Cornélio", idade: 29 },
//     { nome: "Antoniel", idade: 23 },
//     { nome: "Xanthippe", idade: 26 }
// ]

// produziria a seguinte lista:

// [
//     { nome: "Antoniel", idade: 23 },
//     { nome: "Xanthippe", idade: 26 },
//     { nome: "Cornélio", idade: 29 },
//     { nome: "Josefina", idade: 29 },
//     { nome: "Agnaldo", idade: 30 }
// ]

// com Cornélio vindo antes de Josefina, pois apesar de terem a mesma idade, Cornélio vem antes alfabeticamente.





// Busca os menores
// Crie uma função que se chama tresMenores(lst), que recebe uma lista de números inteiros positivos e retorna uma nova lista com os três menores números da lista de entrada.A lista de entrada sempre terá tamanho 3 ou maior.
//     Ex:
// lst = [3, 2, 5, 6, 2, 3, 4, 1] => Deve retornar[1, 2, 2]
// lst = [115, 105, 106, 3, 109, 115] => Deve retornar[3, 105, 106]
// lst = [1, 1, 1, 1, 2, 2, 3, 3] => Deve retornar[1, 1, 1]

function tresMenores(lst) {
    let ordem = lst.sort()
    ordem = lst.sort((a, b) => a - b)
    return [ordem[0], ordem[1], ordem[2],]
}

// Conta Strings
// Crie uma função chamada contaStrings(lst), que recebe uma array de arrays e para cada array interna verifica a quantidade de strings que existem nessa array interna.Deve retornar uma nova lista com a contagem das strings de cada array interna.Cada array interna pode conter qualquer tipo de elemento.
//     Ex:
// lst = [[1, 2.3, 'a'], ['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4], ['ar', 'flor', undefined]] => Deve retornar[1, 5, 0, 2]
// lst = [['céu', 4, 20], [], ['nave espacial']] => Deve retornar[1, 0, 1]



function contaStrings(lst) {
    let count = 0;
    let final = [];
    for (let i = 0; i < lst.length; i++) {
        for (let j = 0; j < lst[i].length; j++) {
            if (typeof (lst[i][j]) === 'string') {
                count++
            }
        }

        final.push(count);
        count = 0;
    }
    return final;
}

// Crie a matriz
// Escreva uma função chamada criaMatriz(num), que recebe um inteiro positivo e cria uma matriz seguindo o padrão:

function criaMatriz(num) {
    let matFinal = [];
    for (let y = 0; y < num; y++) {
        let matInicial = [];
        for (let x = y; x < num + y; x++) {
            matInicial.push(2 ** x)
        }
        matFinal.push(matInicial)
    }
    return matFinal
}

// Para No Dobro
// Crie uma função chamada paraNoDobro(lst), que recebe uma lista de números inteiros não - negativos e itera por essa lista enquanto soma os elementos até chegar ao final, ou até encontrar um elemento que possui um valor que é o dobro do índice que esse elemento ocupa(nesse último caso, esse elemento não entra na soma).A função retorna a soma calculada.
//     Ex:
// lst = [0, 5, 6, 7] => Deve retornar 0
// lst = [] => Deve retornar 0
// lst = [1, 2, 3, 5] => Deve retornar 1
// lst = [9, 0, 1, 3, 7, 10, 9, 8] => Deve retornar 20

function paraNoDobro(lst) {
    let soma = 0;
    for (let i = 0; i < lst.length; i++) {
        if (lst[i] === 2 * i) {
            return soma
        }
        soma = soma + lst[i];
    }
    return soma
}

// Posição Maior Palavra
// Crie uma função chamada maiorNoFim(str), que recebe uma string composta por palavras separadas entre si por um único espaço em branco simples, encontra a maior palavra dessa string e troca essa palavra de posição com a última palavra da string.

// backup function maiorNoFim(str) {
//     let array = str.split(' ')
//     let maior = 0;
//     let maiorPalavra = '';
//     let final = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length > maior) {
//             maiorPalavra = array[i]
//             maior = array[i].length
//             console.log(maiorPalavra, maior)
//         }
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== maiorPalavra) {
//             final.push(array[i])
//         }
//     }
//     final.push(maiorPalavra)
//     return final.join(" ")
// }

function maiorNoFim(str) {
    if (str === "") {
        return str
    }
    let array = str.split(' ')
    let maior = 0;
    let maiorPalavra = '';
    let final = [];
    let posicaoDaMaiorPalavra;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maior) {
            maiorPalavra = array[i]
            maior = array[i].length;
            posicaoDaMaiorPalavra = i;
        }
    }
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] !== maiorPalavra) {
            final.push(array[i])
        }
    }
    final.splice(posicaoDaMaiorPalavra, 0, array[array.length - 1])
    final.push(maiorPalavra)
    return final.join(" ")
}

// Crie Array
// Crie uma função chamada criaArray(num).Essa função deve criar uma array de tamanho 15. Em seguida deve preencher a primeira posição desse array com o parâmetro de entrada, e em todas as posições seguintes inserir metade do valor anterior(poderá ser número quebrado, não faça nenhum arredondamento).
//     Ex:
// num = 100 000 => Deve retornar[100 000, 50 000, 25 000, 12 500, 7250, ..., ]

function criaArray(num) {
    let arrayFinal = [];
    arrayFinal.push(num);
    for (let i = 1; i < 15; i++) {
        arrayFinal.push(arrayFinal[i - 1] / 2)
    }
    return arrayFinal
}

// Hash de Array de Letras
// Crie uma função chamada arrayHash(arr).
// Essa função vai receber uma array composta por strings.
// Todas as strings em um mesmo caso de teste têm o mesmo tamanho.
// Todas as strings são compostas de até 30 letras maiúsculas no intervalo de A - Z.
// O valor que cada letra representará para gente será calculado pela fórmula:
// Valor = (Posição no Alfabeto) + (Posição do Elemento) + (Posição no Input)
// Todas as posições são calculadas a partir do 0. A letra 'A' tem valor 0, a letra 'B' tem valor 1, ...
// Sua função deve retornar o valor da soma para a array de entrada.
//     Ex:
// arr = ['CBA', 'DDD'], cada caracter poderia ser computado da seguinte forma:
// Valor = (Posição no Alfabeto) + (Posição do Elemento) + (Posição da String)
// 2 = 2 + 0 + 0 : 'C' tem valor 2, está na posição 0, da string 0
// 2 = 1 + 1 + 0 : 'B' tem valor 1, está na posição 1, da string 0
// 2 = 0 + 2 + 0 : 'A' tem valor 0, está na posição 2, da string 0
// 4 = 3 + 0 + 1 : 'D' tem valor 3, está na posição 0, da string 1
// 5 = 3 + 1 + 1 : 'D' tem valor 3, está na posição 1, da string 1
// 6 = 3 + 2 + 1 : 'D' tem valor 3, está na posição 2, da string 1
// Para esse exemplo, o retorno deveria ser 2 + 2 + 2 + 4 + 5 + 6 = 21

function arrayHash(arr) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let arrayFinal = []
    let somaFinal = 0;
    let valor = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < alphabet.length; k++) {
                if (arr[i][j] === alphabet[k]) {
                    valor = k + j + i
                }
            }
            arrayFinal.push(valor)
            valor = 0;
        }
    }
    for (let i = 0; i < arrayFinal.length; i++) {
        somaFinal = somaFinal + arrayFinal[i]
    }
    return somaFinal;
}

// Repetidos
// Crie uma função chamada verificaRepetidos(lst), que recebe uma lista de números e verifica se algum valor se repete nessa lista.Caso existam valores repetidos, retorne true, em caso contrário false.
//     Ex:
// lst = [1, 2, 3, 2, 5, 6] => Deve retornar true
// lst = [1, 2, 3, 4, 5, 6] => Deve retornar false
// lst = [1] => Deve retornar false
// lst = [] => Deve retornar false

function verificaRepetidos(lst) {
    let arr = lst.sort(function (a, b) { return a - b });
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return true
        }
    }
    return false
}


// Strings de dentro para fora
// Crie a função consertaBug(str), que recebe uma frase que está escrita 'de dentro para fora' e deve transformá - la na frase escrita de forma correta.
// Uma string escrita de dentro para fora, tem o começo no meio e o meio no final:
// "dentro para fora" => "p ortnedarof ara"
// Ex:
// str = "CBAFED" => Deve retornar "ABCDEF"
// srr = "asaCaL lepaPeD" => Deve retornar "LaCasaDePapel "
// Você pode considerar que a entrada vai ser sempre uma string de tamanho par.

function consertaBug(str) {
    let array = str.split('')
    let pontoInicial = (array.length / 2);
    let primeiraMetade = [];
    let segundaMetade = [];
    let InsertIndex = pontoInicial;
    for (let i = pontoInicial; i > 0; i--) {
        InsertIndex--
        primeiraMetade.push(array[InsertIndex])
    }
    for (let i = pontoInicial; i < array.length; i++) {
        segundaMetade.push(array[i])
    }
    segundaMetadeInvertida = segundaMetade.reverse()
    for (let i = 0; i < segundaMetadeInvertida.length; i++) {
        primeiraMetade.push(segundaMetadeInvertida[i])
    }
    return primeiraMetade.join('')

    // FIX ME - Sintaxe ficou horrível de se ler
}

// Tem reverso
// Crie uma função chamada temReverso(lst) que recebe uma lista e verifica se entre as strings da lista existe alguma que aparece escrita normalmente e escrita da maneira reversa.
//     Ex:
// lst = ['mar', 'mato', 'otam', 'lar'] => Deve retornar true
// lst = ['casa', 'arara', 'papel'] => Deve retornar false
// lst = ['correr', 'sorrir', 'pular', 'rir', 'ralup', 'sair'] => Deve retornar true
// lst = ['rir', 'ir'] => Deve retornar false
// lst = ['rir', 'ir', 'rir'] => Deve retornar true

function temReverso(lst) {

    let reversedArr = []
    let reversedArrOfStrings = []
    for (let i = 0; i < lst.length; i++) {
        reversedArr.push(lst[i].split('').reverse())
    }
    for (let i = 0; i < reversedArr.length; i++) {
        reversedArrOfStrings.push(reversedArr[i].join(''))
    }
    for (let i = 0; i < reversedArrOfStrings.length; i++) {
        for (let j = 0; j < lst.length; j++) {
            if (reversedArrOfStrings[i] === lst[j] && i !== j) {
                return true
            }
        }
    }
    return false
}

// Valida senha
// Modifique a função ao lado para que ela seja capaz de validar uma senha.Uma senha precisa conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.A senha também deve conter no mínimo 8 caracteres.Enquanto a função não validar a senha ela deve imprimir "Senha Inválida" e perguntar uma nova senha ao usuário.Quando a senha for inserida corretamente pelo usuário a função deve ser finalizada e deve retornar 1.

// Obs.: O parâmetro hub contém a função auxiliar para essa questão.
//     Ex:
// Se a senha é 'Aa0!' => Deve retornar "Senha Inválida" e perguntar uma nova senha ao usuário
// Se a senha é 'Aaaaaa0!' => Deve finalizar a execução e retornar 1

// function validaSenha(hub) {
//     const letrasMaiusculas = /[A-Z]/
//     const letrasMinusculas = /[a-z]/
//     const numeros = /[0-9]/
//     const charEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/
//     hub = hub.split('');
//     let senha = perguntaSenha(hub)
//     return 1;
// }

// function perguntaSenha(hub) {
//     console.log(hub)
//     contemCaractereEspecial = false;
//     contemLetraMaiuscula = false;
//     contemLetraMinuscula = false;
//     contemNumero = false;

//     for (let i = 0; i < hub.length; i++) {
//         for (let j = 0; j < hub.length; j++){
//             if (hub[i] === ) { }
//         }

//     }
// }

let hub = 'eriguerrrrrrr'

function validaSenha(hub) {
    const letrasMaiusculas = /[A-Z]/
    const letrasMinusculas = /[a-z]/
    const numeros = /[0-9]/
    const charEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/

    let contemCaractereEspecial = false;
    let contemLetraMaiuscula = false;
    let contemLetraMinuscula = false;
    let contemNumero = false;

    let senha = perguntaSenha(hub.split(''))
    function perguntaSenha(hub) {
        for (let i of letrasMaiusculas) {
            if (hub.includes(i)) {
                contemLetraMaiuscula = true;
            }
        }
        for (let i of letrasMinusculas) {
            if (hub.includes(i)) {
                contemLetraMinuscula = true;
            }
        }
        for (let i of numeros) {
            if (hub.includes(i)) {
                contemNumero = true;
            }
        }
        for (let i of charEspeciais) {
            if (hub.includes(i)) {
                contemCaractereEspecial = true;
            }
        }
        if (contemCaractereEspecial === true
            && contemLetraMaiuscula === true
            && contemLetraMinuscula === true
            && contemNumero === true
            && hub.length > 7) {
            return 1
        } else {
            console.log("Senha Inválida");
            perguntaSenha(hub)
        }
    }

    return senha;
}

// Notas
// Um professor, após terminar a correção das provas da turma, quer a sua ajuda para analisar as notas dos alunos.
// Ele quer descobrir qual é a nota mais comum entre os alunos na sua última prova.Todas as notas são inteiros entre 0 e 10(inclusive)
// Se existir mais de uma nota mais frequente, você deve retornar a maior nota(entre as mais frequentes).
//     Ex:
// lst = [20, 80, 80, 10, 20] => Deve retornar 80
// lst = [20, 25, 85, 40, 25, 90, 25, 40, 55, 40] => Deve retornar 40
// lst = [10, 10, 10, 40, 40, 5, 5, 5] => Deve retornar 10

const lst = [20, 80, 80, 10, 11, 12, 50, 50];

// function maisFrequente(lst) {
//     let mostFrequentNumber = 0;
//     let mostFrequentNumberCount = 0;
//     let count = 0;
//     for (let i = 0; i < lst.length; i++) {
//         for (let j = 0; j < lst.length; j++) {
//             if (lst[i] === lst[j]) {
//                 count++
//             }
//             if (count > mostFrequentNumberCount) {
//                 mostFrequentNumberCount = count;
//                 mostFrequentNumber = lst[i]
//             }
//             count = 0;
//         }

//     }
//     return mostFrequentNumber;
// }

function maisFrequente(lst) {
    lst = lst.sort(function (a, b) { return a - b })
    lst = lst.sort((a, b) =>
        lst.filter(v => v === a).length
        - lst.filter(v => v === b).length
    )
    return lst.pop()
}

// LED
// João quer montar um painel contendo um número feito de LEDs.
// Ele não tem muitos LEDs e ele precisa saber quantos LEDs serão necessários para ele montar o número que deseja.
// Ajude João montando um algoritmo que a partir de um número inteiro não - negativo de entrada e considerando a configuração de cada número abaixo, calcule o número minimo de LEDs necessários para que João consiga montar seu painel.
// Chame sua função de contaLeds(num).
//     Ex:
// num = 15 => Deve retornar 7
// num = 115 => Deve retornar 9
// num = 115380 => Deve retornar 27

function contaLeds(num) {
    let arr = num.toString().split('')
    numF = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '1') {
            numF += 2
        }
        if (arr[i] === '2') {
            numF += 5
        }
        if (arr[i] === '3') {
            numF += 5
        }
        if (arr[i] === '4') {
            numF += 4
        }
        if (arr[i] === '5') {
            numF += 5
        }
        if (arr[i] === '6') {
            numF += 6
        }
        if (arr[i] === '7') {
            numF += 3
        }
        if (arr[i] === '8') {
            numF += 7
        }
        if (arr[i] === '9') {
            numF += 6
        }
        if (arr[i] === '0') {
            numF += 6
        }
    }
    return numF
}

// Cumes e Vales
// Um professor de geologia reparou que em um terreno de cumes e vales andando reto em uma direção ele conseguia encontrar um padrão na variação de altura desses morros.Ele percebeu que a cada 100 metros ele se encontrava em um cume e que sempre existia um vale no meio entre dois cumes.Isso significa que a cada 50 metros durante todo o percurso ele estará em cima de um vale ou no fundo de um cume.Não existe nenhum cume seguido por outro cume, nem nenhum vale seguido por outro vale.

// Esse professor ficou curioso com esse padrão e gostaria de saber se ele ocorre em outras direções.Sua tarefa é: dada uma array representando uma séria de medições com as alturas da caminhada em outras direções, indicar se nessas direções existe ou não esse padrão.

// A array é composta por diversos números inteiros positivos e negativos que representam as alturas medidas a cada 50 metros.Uma medida é considerada cume se é maior que a medida anterior e é considerada um vale se é mais baixa que a anterior.

// Sua função deve retornar true, caso exista o padrão na array, e false, caso contrário

// Ex:

// arr = [1, 4, -2] => Deve retornar true
// arr = [100, 99, 112, -8, -7] => Deve retornar true
// arr = [1, 2, 2, 1] => Deve retornar false
// arr = [-10, -8, -15, 10, 5, 6, -6] => Deve retornar true
// arr = [] => Deve retornar false
// arr = [2, 1] => Deve retornar true
// arr = [1, 2] => Deve retornar true
// arr = [4] => Deve retornar false

function temPadrao(arr) {
    if (arr.length < 2) {
        return false
    }
    if (arr.length === 2 && arr[0] !== arr[1]) {
        return true
    }
    if (arr.length === 2 && arr[0] === arr[1]) {
        return false
    }

    for (let i = 0; i < arr.length - 2; i++) {
        if ((arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2]) || (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2])) { }
        else {
            return false
        }
    }
    return true
}

// O problema da Dama
// Em um jogo de Xadrez existem diversas peças com movimentos curiosos.Uma dessas peças é a Dama, que pode ser movimentada por qualquer número de casas em qualquer direção: na mesma linha, na mesma coluna ou em qualquer uma das diagonais, como demonstrado na figura abaixo:



// O grande mestre de xadrez Kary Gasparov inventou um novo problema de xadrez: dado a posição de uma dama em um tabuleiro vazio, quantos movimentos são necessários para que a dama consiga atingir outra casa no tabuleiro ?

//     Kary conseguiu a solução para algumas posições, mas está tendo dificuldade com outras, e por isso veio pedir sua ajuda para escrever um algoritmo que resolva esse problema.

//         Input:

// Sua função receberá duas listas contendo[X1, Y1] e[X2, Y2].Onde X1, Y1 representam a casa em que a dama está e X2, Y2 representam a casa em que a dama quer chegar.No tabuleiro as colunas são numeradas de 1 a 8, da esquerda para a direita; as linhas também são numeradas de 1 a 8, de cima para baixo.Uma casa é representada por uma linha X e uma coluna Y.

//     Output:

// Seu programa deve retornar um número indicando a quantidade de movimentos necessários para a Dama chegar na casa final.

//     Ex:

// casaIni = [3, 3], casaFin = [3, 3] => Deve retornar 0
// casaIni = [4, 5], casaFin = [4, 8] => Deve retornar 1
// casaIni = [2, 1], casaFin = [4, 5] => Deve retornar 2

// function numMov(casaIni, casaFin) {
//     let XInicial = casaIni[0]
//     let XFinal = casaFin[0]
//     let YInicial = casaIni[1]
//     let YFinal = casaFin[1]
//     console.log(XInicial, XFinal, YInicial, YFinal)

//     if (XInicial === XFinal && YInicial === YFinal) {
//         return 0
//     }

//     if (XInicial === XFinal) {
//         return (YInicial - YFinal)
//     }
// }

function numMov(casaIni, casaFin) {

    let XInicial = casaIni[0]
    let XFinal = casaFin[0]
    let YInicial = casaIni[1]
    let YFinal = casaFin[1]

    if (XInicial === XFinal && YInicial === YFinal) {
        return 0
    }

    if ((XInicial === XFinal && YInicial !== YFinal) || (XInicial !== XFinal && YInicial === YFinal)) {
        return 1
    }

    if (XInicial + YInicial === XFinal + YFinal) {
        return 1
    }

    if (XInicial - YInicial === XFinal - YFinal) {
        return 1
    }

    if ((XInicial !== XFinal && YInicial !== YFinal)) {
        return 2
    }
}

// Checagem de posição
// Antes de um torneio de robótica, seu professor propôs que você criasse um código capaz de detectar se um determinado robô invadiu uma área definida por 4 pontos(A, B, C e D).Os quatro pontos serão informados e formarão um retângulo conforme a imagem abaixo.As coordenadas X e Y do robô serão informadas(quadrado vermelho na figura).Atenção: nem sempre o ponto A será o esquerdo inferior do retângulo, nem sempre B será o direito inferior, etc.

// Entrada
// Seu programa recebe cinco entradas.Os pontos A, B, C e D, que são listas com dois elementos([x, y]), e uma lista de listas com os pontos que o robô visitou.
//     Saída
// O programa deve retornar, a partir da lista de pontos que o robô visitou, quantas vezes o robô esteve dentro da área formada por esses quatro pontos(considerando as bordas como parte dessa área).Todas as coordenadas sempre estarão entre 1 e 10.
// Ex:
// A = [3, 6], B = [6, 6], C = [6, 5], D = [3, 5], pontos = [[1, 1], [5, 4], [6, 6], [4, 5], [2, 2], [7, 7]] => Deve retornar 3


let A = [3, 6];
let B = [6, 6];
let C = [6, 5];
let D = [3, 5];
let pontos = [[1, 1], [5, 4], [6, 6], [4, 5], [2, 2], [7, 7]]

function checkPosition(A, B, C, D, pontos) {

    let listaDeCoordenadasX = [A[0], B[0], C[0], D[0]]
    let maiorX = listaDeCoordenadasX.sort(function (a, b) { return a - b }).pop()
    let menorX = listaDeCoordenadasX.sort(function (a, b) { return a - b }).shift()

    let listaDeCoordenadasY = [A[1], B[1], C[1], D[1]]
    let maiorY = listaDeCoordenadasY.sort(function (a, b) { return a - b }).pop()
    let menorY = listaDeCoordenadasY.sort(function (a, b) { return a - b }).shift()

    let contagem = 0;

    for (let i = 0; i < pontos.length; i++) {

        let pontoX = pontos[i][0]
        let pontoY = pontos[i][1]

        if (pontoX <= maiorX &&
            pontoX >= menorX &&
            pontoY >= menorY &&
            pontoY <= maiorY
        ) {
            contagem++
        }
    }
    return contagem
}

// Um jogo muito suspeito
// Um grupo misterioso pediu sua ajuda para validar um novo tipo de jogo, porém devido a questões de privacidade eles não podem revelar exatamente como será esse jogo, você recebeu apenas alguns detalhes.A única coisa que você sabe é que dado uma ponte com dois caminhos possíveis, esquerda ou direita, você deve verificar se o caminho escolhido por um jogador teve um final feliz ou não.

//     Entrada

// Sua função irá receber dois parametros de entrada, o primeiro é uma lista de listas onde cada lista interna possui exatamente dois elementos, sendo eles true ou false.Valores true representam um caminho válido e valores false representam caminhos inválidos.O segundo parametro é uma lista de números inteiros E, tal que 0 ≤ E ≤ 1, que representa 0 para a esquerda e 1 para a direita.
//     Saída
// Caso todas as escolhas do jogador sejam em caminhos válidos a saída deve ser:) , caso contrário deve ser: (
//     Ex.:

// Entrada:

// primerio parametro: [[true, false], [true, false], [false, true], [false, true]]

// segundo parametro: [0, 0, 1, 1]

// Saída: :)

function jogar(ponte, passos) {
    for (let i = 0; i < passos.length; i++) {
        let caminhoDaEsquerda = ponte[i][0]
        let caminhoDaDireita = ponte[i][1]
        let direção;
        if (passos[i] === 0) { direção = 'esquerda' }
        if (passos[i] === 1) { direção = 'direita' }

        if (direção === 'direita' && caminhoDaDireita === false) {
            return ':('
        }
        if (direção === 'esquerda' && caminhoDaEsquerda === false) {
            return ':('
        }
    }
    return ':)'
}

// O melhor salgado de todos os tempos, no turno da manhã

// Kleberson e Marta estão enfrentando um grande dilema, os dois são sócios numa maravilhosa lanchonete e não conseguem chegar à conclusão de qual é o melhor salgados de todos os tempos, no turno da manhã.Após dias de discussão e várias enquetes entre seus clientes, Marta pediu sua ajuda para resolver essa história de uma vez por todas.

// Marta irá fornecer as notinhas da máquina do caixa de um dia, essa nota agrupa a quantidade de cada salgado vendido no espaço de uma hora em cada turno.

//     Entrada

// A entrada será uma lista de textos onde o início de cada turno é representado pelas letras M(manhã), T(tarde), N(noite) que virão sempre nessa ordem.Após a letra do turno existem N valores inteiros, o primeiro valor é o total de salgados vendidos naquele turno, depois textos que representam a quantidade de cada salgado vendido por hora.O texto da quantidade total de salgados é representado por um valor numérico, seguido por um espaço, da letra de cada salgado, sendo elas: C(coxinha), R(risolis) e P(pastel).

//     Saída

// A saída deve ser uma lista com a quantidade total de cada salgado, vendido no turno da manhã, na ordem: Coxinha, Risolis e Pastel.Pode ser que algum / alguns salgados não tenham sido vendidos de manhã.

//     Ex 1:

// Entrada: arr = ['M', '40', '10 C', '6 R', '14 P', '20 C', 'T', '20', '20 C', 'N', '20', '20 P']

// Saída: [30, 6, 14].Porque, de manhã, foram vendidos 10 + 20=30 coxinhas, 6 risolis e 14 pastéis

// Ex 2:

// Entrada: arr = ['M', '40', '10 C', '14 P', '20 C', 'T', '20', '20 C', 'N', '20', '20 P']

// Saída: [30, 0, 14].

//     Ex 3:

// Entrada: arr = ['M', 'T', '20', '20 C', 'N', '20', '20 P']

// Saída: [0, 0, 0].

function contaSalgado(arr) {
    let manha = [];
    let c = 0;
    let r = 0;
    let p = 0;
    for (let i = 0; arr[i] !== "T"; i++) {
        manha.push(arr[i])
    }
    for (let j = 0; j < manha.length; j++) {
        let element = manha[j].split(' ');
        if (element[1] === "C") {
            c += Number(element[0])
        }
        if (element[1] === "R") {
            r += Number(element[0])
        }
        if (element[1] === "P") {
            p += Number(element[0])
        }
    }
    return [c, r, p]
}

// O troco pode ficar pra você
// Sua mãe passou uma lista de compras para ir buscar no mercadinho do bairro, e ela foi bem clara que você deveria trazer todos os itens da lista ou o máximo possível deles seguindo a ordem de prioridade.Para te dar um incentivo, ela disse que o troco poderia ficar para você.Empolgado com a ideia de comprar tudo em balas, você aceita a missão.Chegando no mercadinho, você descobre que sua mãe havia ligado momentos antes e passado a lista de compras para o atendente, que anotou os preços de cada produto em uma lista, seguindo a ordem ditada por sua mãe.

// Nesse momento, você percebe que talvez não haverá troco e tem a brilhante ideia de criar um programa que verifica essa possibilidade para você, assim sempre que sua mãe pedir novamente para que você vá ao mercado você poderá verificar se irá sobrar um troco.

// Seu programa deve receber duas listas, a primeira de ítens de compra, a segunda com os preços seguindo a ordem dos ítens da lista de compras, e por fim o valor do dinheiro recebido.Seu programa irá mostrar a lista de ítens comprados com o valor dado.Os preços dos ítens e dinheiro total podem ser valores quebrados(ex: 3.5), mas serão positivos.A lista de compras sempre terá pelo menos 1 item.

//     Exemplo:

// lista = ['detergente', 'sal', 'macarrao', 'pao']; precos = [3.00, 1.00, 4.0, 12.0]; total = 9 => Deve retornar['detergente, 'sal', 'macarrao']

function listaCompras(lista, precos, total) {


}



// Organizando prateleiras
// Martha é proprietária de um e - commerce de produtos importados e quer melhorar o site da sua loja, pensando nisso ela elaborou uma forma de instigar os clientes a gastarem mais.A solução é uma prateleira virtual onde ela irá exibir produtos mais baratos acompanhados por um produto mais caro.Desta forma ela sempre irá mostrar um produto mais caro enquanto mantém a percepção dos seus clientes que a loja vende muitos produtos baratos, já que ela também estará exibindo esses produtos.

// Martha então definiu que a melhor organização é um grupo de três produtos, onde dois são baratos e um é caro.Ela definiu também que os produtos devem ser organizados por preço, ou seja, a primeira prateleira deve mostrar os dois produtos mais baratos com o produto mais caro da loja, a segunda prateleira deve mostrar os terceiro e quarto produtos mais baratos acompanhados do segundo produto mais caro, e assim por diante.



//     Entrada: Uma lista(tamanho T) de produtos com valores numéricos N que representam o preço, tal que, 1 <= N <= 20. T não necessariamente é múltiplo de 3, e caso não seja, a última prateleira vai ficar com os ítens que sobrarem(se sobrar um item só, a última prateleira terá só ele; se sobrarem 2 ítens, a última prateleira terá o de menor preço primeiro).



// Saída: Uma lista de listas, onde cada lista interna possui tamanho 3(exceto a úlltima em alguns casos), sendo os dois primeiros itens com menores valores e o terceiro com o maior valor.As próximas listas internas devem obedecer a mesma regra, porém considerando os menores e maior valor excluindo os itens inseridos na lista anterior.



//     Ex: [10, 1, 2, 1] => Deve retornar[[1, 1, 10], [2]]

// -----------------------------

// Álbum da Copa
// Em ano de Copa do Mundo, o álbum de figurinhas oficial é sempre um grande sucesso entre as crianças e adolescentes.

// Para quem não conhece, o álbum contém espaços numerados de 1 a N para colar as figurinhas; cada figurinha, também numerada de 1 a N, é uma pequena foto de um jogador de uma das seleções que disputará a Copa do Mundo.

// O objetivo é completar o álbum, de modo a colar todas as figurinhas nos seus respectivos espaços.

// As figurinhas são vendidas em envelopes fechados, de forma que o comprador não sabe quais figurinhas está comprando, e pode ocorrer de ao abrir o pacote encontrar uma figurinha que ele já possui no álbum colecionando assim uma figurinha repetida.

// Para ajudar os usuários, a empresa responsável pela venda do álbum quer criar um aplicativo que permita gerenciar facilmente as figurinhas que faltam para completar o álbum e está solicitando a sua ajuda.

// Dados o número total n de espaços do álbum, e uma lista das figurinhas já compradas(que pode conter figurinhas repetidas), sua tarefa é determinar quais figurinhas faltam para completar o álbum e retornar uma lista com essas figurinhas em ordem crescente.

// Complete a função figurinhasFaltantes ao lado, sabendo que os parâmetros representam respectivamente:

// n: O número total de figurinhas que existem no álbum.n estará entre 1 e 50 mil
// lst: A lista de figurinhas compradas(coladas no álbum e repetidas).O tamanho de lst estará entre 1 e 50 mil

// Ex: figurinhasFaltantes(n, lst)
// n = 10, lst = [5, 8, 3] => Deve retornar[1, 2, 4, 6, 7, 9, 10]
// n = 5, lst = [3, 3, 2, 3, 3, 3] => Deve retornar[1, 4, 5]

function figurinhasFaltantes(n, lst) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (lst.includes(i)) { }
        else {
            arr.push(i)
        }
    }
    return arr
}


// Morto ou Vivo
// Toda criança certamente já brincou de "morto/vivo".A brincadeira é dirigida por um adulto, que comanda as crianças.A brincadeira é composta de rodadas.No início, os participantes são organizados pelo chefe em fila única.A cada rodada o adulto grita "morto" ou "vivo".O participante que se confunde, e não segue a ordem correta é eliminado, deixando o seu lugar na fila.Os participantes remanescentes agrupam - se novamente em fila única, preenchendo as posições dos participantes eliminados, mas mantendo suas posições relativas.O jogo continua até que uma rodada seja composta por exatamente um participante.Tal participante é dito vencedor do jogo.

// Por exemplo, considere que a brincadeira inicie com cinco participantes, identificados por números inteiros de 1 a 5, e que o chefe organize a fila na ordem[3, 2, 1, 4, 5].Se na primeira rodada forem eliminados os participantes 2 e 4, a fila na segunda rodada será formada por[3, 1, 5]; se na segunda rodada for eliminado o participante 1, a fila da terceira rodada será formada por[3, 5].Se na terceira rodada o participante 3 for eliminado, o vencedor da brincadeira será o participante 5.

// Sua tarefa é escrever um programa que determine o vencedor de uma partida de "morto/vivo", a partir da informação das ordens dadas pelo chefe e das ações executadas pelos participantes em cada rodada.

//     Entrada:
// O programa recebe 3 entradas.Uma lista com a sequência, ou seja, a ordem em que as crianças estão alinhadas no ínicio da partida, uma lista contendo a sequência de instruções que o adulto deu, sendo 0 representando "morto" e 1 representando "vivo", e uma lista de listas contendo o movimento de cada criança em cada rodada(na ordem em que aparecem na fila).A entrada sempre garantirá que permaneça um único participante ao fim do jogo(nem mais, nem menos).No início, sempre haverá pelo menos 2 crianças, e o jogo sempre terá pelo menos 1 rodada.

//     Saída:
// Seu programa deve retornar o número correspondente ao identificador do vencedor da partida.

//     Ex:
// ord = [2, 1], instrucoes = [1, 1], mov = [[1, 1], [1, 0]] => Deve retornar que o ganhador foi 2: na primeira rodada, o chefe ordenou "1" e as duas crianças acertaram; na segunda rodada, o chefe ordenou "1" de novo, mas agora a primeira criança na fila acertou(executou "1") e a segunda errou(executou "0"), daí foi eliminada e a fila ficou[2], por isso o ganhador é 2.

// ord = [3, 2, 1, 4, 5], instrucoes = [1, 0, 0, 1], mov = [[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0], [0, 1]] => Deve retornar que o ganhador foi 5

function descobreGanhador(ord, instrucoes, mov) {
    let vencedores = ord
    for (let i = 0; i < mov.length; i++) {
        for (let j = mov[i].length - 1; j >= 0; j--) {
            if (instrucoes[i] !== mov[i][j]) {
                vencedores.splice(j, 1)
            }
        }
    }
    return vencedores[0]
}

// Ponto cruz - credo
// Dado um tabuleiro representado pela matriz T[12][12] sua missão é marcar com a letra X apenas as posições inseridas determinadas pelo usuário.

//     Entrada
// A entrada é composta por um parâmetro numérico inteiro C, tal que 0 ≤ C ≤ 11, que representa a coluna que irá receber as marcações, o segundo parâmetro é uma lista contendo dois números inteiros: I e F, tal que 0 ≤ I ≤ 11, 0 ≤ F ≤ 11, I ≤ F, esses números representam as linhas que devem ser marcadas com a letra 'x'.Todas as células começando na linha I e terminando na F(sempre na coluna C) devem ser marcadas.

//     Saída
// A saída deve printar no console o tabuleiro T marcado com a letra X nas posições informadas e com um sublinhado nas posições não marcadas.Ou seja, sua função não deve retornar nada, ela deve usar console.log para escrever no console.Isso implica que não pode haver console.log de "debug", senão ele interferirá na checagem da resposta.

//     Ex.:
// Entrada: (1, [1, 4])
// Saída(observe que são exatamente 12 linhas e que cada linha tem 12 caracteres sendo "_" ou "x"):

// ____________
// _x__________
// _x__________
// _x__________
// _x__________
// ____________
// ____________
// ____________
// ____________
// ____________
// ____________

function desenhar(coluna, arr) {
    for (let y = 0; y < 12; y++) {
        let line = []
        for (let x = 0; x < 12; x++) {
            if (coluna === x && y >= arr[0] && y <= arr[1]) {
                line.push("x")
            } else {
                line.push("_")
            }
        }
        console.log(line.join(''))
        line = []
    }
}

// Descriptografia
// Você e seu crush desenvolveram um método revolucionário para conversarem via texto de modo seguro, sem que o Mark Zuckerberg saiba o conteúdo da conversa.Cada mensagem é enviada com uma lista de palavras onde cada palavra aponta para a próxima.A frase termina quando uma palavra aponta para a posição 0.

// Entrada
// A entrada é composta por um parâmetro numérico inteiro I, tal que 0 ≤ I ≤ tamanho - 1 da lista de palavras, que aponta a posição da primeira palavra da frase.O segundo parâmetro é uma lista de palavras(tamanho maior ou igual a 1) onde cada palavra é acrescida do sublinhado em seguida de um número inteiro que aponta a posição da próxima palavra.

// Se esse número estiver entre 0 e tamanho - 1 da lista de palavras, então ele aponta para a próxima palavra; se ele for -1, significa que a palavra atual é a última da frase, que está completa agora; se ele for maior ou igual ao tamanho da lista, significa que há um erro e não há mensagem para descriptografar.Não haverá ciclos(por exemplo: uma palavra aponta para a próxima, que aponta para a anterior de novo).

//     Saída
// Caso exista uma mensagem criptografada a saída deve retorná - la, caso contrário deve retornar o texto "erro".

//     Ex.:
// Entrada: (3, ['sensacional_2', 'demais_-1', 'é_1 ', 'voce_2', 'melhor_1', 'gratidao_0'])
// Saída: "voce é demais"

// Entrada: (3, ['nao_2', 'vai_7', 'que_1 ', 'sera_2', 'melhor_1', 'gratiluz_0'])
// Saída: "erro"

function descriptografar(inicio, arr) {

    let first = arr[inicio].split('_')[0];
    let next = parseInt(arr[inicio].split('_')[1]);
    let phrase = [first];
    let stop = false

    for (let i = 0; stop === false; i++) {
        if (next >= arr.length) { return 'erro' }
        if (next !== -1) {
            phrase.push(arr[next].split('_')[0])
            next = parseInt(arr[next].split('_')[1])
            if (next > arr.length) { return 'erro' }
        } else {
            return phrase.join(' ')
            stop = true;
        };
    }

}

// Outdoor Bloqueado
// John o fazendeiro, durante longas sessões de ordenha, percebeu que sua vaca Bessie gosta de olhar pela janela do seu celeiro em direção a dois grandes outdoors retangulares de propaganda que existem do outro lado da rua e que dizem: “Alfafa incrivelmente apetitosa do fazendeiro Alex” e “Bons cereais do fazendeiro Erick”.

// As fotos desses dois produtos, encontrados em rações para vacas, vistas nos outdoors parecem muito mais saborosos para Bessie do que a grama da fazenda de John.

// Um dia, enquanto Bessie olhava pela janela em direção aos outdoors, ela se assustou ao ver um grande caminhão retangular estacionando do outro lado da rua.Na lateral da carroceria do caminhão existia um anúncio “Excelentes bifes do fazendeiro Beto”, que Bessie não entendeu muito bem, mas ela ficou bem preocupada com o fato do caminhão acabar estacionando bem em frente às suas duas placas favoritas, bloqueando a sua visão.

// Dada a localização dos dois outdoors e a localização do caminhão, calcule a área total combinada dos dois outdoors que ainda fica visível para Bessie.

// É possível que o caminhão não atrapalhe em nada a visão de Bessie, atrapalhe uma parte da visão de Bessie, ou bloqueie totalmente a visão de Bessie dos outdoors.

//     Entradas:
// outdoor1 = lista com 4 inteiros separados x1, y1, x2, y2, onde(x1, y1) representa o ponto embaixo à esquerda do outdoor1 e(x2, y2) representa o ponto em cima à direita do outdoor1
// outdoor2 = lista com 4 inteiros separados x1, y1, x2, y2, onde(x1, y1) representa o ponto embaixo à esquerda do outdoor2 e(x2, y2) representa o ponto em cima à direita do outdoor2
// caminhao = lista com 4 inteiros separados x1, y1, x2, y2, onde(x1, y1) representa o ponto embaixo à esquerda do caminhão e(x2, y2) representa o ponto em cima à direita do caminhão


// Intervalos e observações:

// -1000 ≤ x1 ≤ 1000
// - 1000 ≤ y1 ≤ 1000
// - 1000 ≤ x2 ≤ 1000
// - 1000 ≤ y2 ≤ 1000
// x2 ≥ x1
// y2 ≥ y1
// Os outdoors de anúncios 1 e 2, do ponto de vista de Bessie, nunca têm nenhum tipo de sobreposição entre eles.

function areaVisivel(outdoor1, outdoor2, caminhao) {

}

// Função de Cálculo de String
// Telma ama trabalhar com strings.Ela tem uma string t com ela, e o valor de uma string s avaliado em uma função f que pode ser descrita pela seguinte equação:



// f(s) = | s | * (Número de vezes que s ocorre em t)

// Telma quer saber o maior valor possível para f(s), entre todas as possíveis substrings(s) de t.Você consegue ajudá - la ?

//     Entrada :
//     string t formada somente por letras a...z minúsculas

// Saída:
// O valor máximo de f(s) entre todas as possíveis substrings(s) da string t.


//     Intervalos:
// 1≤ | t | ≤ 10 ^ 5


// Exemplo 1:
// t = ‘aaaaaa’ ⇒ Deve retornar 12,


//     Explicação:
// Todas as substrings s: [ ‘a’, ‘aa’, ‘aaa’, ‘aaaa’, ‘aaaaa’, ‘aaaaaa’]
// Avaliações da função f:
// f('a') = 6(tamanho 1 e aparece 6 vezes)
// f('aa') = 10(tamanho 2 e aparece 5 vezes)
// f('aaa') = 12(tamanho 3 e aparece 4 vezes)
// f('aaaa') = 12(tamanho 4 e aparece 3 vezes)
// f('aaaaa') = 10(tamanho 5 e aparece 2 vezes)
// f('aaaaaa') = 6(tamanho 6 e aparece 1 vez)
// Exemplo 2:

// t = 'abcabcddd' ⇒ Deve retornar 9


// Explicação:
// Algumas substrings s: ["a", "b", "c", "ab", "abc", "ddd", ...]
// Algumas avaliações da função f:
// f("a") = 2
// f("b") = 2
// f("c") = 2
// f("ab") = 4
// f("bc") = 4
// f("ddd") = 3
// f("abc") = 6
// ...
// f("abcabcddd") = 9

function maxValueOfF(t) {

}

// Sapatênis Perdidos
// A squad de Sapatos, Sapatilhas e Sapatênis da Faria Lima fez um grande pedido de sapatênis de diversos tamanhos. No entanto, houve uma falha no processo de empacotamento e nem todas as caixas contêm um par correto, isto é, sapatênis do mesmo tamanho para cada pé. O Head da squad pediu que todos devolvessem os sapatênis nas suas respectivas caixas.

// Quando o Head descobriu que você sabe programação ele ficou empolgado e solicitou que você escrevesse um programa que forme pares possíveis de sapatênis.

// Entrada
// A entrada consiste em uma lista de listas, cada lista interna representa um lote de sapatênis. Cada lote é formado por uma quantidade N de sapatênis, tal que 2 ≤ N ≤ 100, sendo N um número inteiro par. Cada sapatênis é formado por um valor textual com um número M, tal que 30 ≤ M ≤ 60 separado por um espaço de um valor L, sendo 'E' ou 'D'

// Saída
// Seu programa deve retornar uma lista de valores inteiros, onde cada valor representa a quantidade de pares possíveis em cada lote respectivamente.Sabendo que para formar um par possível os sapatênis devem ter o mesmo tamanho M e uma unidade com L = 'E' e outra L = 'D', formando um par do mesmo tamanho para o pé esquerdo e outro para o pé direito.

//     Ex.:
// Entrada: lst = [['40 D', '41 E', '41 D', '40 E'], ['38 E', '38 E', '40 D', '38 D', '40 D', '37 E']]

// Saída: [2, 1]

let arrTeste = [
    ['40 D', '41 E', '41 D', '40 E'],
    ['38 E', '38 E', '40 D', '38 D', '40 D', '37 E']
]

function formarPar(arr) {
    let pares = [];
    for (let i = 0; i < arr.length; i++) {
        caixa = arr[i]
        let matchs = 0;
        let blacklist = []
        for (let j = 0; j < caixa.length; j++) {
            let unidade = caixa[j]
            let lado = unidade.split('').pop()
            let tamanho = unidade.split('').slice(0, 2).join('')

            for (let k = 0; k < caixa.length; k++) {
                let ladoComparativo = caixa[k].split('').pop()
                let tamanhoComparativo = caixa[k].split('').slice(0, 2).join('')

                if (k !== j
                    && !blacklist.includes(j)
                    && !blacklist.includes(k)
                    && ladoComparativo !== lado
                    && tamanhoComparativo === tamanho
                ) {
                    matchs = matchs + 1;
                    blacklist.push(k, j)
                }
            }
        }
        pares.push(matchs)
        matchs = 0;
    }
    return pares;
}