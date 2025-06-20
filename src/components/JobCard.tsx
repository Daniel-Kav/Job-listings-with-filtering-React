import { type Job } from "../types/job.type";

export default function JobCard({
  job,
  toggleFilter,
}: {
  job: Job;
  toggleFilter: CallableFunction;
}) {
  return (
    <li
      className={`relative flex flex-col md:flex-row md:justify-between md:gap-5  bg-white rounded-md shadow-lg  p-6 pl-8 ${
        job.featured ? "border-l-4 border-teal-600" : ""
      }`}
    >
      <div className="flex shrink-0 gap-5 md:items-center">
        <img
          src={job.logo}
          alt={job.company}
          className="min-w-[88px] h-[88px] absolute -top-11 md:static"
        />
        <div className="w-full">
          <div className="mt-9 md:mt-0 flex flex-wrap">
            <p className="text-teal-600 font-bold mr-7">{job.company}</p>
            <div className="flex gap-2">
              {job.new && (
                <span className="flex items-center bg-teal-600 h-5 pt-1 rounded-full text-white uppercase text-sm font-semibold px-2">
                  new!
                </span>
              )}
              {job.featured && (
                <span className="flex items-center bg-black h-5 pt-1 rounded-full text-white uppercase text-sm font-semibold px-2">
                  featured
                </span>
              )}
            </div>
          </div>
          <div className="border-b-2 border-b-teal-300 md:border-b-0">
            <p className="text-xl font-bold mt-1 cursor-pointer w-fit hover:text-teal-600">
              {job.position}
            </p>
            <div className="flex items-center mt-2 pb-2">
              <span className="text-teal-600 font-semibold">
                {job.postedAt}
              </span>
              <span className="w-1 h-1 bg-teal-400 rounded-full mx-2"></span>
              <span className="text-teal-600 font-semibold">{job.role}</span>
              <span className="w-1 h-1 bg-teal-400 rounded-full mx-2"></span>
              <span className="text-teal-600 font-semibold">
                {job.location}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap gap-3 mt-4 md:mt-0">
        <li
          onClick={() => toggleFilter(job.role)}
          className="bg-teal-100 h-fit text-teal-550 cursor-pointer hover:bg-teal-600 hover:text-white font-bold px-2 py-1 rounded-md"
        >
          {job.role}
        </li>
        <li
          onClick={() => toggleFilter(job.level)}
          className="bg-teal-100 h-fit text-teal-550 cursor-pointer hover:bg-teal-600 hover:text-white font-bold px-2 py-1 rounded-md"
        >
          {job.level}
        </li>
        {job.tools.map((tool: string, index: number ) => (
          <li
            key={index}
            onClick={() => toggleFilter(tool)}
            className="bg-teal-100 h-fit text-teal-550 cursor-pointer hover:bg-teal-600 hover:text-white font-bold px-2 py-1 rounded-md"
          >
            {tool}
          </li>
        ))}
        {job.languages.map((language: string, index: number) => (
          <li
            key={index}
            onClick={() => toggleFilter(language)}
            className="bg-teal-100 h-fit text-teal-550 cursor-pointer hover:bg-teal-600 hover:text-white font-bold px-2 py-1 rounded-md"
          >
            {language}
          </li>
        ))}
      </ul>
    </li>
  );
}
