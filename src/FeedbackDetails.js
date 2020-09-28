import React from 'react';
import styled from 'styled-components';

class FeedbackDetails extends React.Component {
  render() {
    return (
      <div className="app-feedback-page">
        <h1 id="title">Feedback Form</h1>
        <p id="description">Let us know how you are finding your new laptop</p>

        <form id="survey-form" action="">
          <label id="name-label" for="name">
            Name
          </label>
          <input
            id="name"
            class="input-box"
            type="text"
            placeholder="Name"
            required
          />

          <label id="email-label" for="email">
            Email
          </label>
          <input
            id="email"
            class="input-box"
            type="email"
            placeholder="Email"
            required
          />

          <label id="number-label" for="number">
            Experience out of 10?{' '}
          </label>
          <input
            id="number"
            class="input-box"
            type="number"
            placeholder="Number"
            min="1"
            max="10"
          />

          <label id="gender-label" for="gender">
            What is your gender?
          </label>
          <div id="gender-button">
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" />
            Female
            <input type="radio" name="gender" value="other" />
            Other
          </div>

          <label id="status-label" for="dropdown">
            Your status
          </label>

          <select id="dropdown" class="input-box" name="dropdown">
            <option value="Student">Student</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Employed (full-time)">Employed (full-time)</option>
            <option value="Employed (part-time)">Employed (part-time)</option>
            <option value="Self Employed">Self Employed</option>
          </select>

          <p id="use-label">Laptop Use?</p>
          <div id="use-input">
            <input type="checkbox" name="usebox1" value="Work" />
            Work
            <input type="checkbox" name="usebox2" value="Leisure" />
            Play
          </div>

          <p id="comment-label">Comments or suggestions?</p>
          <textarea id="comment-box" rows="2" cols="5"></textarea>

          <input id="submit" type="submit" />
        </form>

        <p className="small-text style-1">
          About Us
          <a href="" target="_blank">
            Contact Us
          </a>
        </p>
      </div>
    );
  }
}
export default FeedbackDetails;
