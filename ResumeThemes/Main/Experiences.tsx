import { works } from "@data";
import { format } from "date-fns";
import { Divider, StyledCompany } from "./Main.styled";
import Title from "./Title";

const Experiences = () => {
  return (
    <>
      <Title title="Work Experience" />
      {works.map((work) => (
        <StyledCompany data-company={work.company} key={work.company}>
          <div className="company-head">
            <div>
              <h3>{work.company}</h3>
              <span className="company-job-title">{work.title}</span>
            </div>
            <div>
              <div className="company-date">
                {format(new Date(work.time_start), "MMMM yyyy")}
                {work.time_end
                  ? ` - ${format(new Date(work.time_end), "MMMM yyyy")}`
                  : " - Now"}
              </div>
              {/* <span>-</span>
              <div className="company-location">
                {work.isRemote ? "Remote" : work.location}
              </div> */}
            </div>
          </div>
          {work?.description && (
            <div className="company-desc">
              {work.description.map(function (item, index) {
                return (
                  <h4 key={index} dangerouslySetInnerHTML={{ __html: item }} />
                );
              })}
            </div>
          )}
          <Divider />
        </StyledCompany>
      ))}
    </>
  );
};

export default Experiences;
