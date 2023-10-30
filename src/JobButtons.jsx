const JobButtons = ({ jobs, buttonClick, activeIndex }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className={activeIndex === index ? 'btn active-btn' : 'btn'}
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
