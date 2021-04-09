import React from 'react'
import {Container, Jumbotron } from 'react-bootstrap'
import {SubTitle, SmallTitle, RoleTitle} from '../components'

const ActivityList = (props) => (<p><span>{props.children}</span></p>)
const FooterList = (props) => (<RoleTitle><span>{props.children}</span></RoleTitle>)

const JobSection: React.FC = (props) => {
  const job = props.job;
  const className = props.className;
  const firstElem = props.index === 0 ? true : false ;
  return (
    <Jumbotron fluid className={className}>
      <Container>
        {
          firstElem && (<div><SubTitle> {props.name} </SubTitle> <p>{props.description}</p> <hr /></div>)
        }
        {
          ! firstElem && (<div><SubTitle> Past Activity </SubTitle> </div>)
        }
        <RoleTitle>{job.current ? ('Current Working ') : ('')}<a href={job.companyLink}>@{job.companyName}</a></RoleTitle>
        <p><img src={job.logoUrl} width="90px" /></p>
        <p>
          <span> - From {job.initialDate}</span>
          <span> - To {job.endDate}</span>
        </p>
        <hr />
        <SmallTitle>Main activities</SmallTitle>
          { job.activities.map((act, index) => {
            return (<ActivityList key={`act-${index}`}>- {act}</ActivityList>)
          })}
        <FooterList>
          { job.tagsTechCloud.map(e => {
            return (` | ${e}`)
          })}
        </FooterList>
      </Container>
    </Jumbotron>
  )
}


const Cv: React.FC = ({cvData}) => {
  if (!cvData) {
    return (
      <>
        <Container>
          <SubTitle>Sorry, API not Loading...</SubTitle>
        </Container>
      </>
    )
  }
  return (
    <Container fluid>
      { cvData.jobs.map((jobVal, index) => {
        if (index % 2 == 0) {
          return (<JobSection job={jobVal} name={cvData.name} desc={cvData.description} index={index} key={`job-${index}`}></JobSection>)
        }
        return (<JobSection job={jobVal} className="section1" name={cvData.name} desc={cvData.description} index={index} key={`job-${index}`}></JobSection>)
      })}
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
    revalidate: 900
  }
}

export default Cv
