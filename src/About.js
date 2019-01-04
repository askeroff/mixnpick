import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 10px;
  color: #333;
  background: #fff;
  border: 1px solid #ededed;
  margin-top: 10px;

  a {
    color: #42a3c7;
    text-decoration: none;
    border-bottom: 1px solid #42a3c7;
  }

  a:hover {
    border: none;
  }
`;

function About() {
  return (
    <Div>
      <p>
        This is inspired by this{' '}
        <a href="https://www.youtube.com/watch?v=QwFr6cXpAEk">video</a> by
        Justin Sandercoe. You can take a look at the video to get the idea
        behind this. It's actually quite simple, you eliminate the need to
        decide what to practice at the moment and letting the randomness of this
        app to make the decision.
      </p>

      <p>
        The way this app works, you add new tasks in the{' '}
        <mark>List of tasks</mark> tab. Then click <mark>Pick the task</mark>.
        After that you start the timer, 5 minutes by default, but you can change
        that value. When the time is up the task will be considered done and be
        marked as such in the list of tasks. These tasks will have green
        background, tasks <mark>On Hold</mark> will have grey background.
      </p>

      <p>
        If you want to exclude some of tasks put them <mark>On Hold</mark>. To
        get them back in the mix click <mark>To Do</mark> next to the task. The
        same applies for the tasks done, they're out of the mix, but you can put
        them back in.
      </p>

      <p>
        And at last, after all the tasks are done you can reset their state and
        start your new practice session.
      </p>

      <p>
        Built by <a href="https://twitter.com/askerovlab">Javid Askerov</a>.
      </p>
    </Div>
  );
}

export default About;
