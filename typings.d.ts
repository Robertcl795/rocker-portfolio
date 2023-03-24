interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    experience: number;
    title: string;
}

interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded?: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

interface Social extends SanityBody {
    title: string;
    url: string;
}