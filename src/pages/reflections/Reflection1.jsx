import * as React from 'react';

import Button from '@mui/material/Button';

import reflection1 from './../../assets/reflect1.webp'



export default function Home() {
  return (
    <div>
      <h1>Reflections With Thomas Part 1</h1>
      <img src={reflection1} />


      <h2>1. Using GraphQL</h2>
      <h3>What is GraphQL?</h3>
      <p>GraphQL is a query language for application programming interfaces(APIs).</p>
      <h3>Why use GraphQL over REST API?</h3>
      <p>GraphQL can fetch data from multiple data sources using a single API endpoint. However in REST, to get data from multiple data sources, you may need to fetch data from different endpoints. This results in fewer requests and responses sent to the server, heavily reducing server costs for most cases. However, GraphQL uses asynchronous technology, which can result in a long queue for data should it be not immediately available on demand, resulting in significant hidden costs associated with each query.</p>

      <p>GraphQL lets clients query the exact data, since data returned from the GraphQL endpoint is defined by the client. This helps prevent over-fetching and under-fetching of data. Whereas REST API returns data in a fixed structure defined by the server. This may result in multiple fetch requests to get data from different sources.</p>

      <h2>2. JWT (JSON Web Token)</h2>
      <p>In order to implement strong authentication and authorisation into a website, its data should be secure and not vulnerable to being stolen/hacked. JWT and Sessions are some ways to do this.</p>

      <h3>Why use JWT instead of Sessions?</h3>

      <h3>Session</h3>
      <p>Session-based authentication requires the session to be created and stored on the server, usually inside a database. This means servers must manage the session data and can bottleneck under heavy loads. Managing large amounts of data is very taxing on the server, which can lead to high server costs.</p>

      <h3>JWT</h3>
      <p>On the other hand, JWT does not need to store any session data on the server. JWT tokens are stateless, which means all necessary information is contained inside the token itself. The server just needs to create a token and send it back to the client.</p>

      <h3>How to handle token refresh</h3>
      <p>In order to maintain strong authentication and authorisation, the token should expire around every 30 mins. The user should be able to refresh this token if they are still on the website doing something. This can be done using a timer to send a refresh token button pop-up. Right before the token expires, send a pop-up button that the user can click to refresh the token. To know when to send the pop-up, you can use a Pinia store to store a timer on the front-end. A Pinia store is used to manage and store reactive data across your components/pages on your website. If the user is inactive and does not click the button, the token will expire and the user will be logged out. But if the user refreshes the token, the user can continue browsing the website.</p>

      <h2>3. Vuetify</h2>

      <h3>What is Vuetify?</h3>
      <p>Vuetify is a UI framework built for Vue.js applications.</p>

      <h3>Why use Vuetify?</h3>
      <p>In web development, creating visually appealing and functional user interfaces can be challenging. Vuetify addresses this challenge by offering a library of pre-designed components, each with their own documentation and example code.</p>
      <p>This allows users to easily add user interfaces into their Vue application, helping them design and build Vue applications more efficiently.</p>

      <h2>4. Cache</h2>

      <h3>What is Cache?</h3>
      <p>A cache is a high-speed data storage layer.</p>

      <h3>What happens in the Cache?</h3>
      <p>It stores data so that future requests for the same data are loaded faster by accessing the cache. It allows efficient reuse of data that was previously retrieved.</p>
      <p>The data in the cache is usually stored in the RAM. It is used to increase data retrieval performance by reducing the need to access the slower storage layer, typically hard drives or SSDs.</p>
      <p>Cache stores data which are frequently accessed or data that is short-lived.</p>

      <h2>5. Minification</h2>

      <h3>What is minification?</h3>
      <p>Minification is the process of minimising code in your web pages.</p>

      <h3>What is minification used for?</h3>
      <p>It's one of the main methods used to reduce load times and bandwidth (the capacity at which a network can transmit data) usage on websites. It significantly improves a website’s speed and accessibility, providing a better user experience.</p>
      <p>When developing an application, developers usually use spacing, comments, and descriptive variables to make the code neat and readable. While it is good for development, these elements are unnecessary for web servers and browsers during page loading and contribute to increased network traffic.</p>
      <p>During minification, this unnecessary content will be removed – removing spaces, comments, and shortening variable names.</p>
      <p>This results in smaller files that require less bandwidth for network requests.</p>

      <h2>6. Navigation guards</h2>

      <h3>What are Navigation guards?</h3>
      <p>Navigation guards is a form of cyber security in web development. It helps protect against unauthorised and unauthenticated access to web pages by managing navigation requests.</p>

      <h3>What do Navigation guards do?</h3>
      <p>These guards redirect or cancel navigation requests. This helps prevent any unauthorised and unauthenticated access to your web pages.</p>
      <p>This helps developers to strengthen access control, authentication and authorisation. Hence, ensuring sensitive information is only accessible to authorised users.</p>

      <h2>7. Web hydration</h2>

      <h3>What is Web Hydration?</h3>
      <p>Web hydration is a process where the HTML page is pre-rendered on the server before sending it to the client.</p>

      <h3>What does Web Hydration do?</h3>
      <p>Web hydration displays the HTML page on the website first, then afterwards downloads the JavaScript. Only after downloading the JavaScript can you use the event handlers like buttons. This allows clients to respond to the HTML page faster.</p>
      <p>Without web hydration, a blank white page will be displayed only after the HTML and JavaScript loads. As the amount of JavaScript on a website increases, the white page displayed can be extremely long, especially on lower-end devices or poor internet connections.</p>

      <h2>Recap of 1-7</h2>
      <p>Points 1-7 highlight some concepts and tools that are extremely important in web development. These points highlight some of the frontend tools/concepts that we used in our solutions. If you are interested, you can learn more about us here. If you want to learn some backend technology, you can read some tools I highlighted in my reflection.</p>

      <h2>8. Scrum, Waterfall</h2>

      <h3>What is the Waterfall Methodology</h3>
      <p>Waterfall is a project management methodology where each phase of development flows downwards like a waterfall. It follows a development cycle of Requirement Gathering, Design, Implementation, Verification, and Maintenance. This methodology works well for projects with clearly defined requirements.</p>

      <h3>Steps in the Waterfall Methodology</h3>

      <h3>Requirements</h3>
      <p>Developers gather requirements to identify all user needs and what functionalities the system should have.</p>

      <h3>Design</h3>
      <p>Based on the gathered requirements, they design a solution that meets all user needs and system functionalities.</p>

      <h3>Implementation</h3>
      <p>Once the design is finalised, developers will start developing and coding the solution.</p>

      <h3>Verification</h3>
      <p>After development, the application is thoroughly tested to identify any bugs that need to be fixed. This helps ensure a smooth user experience.</p>

      <h3>Maintenance</h3>
      <p>After the application release, maintaining the app is needed to address any bugs or system failures that may arise. This ensures the application can continue to function even if any bugs or errors occur.</p>

      <h3>What is SCRUM?</h3>
      <p>Scrum is a project management approach that emphasises continuous collaboration and improvement. Teams follow a cycle of Sprint Planning, Daily Scrum, Sprint Review, and Retrospective.</p>

      <h3>Scrum Cycle</h3>

      <h3>Sprint Planning</h3>
      <p>Projects are split into small iterations called “sprints”. Sprint planning meetings are held to figure out what tasks and features should be completed during the next sprint.</p>

      <h3>Daily Scrum</h3>
      <p>The daily scrum is a brief daily meeting that allows team members to discuss progress and identify any challenges they are facing.</p>

      <h3>Sprint Review</h3>
      <p>At the end of each sprint, a sprint review is conducted where the team shows the completed work to the clients, gathering feedback and ensuring alignment with project goals.</p>

      <h3>Retrospective</h3>
      <p>After the sprint review, a retrospective meeting is held to reflect on the sprint’s successes and challenges. The team finds areas for improvement and improve themselves for the next sprint.</p>

      <h2>9. 3-way Handshake</h2>

      <h3>What is the 3-way handshake?</h3>
      <p>The 3-way handshake is a process used in computer networking to set up a secure connection between two devices.</p>

      <h3>What are the steps?</h3>

      <h3>Step 1 - Initial Connection Request SYN (Synchronise)</h3>
      <p>Firstly, the client sends a TCP segment to the server, with a SYN (synchronise) flag. The TCP segment that was sent includes a sequence number (SYN sequence number) to start the communication.</p>

      <h3>Step 2 - Server Response SYN-ACK (Synchronise-Acknowledge)</h3>
      <p>When the SYN segment is received, the server provides the resources needed for the connection and creates its own SYN sequence number. Afterwards, the server sends a TCP segment to the client, along with both the SYN and ACK (acknowledge) flags. This segment includes the server’s SYN sequence number while acknowledging the client’s SYN sequence number.</p>

      <h3>Step 3 - Client Acknowledgment ACK (Acknowledge)</h3>
      <p>Upon receiving the SYN-ACK segment, the client acknowledges the server’s response by sending an ACK segment.</p>
      <p>The ACK segment contains the ACK flag and confirms the server’s SYN sequence number.</p>
      <p>By now, both the client and server have exchanged their SYN sequence numbers and have established a connection.</p>
      <p>It also tries to ensure all data is transmitted.</p>

      <h2>Conclusion</h2>
      <p>Thanks for reading and I hoped you learned something new. If you want to learn more about KW Tech Solutions, you can check our knowledge base or some of our case studies.</p>


    </div>
  );
}
