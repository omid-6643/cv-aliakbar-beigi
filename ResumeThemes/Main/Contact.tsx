import { contacts } from "@data";
import { StyledContact } from "./Main.styled";

const Contact = () => {
  return (
    <StyledContact>
      <ul>
        <li>
          <div className="title">Current City:</div>
          <div className="details">{contacts.location}</div>
        </li>
        <li>
          <div className="title">Mobile:</div>
          <div className="details">
            <a href={`tel:${contacts.tel}`}>{contacts.tel}</a>
          </div>
        </li>
        <li>
          <div className="title">Website:</div>
          <div className="details">
            <a href={contacts.website}>{contacts.website}</a>
          </div>
        </li>
        <li>
          <div className="title">Email:</div>
          <div className="details">
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </div>
        </li>
      </ul>
    </StyledContact>
  );
};

export default Contact;
