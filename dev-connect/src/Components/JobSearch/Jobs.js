import React, { useEffect, useState } from "react";
import styles from "./Jobs.module.css";
import { fetchJobs } from "./Api";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    fullTime: false,
    partTime: false,
    contract: false,
 
  });
  
//   useEffect(() => {
//     const fetchAndSetJobs = async () => {
//       try {
//         const jobListings = await fetchJobs(filters);
//         setJobs(jobListings);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };
//     fetchAndSetJobs();
//   }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters({
        ...filters,
        [name]: checked,
      });
    } else {
      setFilters({
        ...filters,
        [name]: value,
      });
    }
  };

  const handleSearchClick = async () => {
    try {
      const jobListings = await fetchJobs(filters,1);
      setJobs(jobListings);
      
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

 
  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>
        Get latest job openings that best suits you!
      </h3>
      <div className={styles.options}>
        <select
          name="role"
          className={styles.select}
          onChange={handleFilterChange}
        >
          <option value="" disabled hidden selected>
            Job Role
          </option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Software Engineer">Software Engineer</option>
        </select>
        {/* 
        <select  name="type" className={styles.select} onChange={handleFilterChange}>
            <option value="" disabled hidden selected >Job Type</option>
            <option value="permanent">1</option>
            <option value="full_time">Full Time</option>
            <option value="part_time">Part Time</option>
            <option value="contract">Contract</option>
        </select> */}

        <label className={styles.labels}>
          <input
            type="checkbox"
            name="fullTime"
            checked={filters.fullTime}
            onChange={handleFilterChange}
          />
          Full Time
        </label>
        <label className={styles.labels}>
          <input
            type="checkbox"
            name="partTime"
            checked={filters.partTime}
            onChange={handleFilterChange}
          />
          Part Time
        </label>
        <label className={styles.labels}>
          <input
            type="checkbox"
            name="contract"
            checked={filters.contract}
            onChange={handleFilterChange}
          />
          Contract
        </label>
   
        <select
          name="location"
          className={styles.select}
          onChange={handleFilterChange}
        >
          <option value="" disabled hidden selected>
            Location
          </option>
          <option value="Hyderabad, Telangana, India">Hyderabad</option>
          <option value="Bengaluru, Karnataka, India">Bengaluru</option>
          <option value="Gurgaon, Haryana, India">Gurgaon</option>
          <option value="Chennai, TamilNadu, India">Chennai</option>
          <option value="Pune, Maharastra, India">Pune</option>
          <option value="Mumbai,Maharastra, India">Mumbai</option>
          <option value="Noida, Delhi, India">Delhi</option>
          <option value="Kolkata , West Bengal, India">Kolkata</option>
        </select>

        {/* <select name="experience" className={styles.select} onChange={handleFilterChange}>
            <option value="" disabled hidden selected >Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior">Junior Level</option>
            <option value="Mid">Intermediate level</option>
            <option value="Senior">Senior Level</option>

            
        </select> */}

        <button className={styles.search} onClick={handleSearchClick}>
          Search
        </button>
      </div>

      <div className={styles.jobList}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.jobCard}>
            <h4>{job.title}</h4>
            <p>{job.company.display_name}</p>
            <p>{job.location.display_name}</p>
            <p>{job.contract_type}</p>
            <a className={styles.link} href={job.redirect_url} target="_blank" rel="noopener noreferrer">
              Link to apply
            </a>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Jobs;
