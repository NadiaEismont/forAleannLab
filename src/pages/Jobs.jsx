import { Link } from 'react-router-dom';
import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchJobs } from 'hooks/useFetchJobs';
import { useLocation } from 'react-router-dom';
import { BsBookmark } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import timeSince from 'utils';

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
                {/* grid-template-columns: 2fr 1fr 1fr; */}

                {/* <div className="grig grid-columns-2 gap-4"> */}
                <div className="mx-auto flex flex-cols-4 flex-row justify-between">
                  <div className="shrink-0">
                    <img
                      className="rounded-full w-20 h-20"
                      src={`${pictures[0]}?random=${Math.floor(
                        Math.random() * 100000,
                      )}`}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Link to={`/jobs/${id}`} state={{ from: page }}>
                      <h3 className="cursor-pointer font-bold text-3xl text-[#3A4562] hover:text-violet-600">
                        {title}
                      </h3>
                    </Link>
                    <p className="text-[#878D9D] text-lg">{name}</p>
                    <MdLocationPin />
                    <p className="text-[#878D9D] text-lg">{address}</p>
                    {/* <p className="text-[#878D9D] text-lg">{location}</p> */}
                  </div>
                  <div className="w-20">star</div>
                  <div className="flex flex-col justify-between mx-auto w-34 shrink-0">
                    <div className="justify-self-end  ">
                      <BsBookmark />
                    </div>
                    <div className="">
                      <p className="text-[#878D9D] text-lg justify-between">
                        Posted &nbsp;
                        {timeSince(Date.parse(createdAt))} ago
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </Container>
    </Section>
  );
};

export default Jobs;
