// let isAprove = 'batatinha';

// switch (isAprove) {
//   case 'aprovada':
//     console.log('Parabéns, você foi aprovada(o)');
//     break;
//   case 'reprovado':
//     console.log('Desculpe, você foi reprovado(a), tente novamente');
//     break;
//   default:
//     console.log('Você entrou para a lista de espera');
//     break;
// }



const mes = 'batatinha';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
        break;
    default:
      console.log('necessário um valor válido para esta requisição');
    break;
}

console.log(estacaoDoAno); // 'Outono'