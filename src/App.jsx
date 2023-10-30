import { useEffect, useState } from 'react';
import Job from './Job';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  console.log(jobs);

  return (
    <main>
      {/* button */}
      <Job jobs={jobs} />
    </main>
  );
}

export default App;
