// ATENÇÃO: limites fictícios (2,5 m e 4 m), usados só nesta simulação acadêmica.
// Para alertas reais, consulte a Defesa Civil.
// Classifica o nível do rio (em metros) em três faixas de alerta
function classificar(nivelEmMetros) {
  if (nivelEmMetros >= 4) return { rotulo: 'ALERTA', classe: 'alerta' };
  if (nivelEmMetros >= 2.5) return { rotulo: 'ATENÇÃO', classe: 'atencao' };
  return { rotulo: 'NORMAL', classe: 'normal' };
}