export interface Work {
    id: string;
    name: string;
    image: string;
    images?: string[];
    description?: string;
    github?: string;
    otherLink?: string;
}

// Work projects
export const works: Work[] = [
    {
        id: 'work-01',
        name: 'Project Title 1',
        image: 'https://picsum.photos/400/400?random=1',
        images: [
            'https://picsum.photos/400/400?random=1',
            'https://picsum.photos/400/400?random=2',
            'https://picsum.photos/400/400?random=3',
        ],
        description: 'Add your project description here. Explain the project goals, your role, and what you achieved.',
        github: '',
        otherLink: ''
    },
    {
        id: 'work-02',
        name: 'Project Title 2',
        image: 'https://picsum.photos/400/400?random=2',
        description: 'Add your project description here.',
    },
    {
        id: 'work-03',
        name: 'Project Title 3',
        image: 'https://picsum.photos/400/400?random=3',
        description: 'Add your project description here.',
    },
    {
        id: 'work-04',
        name: 'Project Title 4',
        image: 'https://picsum.photos/400/400?random=4',
        description: 'Add your project description here.',
    },
    {
        id: 'work-05',
        name: 'Project Title 5',
        image: 'https://picsum.photos/400/400?random=5',
        description: 'Add your project description here.',
    },
    {
        id: 'work-06',
        name: 'Project Title 6',
        image: 'https://picsum.photos/400/400?random=6',
        description: 'Add your project description here.',
    },
    {
        id: 'work-07',
        name: 'Project Title 7',
        image: 'https://picsum.photos/400/400?random=7',
        description: 'Add your project description here.',
    },
    {
        id: 'work-08',
        name: 'Project Title 8',
        image: 'https://picsum.photos/400/400?random=8',
        description: 'Add your project description here.',
    },
    {
        id: 'work-09',
        name: 'Project Title 9',
        image: 'https://picsum.photos/400/400?random=9',
        description: 'Add your project description here.',
    },
];

export function getWorkById(id: string): Work | undefined {
    return works.find((work) => work.id === id);
}
