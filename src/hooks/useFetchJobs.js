import { useEffect, useState } from 'react';
import { getListOfJobs } from 'service/jobsApi';


export const useFetchJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const fetchData = async () => {
            try {
                const data = await getListOfJobs();
                setJobs(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsloading(false);
            }
        };

        fetchData();
    }, []);

    return { jobs, error, isLoading };
};