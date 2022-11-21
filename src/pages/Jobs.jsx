import { Link } from 'react-router-dom';
import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchJobs } from 'hooks/useFetchJobs';
import { useLocation } from 'react-router-dom';
// import { BsBookmark } from 'react-icons/all-files/fa/BsBookmark';

const Jobs = () => {
  const { jobs, error, isLoading } = useFetchJobs(0);
  const page = useLocation();
  return (
    <Section>
      <Container>
        <div className="flex justify-between">
          <ul>
            {jobs.map(({ id, name, title, address, location, pictures }) => (
              <li
                size={600}
                key={id}
                className="font-sans font-family:Proxima Nova py-6 px-6 mb-2 border rounded-lg shadow-slate-50 "
              >
                <Link to={`/jobs/${id}`} state={{ from: page }}>
                  <img src={`${pictures}`} alt="" />
                  <h3 className="cursor-pointer font-bold text-3xl text-[#3A4562] hover:text-violet-600">
                    {title}
                  </h3>
                  <p className="text-[#878D9D] text-lg">{name}</p>
                  <p className="text-[#878D9D] text-lg">{address}</p>
                  {/* <p className="text-[#878D9D] text-lg">{location}</p> */}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-5">
            {/* <BsBookmark size="40px" color={theme.colors.light} /> */}
            <p className="text-[#878D9D] text-lg">{jobs.createdAt}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Jobs;
