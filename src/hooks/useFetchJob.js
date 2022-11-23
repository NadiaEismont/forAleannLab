import { useEffect, useState } from 'react';
import { getListOfJobs } from 'service/jobsApi';


export const useFetchJob = (jobId) => {
    const [job, setJobs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const fetchData = async () => {
            try {
                const data = await getListOfJobs();
                setJobs(data.find(job => job.id === jobId));
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsloading(false);
            }
        };

        fetchData();
    }, [jobId]);

    return { job, error, isLoading };
};