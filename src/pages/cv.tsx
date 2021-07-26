import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import {SubTitle, SmallTitle, RoleTitle, Container, Row, Col, Main} from '../components'
import { cvJson } from './api/cv'

const ActivityList = (props) => (<p><span>{props.children}</span></p>)
const FooterList = (props) => (<RoleTitle><span>{props.children}</span></RoleTitle>)

interface IJobActivityProps {
  current: boolean;
  companyLink: string;
  companyName: string;
  logoUrl: string;
  initialDate: string;
  endDate: string;
  activities: string[];
  tagsTechCloud: string[];
}
interface IJobsProps {
  job?: IJobActivityProps
  name: string;
  desc: string;
  className?: string;
  index?: number;
}

const JobSection: React.FC<IJobsProps> = (props) => {
  const job = props.job;
  const className = props.className;
  const firstElem = props.index === 0 ? true : false ;
  return (
    <Row className={className}>
      <Main>
        {
          firstElem && (<div><SubTitle> {props.name} </SubTitle> <p>{props.desc}</p> <hr /></div>)
        }
        {
          ! firstElem && (<div><SubTitle> Past Activity </SubTitle> </div>)
        }
        <RoleTitle>{job.current ? ('Current Working ') : ('')}<a href={job.companyLink}>@{job.companyName}</a></RoleTitle>
        <p><img src={job.logoUrl} width="90px" /></p>
        <p>
          <span> - From {job.initialDate}</span>
          { job.endDate && (<span> - To {job.endDate}</span>)}
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
      </Main>
    </Row>
  )
}

const Cv: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({cvData}) => {
  if (!cvData) {
    return (
      <>
        <Container>
          <SubTitle>Sorry, API not Loading... Please contact me</SubTitle>
        </Container>
      </>
    )
  }
  return (
    <Container>
      <Col>
        { cvData.jobs.map((jobVal, index) => {
          if (index % 2 == 0) {
            return (<JobSection job={jobVal} name={cvData.name} desc={cvData.description} index={index} key={`job-${index}`}></JobSection>)
          }
          return (<JobSection job={jobVal} className="section1" name={cvData.name} desc={cvData.description} index={index} key={`job-${index}`}></JobSection>)
        })}
      </Col>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      cvData: cvJson
    }
  }
}

export default Cv
