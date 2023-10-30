import { useEffect, useState } from 'react';
import Job from './Job';
import JobButtons from './JobButtons';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const buttonClick = (index) => {
    setActiveIndex(index);
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <main>
      <JobButtons
        jobs={jobs}
        activeIndex={activeIndex}
        buttonClick={buttonClick}
      />
      <Job jobs={jobs} activeIndex={activeIndex} />
    </main>
  );
}

export default App;
