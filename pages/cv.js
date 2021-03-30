import {Container, Jumbotron } from 'react-bootstrap'
import {SubTitle, SmallTitle, RoleTitle} from '../components'
import moment  from 'moment';

function Cv({cvData}) {
    if (!cvData) {
        return (
            <>
                <Container>
                    <SubTitle>Sorry, API not Loading...</SubTitle>
                </Container>
            </>
        )
    }
    const aubayInitialDate = moment(cvData?.jobs[0]?.initialDate, 'YYYY-MM-DD')
    const yaraInitialDate  = moment(cvData?.jobs[1]?.initialDate, 'YYYY-MM-DD')
    const yaraEndDate      = moment(cvData?.jobs[1]?.endDate,     'YYYY-MM-DD')
    return (
        <Container fluid>
            <Jumbotron fluid className="section1">
                <Container>
                    <SubTitle>{cvData.name}</SubTitle>
                    <p>{cvData.description}</p>
                    <hr />
                    <RoleTitle>Current Working <a href={cvData.jobs[0].companyLink}>@{cvData.jobs[0].companyName}</a></RoleTitle>
                    <p><img src={cvData.jobs[0].logoUrl} width="90px" height="90px" /></p>
                    <p>
                        <span> - {cvData.jobs[0].position}</span>
                        <span> - {aubayInitialDate.format('MMMM of YYYY')}</span>
                    </p>
                    <hr />
                    <SmallTitle>Main activities</SmallTitle>
                    { cvData.jobs[0].activities.forEach(e => {
                        return (<p><span>- {e}</span></p>)
                    })}
                    <p><span> - Support multiple development teams in how to delivery their code with agile methodologies</span></p>
                    <p><span> - Creation of architecture and documentation standards for developers</span></p>
                    <p><span> - Improvements into Ops and Developers communication</span></p>
                    <p><span> - Standards for GIT SCM patterns</span></p>
                    <p>
                        <span> - Responsible for creating CI/CD standards for projects in .NETCore, React Frontend, Android 
                        and iOS Native and React Native Building App using Azure DevOps and AppCenter.</span>
                    </p>
                    <p><span> - Monorepo standards patterns</span></p>
                    <p><span> - Kubernetes/AKS Support and Maintence</span></p>
                    <p><span> - Azure DevOps YAML Pipelines for Build and Deploy</span></p>
                    <p><span> - Using TypeScript/JavaScripts into projects for technological 
                        solutions creating Command Line Interface for 
                        DevOps Team and addons for Azure Devops Services</span></p>
                    <p><span> - Created Command Line Interface for interacting with Azure DevOps API</span></p>
                    <RoleTitle><span> Azure DevOps | GIT SCM | Kubernetes | React | React Native | JS | NodeJS | DotNetCore | Docker | YAML</span></RoleTitle>
                </Container>
            </Jumbotron>
            <Jumbotron fluid>
                <Container>
                    <SubTitle>Past Activities</SubTitle>
                    <RoleTitle>Software Engineer <a href="https://www.yara.com/crop-nutrition/digital-farming//">@Yara International</a></RoleTitle>
                    <p><img src="https://www.yara.com/globalassets/knowledge-grows-vector.svg" width="100px" height="100px" /></p>
                    <p>
                        <span> - From {yaraInitialDate.format('MMMM of YYYY')}</span>
                        <span> - to {yaraEndDate.format('MMMM of YYYY')}</span>
                    </p>
                    <hr />
                    <SmallTitle>Main activities</SmallTitle>
                    <p><span> - Developing Agro Solutions for Professional and Small Farmers.</span></p>
                    <p><span> - Development of solutions using Serverless Architecture.</span></p>
                    <p><span> - Architectural stack development with Terraform, Kubernetes, Ambassador and Docker - Using the DevSecOPS culture.</span></p>
                    <p><span> - Development in complete JS stack, NodeJS, ReactJS + Redux.</span></p>
                    <p><span> - Application development for smallholders farmers using React-Native with best usability concepts.</span></p>
                    <p><span> - GitOps implementation using Terraform.</span></p>
                    <p><span> - Development of internal solutions using GraphQL.</span></p>
                    <p><span> - Development of data analysis tool with OCR technology using PYTHON + RabbitMQ.</span></p>
                    <p><span> - JIRA and Trello for organizing tasks.</span></p>
                    <p><span> - Confluence (documentation).</span></p>
                    <p><span> - Developer Community Manager.</span></p>
                    <p><span> - CSD (Certified Scrum Developer) training.</span></p>
                    <RoleTitle><span> GitHub | CircleCI | Kubernetes | React | React Native | JS | NodeJS | Docker | YAML | JIRA | Confluence | GitOps</span></RoleTitle>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="section1">
                <Container>
                    <RoleTitle>Backend Developer <a href="https://www.empiricus.com.br/">@Empriricus Research</a></RoleTitle>
                    <p>
                        <svg viewBox="0 0 23 40" xmlns="http://www.w3.org/2000/svg" className="logo"><g data-v-4c48fd04="" fill="none" fillRule="evenodd"><path data-v-4c48fd04="" d="M22.041 36.51c-.903-.128-1.81-.3-2.725-.512-.264-.064-.56-.512-.643-.995l-.004-.02a37.567 37.567 0 01-2.478-.228c-.396-.056-.795-.623-.871-1.267a65.472 65.472 0 01-.484-6.789c-.467.108-.935.212-1.402.304.076 3.145.4 6.282.97 9.39.185 1.016-.183 1.619-.862 1.335a56.452 56.452 0 01-4.512-2.046c.252 1.16.556 2.306.907 3.445.164.535.092.839-.164.839-.127 0-.3-.076-.511-.232a106.558 106.558 0 01-6.753-5.358c-.68-.592-1.343-1.339-1.455-1.655a17.58 17.58 0 01-.831-8.787c.052-.328.611-.919 1.243-1.355a73.79 73.79 0 003.08-2.181 35.64 35.64 0 01.328-1.707c.116-.515.836-1.418 1.595-2.042a157.806 157.806 0 005.215-4.4c.223-.794.471-1.59.735-2.377.204-.607.915-1.622 1.57-2.286A323.554 323.554 0 0020.89.482c.688-.732.963-.62.628.267a70.664 70.664 0 00-3.489 12.907c.971-.727 1.95-1.49 2.937-2.281.448-.36.684 0 .548.819a80.335 80.335 0 00-.911 7.688c.203-.116.407-.232.615-.348.28-.163.468.18.432.764a71.36 71.36 0 00.703 15.22c.084.588-.048 1.031-.312.991" fill="#B81334" className="st0 alt"></path><path data-v-4c48fd04="" d="M8.954 18.056c.108-.5.004-.763-.24-.763-.155 0-.367.104-.619.315a91.953 91.953 0 01-3.544 2.79 31.89 31.89 0 00.367 12.211c.116.516.8 1.28 1.503 1.687.871.491 1.754.95 2.613 1.386a42.068 42.068 0 01-.08-17.626m5.527-8.332a171.69 171.69 0 01-2.793 2.526A49.201 49.201 0 009.86 26.368c.008.631.448 1.115.955 1.055.872-.108 1.75-.248 2.622-.42a60.2 60.2 0 011.982-16.84c.268-.998-.14-1.182-.94-.439m1.947 5.111c-.436.32-.867 1.087-.96 1.726a64.703 64.703 0 00-.63 10.134c.415-.1.839-.203 1.254-.315.512-.132.92-1.007.931-1.938a70.905 70.905 0 011.003-10.79c-.527.408-1.067.804-1.598 1.183m3.82 20.204a34.59 34.59 0 01-1.574-.056 60.74 60.74 0 01-.84-12.791c.02-.492.264-.995.536-1.135.74-.368 1.486-.755 2.234-1.175-.32 4.556-.26 9.127.187 13.674.08.828-.155 1.495-.543 1.483" fill="#921F26" className="st1 alt"></path></g></svg>
                    </p>
                    <p>
                        <span> - From March 2018</span>
                        <span> - to August 2019</span>
                    </p>
                    <hr />
                    <SmallTitle>Main activities</SmallTitle>
                    <p><span> - Development of impact systems in sales and for the area of Customer Services.</span></p>
                    <p><span> - Development of CRUD White-Label system using Python / Flask.</span></p>
                    <p><span> - Development of centralized StackStock query system, using different API vendors, centralizing the query in the same API.</span></p>
                    <p><span> - Implementation of Celery for management of application tasks.</span></p>
                    <p><span> - DevOps made easy using Docker and Docker Compose on all projects.</span></p>
                    <p><span> - Deploy using Jenkins.</span></p>
                    <p><span> - JIRA for the organization of tasks using agile methodologies.</span></p>
                    <p><span> - AWS Provider management.</span></p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid>
                <Container>
                    <RoleTitle>Fullstack Developer <a href="https://www.magmalab.com.br/">@Magma Lab</a></RoleTitle>
                    <p>
                        <img src="/img/magmalogo.png" width="90px" />
                    </p>
                    <p>
                        <span> - From May 2017</span>
                        <span> - to February 2018</span>
                    </p>
                    <hr />
                    <SmallTitle>Main activities</SmallTitle>
                    <p><span> - Development of digital products using agile methods and designing thinking.</span></p>
                    <p><span> - Responsible for building and maintain all services infrastructures using AWS Services and Google Clouding Computing.</span></p>
                    <p><span> - Development of the Back-end using Python Flask, using TDD method.</span></p>
                    <p><span> - Working with 100% remote team from all over the world.</span></p>
                    <p><span> - Development of an API for integration.</span></p>
                    <p><span> - Assist in the front-end development using Haxe Language and Priori framework.</span></p>
                    <p><span> - Using Docker and ElasticBean Stalk for deployment.</span></p>
                    <p><span> - AWS Provider management.</span></p>
                </Container>
            </Jumbotron>
        </Container>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`${process.env.REACT_APP_API_URI}/api/cv`)
    const cvData = await res.json()
  
    return {
        props: {
            cvData
        },
        revalidate: 1
    }
  }

export default Cv