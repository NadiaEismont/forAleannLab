import { Link } from 'react-router-dom';
import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchJobs } from 'hooks/useFetchJobs';
import { useLocation } from 'react-router-dom';

const Jobs = () => {
  const { jobs, error, isLoading } = useFetchJobs(0);
  const page = useLocation();
  return (
    <Section>
      <Container>
        <div>
          <ul>
            {jobs.map(
              ({ id, name, title, address, location, pictures, createdAt }) => (
                <li size={600} key={id}>
                  <Link to={`/jobs/${id}`} state={{ from: page }}>
                    <img src={`${pictures}`} alt="" />
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
