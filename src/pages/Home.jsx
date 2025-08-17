import React, { useRef } from "react";

import Button from "@mui/material/Button";
import "../css/Home.css";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

export default function Home() {
  const aboutMeRef = useRef(null);

  const handleScroll = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="hero-image">
        <h1 class="name">THOMAS ZHANG</h1>
        <p class="career">SOFTWARE ENGINEER, PROBLEM SOLVER</p>
        <Button
          variant="contained"
          className="landing-btn"
          onClick={handleScroll}
        >
          Learn more
        </Button>
      </div>

      <div className="container">
        <div>
          <div className="row">
            <div className="about-container">
              <h2 ref={aboutMeRef} className="subheader">
                About
              </h2>
            </div>
            <div className="subtext-container">
              <p className="subtext">
                Hi I am Thomas - a software engineer that loves creating
                applications. I first got introduced to coding from a youtuber
                called Michael Reeves, where he showed me what fun things you
                can create with code. Since then, I have explored different
                technologies, from building full-stack applications to even
                simple multiplayer games. Over time, I discovered my passion for
                creating websites and bringing my ideas to life.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="subtext-container">
              <p className="subtext">
                <span className="subtext-bold">Languages: </span> HTML,
                JavaScript, Java, Python, SQL
              </p>
              <p className="subtext">
                <span className="subtext-bold">Frameworks & Libraries: </span>
                Vue.js, React, Angular
              </p>
              <p className="subtext">
                Extremely comfortable and interested in learning new
                languages/frameworks
              </p>
            </div>
            <div className="skills-container">
              <h2 className="subheader">Skills</h2>
            </div>
          </div>

          <div>
            <h2 className="projects">Projects</h2>
          </div>
        </div>
        <div className="timeline-container">
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent>
                <p className="timeline-header">Personal Projects</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="timeline-content">
                  <p className="timeline-item">AI rock paper scissors</p>
                  <p className="timeline-details">
                    I created multiple different AIs to play rock paper
                    scissors. I wrote the code from scratch without the use of
                    any libraires/prebuilt programmes
                  </p>
                  <p className="timeline-item">Telegram reminder project</p>
                  <p className="timeline-details">
                    I created a bot to send reminders using convenient
                    applications like telegram, where many people already use
                    nowadays. While doing this, I learnt a lot about webhooks,
                    ssl certificates, reverse proxies (ngrok) and implementing
                    different APIs.{" "}
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <p className="timeline-header">Singapore Polytechnic</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="timeline-content">
                  <div>
                    <p className="timeline-item">
                      ADES - FULL stack development game website (website
                      address) running on express
                    </p>
                    <p className="timeline-details">
                      Created a snake game with a singleplayer and multiplayer
                      mode, fully customisable snake colours and keybindings
                      with simulated in game stripe payments. Check it out{" "}
                      <a href="https://gamemix.onrender.com">here</a>.
                    </p>
                  </div>

                  <div>
                    <p className="timeline-item">EDES - OWASP top 10</p>
                    <p className="timeline-details">
                      Made a website secure against hackers, using industry
                      standard coding practices
                    </p>
                  </div>

                  <div>
                    <p className="timeline-item">
                      JAVA - bookstore website using J2E
                    </p>
                    <p className="timeline-details">
                      Made a bookstore website with stripe payments
                    </p>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent className="timeline-header">
                <p className="timeline-header">
                  KW Tech Solutions (Internship)
                </p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="timeline-content">
                  <div>
                    <p className="timeline-item">Wordpress plugin</p>
                    <p className="timeline-details">
                      Played a key role in creating a plugin which give keyword
                      suggestions for a word. This is used by business to see
                      which keywords they can include in their website to
                      improve SEO. Check out the plugin{" "}
                      <a href="https://wordpress.org/plugins/the-focus-keyword-tool/">
                        here
                      </a>
                      .
                    </p>
                  </div>

                  <div>
                    <p className="timeline-item">Game prototype</p>
                    <p className="timeline-details">
                      Played a crucial role in creating a game prototype and was
                      the sole person doing the frontend animations. The game
                      prototype included 2d grid character movement (similar to
                      stardew valley), and a feature to trade with NPC and
                      players
                    </p>
                  </div>

                  <div>
                    <p className="timeline-item">Packaging CRM prototype</p>
                    <p className="timeline-details">
                      Was the sole person creating an entire CRM system for a
                      client
                    </p>
                  </div>

                  <div>
                    <p className="timeline-item">Security fixing</p>
                    <p className="timeline-details">
                      Completed many angular unit tests. Testing API using
                      postman. Using greenbone security assistant to check for
                      vulnerabilities
                    </p>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
