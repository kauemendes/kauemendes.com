const cvObj = {
    name: "Kauê Mendes de Freitas",
    description: "Developer, Enthusiast DevOps Culture and Agile Developer Evangelist",
    jobs: [
        {
            current: true,
            position: "DevOps Engineer - Since",
            companyName: "Aubay",
            companyLink: "https://www.aubay.com/index.php/language/en/home/",
            logoUrl: "/img/aubaylogo.png",
            initialDate: "2019-10-04",
            endDate: "",
            activities: [
                "Support multiple development teams in how to delivery their code with agile methodologies",
                "Creation of architecture and documentation standards for developers",
                "Improvements into Ops and Developers communication",
                "Standards for GIT SCM patterns",
                "Responsible for creating CI/CD standards for projects in .NETCore, React Frontend, Android and iOS Native and React Native Building App using Azure DevOps and AppCenter",
                "Monorepo standards patterns",
                "Kubernetes/AKS Support and Maintence",
                "Azure DevOps YAML Pipelines for Build and Deploy",
                "Using TypeScript/JavaScripts into projects for technological solutions creating Command Line Interface for DevOps Team and addons for Azure Devops Services",
                "Created Command Line Interface for interacting with Azure DevOps API"
            ],
            tagsTechCloud: [
                "Azure DevOps",
                "GIT SCM",
                "Kubernetes",
                "React",
                "React Native",
                "JS",
                "NodeJS",
                "DotNetCore",
                "Docker",
                "YAML"
            ]
        },
        {
            current: false,
            position: "Software Engineer",
            companyName: "Yara International",
            companyLink: "https://www.yara.com/crop-nutrition/digital-farming/",
            logoUrl: "https://www.yara.com/globalassets/knowledge-grows-vector.svg",
            initialDate: "2018-09-01",
            endDate: "2019-09-30",
            activities: [
                "Developing Agro Solutions for Professional and Small Farmers",
                "Development of solutions using Serverless Architecture",
                "Architectural stack development with Terraform, Kubernetes, Ambassador and Docker - Using the DevSecOPS culture",
                "Development in complete JS stack, NodeJS, ReactJS + Redux",
                "Application development for smallholders farmers using React-Native with best usability concepts",
                "GitOps implementation using Terraform",
                "Development of internal solutions using GraphQL",
                "Development of data analysis tool with OCR technology using PYTHON + RabbitMQ",
                "IRA and Trello for organizing tasks",
                "Confluence (documentation)",
                "Developer Community Manager",
                "CSD (Certified Scrum Developer) training"
            ],
            tagsTechCloud: [
                "GitHub",
                "CircleCI",
                "Kubernetes",
                "ReactJS",
                "React Native",
                "JS",
                "NodeJS",
                "Docker",
                "YAML",
                "Confluence",
                "GitOPS",
                "JIRA "
            ]
        },
        {
            current: false,
            position: "Backend Developer",
            companyName: "Empiricus Research",
            companyLink: "https://www.empiricus.com.br/",
            logoUrl: "/img/empiricuslogo.png",
            initialDate: "2018-03-01",
            endDate: "2018-08-31",
            activities: [
                "Development of impact systems in sales and for the area of Customer Services",
                "Development of CRUD White-Label system using Python / Flask",
                "Development of centralized StackStock query system, using different API vendors, centralizing the query in the same API",
                "Implementation of Celery for management of application tasks",
                "DevOps made easy using Docker and Docker Compose on all projects",
                "Deploy using Jenkins",
                "JIRA for the organization of tasks using agile methodologies",
                "AWS Provider management"
            ],
            tagsTechCloud: [
                "BitBucket",
                "Python",
                "Flask",
                "Shell Script",
                "CMS",
                "Docker",
                "Docker Compose",
                "JIRA",
                "Confluence"
            ]
        },
        {
            current: false,
            position: "Fullstack Developer",
            companyName: "Magma Lab",
            companyLink: "https://www.magmalab.com.br/",
            logoUrl: '/img/magmalogo.png',
            initialDate: "2017-05-01",
            endDate: "2018-02-28",
            activities: [
                "Development of digital products using agile methods and designing thinking.",
                "Responsible for building and maintain all services infrastructures using AWS Services and Google Clouding Computing",
                "Development of the Back-end using Python Flask, using TDD method.",
                "Working with 100% remote team from all over the world",
                "Development of an API for integration.",
                "Assist in the front-end development using Haxe Language and Priori framework",
                "Using Docker and ElasticBean Stalk for deployment",
                "AWS Cloud Provider management"
            ],
            tagsTechCloud: [
                "MEDT",
                "BitBucket",
                "Python",
                "Flask",
                "Shell Script",
                "CMS",
                "Docker",
                "Docker Compose",
                "Confluence"
            ]
        }
    ]
}

export default function handler(req, res) {
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
    res.status(200).json(cvObj);
  }