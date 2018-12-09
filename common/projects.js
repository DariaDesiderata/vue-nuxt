const projects = [
  {
    id: 1,
    title: "Wanderers",
    description:
      "Explore the Solar System in virtual reality and enjoy stunning hi-res images",
    descriptionBody:
      "Solo project created with Three.js, Css animations and Express server.\
      Working on this project allowed me to learn various aspects of WebGL, manipulating objects\
      on Canvas and mapping data to visual display of objects.",
    imgUrl: "./assets/wanderers_logo.png",
    projectUrl: "https://github.com/DariaDesiderata/wanderers"
  },
  {
    id: 2,
    title: "E-Commerse",
    description:
      "Online shopping experience for users shopping across multiple stores with inventory split into different categories",
    descriptionBody:
      "As a UI developer on the Experiece Team at Baker Technologies I utilized React/Redux technologies to create a styled interfaced \
    to provide online shoppers with various filtering, sorting and viewing options for the specific products at different stores across the US and Canada.\
    Other tech used in the project are REST API, GraphQL/Apollo, Scss/Css/Keyframe animations, Webpack/Babel",
    imgUrl: "./assets/baker_shop.png",
    projectUrl: "https://app.trybaker.com/location"
  },
  {
    id: 3,
    title: "Preferences form",
    description: "Complex settings for scheduling marketing campaigns",
    descriptionBody: `Working on a team of 3 front-end developers, I wrote functional style Javascript to create composable
       and reusable components to handle complex user input, asynchronous actions (submit, save), loading state, modals 
       and dynamically updated dialogue windows. Complex state manipulations were handled using a combination or Redux 
       and Apollo with React for the view layer`,
    imgUrl: "./assets/baker_form.png",
    projectUrl: "./assets/bakerForm.mp4"
  },
  {
    id: 4,
    title: "Analytics dashboard",
    description: `Dashboard analytics UI detailing each marketing 
    campaign, analytics for success, in-depth filtering and follow up actions`,
    descriptionBody: `Solo front-end developer responsible for architecture, implementation, writing tests and adding components to 
      Storybook for future use. Project involved creating charts, displaying a table with multiple campaigns per month, 
      creating and updating a calendar, and adding animations for smooth user experience `,
    imgUrl: "./assets/sample_dash.png",
    projectUrl: "./assets/bakerForm.mp4"
  },
  {
    id: 5,
    title: "Form wizard",
    description: `Step by step decision making software guiding users to complete complex forms`,
    descriptionBody: `As a full stack developer I was involved in full system design conversations, bridging the gap between
    front end architecture, user experience, business requirements and database management. Working on a lean team of 2 developers,
    we built an easy to use, scalable application with Node, Vue/Vuex and MySQL. `,
    imgUrl: "./assets/request_wizard.png",
    projectUrl: "./assets/requestWizard.mp4"
  }
];

export default projects;
