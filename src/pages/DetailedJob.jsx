import { Link } from 'react-router-dom';
import { Section, Container, Loader } from 'components';
import { useFetchJob } from 'hooks/useFetchJob';
import { useLocation, useParams } from 'react-router-dom';
import GoogleMap from 'components/GoogleMap';
import { BsBookmark } from 'react-icons/bs';
import { BsFillShareFill } from 'react-icons/bs';
import timeSince from 'utils';

const DetailedJob = () => {
  const { jobId } = useParams();
  const { job, error, isLoading } = useFetchJob(jobId);
  const page = useLocation();

  console.log(job);

  return (
    <>
      {job && (
        <Section className="max-w-7xl m-auto">
          <div className="flex">
            <div className="w-3/5 mr-24">
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
                <div className="text-[#3A4562]">
                  <button
                    type="button"
                    className="w-[127px] h-[58px] bg-[#2A3047] rounded-lg text-white font-semibold text-xs uppercase mt-10 mb-9  hover:text-violet-600"
                  >
                    Apply now
                  </button>
                  <div className="flex justify-between">
                    <h1 className="w-[501] h-auto font-bold text-2xl mb-2 mr-14 ">
                      {job.title}
                    </h1>
                    <p className="font-bold text-2xl min-w-[161px]">
                      {job.salary}
                      <br />
                      <span className="font-normal text-lg">
                        Brutto, per year
                      </span>
                    </p>
                  </div>
                  <p className="text-slate-400">
                    Posted &nbsp;
                    {timeSince(Date.parse(job.createdAt))} ago
                  </p>
                  <p>{job.description}</p>
                  <button
                    type="button"
                    className="w-[127px] h-[58px] bg-[#2A3047] rounded-lg text-white font-semibold text-xs uppercase mt-10 mb-9  hover:text-violet-600"
                  >
                    Apply now
                  </button>
                </div>
                <div className="text-[#3A4562]">
                  <h2 className="font-bold text-3xl">Additional info</h2>
                  <p className="text-lg font-normal">Employment type</p>
                  {job.employment_type.map(e => (
                    <ul>
                      <li className="w-[222px] h-[49px] border-2 border-[#55699e/30] rounded-lg">
                        {e}
                      </li>
                    </ul>
                  ))}
                  <p className="text-lg font-normal">Benefits</p>
                  {job.benefits.map(e => (
                    <div>{e}</div>
                  ))}
                </div>
                <div>
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
                </div>
              </body>
              <button type="button">RETURN TO JOB BOARD</button>
            </div>
            <div className="flex flex-col justify-between relative z-30 w-[402px] max-h-[436px] bg-[#2A3047] overflow-hidden  text-[#E8EBF3]">
              <div
                objectFit="cover"
                layout="fill"
                className="absolute -translate-x-1/4  bg-[#202336] rounded-full w-80 h-80  -z-10"
              ></div>
              <div className="px-16 pt-8 pb-4">
                <h2 className="z-10 font-bold text-xl">{job.name}</h2>
                <p className="z-10 font-normal text-lg">{job.address}</p>
                <p className="z-10 font-normal text-lg">{job.phone}</p>
                <p className="z-10 font-normal text-lg">{job.email}</p>
              </div>
              <div className="flex-none">
                <GoogleMap location={job.location} />
              </div>
            </div>
          </div>
        </Section>
      )}
    </>
  );
};

export default DetailedJob;
