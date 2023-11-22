let alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Carlos', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Pedro', nota: 6 },
    { nome: 'Laura', nota: 9 },
    { nome: 'Miguel', nota: 3 },
    { nome: 'Isabela', nota: 6 },
    { nome: 'Rafael', nota: 7 },
    { nome: 'Julia', nota: 5 },
  ];
  
  // Criar função para retornar alunos aprovados
  const filtrarAlunosAprovados = (arrayDeAlunos) => arrayDeAlunos.filter(({ nota }) => nota >= 6);
  
  // Chamada da função e exibição do resultado
  let alunosAprovados = filtrarAlunosAprovados(alunos);
  console.log('Alunos aprovados:');
  console.log(alunosAprovados);