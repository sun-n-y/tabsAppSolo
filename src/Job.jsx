const Job = ({ jobs }) => {
  const { title, company, dates, duties } = jobs[0];
  return (
    <div className="job">
      <div className="job-header">
        <h1>{title}</h1>
        <h3>{company}</h3>
        <p>{dates}</p>
      </div>
    </div>
  );
};
export default Job;
