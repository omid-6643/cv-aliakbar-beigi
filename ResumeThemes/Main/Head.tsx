import { contacts, profile } from "@data";
import { StyledHead } from "./Main.styled";

const Head = () => {
  return (
    <StyledHead>
      <div className="profile-head">
        <div>

        <h1>
          {profile.firstname}
          <span> {profile.lastname}</span>
          </h1>
          <h2>{profile.bio}</h2>
        </div>
        <div className="contact">
          <span>
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </span>
          <span>
            <a href={`https://${contacts.linkedin}`}>{contacts.linkedin}</a>
          </span>
          <span>
            <a href={`tel:${contacts.tel}`}>{contacts.tel}</a>
          </span>
        </div>
      </div>

      {/* <div className="profile-bio">{profile.bio}</div> */}
      {/* <p className="profile-summary">
        {profile.summary.split("\n").map(function (item, idx) {
          return (
            <span key={idx}>
              {item}
              <br />
            </span>
          );
        })}
      </p> */}
    </StyledHead>
  );
};

export default Head;
