---
post: "why-i-started-using-powershell-instead-of-bash"
title: "5. Por que Comecei a Usar PowerShell ao Invés de Bash?"
description: Escolher entre PowerShell Core e Bash para scripts depende de vários fatores, incluindo as necessidades específicas do seu ambiente, as plataformas com que você trabalha
image_banner: "/images/blog/powershell-vs-bash.png"
image_post: "/images/blog/powershell-vs-bash@2x.png"
date: "2024-08-20"
---
# Por que Comecei a Usar PowerShell ao Invés de Bash?

<img src="https://repository-images.githubusercontent.com/301529364/80afd1cf-a018-4d3f-a6bf-1cf2e1e35dfc" />

Escolher entre PowerShell Core e Bash para scripts depende de vários fatores, incluindo as necessidades específicas do seu ambiente, as plataformas com que você trabalha e sua familiaridade com cada shell. Desde que comecei a trabalhar em um ambiente com uma mistura de diferentes sistemas operacionais, automatizar tarefas e fazer essa configuração funcionar de forma idêntica em diferentes plataformas sempre foi o maior desafio.

No início, eu tinha que desenvolver scripts que produziam o mesmo resultado usando pelo menos duas tecnologias diferentes: Bash e PowerShell. Dependendo de qual máquina era o alvo, eu tinha que usar um ou outro.

Essa abordagem tornou-se muito custosa à medida que esses scripts cresceram em tamanho, complexidade e quantidade. Apesar de ser um grande fã de ambientes Linux/Unix e ter sido criado neles, e apesar do meu carinho pelo Bash, enfrentamos a difícil decisão de começar a usar PowerShell. Dado que é a ferramenta de scripting nativa para servidores Windows e pode ser instalada perfeitamente em distribuições Linux, ela ofereceu a vantagem de operar em uma plataforma consolidada com capacidades orientadas a objetos. Isso provou ser extremamente útil no futuro ao processar respostas e lidar com manipulações e transformações complexas de JSON e YAML.


### Aqui estão algumas razões pelas quais você pode preferir usar PowerShell Core ao invés de Bash para scripts:

1. **Compatibilidade Multiplataforma**

    O PowerShell Core é multiplataforma, rodando em Windows, Linux e macOS, o que o torna versátil se você precisa escrever scripts que funcionam em diferentes sistemas operacionais. O Bash é tradicionalmente associado a sistemas Unix-like (Linux e macOS) e, embora possa ser instalado no Windows (via WSL ou Git Bash), não é tão nativamente integrado em ambientes Windows quanto o PowerShell.

2. **Pipeline Orientado a Objetos**

    Diferente do Bash, que trabalha principalmente com streams baseados em texto, o PowerShell Core trabalha com objetos. Quando você passa dados entre comandos no PowerShell, você está passando objetos completos, não apenas strings de texto. Isso torna mais fácil manipular dados, consultar propriedades e interagir com APIs do sistema, especialmente em tarefas de automação complexas.

3. **Integração com .NET**

    O PowerShell Core é construído em .NET, o que significa que você pode aproveitar todo o poder das bibliotecas .NET em seus scripts. Isso é particularmente útil se você está trabalhando em ambientes onde o .NET é comumente usado ou se você precisa realizar tarefas que são bem suportadas pelo ecossistema .NET.

4. **Consistência na Sintaxe de Scripts**

    O PowerShell tem uma sintaxe mais consistente comparada ao Bash. Seus cmdlets (comandos) são projetados para seguir uma convenção de nomenclatura Verbo-Substantivo, tornando-os mais previsíveis e fáceis de aprender. Por exemplo, Get-Process é imediatamente reconhecível como um comando para recuperar processos, enquanto comandos Bash são frequentemente mais curtos e crípticos.

5. **Capacidades Avançadas de Script**

    O PowerShell Core suporta recursos avançados como tratamento estruturado de erros (try-catch-finally), classes e módulos, permitindo um desenvolvimento de scripts mais complexo e robusto. Embora o Bash tenha tratamento de erros e possa ser usado para scripts complexos, a linguagem é menos estruturada, e tais tarefas podem ser mais trabalhosas de implementar.

6. **Tarefas Administrativas no Windows**

    Se seus scripts envolvem gerenciar ambientes Windows, o PowerShell Core é frequentemente a melhor escolha devido à sua profunda integração com tarefas de gerenciamento Windows. Tarefas como gerenciar o registro, serviços, Active Directory e outros componentes específicos do Windows são diretas com o PowerShell.

7. **Suporte da Comunidade e Indústria**

    O PowerShell tem forte suporte da Microsoft e é amplamente usado em ambientes empresariais, especialmente onde servidores Windows são prevalentes. A comunidade em torno do PowerShell é grande, e há recursos extensos, módulos e suporte para automatizar uma ampla gama de tarefas.

8. **Consistência Entre Ambientes**

    Usar PowerShell Core em diferentes sistemas operacionais fornece consistência. Se você está automatizando tarefas que envolvem múltiplas plataformas (por exemplo, Windows e Linux), usar PowerShell Core permite manter uma única base de código, reduzindo complexidade e aumentando a manutenibilidade.

9. **Facilidade de Aprendizado para Novos Usuários**

    Para usuários vindos de um background Windows ou para aqueles que são novos em scripting, a estrutura verbo-substantivo do PowerShell e sua abordagem orientada a objetos podem ser mais fáceis de aprender e entender comparada à natureza mais pesada em sintaxe e baseada em texto do Bash.

## Exemplo

Claro, é uma questão de preferência, mas dar uma chance ao PowerShell para ser testado e tentar entender como as coisas funcionam por baixo dos panos pode ser muito satisfatório. Como entusiasta de tecnologia, aprender uma nova linguagem pode ajudá-lo a notar detalhes que você poderia ter ignorado antes.

No Bash, se você quer obter a propriedade "name" de um objeto JSON sem usar ferramentas CLI externas como jq, você pode acabar com uma linha de comando assim:

```bash
curl -s 'https://api.github.com/users/lambda' | grep '"name"' | awk -F',' '{print $1}' | cut -d':' -f2 | sed 's/'\"'/''/g' | xargs
```

Embora no PowerShell, seria tão simples quanto isso:

```pwsh
(Invoke-RestMethod -uri https://api.github.com/users/lambda).name
```

## Conclusão

Enquanto o Bash é uma linguagem de scripting poderosa e amplamente usada, particularmente em ambientes Unix-like, o **PowerShell Core** oferece vantagens significativas em termos de suporte multiplataforma, scripting orientado a objetos, integração com .NET e consistência entre diferentes ambientes. A escolha entre os dois deve ser baseada em seus casos de uso específicos, ambiente e as tarefas que você precisa realizar. Se seu trabalho envolve muitos sistemas baseados em Windows ou você requer um ambiente de scripting consistente em diferentes plataformas, o PowerShell Core pode ser a melhor escolha.
