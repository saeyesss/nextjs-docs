export const templates = [
  {
    id: 'blank',
    label: 'Blank Document',
    imageUrl: './blank-document.svg',
    initialContent: `<p></p>`,
  },
  {
    id: 'software-proposal',
    label: 'Software Development Proposal',
    imageUrl: './software-proposal.svg',
    initialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>Provide an overview of the project, its objectives, and intended outcomes.</p>
      <h2>Technical Approach</h2>
      <p>Explain the technologies and methodologies that will be used.</p>
      <h2>Timeline</h2>
      <p>Provide a timeline with major milestones.</p>
      <h2>Budget</h2>
      <p>Include an estimated budget for the project.</p>
    `,
  },
  {
    id: 'project-proposal',
    label: 'Project Proposal',
    imageUrl: './project-proposal.svg',
    initialContent: `
      <h1>Project Proposal</h1>
      <h2>Introduction</h2>
      <p>Describe the purpose and scope of the project.</p>
      <h2>Objectives</h2>
      <p>List the main goals and objectives of the project.</p>
      <h2>Methodology</h2>
      <p>Outline the methods and processes that will be used.</p>
      <h2>Expected Outcomes</h2>
      <p>Describe the expected results or deliverables.</p>
    `,
  },
  {
    id: 'business-letter',
    label: 'Business Letter',
    imageUrl: './business-letter.svg',
    initialContent: `
      <p>Your Name</p>
      <p>Your Address</p>
      <p>City, State, ZIP Code</p>
      <p>Date</p>
      <p>Recipient's Name</p>
      <p>Recipient's Address</p>
      <p>City, State, ZIP Code</p>
      <p>Dear [Recipient's Name],</p>
      <p>[Body of the letter]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: 'resume',
    label: 'Resume',
    imageUrl: './resume.svg',
    initialContent: `
      <h1>Your Name</h1>
      <h2>Contact Information</h2>
      <p>Phone: [Your Phone Number]</p>
      <p>Email: [Your Email Address]</p>
      <p>LinkedIn: [Your LinkedIn Profile]</p>
      <h2>Experience</h2>
      <p><strong>Job Title</strong> - Company Name</p>
      <p>[Description of your role and achievements]</p>
      <h2>Education</h2>
      <p><strong>Degree</strong> - Institution</p>
      <p>[Details about your studies]</p>
    `,
  },
  {
    id: 'cover-letter',
    label: 'Cover Letter',
    imageUrl: './cover-letter.svg',
    initialContent: `
      <p>Your Name</p>
      <p>Your Address</p>
      <p>City, State, ZIP Code</p>
      <p>Date</p>
      <p>Hiring Manager's Name</p>
      <p>Company Name</p>
      <p>Company Address</p>
      <p>City, State, ZIP Code</p>
      <p>Dear [Hiring Manager's Name],</p>
      <p>[Introduction about why you're a great fit for the position]</p>
      <p>[Body explaining your qualifications and enthusiasm for the role]</p>
      <p>[Closing statement]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: 'letter',
    label: 'Letter',
    imageUrl: './letter.svg',
    initialContent: `
      <p>Your Name</p>
      <p>Your Address</p>
      <p>City, State, ZIP Code</p>
      <p>Date</p>
      <p>Recipient's Name</p>
      <p>Recipient's Address</p>
      <p>City, State, ZIP Code</p>
      <p>Dear [Recipient's Name],</p>
      <p>[Body of the letter]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
];
