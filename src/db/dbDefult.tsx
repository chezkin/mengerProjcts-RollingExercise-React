import Project from "../types/ProjectType";

export const project1: Project = {
    name: "Website Redesign",
    tasks: [
        {
            name: "Data Collection",
            dueDate: "2023-08-10",
            description: [{ description: "Collect data from various sources" }],
            status: "Completed",
          },
          {
            name: "Statistical Analysis",
            dueDate: "2023-08-25",
            description: [{ description: "Perform statistical analysis" }],
            status: "In Progress",
          },
          {
            name: "Report Generation",
            dueDate: "2023-09-05",
            description: [{ description: "Generate data analysis report" }],
            status: "Pending",
          },
        {
            name: "Homepage Wireframe",
            dueDate: "2023-08-15",
            description: [
                { description: "Create wireframe sketches" },
                { description: "Discuss color schemes" },
            ],
            status: 'Aborted',
        },
        {
            name: "Content Update",
            dueDate: "2023-09-01",
            description: [{ description: "Add new blog posts" }],
            status: "Pending",
        },
        
    ],
};

export const project2: Project = {
    name: "Mobile App Development",
    tasks: [
        {
            name: "UI Design",
            dueDate: "2023-07-20",
            description: [
                { description: "Design app interface" },
                { description: "Create user-friendly layouts" },
            ],
            status: "Completed",
        },
        {
            name: "Backend Setup",
            dueDate: "2023-08-10",
            description: [{ description: "Configure server and database" }],
            status: 'Aborted',
        },
    ],
};

export const project3: Project = {
    name: "Marketing Campaign",
    tasks: [
        {
            name: "Venue Selection",
            dueDate: "2023-07-30",
            description: [{ description: "Choose an event venue" }],
            status: "Completed",
          },
          {
            name: "Invitations",
            dueDate: "2023-08-10",
            description: [{ description: "Design and send event invitations" }],
            status: "In Progress",
          },
          {
            name: "Catering Arrangements",
            dueDate: "2023-08-25",
            description: [{ description: "Arrange catering services" }],
            status: "Pending",
          },
        {
            name: "Target Audience Analysis",
            dueDate: "2023-07-25",
            description: [
                { description: "Identify potential customer segments" },
                { description: "Analyze market trends" },
            ],
            status: "Completed",
        },
        {
            name: "Content Creation",
            dueDate: "2023-08-10",
            description: [{ description: "Write promotional content" }],
            status: "In Progress",
        },
    ],
};

export const project4: Project = {
    name: "Product Launch",
    tasks: [
        {
            name: "Product Testing",
            dueDate: "2023-08-05",
            description: [
                { description: "Test product features" },
                { description: "Identify and fix bugs" },
            ],
            status: "Completed",
        },
        {
            name: "Marketing Strategy",
            dueDate: "2023-08-20",
            description: [{ description: "Plan launch marketing activities" }],
            status: "Pending",
        },
    ],
};


