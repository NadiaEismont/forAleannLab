import { Link } from 'react-router-dom';
import { Section, Container, Loader } from 'components';
import { useFetchJob } from 'hooks/useFetchJob';
import { useLocation, useParams } from 'react-router-dom';
import GoogleMap from 'components/GoogleMap';
import { BsBookmark } from 'react-icons/bs';
import { BsFillShareFill } from 'react-icons/bs';

const DetailedJob = () => {
  const { jobId } = useParams();
  const { job, error, isLoading } = useFetchJob(jobId);
  const page = useLocation();

  console.log(job);

  return (
    <>
      <Container>
        {job && (
          <Section>
            <div className="flex">
              <Container className="w-3/5">
                <header className="border-b">
                  <div className="flex justify-between ">
                    <Link
                      to={'/'}
                      state={{ from: page }}
                      className="cursor-pointer text-[#3A4562] font-bold text-3xl "
                    >
                      Job Details
                    </Link>
                    <div className="flex items-baseline">
                      <BsBookmark className="text-2xl mx-4 text-[#3A4562]" />
                      <button
                        className="leading-7 font-normal text-lg mr-6 text-[#3A4562]"
                        type="button"
                      >
                        Save to my list
                      </button>
                      <BsFillShareFill className="text-2xl mx-4 text-[#3A4562]" />
                      <button
                        className="font-normal text-lg text-[#3A4562]"
                        type="button"
                      >
                        Share
                      </button>
                    </div>
                  </div>
                </header>
                <body>
                  <Container>
                    <button
                      type="button"
                      className="w-[127px] h-[58px] bg-[#2A3047] rounded-lg text-white font-semibold text-xs uppercase mt-10 mb-9  hover:text-violet-600"
                    >
                      Apply now
                    </button>
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
                        <img
                          src={`${e}?random=${Math.floor(
                            Math.random() * 100000,
                          )}`}
                          alt=""
                        />
                      ))}
                    </div>
                  </Container>
                </body>
                <button type="button">RETURN TO JOB BOARD</button>
              </Container>
              <div className="z-10 w={584} h={728} bg-[#2A3047] layout='fill' objectFit='cover'">
                <div className="relative -translate-x-2/4 bottom-6 bg-[#202336] rounded-full w-80 h-80 overflow-hidden z-0"></div>
                <h2>{job.name}</h2>
                <p>{job.address}</p>
                <p>{job.phone}</p>
                <p>{job.email}</p>
                <div>
                  <GoogleMap location={job.location} />
                </div>
              </div>
            </div>
          </Section>
        )}
      </Container>
    </>
  );
};

export default DetailedJob;
