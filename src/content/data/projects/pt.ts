import { Project } from './index';

export const projects: Project[] = [
  {
    title: 'Azure DevOps - Variáveis de Pipeline',
    description: 'Uma poderosa extensão do Azure DevOps que fornece visibilidade completa das variáveis de pipeline, facilitando a depuração e monitoramento para equipes de desenvolvimento.',
    image_banner: '/images/projects/extension-devops-printvariables.png',
    id: 'azdevops-pipeline-variables',
    category: 'Ferramentas DevOps',
    technologies: ['TypeScript', 'Azure DevOps SDK', 'Node.js', 'HTML/CSS'],
    features: [
      'Exibir todas as variáveis de pipeline em formato estruturado',
      'Capacidades de filtro e busca',
      'Exportar variáveis para documentação',
      'Integração com a UI do Azure DevOps',
      'Suporte para estruturas de variáveis complexas'
    ],
    status: 'Publicado',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=kauemendes.azdevops-pipeline-variables',
    year: '2023',
    impact: '500+ instalações em equipes empresariais'
  },
  {
    title: 'Azure DevOps - Converter JSON para Variáveis',
    description: 'Simplifica o fluxo de trabalho DevOps convertendo automaticamente arquivos de configuração JSON em variáveis de pipeline do Azure DevOps, reduzindo erros de configuração manual.',
    image_banner: '/images/projects/extension-devops-jsontovariable.png',
    id: 'azdevops-json-to-variable',
    category: 'Ferramentas DevOps',
    technologies: ['TypeScript', 'Azure DevOps SDK', 'JSON Parser', 'React'],
    features: [
      'Conversão automatizada de JSON para variáveis',
      'Suporte a objetos aninhados com notação de ponto',
      'Processamento em lote para múltiplos arquivos',
      'Validação e tratamento de erros',
      'Prefixos personalizados e convenções de nomenclatura',
      'Modo de pré-visualização antes de aplicar mudanças'
    ],
    status: 'Publicado',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=kauemendes.azdevops-json-to-variable',
    year: '2023',
    impact: '1000+ downloads, reduzindo tempo de deploy em 40%'
  },
  {
    title: 'PinguimCast',
    description: 'Uma plataforma de podcast de tecnologia e cultura apresentando discussões sobre desenvolvimento de software, práticas DevOps e tendências da indústria com recursos interativos da comunidade.',
    image_banner: '/images/projects/pinguimcastlogo.png',
    id: 'pinguimcast',
    category: 'Mídia & Conteúdo',
    technologies: ['Produção de Podcast', 'Estratégia de Conteúdo', 'Gestão de Comunidade', 'Mídias Sociais'],
    features: [
      'Discussões semanais sobre tecnologia',
      'Entrevistas com especialistas da indústria',
      'Tópicos sobre DevOps e computação em nuvem',
      'Sessões de perguntas e respostas com a comunidade',
      'Aprofundamentos técnicos',
      'Orientação e dicas de carreira'
    ],
    status: 'Ativo',
    demo: 'https://pinguimcast.com',
    year: '2022-Presente',
    impact: 'Comunidade crescente de profissionais de tecnologia'
  }
];
