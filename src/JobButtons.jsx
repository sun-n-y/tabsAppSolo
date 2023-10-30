const JobButtons = ({ jobs }) => {
  return (
    <div className="btn-container">
      {jobs.map((job) => {
        return (
          <button type="button" key={job.id}>
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default JobButtons;
