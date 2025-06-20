import { useEffect, useState } from "react";
import { type Job, convertToJob } from "../types/job.type";
import data from "../data/data.json";




export default function useJobList() {
  const jobsData: Job[] = convertToJob(data);
  const [jobs, setJobs] = useState<Job[]>(jobsData);
  const [filters, setFilters] = useState<string[]>([]);

  const handleToggleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      const updatedFilters: string[] = filters.filter((fil) => fil !== filter);
      setFilters(updatedFilters);
      return;
    }

    setFilters([...filters, filter]);
  };

  const handleClearFilters = () => {
    setFilters([]);
  };

  useEffect(() => {
    if (filters.length > 0) {
      const filteredJobs: Job[] = jobsData.filter((job) => {
        return filters.every(
          (filter) =>
            job.position === filter ||
            job.role === filter ||
            job.level === filter ||
            job.languages.includes(filter) ||
            job.tools.includes(filter)
        );
      });
      setJobs(filteredJobs);
    } else {
      setJobs(jobsData);
    }
  }, [filters]);

  return {
    jobs,
    setJobs,
    handleToggleFilter,
    handleClearFilters,
    filters
  };
}
