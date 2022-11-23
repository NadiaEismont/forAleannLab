import { Link } from 'react-router-dom';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import timeSince from 'utils/utils';

const JobList = ({ savedJobs, jobs, onJobSave, onJobDelete }) => {
  const page = useLocation();
  return (
    <ul>
      {jobs.map(({ id, name, title, address, pictures, createdAt }) => (
        <li
          size={600}
          key={id}
          className="font-sans font-family:Proxima Nova py-6 px-6 mb-2 border rounded-lg shadow-slate-50 "
        >
          <div className="mx-auto flex flex-cols-4 flex-row justify-between">
            <div className="shrink-0">
              <img
                className="rounded-full w-20 h-20 mr-6"
                src={`${pictures[0]}?random=${Math.floor(
                  Math.random() * 100000,
                )}`}
                alt=""
              />
            </div>
            <div className="">
              <Link to={`/jobs/${id}`} state={{ from: page }}>
                <h3 className="cursor-pointer font-bold text-2xl w-[750px] text-[#3A4562] hover:text-violet-300">
                  {title}
                </h3>
              </Link>
              <p className="text-[#878D9D] text-lg">{name}</p>

              <p className="text-[#878D9D] text-lg">
                <MdLocationPin className="inline mr-1 fill-[#D8D8D8] text-2xl" />
                {address}
              </p>
            </div>
            <div className="w-20">
              <AiFillStar />
            </div>
            <div className="flex flex-col justify-between mx-auto w-34 shrink-0">
              {/* <div className="justify-self-end  "> */}
              <button
                className="self-end"
                onClick={
                  savedJobs.some(job => job.id === id)
                    ? () => onJobDelete(id)
                    : () =>
                        onJobSave({
                          id,
                          name,
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
                  <BsBookmark className="text-2xl mx-4 text-[#3A4562] hover:scale-125 " />
                )}
              </button>

              <div>
                <p className="text-[#878D9D] text-lg justify-between">
                  Posted &nbsp;
                  {timeSince(Date.parse(createdAt))} ago
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
