import { useEffect, useState, useMemo } from "react";
import { type Job, convertToJob } from "../types/job.type";
import data from "../data/data.json";

const STORAGE_KEY = 'job-listings-filters';

function loadFilters(): string[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const savedFilters = localStorage.getItem(STORAGE_KEY);
    return savedFilters ? JSON.parse(savedFilters) : [];
  } catch (error) {
    console.error('Failed to load filters from localStorage', error);
    return [];
  }
}

function saveFilters(filters: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
  } catch (error) {
    console.error('Failed to save filters to localStorage', error);
  }
}

export default function useJobList() {
  // Memoize the jobs data to prevent recreation on every render
  const jobsData = useMemo(() => convertToJob(data), []);
  const [jobs, setJobs] = useState<Job[]>(jobsData);
  const [filters, setInternalFilters] = useState<string[]>([]);
  
  // Load saved filters on initial render
  useEffect(() => {
    const savedFilters = loadFilters();
    if (savedFilters.length > 0) {
      setInternalFilters(savedFilters);
    }
  }, []);

  const setFilters = (newFilters: string[]) => {
    setInternalFilters(newFilters);
    saveFilters(newFilters);
  };

  const handleToggleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      const updatedFilters = filters.filter((fil) => fil !== filter);
      setFilters(updatedFilters);
      return;
    }

    const updatedFilters = [...filters, filter];
    setFilters(updatedFilters);
  };

  const handleClearFilters = () => {
    setFilters([]);
  };

  // Filter jobs based on active filters
  useEffect(() => {
    if (filters.length > 0) {
      const filteredJobs = jobsData.filter((job) => {
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
  }, [filters]); // Removed jobsData from dependencies since it's now stable

  return {
    jobs,
    setJobs,
    handleToggleFilter,
    handleClearFilters,
    filters
  };
}
