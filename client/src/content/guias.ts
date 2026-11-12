// Guias de conteúdo do site. A fonte única: a página, o sitemap, o llms.txt e o JSON-LD saem daqui.
export type Secao = { h2: string; p?: string[]; lista?: string[]; passos?: string[] };
export type Guia = {
  slug: string;
  titulo: string; // <title>
  desc: string; // meta description
  h1: string;
  resumo: string; // parágrafo de abertura (resposta direta)
  secoes: Secao[];
  faq: { q: string; a: string }[];
  cta: { titulo: string; texto: string; botao: string; href: string };
  relacionados: string[];
};

export const ATUALIZADO = '12 de novembro de 2026';
export const ATUALIZADO_ISO = '2026-11-12';

export const GUIAS: Guia[] = [
  {
    slug: 'quanto-posso-gastar-por-dia',
    titulo: 'Como saber quanto posso gastar por dia | Acué',
    desc: 'Passo a passo para calcular o seu limite diário de gastos: renda, contas fixas, reserva e dias restantes do mês, com um exemplo em reais.',
    h1: 'Como saber quanto posso gastar por dia',
    resumo:
      'Seu limite diário é o que sobra da renda do mês depois de separar as contas fixas e a reserva, dividido pelos dias que faltam. Tem quatro contas simples, e o exemplo abaixo mostra cada uma com números.',
    secoes: [
      {
        h2: 'A conta em quatro passos',
        passos: [
          'Some tudo o que você vai receber no mês (salário, renda extra, o que for certo).',
          'Subtraia as contas fixas que já têm data para sair: aluguel, luz, internet, transporte, parcelas, mensalidades.',
          'Separe o que você quer guardar, seja uma porcentagem ou um valor fixo para a reserva ou para uma meta.',
          'Divida o que sobrou pelos dias que faltam até o fim do mês. Esse é o seu limite por dia.',
        ],
      },
      {
        h2: 'Exemplo com números',
        p: [
          'Imagine uma renda de R$ 3.200 no mês. As contas fixas somam R$ 1.450 (aluguel R$ 900, transporte R$ 300, luz R$ 150, internet R$ 100). Você decide guardar 10% da renda, R$ 320.',
          'Sobram R$ 3.200 − R$ 1.450 − R$ 320 = R$ 1.430 para gastos do dia a dia. Dividindo por 30 dias, o limite é de cerca de R$ 47,67 por dia.',
          'No dia 10, você olha o que gastou com mercado, lanche e passagem: R$ 600. Restam R$ 830 para 20 dias, então o limite do dia passa a ser R$ 41,50. Por isso a conta precisa ser refeita com frequência: o limite acompanha o que você de fato gastou.',
        ],
      },
      {
        h2: 'O que mais costuma bagunçar o cálculo',
        lista: [
          'Parcelas e fatura do cartão: conte a parcela no mês em que ela vence, não no mês da compra.',
          'Gastos que só aparecem de vez em quando (IPVA, material escolar, presente): divida por 12 e separe um pouco todo mês.',
          'Entrada atrasada: se um pagamento ainda não caiu, não conte com ele até cair.',
          'Esquecer o que já foi gasto: o limite só serve se o registro dos gastos estiver em dia.',
        ],
      },
      {
        h2: 'E se eu passar do limite num dia?',
        p: [
          'Acontece. O dia seguinte absorve a diferença: o novo limite é recalculado com o que sobrou e os dias que restam. Passar R$ 20 num dia reduz o limite dos demais dias só um pouco, e isso é melhor do que descobrir no fim do mês que o dinheiro acabou.',
        ],
      },
      {
        h2: 'Como o Acué faz essa conta por você',
        p: [
          'No Acué, você registra os gastos (por voz, escrevendo ou importando o extrato) e a tela inicial mostra o quanto ainda pode gastar hoje, já descontando contas e a reserva. O cálculo do limite do dia está no plano Grátis.',
        ],
      },
    ],
    faq: [
      {
        q: 'Quanto da renda devo guardar antes de calcular o limite?',
        a: 'Não existe número único. Muita gente começa com 5% a 10% e aumenta quando sobra espaço. O que importa é separar o valor antes de gastar, e não esperar sobrar.',
      },
      {
        q: 'O limite por dia vale também para fim de semana?',
        a: 'Sim, a conta divide o mês inteiro. Se os seus gastos se concentram no fim de semana, vale pensar no limite como um orçamento da semana: o limite diário vezes sete.',
      },
      {
        q: 'Preciso refazer a conta todo dia?',
        a: 'Em planilha, é bom refazer sempre que registrar um gasto grande. Em um app que calcula sozinho, o limite se atualiza a cada lançamento.',
      },
    ],
    cta: {
      titulo: 'Veja o seu número hoje',
      texto: 'Crie a conta grátis e descubra quanto você ainda pode gastar hoje. Abre no navegador, sem baixar nada.',
      botao: 'Criar conta grátis',
      href: 'https://www.acueapp.com.br/?cadastro=1&utm_source=site&utm_medium=guia&utm_campaign=limite-diario',
    },
    relacionados: ['controlar-gastos-sem-planilha', 'reserva-de-emergencia-ganhando-pouco'],
  },
  {
    slug: 'reserva-de-emergencia-ganhando-pouco',
    titulo: 'Reserva de emergência ganhando pouco: por onde começar | Acué',
    desc: 'Como montar uma reserva de emergência com renda baixa: meta inicial pequena, quanto guardar por mês, onde deixar o dinheiro e quando usar.',
    h1: 'Como montar uma reserva de emergência ganhando pouco',
    resumo:
      'Dá para começar a reserva com valores pequenos. O primeiro passo é uma meta alcançável, como um mês de gastos essenciais, e guardar no dia em que o dinheiro entra, antes de gastar.',
    secoes: [
      {
        h2: 'Qual deve ser o tamanho da reserva',
        p: [
          'A regra mais repetida é guardar de 3 a 6 meses dos seus gastos essenciais (moradia, comida, transporte, saúde, contas básicas). Para quem tem renda variável, como autônomos, costuma-se mirar mais, de 6 a 12 meses.',
          'Mas essa meta pode parecer distante. Comece com uma escada: primeiro R$ 500 ou R$ 1.000 para imprevistos pequenos, depois um mês de gastos essenciais, depois três. Cada degrau já protege você de uma situação real, como um conserto ou uma consulta.',
        ],
      },
      {
        h2: 'Quanto guardar por mês',
        p: [
          'Exemplo: gastos essenciais de R$ 2.000 por mês. A meta de um mês é R$ 2.000. Guardando R$ 100 por mês, você chega lá em 20 meses; com R$ 200, em 10 meses. Se R$ 100 pesa, comece com R$ 30 por semana. O hábito vale mais do que o valor no começo.',
          'Outra forma é definir uma porcentagem da renda, como 5% ou 10%. Assim o valor acompanha meses mais fartos e mais apertados.',
        ],
      },
      {
        h2: 'Como não deixar para depois',
        lista: [
          'Guarde no dia em que o dinheiro cair, não no fim do mês. O que sobra costuma não sobrar.',
          'Deixe a reserva separada da conta do dia a dia, para não confundir com saldo disponível.',
          'Guarde parte de qualquer entrada extra (13º, restituição, bônus), mesmo que seja só uma fatia.',
          'Anote a meta e acompanhe o quanto já juntou. Ver o número crescer ajuda a manter o ritmo.',
        ],
      },
      {
        h2: 'Onde deixar o dinheiro',
        p: [
          'O objetivo da reserva é estar disponível quando precisar, com risco baixo. Por isso as opções mais comuns são as de liquidez diária e baixo risco, como conta remunerada, Tesouro Selic e CDB com liquidez diária. Antes de escolher, confira as regras de resgate e as taxas da instituição.',
          'Este conteúdo é informativo e não é recomendação de investimento.',
        ],
      },
      {
        h2: 'Quando usar, e como repor',
        p: [
          'Reserva de emergência é para o que é urgente, inesperado e necessário: perda de renda, problema de saúde, conserto essencial. Promoção e viagem ficam de fora; para isso, crie uma meta separada.',
          'Se usar, volte a guardar assim que puder, até recompor a meta. Usar a reserva não é fracasso: é para isso que ela existe.',
        ],
      },
      {
        h2: 'Como o Acué ajuda',
        p: [
          'No Acué você define a meta de reserva como porcentagem da renda (5%, 10%, 15% ou 20%) e vê quanto já separou. A reserva e as metas estão no plano Grátis, e o valor guardado já sai do que você tem para gastar no dia.',
        ],
      },
    ],
    faq: [
      {
        q: 'É melhor quitar dívida ou fazer reserva primeiro?',
        a: 'Depende dos juros. Dívidas com juros altos, como cartão rotativo e cheque especial, costumam pesar mais do que o rendimento de qualquer reserva. Uma saída comum é montar uma reserva pequena (para não voltar à dívida no primeiro imprevisto) e atacar a dívida com o resto.',
      },
      {
        q: 'Com quanto posso começar?',
        a: 'Com qualquer valor. R$ 20 ou R$ 30 por semana, repetidos, viram R$ 1.000 em menos de um ano.',
      },
      {
        q: 'Reserva de emergência é a mesma coisa que investimento?',
        a: 'Não. A reserva tem a função de estar disponível e segura. Investimentos com mais risco ou prazo longo ficam para depois que a reserva estiver formada.',
      },
    ],
    cta: {
      titulo: 'Comece a reserva hoje',
      texto: 'Defina a meta de reserva no Acué e acompanhe o quanto já juntou. O plano Grátis não expira.',
      botao: 'Criar conta grátis',
      href: 'https://www.acueapp.com.br/?cadastro=1&utm_source=site&utm_medium=guia&utm_campaign=reserva-emergencia',
    },
    relacionados: ['quanto-posso-gastar-por-dia', 'controlar-gastos-sem-planilha'],
  },
  {
    slug: 'controlar-gastos-sem-planilha',
    titulo: 'Como controlar gastos sem planilha | Acué',
    desc: 'Por que planilhas de gastos costumam ser abandonadas e como controlar o dinheiro de forma simples: o mínimo para registrar, hábitos e ferramentas.',
    h1: 'Como controlar gastos sem planilha',
    resumo:
      'Para controlar os gastos você precisa de três coisas: registrar rápido, ver um número que ajude a decidir e revisar o mês. A planilha serve, mas muita gente abandona porque o registro dá trabalho. Dá para simplificar.',
    secoes: [
      {
        h2: 'Por que a planilha costuma ser abandonada',
        lista: [
          'Registrar exige abrir o arquivo, achar a linha e digitar, e isso vira o primeiro item a ser pulado em dia corrido.',
          'Ela mostra o que já aconteceu, mas não responde “posso comprar isso agora?”.',
          'Um erro de fórmula ou uma linha esquecida distorce o total e tira a confiança.',
          'No celular, é incômoda de usar.',
        ],
      },
      {
        h2: 'O mínimo que vale registrar',
        p: [
          'Você não precisa de dezenas de categorias. Comece com poucas (moradia, mercado, transporte, lazer, outros) e registre três informações por gasto: valor, categoria e data. Se o hábito pegar, refine depois.',
        ],
      },
      {
        h2: 'Três números que bastam',
        lista: [
          'Saldo: o que você tem hoje.',
          'Contas a pagar: o que ainda vai sair neste mês.',
          'Limite do dia: o que sobra para gastar, dividido pelos dias que faltam.',
        ],
      },
      {
        h2: 'Como registrar sem dar trabalho',
        lista: [
          'Registre na hora, em até 10 segundos. Gasto lembrado no fim da semana quase sempre vem com valor errado.',
          'Fale em vez de digitar: no Acué dá para dizer “gastei 32 no almoço” e o app preenche valor, categoria e data para você conferir.',
          'Importe o extrato do banco (OFX, CSV ou PDF) uma vez por semana e confira os lançamentos.',
          'No plano Pro, mande uma mensagem pelo WhatsApp: o app registra o gasto e responde quanto você ainda pode gastar.',
        ],
      },
      {
        h2: 'Planilha ou app: qual escolher',
        p: [
          'Se você gosta de planilha e a mantém em dia, continue com ela. O melhor método é o que você consegue usar toda semana. Se o registro é o ponto em que você sempre para, vale testar um app em que registrar leve segundos e o limite do dia apareça pronto.',
          'Hoje, no Acué, o registro é feito por você: por voz, escrito, pelo WhatsApp (Pro) ou importando o extrato. Em todos os casos, você confere antes de o lançamento entrar.',
        ],
      },
      {
        h2: 'Uma rotina que cabe na semana',
        passos: [
          'No dia a dia: registre cada gasto na hora, por voz ou texto.',
          'Uma vez por semana (5 minutos): importe o extrato, confira o que faltou e olhe o limite do dia.',
          'No fim do mês: veja para onde foi o dinheiro e ajuste a reserva e as contas do mês seguinte.',
        ],
      },
    ],
    faq: [
      {
        q: 'Preciso registrar todos os gastos, até os pequenos?',
        a: 'Sim, são eles que mais escapam. O registro por voz torna isso rápido. Se for demais, ao menos importe o extrato toda semana para pegar o que passou.',
      },
      {
        q: 'Dá para controlar gastos só com o extrato do banco?',
        a: 'Ajuda muito, mas o extrato não mostra o que foi pago em dinheiro e mostra só descrições de estabelecimentos. Combine o extrato com o registro na hora para ter o quadro completo.',
      },
      {
        q: 'O Acué é grátis?',
        a: 'Há um plano Grátis, que não expira, com lançamentos ilimitados, limite do dia, metas, reserva, dívidas e importação de extrato. O Pro custa R$ 19,90 por mês, com 7 dias de teste grátis.',
      },
    ],
    cta: {
      titulo: 'Teste sem planilha',
      texto: 'Crie a conta grátis, registre um gasto por voz e veja o limite do dia aparecer. Abre no navegador.',
      botao: 'Criar conta grátis',
      href: 'https://www.acueapp.com.br/?cadastro=1&utm_source=site&utm_medium=guia&utm_campaign=sem-planilha',
    },
    relacionados: ['importar-extrato-do-banco-para-controlar-gastos', 'quanto-posso-gastar-por-dia'],
  },
  {
    slug: 'importar-extrato-do-banco-para-controlar-gastos',
    titulo: 'Como importar o extrato do banco para controlar gastos | Acué',
    desc: 'Aprenda a baixar o extrato em OFX, CSV ou PDF e importar para controlar gastos: formatos, cuidados com duplicados e o que acontece com os seus dados.',
    h1: 'Como importar o extrato do banco para controlar gastos',
    resumo:
      'Importar o extrato evita digitar lançamento por lançamento. Você baixa o arquivo no seu banco, envia para o app de controle, confere o que apareceu e confirma. Veja abaixo o caminho completo e os cuidados.',
    secoes: [
      {
        h2: 'Qual formato baixar',
        lista: [
          'OFX: o mais indicado, porque traz data, valor e descrição de forma organizada.',
          'CSV: serve bem quando o banco oferece. Abre também em planilha.',
          'PDF: funciona quando o arquivo tem texto (o que se pode selecionar). PDF escaneado, que é só uma imagem, não pode ser lido.',
        ],
      },
      {
        h2: 'Como baixar o extrato',
        p: [
          'Cada banco organiza o menu de um jeito, mas o caminho costuma ser parecido: abra o aplicativo ou o internet banking, entre em Extrato, escolha o período (por exemplo, o mês) e procure a opção de exportar ou baixar, escolhendo o formato. Se não encontrar, procure a ajuda do seu banco pela palavra “exportar extrato”.',
        ],
      },
      {
        h2: 'Passo a passo no Acué',
        passos: [
          'Baixe o extrato do período que quer controlar (OFX, CSV ou PDF com texto).',
          'No Acué, use a opção Importar extrato e escolha o arquivo.',
          'O app lê os lançamentos e sugere uma categoria para cada um.',
          'Confira a lista: ajuste categorias, tire o que não quer contar e só então confirme. Nada entra sem a sua conferência.',
        ],
      },
      {
        h2: 'Cuidados na conferência',
        lista: [
          'Duplicados: se você já registrou um gasto na hora, não deixe que ele entre de novo pelo extrato.',
          'Transferências entre contas suas: não são gasto. Tire da lista.',
          'Pagamento da fatura do cartão: se você já conta as compras do cartão, o pagamento da fatura não deve ser contado outra vez.',
          'Gastos em dinheiro não aparecem no extrato: registre à parte.',
        ],
      },
      {
        h2: 'O que acontece com os seus dados',
        p: [
          'No Acué, o arquivo é lido no seu aparelho. CPF, agência e conta são descartados. Para sugerir categorias, apenas as descrições dos estabelecimentos, sem valores nem nomes de pessoas, são enviadas a uma IA. Os detalhes estão na Política de Privacidade.',
          'Você não informa a senha do banco: o app usa só o arquivo que você mesmo baixou.',
        ],
      },
      {
        h2: 'Com que frequência importar',
        p: [
          'Uma vez por semana costuma ser suficiente: dá para conferir tudo em poucos minutos e o limite do dia fica certo. Se prefere, importe no fim do mês e use o registro por voz para o dia a dia.',
        ],
      },
    ],
    faq: [
      {
        q: 'A importação de extrato é grátis no Acué?',
        a: 'Sim, a importação de extrato está no plano Grátis.',
      },
      {
        q: 'Preciso dar a senha do meu banco?',
        a: 'Não. Você baixa o extrato no seu banco e envia o arquivo. O Acué não pede senha do banco.',
      },
      {
        q: 'Meu banco só exporta PDF. Funciona?',
        a: 'Funciona se o PDF tiver texto selecionável. Se for uma imagem escaneada, o app não consegue ler; nesse caso, tente OFX ou CSV.',
      },
    ],
    cta: {
      titulo: 'Veja o seu mês com um extrato',
      texto: 'Experimente importar um extrato e ver o mês organizado, sem precisar criar conta primeiro.',
      botao: 'Ver meu mês sem cadastro',
      href: 'https://www.acueapp.com.br/?extrato=1&utm_source=site&utm_medium=guia&utm_campaign=importar-extrato',
    },
    relacionados: ['controlar-gastos-sem-planilha', 'quanto-posso-gastar-por-dia'],
  },
];

export const porSlug = (slug: string) => GUIAS.find((g) => g.slug === slug);
