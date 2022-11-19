import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import { Pane } from 'evergreen-ui';
import Header from '../Header/Header';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home'));
// const JobDetails = lazy(() => import('pages/JobDetails'));
const Jobs = lazy(() => import('pages/Jobs'));

export const App = () => {
  return (
    <div>
      <Header  class='px-5 md:px-0' />
      <div paddingTop="60px">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            {/* <Route path="/jobs/:jobId" element={<JobDetails />}></Route> */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
