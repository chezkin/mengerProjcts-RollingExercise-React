
type Instruction = {
    description: string;
};

 type Task = {
    name: string;
    dueDate: string;
    description: Instruction[];
    status: 'Completed' | 'Pending' | 'In Progress' | 'Aborted';
};

type Project = {
    name: string;
    tasks: Task[];
};

export default Project;
