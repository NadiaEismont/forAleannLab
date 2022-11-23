export const saveJobs = jobs => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
};
export const parseJobs = () => {
    return JSON.parse(localStorage.getItem('jobs'));
};