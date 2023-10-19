function converterData(stringData: string): string {
  // Verifica se a string de data está no formato "YYYY-MM-DD"
  const regexData = /^\d{4}-\d{2}-\d{2}$/;
  if (!regexData.test(stringData)) {
    return "Formato de data inválido";
  }

  const partesData = stringData.split("-");
  const ano = parseInt(partesData[0], 10);
  const mes = parseInt(partesData[1], 10);
  const dia = parseInt(partesData[2], 10);

  // Verifica se o mês está no intervalo de 1 a 12
  if (mes < 1 || mes > 12) {
    return "Mês inválido";
  }

  // Mapeia o número do mês para o nome do mês
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const nomeMes = meses[mes - 1];

  // Verifica se o dia está no intervalo adequado para o mês
  const ultimoDiaMes = new Date(ano, mes, 0).getDate();
  if (dia < 1 || dia > ultimoDiaMes) {
    return "Dia inválido";
  }

  const dataFormatada = `${dia} de ${nomeMes} de ${ano}`;

  return dataFormatada;
}

export default converterData;
