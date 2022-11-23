import { Section, Container } from 'components';
import JobList from 'components/JobList';

const Cabinet = ({ savedJobs, onJobSave, onJobDelete }) => {
  return (
    <Section>
      <Container>
        <h2 className="text-lg font-normal mb-3">Saved Jobs</h2>
        <div>
          <JobList
            savedJobs={savedJobs}
            jobs={savedJobs}
            onJobSave={onJobSave}
            onJobDelete={onJobDelete}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Cabinet;
