import { FaArrowRight } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="contact">
      <div className="content">
        <h4 className="eyebrow">Form field callout ipsum</h4>
        <h3>A simple headline facu consecteur</h3>
        <p>
          Nisi a id sit pulvinar non. Quis tristique et sem cras morbi lacus.
          Magna faucibus ultrices sed consectetur risus et amet.{' '}
        </p>
      </div>
      <form className="contact-form">
        <fieldset className="personal-info">
          <div className="field-group">
            <label for="first">First Name</label>
            <input type="text" id="first" placeholder="First" />
          </div>
          <div className="field-group">
            <label for="last">Last Name</label>
            <input type="text" id="last" placeholder="Last" />
          </div>
          <div className="field-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" />
          </div>
          <div className="field-group">
            <label for="confirm">Confirm Email Address</label>
            <input type="email" id="confirm" placeholder="Email Address" />
          </div>
          <div className="field-group">
            <label for="phone">Phone Number</label>
            <input
              type="phone"
              id="phone"
              placeholder="(_ _ _)-_ _ _-_ _ _ _"
            />
          </div>
        </fieldset>
        <div className="field-group">
          <label for="company">Company</label>
          <input type="text" id="company" placeholder="Company" />
        </div>
        <div className="field-group">
          <label for="audience">Audience Group</label>
          <select name="audience" id="audience" value="">
            <option value="" disabled>
              Select
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </div>
        <div className="field-group">
          <label for="message">Message (Paragraph of Text)</label>
          <textarea id="message" placeholder="Message" rows="10" />
        </div>

        <button type="submit" className="cta">
          Submit <FaArrowRight size={18} />
        </button>
      </form>
    </div>
  );
};
export default Contact;
