import { Link } from 'react-router-dom';
import { Section, Container, CountryInfo, Loader } from 'components';
import { transformJobsData } from 'helpers/transformJobsData';
import { useFetchJobs } from 'helpers/useFetchJobs';
import { useLocation } from 'react-router-dom';

const Jobs = () => {
  const { jobs, error, isLoading } = useFetchJobs();
  const page = useLocation();
  return (
    <Section>
      <Container>
        <h2>Jobs list</h2>
        <div>
          <ul>
            {jobs.map(
              ({ id, name, title, address, location, pictures, createdAt }) => (
                <li size={600} key={id}>
                  <Link to={`/jobs/${id}`} state={{ from: page }}>
                    <img src={`${pictures[0]}`} alt="" />
                    <h3>{title}</h3>
                    <p>{name}</p>
                    <p>{address}</p>
                    {/* <p>{location}</p> */}
                    <div>
                      <p>{createdAt}</p>
                    </div>
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default Jobs;
