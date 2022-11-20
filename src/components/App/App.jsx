import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header/Header';
import Loader from 'components/Loader/Loader';

const Cabinet = lazy(() => import('pages/Cabinet'));
const DetailedJob = lazy(() => import('pages/DetailedJob'));
const Jobs = lazy(() => import('pages/Jobs'));

export const App = () => {
  return (
    <div>
      <Header class="px-5 md:px-0" />
      <div paddingTop="60px">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/cabinet" element={<Cabinet />} />
            <Route path="/jobs/:jobId" element={<DetailedJob />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
