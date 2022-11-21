import { Link } from 'react-router-dom';
import { Section, Container, Loader } from 'components';
import { useFetchJob } from 'hooks/useFetchJob';
import { useLocation, useParams } from 'react-router-dom';
import GoogleMap from 'components/GoogleMap';

const DetailedJob = () => {
  const { jobId } = useParams();
  const { job, error, isLoading } = useFetchJob(jobId);
  const page = useLocation();

  console.log(job);

  return (
    <>
      {job && (
        <Section>
          <Container>
            <header>
              <Link to={'/'} state={{ from: page }}>
                Job Details
              </Link>
              <div>
                <button type="button">Save to my list</button>
                <button type="button">Share</button>
              </div>
            </header>
            <body>
              <Container>
                <button type="button">Apply now</button>
                <h1>{job.title}</h1>
                <h2>{job.salary} Brutto, per year</h2>
                <p>{job.createdAt}</p>
                <p>{job.description}</p>
                <button type="button">Apply now</button>
              </Container>
              <Container>
                <h2>Additional info</h2>
                <p>Employment type</p>
                {job.employment_type.map(e => (
                  <div>{e}</div>
                ))}
                <p>Benefits</p>
                {job.benefits.map(e => (
                  <div>{e}</div>
                ))}
              </Container>
              <Container>
                <h2>Attached images</h2>
                <div>
                  {job.pictures.map(e => (
                    <img src={e} alt="" />
                  ))}
                </div>
              </Container>
            </body>
            <button type="button">RETURN TO JOB BOARD</button>
          </Container>
          <Container>
            <h2>{job.name}</h2>
            <p>{job.address}</p>
            <p>{job.phone}</p>
            <p>{job.email}</p>
            <div>
              <GoogleMap location={job.location} />
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};

export default DetailedJob;
