import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { saveJobs, parseJobs } from 'utils/localStorage';

import Header from '../Header/Header';
import Loader from 'components/Loader/Loader';

const Cabinet = lazy(() => import('pages/Cabinet'));
const DetailedJob = lazy(() => import('pages/DetailedJob'));
const Jobs = lazy(() => import('pages/Jobs'));

export const App = () => {
  const [jobs, setJobs] = useState(parseJobs() ?? []);

  useEffect(() => {
    saveJobs(jobs);
  }, [jobs]);

  const onJobSave = job => {
    console.log(`add job ${job}`);
    if (jobs.some(oldJob => oldJob.name === job.name)) {
      // return NotificationManager.warning(`${job.name} is already in jobs`);
      console.log(`nope`);
      return;
    }

    setJobs([...jobs, job]);
  };

  const onJobDelete = id => {
    console.log(`delete job ${id}`);
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div>
      <Header class="px-5 md:px-0" />
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <Jobs
                  savedJobs={jobs}
                  onJobSave={onJobSave}
                  onJobDelete={onJobDelete}
                />
              }
            />
            <Route
              path="/cabinet"
              element={
                <Cabinet
                  savedJobs={jobs}
                  onJobSave={onJobSave}
                  onJobDelete={onJobDelete}
                />
              }
            />
            <Route
              path="/jobs/:jobId"
              element={
                <DetailedJob
                  savedJobs={jobs}
                  onJobSave={onJobSave}
                  onJobDelete={onJobDelete}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
