---
post: "glad-i-am-old-fundamentals-and-ai"
title: "11. Ainda bem que eu sou velho"
description: "Aprendi tecnologia numa época de escassez, quando cada bit importava e não existia curso online. Esse acúmulo virou critério, e é o que me ajuda a conversar com uma IA hoje. Só que tem uma pergunta que eu não sei responder: qual pedaço do que eu sei ainda sustenta peso, e qual pedaço é só apego ao esforço que eu paguei para aprender?"
image_banner: "/images/blog/estou-muito-velho-pra-isso.png"
image_post: "/images/blog/estou-muito-velho-pra-isso@2x.png"
image_og: "/images/blog/estou-muito-velho-pra-isso_og.jpg"
date: "2026-08-30"
---

"Estou ficando velho demais pra essa merda."

Roger Murtaugh diz isso em Máquina Mortífera, 1987. A frase virou meme, virou camiseta, virou o que a gente fala quando o dia aperta. Tem um detalhe nela que eu só fui reparar agora: Danny Glover tinha 40 anos quando gravou a cena. Ele não estava velho. Ele estava interpretando velho.

Eu penso nisso toda vez que me pego falando alguma versão dessa frase. E, por algum motivo, o que sai de mim ultimamente é o contrário dela.

Tenho pensado cada vez mais em "ainda bem que eu sou velho". Não é pela idade. É pelo que eu tive que atravessar para entender de tecnologia.

Como funciona um endereçamento de memória. Como era a época em que você precisava pensar em cada bit e cada byte que trafegava ou era processado, porque CPU e memória eram escassos. Internet, então, era novidade.

Quase ninguém tinha. E quem tinha, empresas ou gente endinheirada, ostentava um ADSL ainda muito ruim, enquanto boa parte do mundo sequer tinha saído do discado. Saber o que dava para fazer com tão pouco recurso exigia um malabarismo criativo invejável.

Como desenvolvedor, o desafio era plotar um mapa do Google Maps dentro de um sistema de arquitetura engessada, integrando uma API e um SDK que ninguém tinha explorado ainda. Do lado da infraestrutura, servidor era praticamente artesanato. O carinho e a demora do download de uma ISO do Red Hat ou do CentOS, depois o download dos pacotes, tudo guardado num HD físico e depois num poderoso pendrive caríssimo importado, só para conseguir instalar as máquinas.

Gestão de arquivos no Samba. Transferência via ProFTPD. HAProxy na frente. E aprender a montar um RAID 1 na unha.

Cliente sem internet? Era preciso prover internet via rádio. Configurar um ISP, com o poderosíssimo link dedicado de 10 Mbps da Telefônica, distribuir via rádio, subir as antenas, instalar os APs.

No suporte e no desenvolvimento, conhecer banco de dados não era opcional. Entender como os data blocks funcionam e como são escritos era obrigação. Só assim você aprendia a montar uma VPN entre dois servidores Linux para, dentro do túnel, sincronizar um PostgreSQL em master e slave, como se chamava na época. Usando um pacote adicional que ninguém sabia direito se era seguro. Ou se importava.

Depois chegou a nuvem pública e muita coisa simplificou, melhorou, facilitou. Entender redes ficou fácil. O trabalho que antes era braçal e operacional virou um clique de botão, mas ainda assim exigindo conhecimento novo, e talvez um prévio, para conseguir surfar na onda dos provedores.

Antes eram as VMwares que faziam sucesso. Depois vieram as máquinas virtuais elásticas da Amazon. Que salto. Que absurdo, ter uma máquina virtual dedicada para você com um clique.

Era uma revolução, e eu tive que aprender tudo isso. Não tinha Coursera, nem Alura, nem Udemy. Não tinha nada.

Era você, um terminal e alguns fóruns. Algumas salas no mIRC. Uns poucos contatos que você tinha por e-mail. Documentação vasta, impressa, emprestada entre amigos para que todo mundo pudesse aprender. Era tudo mais lento. A vida também era mais devagar, eu sinto isso.

E quando a gente achou que não precisava aprender mais nada, apareceu um troço chamado Docker, ali por 2013, 2014. Hype ou não, virou padrão, virou obrigação, virou mais uma coisa para destrinchar, enquanto todo o resto continuava evoluindo. Linguagens se adaptaram, mudaram, se transformaram para acomodar o novo.

Tudo isso, e mais um tanto que eu nem citei, faz parte do que eu me tornei. E conhecimento adquirido é adquirido. Uma mente que se abre para uma ideia nova nunca mais volta ao tamanho original.

Acho que é isso que me ajuda hoje, na profissão de agora. Conseguir compilar essa bagagem toda e interagir com uma IA sabendo o que pedir. Saber como uma coisa pode ser bem ou mal feita, um sistema, um software, uma aplicação, um binário, um artefato. Saber onde melhorar e, principalmente, identificar o que não está bom.

O mais importante nesse mundo novo é entender o end2end. Saber como um sistema funciona, do que ele precisa para desempenhar bem o papel dele, e como é o ciclo de vida inteiro. Porque eu já vivi isso. Já vi abandono, já vi retomada, já vi construção malfeita, e senti o quanto dói.

É isso que me ajuda na hora de escrever um prompt. De pedir para uma inteligência artificial, que não viveu o que eu vivi, construir algo que não seja um cavalo de Troia contra si mesmo. Ou que não saia por aí removendo e deletando o que não deveria.

O acúmulo me tornou uma pessoa mais criteriosa. Hoje eu não preciso ir tão fundo num bit ou num byte. Tenho 1 Gbps numa fibra, com 2 ms de resposta para um servidor no interior de São Paulo. Tenho 64 GB de RAM, CPU e GPU em tamanhos e velocidades impensáveis. Não preciso mais pensar em escassez de recurso. Eles estão aí. O difícil foi aprender a usar, e isso custou anos.

## E aqui começa a parte que eu não sei responder

Porque se eu parar por aqui, isso vira só mais um "na minha época era mais difícil", que é exatamente o post que eu não quero escrever.

Repara numa coisa. A história inteira que eu contei acima é uma história de abstrações subindo. O assembly virou C. O C virou linguagem gerenciada. O servidor físico virou VM. A VM virou container. O container virou serverless. E agora tem gente entregando produto em produção descrevendo o que quer em português.

Toda vez que uma camada nova subiu, aconteceram duas coisas ao mesmo tempo. A primeira é que quem sabia a camada de baixo foi quem consertou as coisas quando quebraram. Isso é fato, eu vi acontecer, várias vezes, e é por isso que eu defendo fundamento. A segunda coisa é que, em toda transição dessas, teve um sujeito mais velho garantindo que a molecada precisava saber a camada de baixo. E em boa parte das vezes, esse sujeito estava errado.

Ninguém hoje escreve o próprio alocador de memória. Ninguém aprende a configurar IRQ na mão. Ninguém precisa saber a geometria do disco. Aquilo tudo era obrigatório, e virou opcional, e depois virou curiosidade histórica. O conhecimento não sumiu, ele só desceu para um lugar onde quase ninguém mais precisa ir.

Então a pergunta honesta não é "fundamento importa?". É outra, e é bem mais desconfortável: **qual pedaço do que eu sei ainda sustenta peso, e qual pedaço é só apego ao esforço que eu paguei para aprender?**

E eu não consigo responder isso de dentro. Eu sou a pessoa menos confiável do mundo para julgar se a dor que eu passei valeu a pena, porque eu passei por ela. Talvez eu esteja fazendo o que o Glover fez: interpretando velho.

Tem um detalhe nessa camada nova que me faz coçar a cabeça e que eu ainda não fechei. Todas as abstrações anteriores tinham chão. O Docker esconde o kernel, mas o kernel continua lá, e você pode descer até ele. É determinístico. Se você tiver paciência e conhecimento, você chega no fundo e entende exatamente por que quebrou. A camada de IA não tem esse chão do mesmo jeito. Você recebe um artefato pronto e não existe um `strace` para o raciocínio que produziu aquilo. O caminho de depuração mudou de formato, e não só de altura.

Se isso for verdade, entender o end2end fica mais importante do que nunca, porque a única forma de auditar o que saiu é conhecer o que deveria ter saído. Se isso não for verdade, e as ferramentas ficarem boas o suficiente para se auditarem sozinhas, eu vou ser mais um cara falando de IRQ em 2026.

Tem ainda uma terceira coisa que me incomoda. Antigamente aprender era, em boa parte, armazenar. Você guardava porque a informação era cara e difícil de achar. Hoje a informação é gratuita, instantânea e infinita, então aprender virou outra coisa, virou critério. Saber escolher, saber desconfiar, saber que aquilo ali está errado antes de rodar.

Só que o meu critério nasceu justamente da fase de armazenar. Eu desconfio de uma query porque um dia eu derrubei um banco. Eu desconfio de um `rm -rf` porque eu já vi o estrago. A pergunta que eu não sei responder é se dá para construir critério sem passar pelo acúmulo. E, mais do que isso, se a molecada está construindo critério de um jeito diferente do meu, num formato que eu não reconheço porque não se parece com o meu caminho.

É por isso que eu não acho graça na dualidade "aprendo Claude Code ou aprendo sistema operacional primeiro". Ela parece uma pergunta de iniciante e não é. É a mesma pergunta que a indústria inteira está fazendo agora, sem resposta, com muito dinheiro apostado dos dois lados.

Eu tenho um palpite, não uma certeza. Meu palpite é que fundamento continua sendo o que separa quem opera de quem entende. Mas é palpite, e eu tenho um viés gigante nessa história.

Não vou fingir que sei. Certas coisas a gente precisa viver um pouco para ver como se resolvem lá na frente. O que eu queria mesmo era deixar a pergunta bem posta, porque eu acho que ela ainda está mal formulada em todo lugar que eu leio.

Se você está começando agora e chegou até aqui: primeiro, parabéns. Segundo, hidrate-se.

E saiba que, independente do caminho que escolher, aprendizado autodidata e laboratório pessoal em tecnologia não são opção. São obrigação. Isso aqui eu não tenho dúvida nenhuma, é a única coisa que sobreviveu intacta a todas as viradas que eu vivi.

No próximo post eu conto como montar um homelab para começar a aprender de verdade. Fica por aí.

E se você tem uma opinião sobre a pergunta lá de cima, principalmente se você está do outro lado dessa conta e começou a carreira já com IA, me procura. Eu quero muito ouvir.
