/*
  ACHADOS DA MZP GARAGE — é só editar este arquivo pra adicionar/remover produto.
  REGRA DE ENTRADA: +1.000 vendidos, nota 4,5+, preço bom E comissão que valha em R$. Mínimo 10 por categoria.
  NUMERAÇÃO POR CATEGORIA: Estética 1-10 · Som e tecnologia 11-20 · Estrada e picape 21-30 · Motos 31-40 · Piloto 41-50 · Oficina carro 51-60 · Oficina moto 61-70 · Piloto (mais) 71-80.
  Produto novo entra no fim (51, 52...). Depois do lançamento, nunca reutilize um número.
  - "link": SEMPRE o link oficial gerado no Gerador de links de afiliado do Mercado Livre (meli.la/...).
    ⚠️ PRÉVIA: links gerados na conta de afiliado do Matheus só pra ver o site. Trocar pelos da conta MZP antes do lançamento.
  - "imagem": foto salva em img/pN.webp (carrega rápido e não depende do servidor do ML).
  - "categoria": "estetica", "tecnologia", "estrada", "motos", "piloto", "oficina_carro" ou "oficina_moto".
  - "destaque: true" = produto do vídeo mais recente (aparece primeiro, com selo "Do vídeo").
*/
const PRODUTOS = [
  {
    "num": 1,
    "nome": "Kit lavagem Vonixx V-Floc + Blend + Sintra",
    "descricao": "Nota 4,9 · +10 mil vendidos",
    "preco": "R$ 170,92",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/2T81pfB",
    "imagem": "img/p1.webp"
  },
  {
    "num": 2,
    "nome": "Kit limpeza interna Vonixx Sintra Fast + Intense",
    "descricao": "Nota 4,9 · +10 mil vendidos",
    "preco": "R$ 75,20",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/27KQwRF",
    "imagem": "img/p2.webp"
  },
  {
    "num": 3,
    "nome": "Cera spray Blend + shampoo V-Floc + toalha",
    "descricao": "Nota 4,9 · +5 mil vendidos",
    "preco": "R$ 75,75",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/2hecEXg",
    "imagem": "img/p3.webp"
  },
  {
    "num": 4,
    "nome": "Aspirador automotivo WAP Car 180W, filtro HEPA",
    "descricao": "Nota 4,7 · +50 mil vendidos",
    "preco": "R$ 89,91",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/1Ukgf9j",
    "imagem": "img/p4.webp"
  },
  {
    "num": 5,
    "nome": "Politriz multifunção 5000 rpm Mestri",
    "descricao": "Nota 4,8 · +1 mil vendidos",
    "preco": "R$ 119,97",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/2z5nGML",
    "imagem": "img/p5.webp"
  },
  {
    "num": 6,
    "nome": "Lavadora de alta pressão Kärcher 1200W",
    "descricao": "Nota 4,8 · +100 mil vendidos",
    "preco": "R$ 299,00",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/1TB9QbC",
    "imagem": "img/p6.webp"
  },
  {
    "num": 7,
    "nome": "Lavadora de alta pressão WAP Ousada Plus 2200",
    "descricao": "Nota 4,7 · +100 mil vendidos",
    "preco": "R$ 424,91",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/2WEyaL5",
    "imagem": "img/p7.webp"
  },
  {
    "num": 8,
    "nome": "Kit polimento Risco Zero Cadillac (corte, refino, lustro)",
    "descricao": "Nota 4,8 · +1 mil vendidos",
    "preco": "R$ 137,90",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/2Cc1ktE",
    "imagem": "img/p8.webp"
  },
  {
    "num": 9,
    "nome": "Kit polidores Vonixx V10 + V20 + V30",
    "descricao": "Nota 4,8 · +1 mil vendidos",
    "preco": "R$ 139,40",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/1FTYbx7",
    "imagem": "img/p9.webp"
  },
  {
    "num": 10,
    "nome": "Kit limpa e hidrata couro Vonixx",
    "descricao": "Nota 4,9 · +5 mil vendidos",
    "preco": "R$ 60,60",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/1STATfy",
    "imagem": "img/p10.webp"
  },
  {
    "num": 11,
    "nome": "Multimídia Soundfy 7\" 1 DIN bluetooth",
    "descricao": "Nota 4,7 · +10 mil vendidos",
    "preco": "R$ 193,99",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/1mbU9VN",
    "imagem": "img/p11.webp"
  },
  {
    "num": 12,
    "nome": "Central multimídia CarPlay/Android Auto + câmera de ré",
    "descricao": "Nota 4,6 · +5 mil vendidos",
    "preco": "R$ 262,20",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/1AEVM7r",
    "imagem": "img/p12.webp"
  },
  {
    "num": 13,
    "nome": "Par de alto-falantes JBL triaxial 6\" 160W",
    "descricao": "Nota 4,8 · +50 mil vendidos",
    "preco": "R$ 252,86",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/1ZgvAk2",
    "imagem": "img/p13.webp"
  },
  {
    "num": 14,
    "nome": "Sensor de estacionamento com display e bip",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 74,90",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/2AiKsWh",
    "imagem": "img/p14.webp"
  },
  {
    "num": 15,
    "nome": "Par de LED mini projetor H4 200W",
    "descricao": "Nota 4,8 · +1 mil vendidos",
    "preco": "R$ 264,90",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/1rtRkHf",
    "imagem": "img/p15.webp"
  },
  {
    "num": 16,
    "nome": "Kit câmera de ré + tela no retrovisor",
    "descricao": "Nota 4,7 · +10 mil vendidos",
    "preco": "R$ 96,81",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/2McRDsB",
    "imagem": "img/p16.webp"
  },
  {
    "num": 17,
    "nome": "Rádio Pioneer MVH-145BR bluetooth USB",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 341,00",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/2EXKcKd",
    "imagem": "img/p17.webp"
  },
  {
    "num": 18,
    "nome": "Módulo Taramps TS-400 4 canais",
    "descricao": "Nota 4,9 · +250 mil vendidos",
    "preco": "R$ 181,00",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/1uuphM2",
    "imagem": "img/p18.webp"
  },
  {
    "num": 19,
    "nome": "Amplificador Taramps TS 800x4 800W",
    "descricao": "Nota 4,8 · +100 mil vendidos",
    "preco": "R$ 317,99",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/2aLdBbb",
    "imagem": "img/p19.webp"
  },
  {
    "num": 20,
    "nome": "Subwoofer 12\" Bomber Bicho Papão 600W",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 317,99",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/17SoM69",
    "imagem": "img/p20.webp"
  },
  {
    "num": 21,
    "nome": "Auxiliar de partida + compressor 6 em 1",
    "descricao": "Nota 4,8 · +5 mil vendidos",
    "preco": "R$ 165,60",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/2nHMLVG",
    "imagem": "img/p21.webp"
  },
  {
    "num": 22,
    "nome": "Mini compressor digital recarregável USB-C",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 59,40",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/2nLVNQi",
    "imagem": "img/p22.webp"
  },
  {
    "num": 23,
    "nome": "Macaco hidráulico jacaré 2 ton com maleta",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 164,70",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/1JhtXyx",
    "imagem": "img/p23.webp"
  },
  {
    "num": 24,
    "nome": "Jogo de soquetes 1/2\" com maleta",
    "descricao": "Nota 4,9 · +10 mil vendidos",
    "preco": "R$ 169,90",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/2dhXMpQ",
    "imagem": "img/p24.webp"
  },
  {
    "num": 25,
    "nome": "Parafusadeira 12V + jogo de ferramentas 169 peças",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 303,90",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/2hnAZCy",
    "imagem": "img/p25.webp"
  },
  {
    "num": 26,
    "nome": "Geladeira portátil 45L 12V/24V",
    "descricao": "Nota 5 · +1 mil vendidos",
    "preco": "R$ 1.553,00",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/17HW5dH",
    "imagem": "img/p26.webp"
  },
  {
    "num": 27,
    "nome": "Kit 4 cintas catraca 800kg pra caçamba",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 73,90",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/2MoCKGK",
    "imagem": "img/p27.webp"
  },
  {
    "num": 28,
    "nome": "Chave de impacto a bateria 21V 450Nm",
    "descricao": "Nota 4,8 · +5 mil vendidos",
    "preco": "R$ 269,97",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/21pApz1",
    "imagem": "img/p28.webp"
  },
  {
    "num": 29,
    "nome": "Lanterna tática LED alcance 2 km",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 169,97",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/1pvAv7i",
    "imagem": "img/p29.webp"
  },
  {
    "num": 30,
    "especifico": true,
    "nome": "Tapete de borracha Fiat Strada cabine simples",
    "descricao": "Nota 4,6 · +1 mil vendidos",
    "preco": "R$ 70,90",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/1xzUr9P",
    "imagem": "img/p30.webp"
  },
  {
    "num": 31,
    "nome": "Par de intercomunicadores V6 Plus pra capacete",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 269,12",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/1WefD5e",
    "imagem": "img/p31.webp"
  },
  {
    "num": 32,
    "nome": "Bolsa de tanque com ímã, impermeável",
    "descricao": "Nota 4,8 · +5 mil vendidos",
    "preco": "R$ 63,99",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/1JHFRQC",
    "imagem": "img/p32.webp"
  },
  {
    "num": 33,
    "nome": "Capacete FW3 GT2 preto fosco",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 399,99",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/2mbu4vr",
    "imagem": "img/p33.webp"
  },
  {
    "num": 34,
    "nome": "Baú Pro Tork Smart Box 45 litros",
    "descricao": "Nota 4,6 · +5 mil vendidos",
    "preco": "R$ 245,99",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/16QY1a3",
    "imagem": "img/p34.webp"
  },
  {
    "num": 35,
    "nome": "Trava de disco com sirene pra moto",
    "descricao": "Nota 4,9 · +1 mil vendidos",
    "preco": "R$ 59,90",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/24mWBEp",
    "imagem": "img/p35.webp"
  },
  {
    "num": 36,
    "nome": "Capa forrada impermeável pra cobrir moto",
    "descricao": "Nota 4,9 · +100 mil vendidos",
    "preco": "R$ 57,99",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/1vMHMcb",
    "imagem": "img/p36.webp"
  },
  {
    "num": 37,
    "especifico": true,
    "nome": "Protetor de motor francês CG 125/150/160",
    "descricao": "Nota 4,8 · +5 mil vendidos",
    "preco": "R$ 99,99",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/1paqR7t",
    "imagem": "img/p37.webp"
  },
  {
    "num": 38,
    "especifico": true,
    "nome": "Protetor mata-cachorro com carenagem Bros",
    "descricao": "Nota 4,7 · +1 mil vendidos",
    "preco": "R$ 207,47",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/29A5has",
    "imagem": "img/p38.webp"
  },
  {
    "num": 39,
    "nome": "Alarme Pósitron DuoBlock Pro 350 G8",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 245,43",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/1KxnKTK",
    "imagem": "img/p39.webp"
  },
  {
    "num": 40,
    "nome": "Alforge lateral Baslu 60L refletivo",
    "descricao": "Nota 4,5 · +1 mil vendidos",
    "preco": "R$ 147,97",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/2TsJh3F",
    "imagem": "img/p40.webp"
  },
  {
    "num": 41,
    "nome": "Óculos de sol polarizado UV400",
    "descricao": "Nota 4,9 · +10 mil vendidos",
    "preco": "R$ 129,90",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/19d9a7Q",
    "imagem": "img/p41.webp"
  },
  {
    "num": 42,
    "nome": "Luva X11 Blackout touch",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 107,00",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1UrrzmG",
    "imagem": "img/p42.webp"
  },
  {
    "num": 43,
    "nome": "Jaqueta Texx Ronin impermeável",
    "descricao": "Nota 4,7 · +10 mil vendidos",
    "preco": "R$ 408,40",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/2Y1XRf6",
    "imagem": "img/p43.webp"
  },
  {
    "num": 44,
    "nome": "Jaqueta X11 Super Air ventilada",
    "descricao": "Nota 4,9 · +1 mil vendidos",
    "preco": "R$ 368,92",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1aZ2J69",
    "imagem": "img/p44.webp"
  },
  {
    "num": 45,
    "nome": "Capa de chuva Pioneira PVC",
    "descricao": "Nota 4,7 · +100 mil vendidos",
    "preco": "R$ 88,00",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/2m2TGSs",
    "imagem": "img/p45.webp"
  },
  {
    "num": 46,
    "nome": "Capa de chuva nylon Pantaneiro com gola",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 189,90",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1FBJokv",
    "imagem": "img/p46.webp"
  },
  {
    "num": 47,
    "nome": "Tênis coturno motoqueiro de couro",
    "descricao": "Nota 4,7 · +10 mil vendidos",
    "preco": "R$ 156,60",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1gT2X65",
    "imagem": "img/p47.webp"
  },
  {
    "num": 48,
    "nome": "Bota coturno adventure de couro",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 180,96",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/24Fo9MY",
    "imagem": "img/p48.webp"
  },
  {
    "num": 49,
    "nome": "Calça Texx New Strike V2 impermeável",
    "descricao": "Nota 4,6 · +1 mil vendidos",
    "preco": "R$ 509,91",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/27Kwj3e",
    "imagem": "img/p49.webp"
  },
  {
    "num": 50,
    "nome": "Calça jeans motociclista com proteção",
    "descricao": "Nota 4,5 · +1 mil vendidos",
    "preco": "R$ 218,40",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/2WxXGNi",
    "imagem": "img/p50.webp"
  },
  {
    "num": 51,
    "nome": "Óleo Lubrax Top 5W-30 sintético (kit 5 litros)",
    "descricao": "Nota 4,9 · +10 mil vendidos",
    "preco": "R$ 205,00",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/25VeRTs",
    "imagem": "img/p51.webp"
  },
  {
    "num": 52,
    "especifico": true,
    "nome": "Pneu Firestone F-600 175/70 R14",
    "descricao": "Nota 4,9 · +10 mil vendidos",
    "preco": "R$ 377,89",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/2e5GLL5",
    "imagem": "img/p52.webp"
  },
  {
    "num": 53,
    "nome": "Par de palhetas Bosch Aerofit silicone",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 78,92",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/2XUiXeh",
    "imagem": "img/p53.webp"
  },
  {
    "num": 54,
    "nome": "Scanner OBD2 bluetooth ELM327 placa dupla",
    "descricao": "Nota 4,7 · +10 mil vendidos",
    "preco": "R$ 54,90",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/2ZXE7DD",
    "imagem": "img/p54.webp"
  },
  {
    "num": 55,
    "especifico": true,
    "nome": "Kit 4 pneus West Lake 185/65 R15",
    "descricao": "Nota 4,9 · +1 mil vendidos",
    "preco": "R$ 1.349,00",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/1Uqt8Rv",
    "imagem": "img/p55.webp"
  },
  {
    "num": 56,
    "especifico": true,
    "nome": "Pastilha de freio Cobreq Toro / Renegade",
    "descricao": "Nota 4,8 · +1 mil vendidos",
    "preco": "R$ 182,69",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/1CYuXZ3",
    "imagem": "img/p56.webp"
  },
  {
    "num": 57,
    "nome": "Aditivo de radiador Motul Mocool",
    "descricao": "Nota 4,7 · +5 mil vendidos",
    "preco": "R$ 140,69",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/1MXqNR7",
    "imagem": "img/p57.webp"
  },
  {
    "num": 58,
    "especifico": true,
    "nome": "Kit 4 amortecedores Nakata Gol G5/G6/G7",
    "descricao": "Nota 4,8 · +1 mil vendidos",
    "preco": "R$ 882,60",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/1xeV2L2",
    "imagem": "img/p58.webp"
  },
  {
    "num": 59,
    "especifico": true,
    "nome": "Kit amortecedores Nakata Corsa / Celta / Prisma",
    "descricao": "Nota 4,8 · +5 mil vendidos",
    "preco": "R$ 624,57",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/1GacSBQ",
    "imagem": "img/p59.webp"
  },
  {
    "num": 60,
    "especifico": true,
    "nome": "Jogo de cabos e velas Gol / Fox / Polo 8v",
    "descricao": "Nota 4,9 · +5 mil vendidos",
    "preco": "R$ 149,29",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/1chxxqu",
    "imagem": "img/p60.webp"
  },
  {
    "num": 61,
    "especifico": true,
    "nome": "Kit relação com retentor CG 150/160",
    "descricao": "Nota 4,9 · +10 mil vendidos",
    "preco": "R$ 165,84",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/1r5mNtt",
    "imagem": "img/p61.webp"
  },
  {
    "num": 62,
    "especifico": true,
    "nome": "Pneu traseiro Maggion Winner 90/90-18",
    "descricao": "Nota 4,7 · +50 mil vendidos",
    "preco": "R$ 179,74",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/2u3kVWN",
    "imagem": "img/p62.webp"
  },
  {
    "num": 63,
    "especifico": true,
    "nome": "Pneu traseiro Michelin Pilot Street 2",
    "descricao": "Nota 4,9 · +10 mil vendidos",
    "preco": "R$ 380,80",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/14DdHWJ",
    "imagem": "img/p63.webp"
  },
  {
    "num": 64,
    "nome": "Óleo Motul 5100 10W30 semissintético",
    "descricao": "Nota 4,9 · +50 mil vendidos",
    "preco": "R$ 78,90",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/2KZMu3B",
    "imagem": "img/p64.webp"
  },
  {
    "num": 65,
    "especifico": true,
    "nome": "Escape esportivo Trioval CG 160",
    "descricao": "Nota 4,8 · +1 mil vendidos",
    "preco": "R$ 398,90",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/2C1T5aq",
    "imagem": "img/p65.webp"
  },
  {
    "num": 66,
    "especifico": true,
    "nome": "Bateria Moura MA5-D Titan / Fan / Bros",
    "descricao": "Nota 4,9 · +10 mil vendidos",
    "preco": "R$ 179,00",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/1m1q6ae",
    "imagem": "img/p66.webp"
  },
  {
    "num": 67,
    "especifico": true,
    "nome": "Par de amortecedores traseiros CG 150/160",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 170,99",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/165TPmU",
    "imagem": "img/p67.webp"
  },
  {
    "num": 68,
    "especifico": true,
    "nome": "Kit cilindro KMP CG / Bros 160",
    "descricao": "Nota 4,9 · +1 mil vendidos",
    "preco": "R$ 247,22",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/17BLH4F",
    "imagem": "img/p68.webp"
  },
  {
    "num": 69,
    "especifico": true,
    "nome": "Pneu dianteiro Michelin Pilot Street 2 80/100-18",
    "descricao": "Nota 4,9 · +5 mil vendidos",
    "preco": "R$ 306,06",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/1m9cLFf",
    "imagem": "img/p69.webp"
  },
  {
    "num": 70,
    "especifico": true,
    "nome": "Disco de freio + pastilha CG 160 (2018 a 2024)",
    "descricao": "Nota 4,9 · +5 mil vendidos",
    "preco": "R$ 99,90",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/2eJ9H8A",
    "imagem": "img/p70.webp"
  },
  {
    "num": 71,
    "nome": "Capacete ASX City SV com viseira solar",
    "descricao": "Nota 4,9 · +5 mil vendidos",
    "preco": "R$ 459,08",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/2QD1uCE",
    "imagem": "img/p71.webp"
  },
  {
    "num": 72,
    "nome": "Capacete FW3 GTX com óculos fumê interno",
    "descricao": "Nota 4,9 · +5 mil vendidos",
    "preco": "R$ 477,42",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/2VC3BxN",
    "imagem": "img/p72.webp"
  },
  {
    "num": 73,
    "nome": "Capacete Race Tech Hit preto fosco",
    "descricao": "Nota 4,9 · +5 mil vendidos",
    "preco": "R$ 306,00",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1o91cKe",
    "imagem": "img/p73.webp"
  },
  {
    "num": 74,
    "nome": "Capacete Pro Tork Sport 788 fechado",
    "descricao": "Nota 4,7 · +5 mil vendidos",
    "preco": "R$ 124,90",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/21nAoVE",
    "imagem": "img/p74.webp"
  },
  {
    "num": 75,
    "nome": "Capacete feminino Taurus San Marino Femme",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 158,26",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1uEFvUN",
    "imagem": "img/p75.webp"
  },
  {
    "num": 76,
    "nome": "Capa de chuva conjunto Floresta Urbana",
    "descricao": "Nota 4,8 · +50 mil vendidos",
    "preco": "R$ 78,98",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/2zsumxG",
    "imagem": "img/p76.webp"
  },
  {
    "num": 77,
    "nome": "Capa de chuva Nave Combat nylon emborrachado",
    "descricao": "Nota 4,7 · +10 mil vendidos",
    "preco": "R$ 219,90",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/2gPcmxc",
    "imagem": "img/p77.webp"
  },
  {
    "num": 78,
    "nome": "Capa de chuva Delta Flex com capuz",
    "descricao": "Nota 4,6 · +10 mil vendidos",
    "preco": "R$ 109,59",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1XRHZ5f",
    "imagem": "img/p78.webp"
  },
  {
    "num": 79,
    "nome": "Luva X11 Fit X com proteção",
    "descricao": "Nota 4,8 · +10 mil vendidos",
    "preco": "R$ 73,99",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1U8i2sY",
    "imagem": "img/p79.webp"
  },
  {
    "num": 80,
    "nome": "Luva térmica impermeável com touch",
    "descricao": "Nota 4,6 · +50 mil vendidos",
    "preco": "R$ 27,90",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1eKFZ9m",
    "imagem": "img/p80.webp"
  }
,
  {
    "num": 81,
    "nome": "Aromatizante Cheirinho Odorizador Carro Automotivo 1L",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 35,87",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/1gnNkUD",
    "imagem": "img/p81.webp"
  },
  {
    "num": 82,
    "nome": "Capa Para Banco Automotivo Universal Impermeável",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 157,37",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/1txMQ2U",
    "imagem": "img/p82.webp"
  },
  {
    "num": 83,
    "nome": "Tapete Automotivo Universal 100% Borracha",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 85,49",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/1hjEgyv",
    "imagem": "img/p83.webp"
  },
  {
    "num": 84,
    "nome": "Suporte de Celular Veicular 360° Painel/Mesa/Retrovisor",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 23,98",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/1rqCSGt",
    "imagem": "img/p84.webp"
  },
  {
    "num": 85,
    "nome": "Dashcam Ddpai Mini Pro 2K Wi-Fi com visão noturna",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 284,28",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/28SEDmC",
    "imagem": "img/p85.webp"
  },
  {
    "num": 86,
    "nome": "Triângulo de Sinalização Automotivo Refletivo",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 18,97",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/1ncioxg",
    "imagem": "img/p86.webp"
  },
  {
    "num": 87,
    "nome": "Carregador Inteligente de Bateria Automotiva 12V 6A",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 47,99",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/2ABDZZ5",
    "imagem": "img/p87.webp"
  },
  {
    "num": 88,
    "nome": "Extintor Veicular P1 ABC 1kg com validade de 5 anos",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 74,95",
    "loja": "ml",
    "categoria": "estrada",
    "link": "https://meli.la/2ACDepp",
    "imagem": "img/p88.webp"
  },
  {
    "num": 89,
    "especifico": true,
    "nome": "Par Retrovisor Moto Honda CG Titan 150 LD/LE",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 24,90",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/2eXUAeA",
    "imagem": "img/p89.webp"
  },
  {
    "num": 90,
    "especifico": true,
    "nome": "Kit 4 Piscas Seta LED Twister Titan Fan 125-150",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 41,89",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/2oh4xmz",
    "imagem": "img/p90.webp"
  },
  {
    "num": 91,
    "nome": "Manopla Esportiva Diamante Peso Curto Universal",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 23,51",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/1HA6WoF",
    "imagem": "img/p91.webp"
  },
  {
    "num": 92,
    "nome": "Suporte de Celular Moto com Carregador no Guidão",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 21,99",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/2tDwUF9",
    "imagem": "img/p92.webp"
  },
  {
    "num": 93,
    "nome": "Balaclava Térmica Ninja UV50+ com Proteção Solar",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 19,00",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1QLGZGA",
    "imagem": "img/p93.webp"
  },
  {
    "num": 94,
    "nome": "Mochila Motoboy Impermeável Reforçada",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 73,89",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/2k3iFue",
    "imagem": "img/p94.webp"
  },
  {
    "num": 95,
    "nome": "Kit Joelheira e Cotoveleira Polisport Devil",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 234,33",
    "loja": "ml",
    "categoria": "piloto",
    "link": "https://meli.la/1BZgtCD",
    "imagem": "img/p95.webp"
  },
  {
    "num": 96,
    "especifico": true,
    "nome": "Kit Correia Dentada Gol Voyage Parati Saveiro 1.6/1.8/2.0 AP",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 73,39",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/1Lm9Eb1",
    "imagem": "img/p96.webp"
  },
  {
    "num": 97,
    "especifico": true,
    "nome": "Jogo de Velas Bosch Fox/Gol/Saveiro G4-G7 1.0/1.6 8v Flex",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 78,79",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/2pwg8kR",
    "imagem": "img/p97.webp"
  },
  {
    "num": 98,
    "especifico": true,
    "nome": "Filtro de Ar Tecfil Fox/Voyage/Gol G3-G6 1.0",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 25,13",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/12C5hBt",
    "imagem": "img/p98.webp"
  },
  {
    "num": 99,
    "especifico": true,
    "nome": "Vela NGK Moto CG 150/160 Titan Fan Start Bros",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 33,05",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/1sXR23Q",
    "imagem": "img/p99.webp"
  },
  {
    "num": 100,
    "especifico": true,
    "nome": "Vela NGK Yamaha Ignição FZ15 Crosser Factor Fazer 150",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 38,90",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/1DydZzv",
    "imagem": "img/p100.webp"
  },
  {
    "num": 101,
    "especifico": true,
    "nome": "Filtro de Óleo Honda CRF250F/XRE300/Falcon/CRF300F",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 16,99",
    "loja": "ml",
    "categoria": "oficina_moto",
    "link": "https://meli.la/1fsKBPd",
    "imagem": "img/p101.webp"
  }
,
  {
    "num": 102,
    "nome": "Fita LED Automotiva DRL + Seta Sequencial 60cm",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 36,90",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/1FMxjfJ",
    "imagem": "img/p102.webp"
  },
  {
    "num": 103,
    "nome": "Kit Lâmpadas Super LED Farol Alto/Baixo/Milha",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 214,00",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/2MQEnNA",
    "imagem": "img/p103.webp"
  },
  {
    "num": 104,
    "nome": "Adesivo Olhos de LED Luminoso para Para-brisa",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 24,90",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/114bADF",
    "imagem": "img/p104.webp"
  },
  {
    "num": 105,
    "nome": "Jogo Calota Centro Tampa Miolo Roda Aro 14/15/17",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 34,90",
    "loja": "ml",
    "categoria": "estetica",
    "link": "https://meli.la/23qSBYj",
    "imagem": "img/p105.webp"
  },
  {
    "num": 106,
    "nome": "Adaptador CarPlay/Android Auto Sem Fio 2 em 1",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 199,99",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/1LcoU9w",
    "imagem": "img/p106.webp"
  },
  {
    "num": 107,
    "nome": "Carregador Veicular Turbo 4 em 1 USB/Tipo-C 120W",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 45,31",
    "loja": "ml",
    "categoria": "tecnologia",
    "link": "https://meli.la/1vQwjc2",
    "imagem": "img/p107.webp"
  },
  {
    "num": 108,
    "nome": "Baú Givi Monolock 27L E27M Traffic",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 316,10",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/2aWMRK5",
    "imagem": "img/p108.webp"
  },
  {
    "num": 109,
    "nome": "Bauleto Stoned Tracker 35L Preto",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 232,79",
    "loja": "ml",
    "categoria": "motos",
    "link": "https://meli.la/18TgFE3",
    "imagem": "img/p109.webp"
  },
  {
    "num": 110,
    "especifico": true,
    "nome": "Bateria de Carro Moura 60Ah M60AD",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 689,95",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/15gG5Nc",
    "imagem": "img/p110.webp"
  },
  {
    "num": 111,
    "especifico": true,
    "nome": "Correia Alternador Elástica Gol/Saveiro/Voyage G5-G7/Fox",
    "descricao": "Achado novo · confira nota e vendas no anúncio",
    "preco": "R$ 62,40",
    "loja": "ml",
    "categoria": "oficina_carro",
    "link": "https://meli.la/2hJujwf",
    "imagem": "img/p111.webp"
  }
];
