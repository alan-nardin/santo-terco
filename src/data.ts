export type MysteryItem = {
  title: string;
  meditation: string;
  imageUrl: string;
};

export type MysteryDay = {
  dayName: string;
  type: string;
  mysteries: MysteryItem[];
};

export const IMAGE_BASE_URL = "https://placehold.co/100x100/7B0000/ffffff?text=";

export const OPENING_PRAYER_BLOCKS = [
  {
    title: 'Sinal da Cruz',
    content:
      'Em nome do Pai, do Filho e do Espírito Santo. Amém.',
  },
  {
    title: 'Intenções',
    content: '«coloque as suas intenções»',
  },
  {
    title: 'Oferecimento',
    content:
      'Divino Jesus, eu vos ofereço este terço que vou rezar, contemplando os mistérios de nossa Redenção. Concedei-me, pela intercessão de Maria, vossa Mãe Santíssima, a quem me dirijo, as graças necessárias para bem rezá-lo para ganhar as indulgências desta santa devoção.',
  },
  {
    title: 'Credo',
    content:
      'Creio em Deus Pai todo-poderoso, Criador do céu e da terra, e em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo poderoso, donde há de vir julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne e na vida eterna. Amém.',
  },
  {
    title: 'Pai Nosso',
    content:
      'Pai Nosso que estais nos céus, santificado seja o Vosso nome, venha a nós o Vosso reino, seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossa ofensas, assim como nós perdoamos a quem nos tem ofendido e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.',
  },
  {
    title: 'Ave Maria',
    content:
      'Ave Maria cheia de graças, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre Jesus. Santa Maria Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.',
  },
  {
    title: 'Glória',
    content:
      'Glória ao Pai, ao Filho e o Espírito Santo. Como era no princípio, agora é sempre. Amém.',
  },
  {
    title: 'Jaculatória',
    content:
      'Oh! Meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem da vossa misericórdia.',
  },
];

export const FINAL_PRAYER_BLOCKS = [
  {
    title: 'Agradecimento',
    content:
      'Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo do vosso poderoso amparo e para mais vos agradecer, vos saudamos com uma Salve Rainha',
  },
  {
    title: 'Salve Rainha',
    content:
      'Salve Rainha, Mãe de Misericórdia, vida, doçura, esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa esses vossos olhos misericordiosos a nós volvei, e depois deste desterro nos mostrai a Jesus, bendito fruto do vosso ventre, ó Clemente, ó Piedosa, ó Doce, sempre virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém',
  },
  {
    title: 'Sinal da Cruz',
    content:
      'Em nome do Pai, do Filho e do Espírito Santo. Amém.',
  },
];

export const MYSTERIES: MysteryDay[] = [
  {
    dayName: 'Domingo',
    type: 'Mistérios Gloriosos',
    mysteries: [
      {
        title: 'A Ressurreição de Nosso Senhor Jesus Cristo.',
        meditation:
          '«No primeiro dia da semana, muito cedo, dirigiram-se ao sepulcro [...] Por que buscais entre os mortos aquele que está vivo? Não está aqui, mas ressuscitou» (Lc 24, 1-6).',
        imageUrl: IMAGE_BASE_URL + 'RESSURREI%C3%87%C3%83O',
      },
      {
        title: 'A Ascensão de Nosso Senhor Jesus Cristo ao Céu.',
        meditation:
          '«Depois que o Senhor Jesus lhes falou, foi levado ao céu e está sentado à direita de Deus» (Mc 16, 19).',
        imageUrl: IMAGE_BASE_URL + 'ASCENS%C3%83O',
      },
      {
        title:
          'A Vinda do Espírito Santo sobre a Virgem Santíssima e os Apóstolos.',
        meditation:
          '«Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar [...] Apareceram-lhes então umas línguas como de fogo, que se distribuíram e foram pousar sobre cada um deles. E todos ficaram cheios do Espírito Santo» (At 2, 1-4).',
        imageUrl: IMAGE_BASE_URL + 'PENTECOSTES',
      },
      {
        title: 'A Assunção de Nossa Senhora ao Céu em corpo e alma.',
        meditation:
          '«[...] Porque fez em mim grandes coisas Aquele que é Poderoso; o seu Nome é Santo» (Lc 1, 49). O Catecismo ensina que Maria é levada ao Céu em corpo e alma.',
        imageUrl: IMAGE_BASE_URL + 'ASSUN%C3%87%C3%83O',
      },
      {
        title: 'A Coroação de Nossa Senhora como Rainha do Céu e da Terra.',
        meditation:
          '«Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas» (Ap 12, 1).',
        imageUrl: IMAGE_BASE_URL + 'COROA%C3%87%C3%83O',
      },
    ],
  },
  {
    dayName: 'Segunda-feira',
    type: 'Mistérios Gozosos',
    mysteries: [
      {
        title: 'A Anunciação do Anjo Gabriel à Nossa Senhora.',
        meditation:
          '«No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré, a uma virgem desposada com um homem que se chamava José [...] e o nome da virgem era Maria» (Lc 1, 26-27).',
        imageUrl: IMAGE_BASE_URL + 'ANUNCIA%C3%87%C3%83O',
      },
      {
        title: 'A Visita de Nossa Senhora à sua prima Santa Isabel.',
        meditation:
          '«Logo que Isabel ouviu a saudação de Maria, a criança estremeceu-lhe no ventre e Isabel ficou cheia do Espírito Santo» (Lc 1, 41).',
        imageUrl: IMAGE_BASE_URL + 'VISITA%C3%87%C3%83O',
      },
      {
        title: 'O Nascimento de Jesus Cristo em Belém.',
        meditation:
          '«Ela deu à luz o seu filho primogênito, e envolveu-o em panos e deitou-o numa manjedoura» (Lc 2, 7).',
        imageUrl: IMAGE_BASE_URL + 'NASCIMENTO',
      },
      {
        title: 'A Apresentação do Menino Jesus no Templo.',
        meditation:
          '«Quando se cumpriu o tempo da purificação, segundo a Lei de Moisés, levaram-no a Jerusalém, para o apresentarem ao Senhor» (Lc 2, 22).',
        imageUrl: IMAGE_BASE_URL + 'TEMPLO',
      },
      {
        title: 'O Encontro do Menino Jesus no Templo, entre os Doutores.',
        meditation:
          '«Não sabíeis que Eu tenho de estar na casa de meu Pai?» (Lc 2, 49).',
        imageUrl: IMAGE_BASE_URL + 'DOUTORES',
      },
    ],
  },
  {
    dayName: 'Terça-feira',
    type: 'Mistérios Dolorosos',
    mysteries: [
      {
        title: 'A Agonia de Jesus no Horto das Oliveiras.',
        meditation:
          '«Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim o que tu queres» (Mt 26, 36-39).',
        imageUrl: IMAGE_BASE_URL + 'GETS%C3%8AMANI',
      },
      {
        title: 'A Flagelação de Jesus atado à coluna.',
        meditation:
          '«Então lhes soltou Barrabás; mas a Jesus mandou açoitar, e o entregou para ser crucificado» (Mt 27, 26).',
        imageUrl: IMAGE_BASE_URL + 'FLAGELA%C3%87%C3%83O',
      },
      {
        title: 'A Coroação de espinhos de Jesus.',
        meditation:
          '«Despiram-no e puseram-lhe um manto escarlate. Depois, teceram uma coroa de espinhos e puseram-lha na cabeça» (Mt 27, 28-29).',
        imageUrl: IMAGE_BASE_URL + 'ESPINHOS',
      },
      {
        title: 'Jesus carregando a Cruz para o Calvário.',
        meditation:
          '«Tomaram de assalto um homem de Cirene, chamado Simão, que vinha do campo, e impuseram-lhe a cruz para a levar atrás de Jesus» (Lc 23, 26).',
        imageUrl: IMAGE_BASE_URL + 'CRUZ',
      },
      {
        title: 'A Crucificação e Morte de Nosso Senhor Jesus Cristo.',
        meditation:
          '«Jesus deu então um grande brado e disse: "Pai, nas tuas mãos entrego o meu espírito". Ditas estas palavras, expirou» (Lc 23, 46).',
        imageUrl: IMAGE_BASE_URL + 'CALV%C3%81RIO',
      },
    ],
  },
  {
    dayName: 'Quarta-feira',
    type: 'Mistérios Gloriosos',
    mysteries: [
      {
        title: 'A Ressurreição de Nosso Senhor Jesus Cristo.',
        meditation:
          '«No primeiro dia da semana, muito cedo, dirigiram-se ao sepulcro [...] Por que buscais entre os mortos aquele que está vivo? Não está aqui, mas ressuscitou» (Lc 24, 1-6).',
        imageUrl: IMAGE_BASE_URL + 'RESSURREI%C3%87%C3%83O',
      },
      {
        title: 'A Ascensão de Nosso Senhor Jesus Cristo ao Céu.',
        meditation:
          '«Depois que o Senhor Jesus lhes falou, foi levado ao céu e está sentado à direita de Deus» (Mc 16, 19).',
        imageUrl: IMAGE_BASE_URL + 'ASCENS%C3%83O',
      },
      {
        title:
          'A Vinda do Espírito Santo sobre a Virgem Santíssima e os Apóstolos.',
        meditation:
          '«Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar [...] Apareceram-lhes então umas línguas como de fogo, que se distribuíram e foram pousar sobre cada um deles. E todos ficaram cheios do Espírito Santo» (At 2, 1-4).',
        imageUrl: IMAGE_BASE_URL + 'PENTECOSTES',
      },
      {
        title: 'A Assunção de Nossa Senhora ao Céu em corpo e alma.',
        meditation:
          '«[...] Porque fez em mim grandes coisas Aquele que é Poderoso; o seu Nome é Santo» (Lc 1, 49). O Catecismo ensina que Maria é levada ao Céu em corpo e alma.',
        imageUrl: IMAGE_BASE_URL + 'ASSUN%C3%87%C3%83O',
      },
      {
        title: 'A Coroação de Nossa Senhora como Rainha do Céu e da Terra.',
        meditation:
          '«Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas» (Ap 12, 1).',
        imageUrl: IMAGE_BASE_URL + 'COROA%C3%87%C3%83O',
      },
    ],
  },
  {
    dayName: 'Quinta-feira',
    type: 'Mistérios Luminosos',
    mysteries: [
      {
        title: 'O Batismo de Jesus no rio Jordão.',
        meditation:
          '«E do céu baixou uma voz: "Eis meu Filho muito amado em quem ponho minha afeição"» (Mt 3, 16-17).',
        imageUrl: IMAGE_BASE_URL + 'BATISMO',
      },
      {
        title: 'A Auto-revelação de Jesus nas Bodas de Caná.',
        meditation:
          '«Este foi o primeiro dos seus milagres; realizou-o em Caná da Galileia. Manifestou a sua glória e os seus discípulos creram nele» (Jo 2, 11).',
        imageUrl: IMAGE_BASE_URL + 'CAN%C3%81',
      },
      {
        title: 'O Anúncio do Reino de Deus e o convite à conversão.',
        meditation:
          '«Completou-se o tempo e o Reino de Deus está próximo; fazei penitência e crede no Evangelho» (Mc 1, 15).',
        imageUrl: IMAGE_BASE_URL + 'REINO',
      },
      {
        title: 'A Transfiguração de Jesus no Monte Tabor.',
        meditation:
          '«O seu rosto brilhou como o sol, e as suas vestes tornaram-se brancas como a luz» (Mt 17, 2).',
        imageUrl: IMAGE_BASE_URL + 'TRANSFIGURA%C3%87%C3%83O',
      },
      {
        title: 'A Instituição da Santíssima Eucaristia.',
        meditation:
          '«Durante a refeição, Jesus tomou o pão, benzeu-o, partiu-o e o deu aos discípulos, dizendo: "Tomai e comei, isto é meu corpo"» (Mt 26, 26).',
        imageUrl: IMAGE_BASE_URL + 'EUCARISTIA',
      },
    ],
  },
  {
    dayName: 'Sexta-feira',
    type: 'Mistérios Dolorosos',
    mysteries: [
      {
        title: 'A Agonia de Jesus no Horto das Oliveiras.',
        meditation:
          '«Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim o que tu queres» (Mt 26, 36-39).',
        imageUrl: IMAGE_BASE_URL + 'GETS%C3%8AMANI',
      },
      {
        title: 'A Flagelação de Jesus atado à coluna.',
        meditation:
          '«Então lhes soltou Barrabás; mas a Jesus mandou açoitar, e o entregou para ser crucificado» (Mt 27, 26).',
        imageUrl: IMAGE_BASE_URL + 'FLAGELA%C3%87%C3%83O',
      },
      {
        title: 'A Coroação de espinhos de Jesus.',
        meditation:
          '«Despiram-no e puseram-lhe um manto escarlate. Depois, teceram uma coroa de espinhos e puseram-lha na cabeça» (Mt 27, 28-29).',
        imageUrl: IMAGE_BASE_URL + 'ESPINHOS',
      },
      {
        title: 'Jesus carregando a Cruz para o Calvário.',
        meditation:
          '«Tomaram de assalto um homem de Cirene, chamado Simão, que vinha do campo, e impuseram-lhe a cruz para a levar atrás de Jesus» (Lc 23, 26).',
        imageUrl: IMAGE_BASE_URL + 'CRUZ',
      },
      {
        title: 'A Crucificação e Morte de Nosso Senhor Jesus Cristo.',
        meditation:
          '«Jesus deu então um grande brado e disse: "Pai, nas tuas mãos entrego o meu espírito". Ditas estas palavras, expirou» (Lc 23, 46).',
        imageUrl: IMAGE_BASE_URL + 'CALV%C3%81RIO',
      },
    ],
  },
  {
    dayName: 'Sábado',
    type: 'Mistérios Gozosos',
    mysteries: [
      {
        title: 'A Anunciação do Anjo Gabriel à Nossa Senhora.',
        meditation:
          '«No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré, a uma virgem desposada com um homem que se chamava José [...] e o nome da virgem era Maria» (Lc 1, 26-27).',
        imageUrl: IMAGE_BASE_URL + 'ANUNCIA%C3%87%C3%83O',
      },
      {
        title: 'A Visita de Nossa Senhora à sua prima Santa Isabel.',
        meditation:
          '«Logo que Isabel ouviu a saudação de Maria, a criança estremeceu-lhe no ventre e Isabel ficou cheia do Espírito Santo» (Lc 1, 41).',
        imageUrl: IMAGE_BASE_URL + 'VISITA%C3%87%C3%83O',
      },
      {
        title: 'O Nascimento de Jesus Cristo em Belém.',
        meditation:
          '«Ela deu à luz o seu filho primogênito, e envolveu-o em panos e deitou-o numa manjedoura» (Lc 2, 7).',
        imageUrl: IMAGE_BASE_URL + 'NASCIMENTO',
      },
      {
        title: 'A Apresentação do Menino Jesus no Templo.',
        meditation:
          '«Quando se cumpriu o tempo da purificação, segundo a Lei de Moisés, levaram-no a Jerusalém, para o apresentarem ao Senhor» (Lc 2, 22).',
        imageUrl: IMAGE_BASE_URL + 'TEMPLO',
      },
      {
        title: 'O Encontro do Menino Jesus no Templo, entre os Doutores.',
        meditation:
          '«Não sabíeis que Eu têm de estar na casa de meu Pai?» (Lc 2, 49).',
        imageUrl: IMAGE_BASE_URL + 'DOUTORES',
      },
    ],
  },
];

export const dayNamesShort = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
