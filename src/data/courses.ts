export interface Lesson {
  id: string;
  title: string;
  duration: string;
  youtubeVideoId: string;
  transcript: string;
  order: number;
  completed?: boolean;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessonsCount: number;
  isFree: boolean;
  topics: string[];
  thumbnail: string;
  instructor: {
    name: string;
    avatar: string;
    title: string;
  };
  lessons: Lesson[];
  enrolledCount: number;
  rating: number;
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "introduction-to-databases",
    title: "Introduction to Database Systems",
    description: "Master the fundamentals of database design and management. Learn about relational databases, SQL, normalization, and best practices for data modeling. This comprehensive course will take you from beginner to confident database designer.",
    shortDescription: "Learn database fundamentals, SQL, and data modeling best practices.",
    level: "Beginner",
    duration: "4 hours",
    lessonsCount: 8,
    isFree: true,
    topics: ["Databases", "SQL", "Data Modeling"],
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
    instructor: {
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      title: "Senior Database Architect"
    },
    lessons: [
      {
        id: "1-1",
        title: "What is a Database?",
        duration: "12:30",
        youtubeVideoId: "wR0jg0eQsZA",
        transcript: "Welcome to our first lesson on databases. A database is an organized collection of structured information, or data, typically stored electronically in a computer system. Databases are managed by Database Management Systems (DBMS), which serve as an interface between the database and its end users or programs.\n\nIn this lesson, we'll explore the fundamental concepts that make databases essential for modern applications. We'll discuss how data is organized, stored, and retrieved efficiently.\n\nKey concepts covered:\n- What makes a database different from a simple file\n- The role of Database Management Systems\n- Types of databases (relational, NoSQL, graph)\n- Why databases are crucial for applications",
        order: 1
      },
      {
        id: "1-2",
        title: "Relational Database Concepts",
        duration: "18:45",
        youtubeVideoId: "wR0jg0eQsZA",
        transcript: "In this lesson, we dive deep into relational databases - the most widely used type of database in enterprise applications. You'll learn about tables, rows, columns, and how relationships between data are established.\n\nWe'll cover:\n- Tables and their structure\n- Primary keys and foreign keys\n- One-to-one, one-to-many, and many-to-many relationships\n- The importance of data integrity",
        order: 2
      },
      {
        id: "1-3",
        title: "SQL Fundamentals",
        duration: "25:00",
        youtubeVideoId: "wR0jg0eQsZA",
        transcript: "SQL (Structured Query Language) is the standard language for interacting with relational databases. In this comprehensive lesson, you'll learn the basic SQL commands that form the foundation of database operations.\n\nTopics include:\n- SELECT statements\n- INSERT, UPDATE, DELETE operations\n- WHERE clauses and filtering\n- JOIN operations",
        order: 3
      },
      {
        id: "1-4",
        title: "Database Normalization",
        duration: "22:15",
        youtubeVideoId: "wR0jg0eQsZA",
        transcript: "Normalization is the process of organizing data to minimize redundancy. Learn the normal forms and how to apply them to create efficient database schemas.",
        order: 4
      }
    ],
    enrolledCount: 15420,
    rating: 4.8
  },
  {
    id: "2",
    slug: "advanced-api-development",
    title: "Advanced API Development with REST",
    description: "Build scalable, secure, and well-documented RESTful APIs. Learn industry best practices for API design, authentication, rate limiting, and versioning. Perfect for developers looking to level up their backend skills.",
    shortDescription: "Build scalable RESTful APIs with authentication and best practices.",
    level: "Intermediate",
    duration: "6 hours",
    lessonsCount: 12,
    isFree: false,
    topics: ["APIs", "REST", "Backend", "Security"],
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    instructor: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      title: "Lead Backend Engineer"
    },
    lessons: [
      {
        id: "2-1",
        title: "REST Architecture Principles",
        duration: "15:00",
        youtubeVideoId: "lsMQRaeKNDk",
        transcript: "Understanding the principles behind REST architecture is crucial for building well-designed APIs. In this lesson, we explore the six constraints of REST and how they guide API development.",
        order: 1
      },
      {
        id: "2-2",
        title: "Designing Resource-Oriented APIs",
        duration: "20:30",
        youtubeVideoId: "lsMQRaeKNDk",
        transcript: "Learn how to think in terms of resources when designing APIs. We'll cover naming conventions, URI structure, and how to represent relationships between resources.",
        order: 2
      },
      {
        id: "2-3",
        title: "Authentication & Authorization",
        duration: "28:00",
        youtubeVideoId: "lsMQRaeKNDk",
        transcript: "Security is paramount in API development. This lesson covers JWT tokens, OAuth 2.0, API keys, and best practices for securing your endpoints.",
        order: 3
      }
    ],
    enrolledCount: 8750,
    rating: 4.9
  },
  {
    id: "3",
    slug: "cloud-architecture-fundamentals",
    title: "Cloud Architecture Fundamentals",
    description: "Understand cloud computing concepts and learn to design scalable, resilient cloud architectures. Covers major cloud providers, services, and architectural patterns.",
    shortDescription: "Design scalable cloud architectures with modern patterns.",
    level: "Intermediate",
    duration: "8 hours",
    lessonsCount: 15,
    isFree: false,
    topics: ["Cloud", "Architecture", "DevOps"],
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    instructor: {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      title: "Cloud Solutions Architect"
    },
    lessons: [
      {
        id: "3-1",
        title: "Introduction to Cloud Computing",
        duration: "18:00",
        youtubeVideoId: "M988_fsOSWo",
        transcript: "Cloud computing has transformed how we build and deploy applications. This lesson introduces the fundamental concepts of cloud computing.",
        order: 1
      },
      {
        id: "3-2",
        title: "IaaS, PaaS, and SaaS",
        duration: "22:00",
        youtubeVideoId: "M988_fsOSWo",
        transcript: "Understanding the different service models is essential for making informed architectural decisions.",
        order: 2
      }
    ],
    enrolledCount: 12300,
    rating: 4.7
  },
  {
    id: "4",
    slug: "microservices-architecture",
    title: "Microservices Architecture Patterns",
    description: "Deep dive into microservices architecture. Learn patterns for service decomposition, inter-service communication, data management, and deployment strategies.",
    shortDescription: "Master microservices patterns and distributed systems.",
    level: "Advanced",
    duration: "10 hours",
    lessonsCount: 18,
    isFree: false,
    topics: ["Microservices", "Architecture", "Distributed Systems"],
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    instructor: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      title: "Principal Software Architect"
    },
    lessons: [
      {
        id: "4-1",
        title: "Monolith to Microservices",
        duration: "25:00",
        youtubeVideoId: "lL_j7ilk7rc",
        transcript: "Learn the journey from monolithic to microservices architecture, including when and why to make the transition.",
        order: 1
      }
    ],
    enrolledCount: 6890,
    rating: 4.9
  },
  {
    id: "5",
    slug: "typescript-fundamentals",
    title: "TypeScript Fundamentals",
    description: "Learn TypeScript from the ground up. Understand type systems, interfaces, generics, and how TypeScript improves JavaScript development.",
    shortDescription: "Master TypeScript for better JavaScript development.",
    level: "Beginner",
    duration: "5 hours",
    lessonsCount: 10,
    isFree: true,
    topics: ["TypeScript", "JavaScript", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
    instructor: {
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      title: "Senior Frontend Engineer"
    },
    lessons: [
      {
        id: "5-1",
        title: "Why TypeScript?",
        duration: "10:00",
        youtubeVideoId: "zQnBQ4tB3ZA",
        transcript: "Discover why TypeScript has become the preferred choice for large-scale JavaScript applications.",
        order: 1
      },
      {
        id: "5-2",
        title: "Basic Types",
        duration: "18:00",
        youtubeVideoId: "zQnBQ4tB3ZA",
        transcript: "Learn about primitive types, arrays, tuples, and enums in TypeScript.",
        order: 2
      }
    ],
    enrolledCount: 22100,
    rating: 4.8
  },
  {
    id: "6",
    slug: "docker-containerization",
    title: "Docker & Containerization",
    description: "Master containerization with Docker. Learn to build, ship, and run applications in containers. Covers Docker Compose, networking, and orchestration basics.",
    shortDescription: "Containerize applications with Docker best practices.",
    level: "Intermediate",
    duration: "7 hours",
    lessonsCount: 14,
    isFree: false,
    topics: ["Docker", "DevOps", "Containers"],
    thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop",
    instructor: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      title: "DevOps Engineer"
    },
    lessons: [
      {
        id: "6-1",
        title: "Container Fundamentals",
        duration: "20:00",
        youtubeVideoId: "pg19Z8LL06w",
        transcript: "Understand what containers are and how they differ from virtual machines.",
        order: 1
      }
    ],
    enrolledCount: 9500,
    rating: 4.6
  }
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};

export const getLessonById = (courseSlug: string, lessonId: string): { course: Course; lesson: Lesson } | undefined => {
  const course = getCourseBySlug(courseSlug);
  if (!course) return undefined;
  
  const lesson = course.lessons.find(l => l.id === lessonId);
  if (!lesson) return undefined;
  
  return { course, lesson };
};

export const topics = ["All", "Databases", "APIs", "Cloud", "DevOps", "Frontend", "Backend", "Architecture", "TypeScript", "Docker"];
export const levels = ["All", "Beginner", "Intermediate", "Advanced"];
