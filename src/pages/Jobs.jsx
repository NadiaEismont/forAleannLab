import { Link } from 'react-router-dom';
import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchJobs } from 'hooks/useFetchJobs';
import { useLocation } from 'react-router-dom';
import { BsBookmark } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';

const Jobs = () => {
  const { jobs, error, isLoading } = useFetchJobs(0);
  const page = useLocation();
  return (
    <Section>
      <Container>
        {/* <div className="flex justify-between"> */}
        <ul>
          {jobs.map(
            ({ id, name, title, address, location, pictures, createdAt }) => (
              <li
                size={600}
                key={id}
                className="font-sans font-family:Proxima Nova py-6 px-6 mb-2 border rounded-lg shadow-slate-50 "
              >
                <Link to={`/jobs/${id}`} state={{ from: page }}>
                  {/* <div className="grig grid-columns-2 gap-4"> */}
                  <div className="mx-auto grid grid-cols-1 grid-columns-2">
                    <div className="p-0 col-start-1 row-start-1">
                      <img src={`${pictures[0]}`} alt="" />
                      <h3 className="cursor-pointer font-bold text-3xl text-[#3A4562] hover:text-violet-600">
                        {title}
                      </h3>
                      <p className="text-[#878D9D] text-lg">{name}</p>
                      {/* <TiLocation /> */}
                      <p className="text-[#878D9D] text-lg">{address}</p>
                      {/* <p className="text-[#878D9D] text-lg">{location}</p> */}
                    </div>
                    <div className="mt-0 col-start-2 row-start-1 row-span-2">
                      <BsBookmark />
                    </div>
                    <div className="mt-0 col-start-2 grid-columns-2  row-span-2">
                      <p className="text-[#878D9D] text-lg justify-between">
                        {createdAt}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ),
          )}
        </ul>
        {/* </div> */}
      </Container>
    </Section>
  );
};

export default Jobs;
