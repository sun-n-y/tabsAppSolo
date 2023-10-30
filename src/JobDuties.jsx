import { v4 as uuidv4 } from 'uuid';
import { FiChevronsRight } from 'react-icons/fi';

const JobDuties = ({ duties }) => {
  return (
    <div className="job-duties">
      {duties.map((duty) => {
        return (
          <div className="duty" key={uuidv4()}>
            <span className="icon">
              <FiChevronsRight />
            </span>
            <h5>{duty}</h5>
          </div>
        );
      })}
    </div>
  );
};
export default JobDuties;
