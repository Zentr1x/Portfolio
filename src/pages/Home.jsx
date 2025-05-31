import * as React from 'react';

import Button from '@mui/material/Button';
import '../css/Home.css';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Button variant="contained">Hello world</Button>

      <div>
        <h2>About me</h2>
        <p>Passionate blah blah blah</p>
      </div>

      <div>
        <h2>Skills</h2>
        <p>HTML, Javascript, Java, Python, SQL</p>
        <p>Vue, React, Angular</p>
      </div>

      <div>
        <h2>Projects I have done</h2>

        <h3>Personal Projects</h3>

        <p>AI rock paper scissors</p>

        <h3>Singapore Polytechnic</h3>

        <div>
          <h4>ADES - FULL stack development game website (website address) running on express</h4>
          <p>Created a snake game with a singleplayer and multiplayer mode, fully customisable snake colours and keybindings with simulated in game stripe payments. Check it out here https://gamemix.onrender.com</p>
        </div>

        <div>
          <h4>EDES - OWASP top 10</h4>
          <p>Made a website secure against hackers, using industry standard coding practices</p>
        </div>

        <div>
          <h4>JAVA - bookstore website using J2E</h4>
          <p>Made a bookstore website with stripe payments</p>
        </div>


        <h3>KW Tech Solutions (Internship)</h3>

        <div>
          <h4>Wordpress plugin</h4>
          <p>Played a key role in creating a plugin which give keyword suggestions for a word. This is used by business to see which keywords they can include in their website to improve SEO. https://wordpress.org/plugins/the-focus-keyword-tool/</p>
        </div>


        <div>
          <h4>Game prototype</h4>
          <p>Played a crucial role in creating a game prototype and was the sole person doing the frontend animations. the game prototype included 2d character movement (similar to stardew valley), and a feature to trade with NPC and players</p>
        </div>

        <div>
          <h4>Packaging CRM prototype</h4>
          <p>Was the sole person creating an entire CRM system for a client</p>
        </div>

        <div>
          <h4>Angular bug fixing</h4>
          <p>Completed many angular unit tests</p>
        </div>

      </div>

      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>

    </div>
  );
}
