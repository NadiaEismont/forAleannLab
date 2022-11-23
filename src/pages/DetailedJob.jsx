import { Link } from 'react-router-dom';
import { Section } from 'components';
import { useFetchJob } from 'hooks/useFetchJob';
import { useLocation, useParams } from 'react-router-dom';
import GoogleMap from 'components/GoogleMap';
import { BsBookmark } from 'react-icons/bs';
import { BsFillShareFill } from 'react-icons/bs';
import timeSince from 'utils/utils';
import { MdLocationPin, MdKeyboardArrowLeft } from 'react-icons/md';

const DetailedJob = ({ savedJobs, jobs, onJobSave, onJobDelete }) => {
  const { jobId } = useParams();
  const { job } = useFetchJob(jobId);
  const page = useLocation();

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
                    <BsBookmark className="text-2xl mx-4 text-[#3A4562] hover:scale-125 " />
                    <button
                      className="leading-7 font-normal text-lg mr-6 text-[#3A4562]"
                      type="button"
                    >
                      Save to my list
                    </button>
                    {/* <button
                      className="self-end"
                      onClick={
                        savedJobs.some(job => job.id === id)
                          ? () => onJobDelete(job.id)
                          : () =>
                              onJobSave({
                                id,
                                title,
                                address,
                                pictures,
                                createdAt,
                              })
                      }
                    >
                      {savedJobs.some(job => job.id === id) ? (
                        <BsBookmarkFill />
                      ) : (
                        <BsBookmark />
                      )}
                    </button> */}

                    <BsFillShareFill className="text-2xl mx-4 text-[#3A4562] hover:scale-125 " />
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
                    className="w-[127px] h-[58px] bg-[#2A3047] rounded-lg text-white font-semibold text-xs uppercase mt-10 mb-9  hover:bg-[#55699e]/50"
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
                    className="w-[127px] h-[58px] bg-[#2A3047] rounded-lg text-white font-semibold text-xs uppercase mt-10 mb-9  hover:bg-[#55699e]/50"
                  >
                    Apply now
                  </button>
                </div>
                <div className="text-[#3A4562]">
                  <h2 className="font-bold text-3xl border-b mb-3.5">
                    Additional info
                  </h2>
                  <p className="text-lg font-normal mb-3">Employment type</p>
                  <ul className="flex justify-start">
                    {job.employment_type.map(e => (
                      <li className="leading-[49px] w-[222px] h-[49px] mr-2 border border-[#55699e] bg-[#55699e]/30 mb-6 text-[#55699E] font-bold text-base rounded-lg text-center">
                        {e}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-normal mb-3">Benefits</p>
                  <ul className="flex justify-start">
                    {job.benefits.map(e => (
                      <li className="flex justify-center items-center mb-20 mr-2 w-[220px] h-[49px] border border-[#FFCF00] bg-[#FFCF00]/30 text-[#988B49] font-bold text-base rounded-lg text-center">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-bold text-3xl text-[#3A4562] border-b mb-4">
                    Attached images
                  </h2>
                  <div className="flex justify-start">
                    {job.pictures.map(e => (
                      <img
                        className="mr-2 w-[200px] h-[103px] rounded-lg"
                        src={`${e}?random=${Math.floor(
                          Math.random() * 100000,
                        )}`}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </body>

              <Link to="/">
                <button
                  className="w-[213px] h-[50px] bg-[#e4e5ea] rounded-lg font-semibold text-xs font-semibold hover:bg-gray-300"
                  type="button"
                >
                  <MdKeyboardArrowLeft className="inline mr-1  text-4xl font-thin" />
                  RETURN TO JOB BOARD
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-between relative z-30 w-[402px] max-h-[436px] bg-[#2A3047] overflow-hidden  text-[#E8EBF3]">
              <div
                objectFit="cover"
                layout="fill"
                className="absolute -translate-x-1/4  bg-[#202336] rounded-full w-80 h-80  -z-10"
              ></div>
              <div className="px-16 pt-8 pb-4">
                <h2 className="z-10 font-bold text-xl mb-2">{job.name}</h2>

                <p className="z-10 font-normal text-lg ">
                  <MdLocationPin className="inline mr-1 fill-[#D8D8D8] text-2xl" />
                  {job.address}
                </p>
                <p className="z-10 font-normal text-lg">{job.phone}</p>
                <p className="z-10 font-normal text-lg">{job.email}</p>
              </div>
              <div className="flex-none">
                <MdLocationPin className="absolute inset-y-80 inset-x-32 text-4xl" />
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
