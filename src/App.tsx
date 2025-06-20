import bgHeaderDesktop from "./assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "./assets/images/bg-header-mobile.svg";
import JobCard from "./components/JobCard";
import FilterBar from "./components/Filter";
import useJobList from "./hooks/UseJobList";

function App() {
  const { jobs, filters, handleToggleFilter, handleClearFilters } =
    useJobList();

  return (
    <>
      <div className="min-h-[100dvh] bg-iceberg-100 relative">
        <picture
          className={`w-full z-0 ${filters.length > 0 ? "absolute top-0" : ""}`}
        >
          <source srcSet={bgHeaderDesktop} media="(min-width: 768px)" />
          <img
            src={bgHeaderMobile}
            alt="Background image"
            className="  bg-teal-550 w-full"
          />
        </picture>
        <main className="mx-auto p-2.5 max-w-[655px] md:max-w-[1110px] z-10 relative">
          {filters.length > 0 && (
            <FilterBar
              filters={filters}
              toggleFilter={handleToggleFilter}
              clearFilters={handleClearFilters}
            />
          )}
          <ul className="mt-16 flex flex-col gap-19 md:gap-6 md:mt-17 mb-14">
            {jobs.length > 0 &&
              jobs.map((job, index) => (
                <JobCard
                  key={index}
                  job={job}
                  toggleFilter={handleToggleFilter}
                />
              ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
