const JobButtons = ({ jobs, buttonClick }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className="btn"
            type="button"
            onClick={() => {
              buttonClick(index);
            }}
            key={job.id}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default JobButtons;
