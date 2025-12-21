import { Project } from './index';

export const projects: Project[] = [
  {
    title: 'Azure DevOps - Pipeline Variables',
    description: 'A powerful Azure DevOps extension that provides comprehensive visibility into pipeline variables, making debugging and monitoring easier for development teams.',
    image_banner: '/images/projects/extension-devops-printvariables.png',
    id: 'azdevops-pipeline-variables',
    category: 'DevOps Tools',
    technologies: ['TypeScript', 'Azure DevOps SDK', 'Node.js', 'HTML/CSS'],
    features: [
      'Display all pipeline variables in a structured format',
      'Filter and search capabilities',
      'Export variables for documentation',
      'Integration with Azure DevOps UI',
      'Support for complex variable structures'
    ],
    status: 'Published',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=kauemendes.azdevops-pipeline-variables',
    year: '2023',
    impact: '500+ installations across enterprise teams'
  },
  {
    title: 'Azure DevOps - Convert JSON to Variables',
    description: 'Streamlines the DevOps workflow by automatically converting JSON configuration files into Azure DevOps pipeline variables, reducing manual configuration errors.',
    image_banner: '/images/projects/extension-devops-jsontovariable.png',
    id: 'azdevops-json-to-variable',
    category: 'DevOps Tools',
    technologies: ['TypeScript', 'Azure DevOps SDK', 'JSON Parser', 'React'],
    features: [
      'Automated JSON to variable conversion',
      'Nested object support with dot notation',
      'Batch processing for multiple files',
      'Validation and error handling',
      'Custom prefix and naming conventions',
      'Preview mode before applying changes'
    ],
    status: 'Published',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=kauemendes.azdevops-json-to-variable',
    year: '2023',
    impact: '1000+ downloads, reducing deployment time by 40%'
  },
  {
    title: 'PinguimCast',
    description: 'A technology and culture podcast platform featuring discussions on software development, DevOps practices, and industry trends with interactive community features.',
    image_banner: '/images/projects/pinguimcastlogo.png',
    id: 'pinguimcast',
    category: 'Media & Content',
    technologies: ['Podcast Production', 'Content Strategy', 'Community Management', 'Social Media'],
    features: [
      'Weekly technology discussions',
      'Industry expert interviews',
      'DevOps and cloud computing topics',
      'Community Q&A sessions',
      'Technical deep-dives',
      'Career guidance and tips'
    ],
    status: 'Active',
    demo: 'https://pinguimcast.com',
    year: '2022-Present',
    impact: 'Growing community of tech professionals'
  }
];
