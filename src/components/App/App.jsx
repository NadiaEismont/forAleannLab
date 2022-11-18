import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Pane } from 'evergreen-ui';
import Header from '../Header/Header';
import Loader from '../Loader';

const Home = lazy(() => import('pages/Home'));
const JobDetails = lazy(() => import('pages/JobDetails'));
const Jobs = lazy(() => import('pages/Jobs'));

export const App = () => {
  return (
    <Pane>
      <Header />
      <Pane paddingTop="60px">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:jobId" element={<JobDetails />}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Pane>
    </Pane>
  );
};
