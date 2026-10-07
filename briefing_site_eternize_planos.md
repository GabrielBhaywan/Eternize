# BRIEFING E DIRETRIZES — SITE ETERNIZE PLANOS

## 1. Objetivo

Criar um site landing page profissional para a **Eternize Planos**, empresa de planos funerários que também oferece o **Cartão DU** com benefícios e descontos em diversas categorias.

O site deve transmitir:

- calma;
- paz;
- tranquilidade;
- acolhimento;
- confiança;
- segurança;
- profissionalismo;
- cuidado com a família.

Evitar completamente um visual pesado, sombrio, exageradamente luxuoso ou visualmente abusivo. O tema funerário deve ser tratado de maneira humana e serena, sem imagens mórbidas ou cenas tristes.

O resultado deve parecer um site profissional de uma empresa real, e não uma página genérica criada por IA.

---

# 2. Direção visual

## Paleta

Usar como referência a identidade visual presente nos materiais fornecidos:

- azul-marinho como cor principal;
- branco/off-white para áreas de leitura;
- dourado/laranja como cor de destaque;
- tons neutros suaves para equilibrar a página.

Não exagerar no uso do laranja/dourado. Ele deve funcionar principalmente como cor de destaque para botões, detalhes, preços e elementos importantes.

## Estilo

O design deve ser:

- natural;
- elegante;
- limpo;
- moderno;
- acolhedor;
- respirado;
- com bastante espaço em branco;
- com imagens grandes e bem posicionadas;
- com tipografia muito legível.

Evitar:

- excesso de gradientes;
- excesso de sombras;
- excesso de elementos flutuantes;
- excesso de animações;
- cards demais aparecendo simultaneamente;
- efeitos chamativos que prejudiquem a sensação de tranquilidade;
- visual excessivamente tecnológico;
- visual excessivamente escuro;
- imagens mórbidas, funerais explícitos, caixões ou pessoas em sofrimento.

---

# 3. Imagens

O projeto deve ser construído com espaços claramente identificados para futuras imagens reais.

Sempre que uma imagem ainda não estiver disponível, usar um placeholder claramente identificável no código e na interface, por exemplo:

`[ IMAGEM AQUI ]`

ou:

`<!-- IMAGEM AQUI: foto familiar acolhedora -->`

Não inventar imagens ou links externos de imagens.

Criar placeholders para pelo menos:

- imagem principal da Hero;
- imagem alternativa da Hero;
- fotos institucionais;
- fotos relacionadas à família;
- fotos relacionadas ao Cartão DU;
- foto da equipe/consultora;
- imagem da seção de contato, se necessário.

Os placeholders devem ser fáceis de substituir posteriormente.

---

# 4. HERO

Criar uma Hero visualmente forte, porém tranquila.

Estrutura:

Lado esquerdo:
- título;
- subtítulo;
- CTA principal;
- CTA secundário opcional.

Sugestão de texto:

**Proteção para sua família. Tranquilidade para o futuro.**

Texto de apoio:

**Planos funerários, assistência e benefícios pensados para cuidar de quem você ama.**

CTA principal:

**Conheça nossos planos**

CTA secundário:

**Falar com um consultor**

## Vídeo da Hero

Reservar o lado direito da Hero para um vídeo.

A intenção é utilizar futuramente um vídeo curto e discreto de **velas soprando/apagando**, transmitindo calma e simbolizando cuidado e passagem de um momento para outro.

O vídeo deve:

- ficar em loop;
- ser discreto;
- não possuir controles visíveis;
- funcionar como elemento visual, não como protagonista;
- possuir `muted`;
- tentar iniciar automaticamente;
- utilizar `playsinline`;
- não prejudicar a leitura do texto.

Implementar fallback:

Se o vídeo não carregar ou não puder ser reproduzido, mostrar automaticamente uma imagem estática.

Estrutura esperada:

- vídeo principal;
- imagem fallback;
- placeholder para o usuário substituir posteriormente.

Exemplo conceitual:

`video -> fallback image`

Não utilizar vídeo remoto obrigatório. Deixar o código preparado para que o usuário possa colocar posteriormente seus próprios arquivos locais.

---

# 5. HEADER / NAVEGAÇÃO

Criar um header elegante e simples.

Logo:
`[ LOGO ETERNIZE AQUI ]`

Links:

- Início
- Sobre
- Planos
- Cartão DU
- Benefícios
- FAQ
- Contato

Botão de destaque:

**Falar com um consultor**

No mobile, utilizar menu hamburger.

O header pode possuir leve efeito de mudança de fundo ao rolar a página.

---

# 6. SEÇÃO SOBRE A ETERNIZE

Criar uma seção curta e acolhedora.

Título:

**Cuidar também é se preparar.**

Texto:

A Eternize Planos oferece soluções de proteção e assistência para famílias que desejam mais tranquilidade e segurança para o futuro, com atendimento próximo e humanizado.

Não transformar esta seção em um bloco enorme de texto.

Adicionar espaço para uma imagem:

`[ IMAGEM AQUI — família / atendimento / equipe ]`

---

# 7. SEÇÃO DIFERENCIAIS

Criar uma seção visual com poucos elementos e bastante espaço.

Destaques:

- Atendimento humanizado;
- Assistência 24h;
- Cobertura conforme o plano contratado;
- Opções para diferentes tamanhos de família;
- Visita/atendimento presencial;
- Benefícios em vida;
- Cartão DU;
- Pet incluso no Eternize Prime.

Usar ícones simples e elegantes.

Animações leves de entrada ao aparecer na tela.

---

# 8. SEÇÃO PLANOS

Esta é uma das principais seções do site.

Criar cards interativos para os planos.

Planos atualmente informados:

### Eternize 1
- R$ 69,90
- até 2 vidas

### Eternize 4
- R$ 89,90
- até 5 vidas

### Eternize 6
- R$ 99,90
- até 7 vidas

### Eternize 10
- R$ 149,90
- até 11 vidas

### Eternize Prime
- R$ 179,90
- destaque especial
- incluir diferencial: **pet incluso**

Existe informação de que os planos podem atender famílias de até **14 pessoas**. Estruturar a seção de maneira que essa informação possa ser apresentada sem criar contradição com a quantidade de vidas exibida nos cards.

## Cards interativos

Os cards devem ter:

- nome do plano;
- preço;
- quantidade de vidas;
- resumo dos benefícios;
- botão;
- estado hover;
- pequena elevação ou transformação suave;
- possibilidade de revelar mais informações sem deixar a interface pesada.

Não criar interações exageradas.

## Eternize Prime

O Eternize Prime deve ser claramente o plano de destaque.

Utilizar:

- selo "Destaque";
- borda diferenciada;
- cor de destaque;
- pequeno efeito visual elegante;
- posição visual privilegiada.

Não fazer o Prime parecer agressivo ou chamativo demais.

---

# 9. PROMOÇÃO DA ADESÃO

Criar uma seção ou destaque próximo aos planos.

Informações fornecidas:

- o valor da adesão é o valor do plano;
- até o dia 15 existe uma promoção;
- a promoção oferece **50% de desconto no valor da adesão**;
- válida para todos os planos.

Criar um bloco visual de promoção:

**Até dia 15**

**50% OFF na adesão**

**Válido para todos os planos.**

Adicionar CTA:

**Quero aproveitar a promoção**

Não criar contador regressivo falso.

Não afirmar que a promoção é permanente.

Estruturar o conteúdo para que a data possa ser alterada facilmente no código posteriormente.

---

# 10. COMO FUNCIONA

Criar uma seção simples em 3 ou 4 etapas:

1. Escolha o plano ideal;
2. Fale com um consultor;
3. Faça sua contratação;
4. Conte com a Eternize.

Também mencionar que a empresa realiza **visitas/atendimento presencial**, conforme as condições da empresa.

---

# 11. CARTÃO DU

Criar uma seção exclusiva para o **Cartão DU**.

O Cartão DU deve ser tratado como um dos grandes diferenciais da Eternize.

Título sugerido:

**Mais benefícios para cuidar do seu dia a dia.**

Texto:

Além da proteção dos planos, a Eternize oferece o Cartão DU, com benefícios e descontos em diversas categorias.

Mostrar as categorias com ícones:

- Alimentação
- Saúde
- Educação
- Beleza e estética
- Vestuário
- Comércios
- Serviços
- Academias
- Postos de combustíveis
- Autoescolas
- Drogarias
- Odontologia
- Óticas
- Benefícios exclusivos

Criar layout moderno, organizado e respirado.

Adicionar espaço:

`[ IMAGEM AQUI — CARTÃO DU / BENEFÍCIOS ]`

---

# 12. BENEFÍCIOS EM VIDA

Criar uma seção visual reforçando que a relação com a Eternize não se resume ao plano funerário.

Mensagem:

**Benefícios que fazem parte da sua rotina.**

Mostrar alguns exemplos do Cartão DU e criar CTA:

**Conheça os benefícios**

Não inventar valores de desconto específicos que não foram fornecidos.

---

# 13. ATENDIMENTO / CONSULTORA

Criar seção para conversão.

Informação disponível:

**Rebeca Martins**  
**Consultora autorizada**

WhatsApp:

**(11) 98050-0479**

Criar botão:

**Falar pelo WhatsApp**

O número deve ser configurado como link de WhatsApp.

Adicionar espaço para foto:

`[ IMAGEM AQUI — CONSULTORA ]`

Caso a foto real seja adicionada posteriormente, o layout deve permitir substituição fácil.

---

# 14. FAQ INTERATIVO

Criar FAQ em formato accordion.

As perguntas devem ser clicáveis.

Ao clicar:

- abrir resposta;
- fechar quando clicar novamente;
- idealmente fechar a resposta anterior quando outra for aberta;
- animação suave;
- não utilizar pop-up.

Perguntas iniciais:

### O que é um plano funerário?
Resposta explicando de forma simples que é uma forma de planejamento e assistência para proporcionar suporte à família conforme as condições contratadas.

### Quantas pessoas podem ser incluídas?
Informar que existem opções para diferentes tamanhos de família e que os planos podem chegar a atender até 14 pessoas, conforme configuração contratada.

### Pessoas acima de 65 anos podem ser incluídas?
Informar que há acréscimo de R$ 10,00 para pessoas acima de 65 anos, conforme informação fornecida.

### O que está incluso nos planos?
Resposta resumida e direcionamento para consultar os detalhes de cada plano.

### O Eternize Prime possui algum diferencial?
Sim. O Eternize Prime possui como diferencial o **pet incluso**, além dos benefícios específicos do plano.

### A Eternize realiza visitas?
Sim. A empresa realiza visitas/atendimento presencial.

### Como funciona a adesão?
O valor da adesão corresponde ao valor do plano contratado. Atualmente existe uma promoção de 50% de desconto na adesão até o dia 15, válida para todos os planos.

### Como funciona o Cartão DU?
Explicar que ele oferece benefícios e descontos em diferentes categorias.

### Como faço para contratar?
Orientar o visitante a falar com a consultora pelo WhatsApp.

IMPORTANTE:
As respostas devem ser fáceis de alterar posteriormente. Não criar informações contratuais que não foram fornecidas.

---

# 15. MAPA / LOCALIZAÇÃO

No final da página, criar uma seção de localização.

Título:

**Estamos aqui para atender você.**

Adicionar espaço reservado para um Google Maps.

Utilizar:

`[ GOOGLE MAPS AQUI ]`

O código deve deixar claro onde o iframe do Google Maps será colocado posteriormente.

Não inventar endereço.

---

# 16. CTA FINAL

Criar uma seção final tranquila e emocional.

Sugestão:

**Proteção começa com uma escolha.**

Texto:

**Converse com a Eternize e encontre uma opção que faça sentido para você e sua família.**

Botão:

**Falar com um consultor**

---

# 17. FOOTER

Footer elegante e simples.

Incluir:

- logo;
- navegação;
- WhatsApp;
- informações da empresa;
- espaço para endereço;
- espaço para redes sociais;
- espaço para informações legais.

Não inventar CNPJ, endereço ou redes sociais.

Utilizar placeholders quando a informação não estiver disponível:

`[ CNPJ AQUI ]`
`[ ENDEREÇO AQUI ]`
`[ INSTAGRAM AQUI ]`

---

# 18. ANIMAÇÕES

Usar animações simples e suaves.

Exemplos:

- fade-in ao entrar na viewport;
- pequenos deslocamentos verticais;
- hover nos cards;
- hover nos botões;
- transição suave no header;
- accordion do FAQ;
- destaque suave no plano Prime.

Evitar:

- animações constantes;
- elementos pulando;
- textos piscando;
- parallax exagerado;
- grandes transformações;
- efeitos que dificultem a leitura.

A sensação deve ser:

**calma + movimento sutil + sofisticação.**

---

# 19. RESPONSIVIDADE

O site precisa funcionar muito bem em:

- desktop;
- notebook;
- tablet;
- celular.

No mobile:

- cards dos planos empilhados;
- menu hamburger;
- botões fáceis de tocar;
- textos sem ficar pequenos;
- vídeo da Hero adaptado para formato vertical/quadrado ou substituído pelo fallback quando necessário;
- FAQ ocupando largura adequada;
- mapa responsivo.

Não simplesmente reduzir o layout desktop. Reorganizar os elementos para mobile.

---

# 20. ACESSIBILIDADE E PERFORMANCE

Implementar:

- HTML semântico;
- textos alternativos nas imagens;
- botões acessíveis;
- contraste adequado;
- navegação por teclado;
- `prefers-reduced-motion` para reduzir animações quando solicitado pelo sistema;
- lazy loading para imagens abaixo da dobra;
- vídeo otimizado e sem áudio;
- evitar bibliotecas desnecessárias.

---

# 21. ORGANIZAÇÃO DO CÓDIGO

Organizar o projeto de maneira profissional.

Separar:

- HTML;
- CSS;
- JavaScript;
- imagens;
- vídeos.

Estrutura sugerida:

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── videos/
└── README.md
```

Criar comentários no código indicando onde substituir:

- logo;
- imagem Hero;
- vídeo Hero;
- fallback da Hero;
- imagens institucionais;
- imagem do Cartão DU;
- foto da consultora;
- Google Maps;
- links de redes sociais.

---

# 22. REGRAS IMPORTANTES

1. Não inventar informações sobre os planos.
2. Não inventar endereço.
3. Não inventar CNPJ.
4. Não inventar parceiros do Cartão DU.
5. Não inventar descontos específicos do Cartão DU.
6. Não inventar coberturas que não foram confirmadas.
7. Não usar imagens mórbidas.
8. Não utilizar fotos genéricas de funeral como elemento principal.
9. Priorizar imagens de famílias, cuidado, acolhimento, serenidade e confiança.
10. Manter o visual leve.
11. O usuário irá substituir os placeholders por imagens reais posteriormente.
12. Deixar o código preparado para troca fácil de conteúdo.
13. O WhatsApp deve ser um dos principais pontos de conversão.
14. O plano Eternize Prime deve possuir destaque visual.
15. O FAQ deve ser realmente interativo.
16. O vídeo da Hero deve possuir imagem fallback.
17. O Google Maps deve ficar no final da página.
18. Não criar contador falso para a promoção.
19. A promoção de 50% na adesão deve ser apresentada como válida até o dia 15, podendo ser facilmente atualizada.
20. A quantidade de vidas e demais condições comerciais devem ficar fáceis de editar.

---

# 23. RESULTADO ESPERADO

O resultado final deve parecer um site profissional de uma empresa que transmite:

**"Aqui minha família será tratada com cuidado."**

Não criar apenas uma página bonita.

Criar uma experiência de navegação:

**acolhedora → informativa → confiável → clara → conversão pelo WhatsApp.**
