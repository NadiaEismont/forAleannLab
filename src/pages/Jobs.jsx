import { Section, Container } from 'components';
import JobList from 'components/JobList';
import { useFetchJobs } from 'hooks/useFetchJobs';

const Jobs = ({ savedJobs, onJobSave, onJobDelete }) => {
  const { jobs } = useFetchJobs(0);

  return (
    <Section>
      <Container>
        <JobList
          savedJobs={savedJobs}
          jobs={jobs}
          onJobSave={onJobSave}
          onJobDelete={onJobDelete}
        />
      </Container>
    </Section>
  );
};

export default Jobs;
