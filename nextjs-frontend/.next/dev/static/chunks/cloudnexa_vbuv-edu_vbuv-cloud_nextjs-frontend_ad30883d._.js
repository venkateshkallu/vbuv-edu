(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/data/courses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courses",
    ()=>courses,
    "getCourseBySlug",
    ()=>getCourseBySlug,
    "getLessonById",
    ()=>getLessonById,
    "levels",
    ()=>levels,
    "topics",
    ()=>topics
]);
const courses = [
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
        topics: [
            "Databases",
            "SQL",
            "Data Modeling"
        ],
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
        topics: [
            "APIs",
            "REST",
            "Backend",
            "Security"
        ],
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
        topics: [
            "Cloud",
            "Architecture",
            "DevOps"
        ],
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
        topics: [
            "Microservices",
            "Architecture",
            "Distributed Systems"
        ],
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
        topics: [
            "TypeScript",
            "JavaScript",
            "Frontend"
        ],
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
        topics: [
            "Docker",
            "DevOps",
            "Containers"
        ],
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
    },
    {
        id: "7",
        slug: "react-advanced-patterns",
        title: "Advanced React Patterns",
        description: "Master advanced React patterns and techniques. Learn about render props, higher-order components, hooks patterns, and performance optimization strategies.",
        shortDescription: "Advanced React patterns for scalable applications.",
        level: "Advanced",
        duration: "6 hours",
        lessonsCount: 12,
        isFree: false,
        topics: [
            "React",
            "Frontend",
            "JavaScript"
        ],
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
        instructor: {
            name: "Sarah Kim",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
            title: "Senior React Developer"
        },
        lessons: [
            {
                id: "7-1",
                title: "Advanced Hook Patterns",
                duration: "22:00",
                youtubeVideoId: "dpw9EHDh2bM",
                transcript: "Explore advanced patterns with React hooks including custom hooks, useReducer patterns, and context optimization.",
                order: 1
            }
        ],
        enrolledCount: 7200,
        rating: 4.9
    }
];
const getCourseBySlug = (slug)=>{
    return courses.find((course)=>course.slug === slug);
};
const getLessonById = (courseSlug, lessonId)=>{
    const course = getCourseBySlug(courseSlug);
    if (!course) return undefined;
    const lesson = course.lessons.find((l)=>l.id === lessonId);
    if (!lesson) return undefined;
    return {
        course,
        lesson
    };
};
const topics = [
    "All",
    "Databases",
    "APIs",
    "Cloud",
    "DevOps",
    "Frontend",
    "Backend",
    "Architecture",
    "TypeScript",
    "Docker"
];
const levels = [
    "All",
    "Beginner",
    "Intermediate",
    "Advanced"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/scroll-area.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/scroll-area.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/scroll-area.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/scroll-area.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/scroll-area.tsx",
            lineNumber: 33,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/scroll-area.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollArea$React.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollArea");
__turbopack_context__.k.register(_c2, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/hooks/use-mobile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener("change", onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener("change", onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/sticky-note.js [app-client] (ecmascript) <export default as StickyNote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/hooks/use-mobile.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const LessonSidebar = ({ course, currentLessonId, variant = 'default', isOpen = true, onToggle })=>{
    _s();
    const isBlueTheme = variant === 'blue';
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [isLessonsExpanded, setIsLessonsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isOpen);
    // Handle responsive behavior
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LessonSidebar.useEffect": ()=>{
            if (isMobile) {
                setIsVisible(isOpen);
            } else {
                setIsVisible(true);
            }
        }
    }["LessonSidebar.useEffect"], [
        isMobile,
        isOpen
    ]);
    // Handle escape key for mobile overlay
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LessonSidebar.useEffect": ()=>{
            const handleEscape = {
                "LessonSidebar.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape' && isMobile && isVisible && onToggle) {
                        onToggle();
                    }
                }
            }["LessonSidebar.useEffect.handleEscape"];
            if (isMobile && isVisible) {
                document.addEventListener('keydown', handleEscape);
                // Prevent body scroll when sidebar is open on mobile
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "LessonSidebar.useEffect": ()=>{
                    document.removeEventListener('keydown', handleEscape);
                    document.body.style.overflow = '';
                }
            })["LessonSidebar.useEffect"];
        }
    }["LessonSidebar.useEffect"], [
        isMobile,
        isVisible,
        onToggle
    ]);
    // Progress indicator component (used in lesson items)
    const ProgressIndicator = ({ progress, isBlue = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-2 rounded-full overflow-hidden", isBlue ? "bg-blue-200" : "bg-muted"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full transition-all duration-500 ease-out", isBlue ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-blue-shadow-sm" : "bg-primary"),
                style: {
                    width: `${Math.max(0, Math.min(100, progress))}%`
                }
            }, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
            lineNumber: 59,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    // Helper functions to get theme-specific classes
    const getContainerClasses = ()=>{
        const baseClasses = "border-r flex flex-col h-full transition-all duration-300 ease-out";
        const themeClasses = isBlueTheme ? "border-blue-200 bg-blue-50" : "border-border bg-card";
        if (isMobile) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 left-0 z-50 w-80 transform transition-transform duration-300 ease-out", themeClasses, isVisible ? "translate-x-0" : "-translate-x-full", isBlueTheme && "shadow-blue-shadow-xl");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-80", baseClasses, themeClasses, // Desktop responsive breakpoints
        "lg:w-80 xl:w-96", "md:w-72");
    };
    const getOverlayClasses = ()=>{
        if (!isMobile || !isVisible) return "hidden";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-40 transition-opacity duration-300 ease-out", isBlueTheme ? "bg-blue-900/50 backdrop-blur-sm" : "bg-black/50 backdrop-blur-sm");
    };
    const getMobileToggleButtonClasses = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-4 left-4 z-50 p-2 rounded-lg transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-offset-2", isBlueTheme ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300 shadow-blue-shadow-md hover:shadow-blue-shadow-lg" : "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary");
    const getLessonsSectionHeaderClasses = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between cursor-pointer transition-all duration-200 w-full text-left", "focus:outline-none focus:ring-2 focus:ring-offset-2", isBlueTheme ? "bg-blue-600 text-white hover:bg-blue-700 border-b border-blue-500 focus:ring-blue-300" : "bg-muted text-foreground hover:bg-muted/80 focus:ring-primary", // Touch-optimized padding for mobile
        isMobile ? "p-4" : "p-3");
    const getLessonItemClasses = (isActive)=>{
        const baseClasses = "flex items-start gap-3 p-3 rounded-lg transition-all duration-200 border border-transparent group cursor-pointer";
        // Touch-optimized spacing for mobile
        const mobileClasses = isMobile ? "p-4 gap-4 min-h-[60px]" : "p-3 gap-3";
        if (isBlueTheme) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, mobileClasses, isActive ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-blue-shadow-lg border-blue-500 transform scale-[1.02]" : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:border-blue-200 hover:shadow-blue-shadow-md hover:transform hover:scale-[1.01]", // Enhanced touch interactions for mobile
            isMobile && "active:scale-[0.98] active:shadow-blue-shadow-sm");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, mobileClasses, isActive ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50", isMobile && "active:scale-[0.98]");
    };
    const getIconClasses = (isCompleted, isActive)=>{
        const baseClasses = "h-5 w-5 transition-all duration-200";
        if (isCompleted) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, isBlueTheme ? "text-blue-600 drop-shadow-sm hover:text-blue-700 hover:scale-110" : "text-emerald-500");
        }
        if (isActive) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, isBlueTheme ? "text-white drop-shadow-sm animate-pulse" : "text-primary");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, isBlueTheme ? "text-blue-400 hover:text-blue-600 hover:scale-105" : "text-muted-foreground");
    };
    const getLessonTitleClasses = (isActive)=>{
        const baseClasses = "text-sm font-medium line-clamp-2 transition-colors duration-200";
        if (isBlueTheme) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, isActive ? "text-white" : "text-blue-800");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, isActive ? "text-primary" : "text-foreground");
    };
    const getLessonDurationClasses = (isActive)=>{
        const baseClasses = "text-xs mt-1 transition-colors duration-200";
        if (isBlueTheme) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, isActive ? "text-blue-100" : "text-blue-600");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, "text-muted-foreground");
    };
    const getExpandIconClasses = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform duration-200", isBlueTheme ? "text-white" : "text-foreground");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: getOverlayClasses(),
                onClick: onToggle,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isMobile && !isVisible && onToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: onToggle,
                className: getMobileToggleButtonClasses(),
                size: "sm",
                "aria-label": "Open sidebar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                    lineNumber: 227,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                lineNumber: 221,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: getContainerClasses(),
                children: [
                    isMobile && onToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onToggle,
                        variant: "ghost",
                        size: "sm",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-2 right-2 z-10 p-2 transition-all duration-200", isBlueTheme ? "text-blue-600 hover:text-blue-700 hover:bg-blue-100" : "text-muted-foreground hover:text-foreground hover:bg-muted"),
                        "aria-label": "Close sidebar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: getLessonsSectionHeaderClasses(),
                                    onClick: ()=>setIsLessonsExpanded(!isLessonsExpanded),
                                    "aria-expanded": isLessonsExpanded,
                                    "aria-controls": "lessons-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold", isMobile ? "text-base" : "text-sm"),
                                                children: [
                                                    "Lessons (",
                                                    course.lessons.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: getExpandIconClasses(),
                                            children: isLessonsExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                isLessonsExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2", isMobile && "p-3"),
                                    id: "lessons-content",
                                    children: course.lessons.map((lesson, index)=>{
                                        const isActive = lesson.id === currentLessonId;
                                        const isCompleted = lesson.completed;
                                        const lessonProgress = isCompleted ? 100 : isActive ? 50 : 0; // Mock progress
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/courses/${course.slug}/lesson/${lesson.id}`,
                                            className: getLessonItemClasses(isActive),
                                            onClick: isMobile && onToggle ? onToggle : undefined,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 relative",
                                                    children: (()=>{
                                                        if (isCompleted) {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: getIconClasses(isCompleted, isActive)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                        lineNumber: 298,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    isBlueTheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                        lineNumber: 300,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        }
                                                        if (isActive) {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                                        className: getIconClasses(isCompleted, isActive)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                        lineNumber: 308,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    isBlueTheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                        lineNumber: 310,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        }
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                            className: getIconClasses(isCompleted, isActive)
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 34
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })()
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0 space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(getLessonTitleClasses(isActive), isMobile && "text-base" // Larger text on mobile
                                                                    ),
                                                                    children: [
                                                                        index + 1,
                                                                        ". ",
                                                                        lesson.title
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                isBlueTheme && isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                                    className: "h-3 w-3 text-blue-600 flex-shrink-0 ml-2 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-3 w-3", isBlueTheme ? isActive ? "text-blue-100" : "text-blue-500" : "text-muted-foreground")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: getLessonDurationClasses(isActive),
                                                                    children: lesson.duration
                                                                }, void 0, false, {
                                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isBlueTheme && (isActive || isCompleted) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressIndicator, {
                                                                progress: lessonProgress,
                                                                isBlue: !isActive
                                                            }, void 0, false, {
                                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, lesson.id, true, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                            lineNumber: 287,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                isBlueTheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between cursor-pointer transition-all duration-200 group", "bg-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 border-b border-blue-500", "hover:shadow-blue-shadow-md hover:transform hover:scale-[1.01]", "focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2", isMobile ? "p-4 active:scale-[0.98]" : "p-3"),
                                            tabIndex: 0,
                                            role: "button",
                                            "aria-label": "Access resources and forums",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                            className: "h-4 w-4 group-hover:scale-110 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold group-hover:text-blue-50 transition-colors", isMobile ? "text-base" : "text-sm"),
                                                            children: "Resources & Forums"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-4 w-4 group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between cursor-pointer transition-all duration-200 group", "bg-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 border-b border-blue-500", "hover:shadow-blue-shadow-md hover:transform hover:scale-[1.01]", "focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2", isMobile ? "p-4 active:scale-[0.98]" : "p-3"),
                                            tabIndex: 0,
                                            role: "button",
                                            "aria-label": "View assignments",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "h-4 w-4 group-hover:scale-110 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold group-hover:text-blue-50 transition-colors", isMobile ? "text-base" : "text-sm"),
                                                            children: "Assignments"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-4 w-4 group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between cursor-pointer transition-all duration-200 group", "bg-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 border-b border-blue-500", "hover:shadow-blue-shadow-md hover:transform hover:scale-[1.01]", "focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2", isMobile ? "p-4 active:scale-[0.98]" : "p-3"),
                                            tabIndex: 0,
                                            role: "button",
                                            "aria-label": "Browse gallery",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                            className: "h-4 w-4 group-hover:scale-110 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold group-hover:text-blue-50 transition-colors", isMobile ? "text-base" : "text-sm"),
                                                            children: "Gallery"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-4 w-4 group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between cursor-pointer transition-all duration-200 group", "bg-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 border-b border-blue-500", "hover:shadow-blue-shadow-md hover:transform hover:scale-[1.01]", "focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2", isMobile ? "p-4 active:scale-[0.98]" : "p-3"),
                                            tabIndex: 0,
                                            role: "button",
                                            "aria-label": "Access notes",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__["StickyNote"], {
                                                            className: "h-4 w-4 group-hover:scale-110 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold group-hover:text-blue-50 transition-colors", isMobile ? "text-base" : "text-sm"),
                                                            children: "Notes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-4 w-4 group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between cursor-pointer transition-all duration-200 group", "bg-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700", "hover:shadow-blue-shadow-md hover:transform hover:scale-[1.01]", "focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2", isMobile ? "p-4 active:scale-[0.98]" : "p-3"),
                                            tabIndex: 0,
                                            role: "button",
                                            "aria-label": "View frequently asked questions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                                            className: "h-4 w-4 group-hover:scale-110 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold group-hover:text-blue-50 transition-colors", isMobile ? "text-base" : "text-sm"),
                                                            children: "FAQ's"
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-4 w-4 group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                                            lineNumber: 445,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(LessonSidebar, "Sk7fJsyCbHxSwsujTBu0rScpxsQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = LessonSidebar;
const __TURBOPACK__default__export__ = LessonSidebar;
var _c;
__turbopack_context__.k.register(_c, "LessonSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const VideoPlayer = ({ videoId, title })=>{
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFallback, setShowFallback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [retryCount, setRetryCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Debug logging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPlayer.useEffect": ()=>{
            console.log('VideoPlayer mounted with videoId:', videoId, 'title:', title);
        }
    }["VideoPlayer.useEffect"], [
        videoId,
        title
    ]);
    // Validate videoId to ensure it's not empty
    if (!videoId || videoId.trim() === '') {
        console.log('VideoPlayer: Invalid videoId provided');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full aspect-video rounded-xl overflow-hidden bg-blue-50 shadow-blue-lg flex items-center justify-center border border-blue-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-12 w-12 text-blue-400 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-600 font-medium",
                        children: "Video not available"
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-blue-500 mt-2",
                        children: [
                            "Video ID: ",
                            videoId || 'undefined'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Set a timeout to show fallback if video doesn't load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPlayer.useEffect": ()=>{
            const timer = setTimeout({
                "VideoPlayer.useEffect.timer": ()=>{
                    if (isLoading && !hasError) {
                        console.log('VideoPlayer: Timeout reached, showing fallback');
                        setShowFallback(true);
                        setIsLoading(false);
                    }
                }
            }["VideoPlayer.useEffect.timer"], 8000); // 8 second timeout
            return ({
                "VideoPlayer.useEffect": ()=>clearTimeout(timer)
            })["VideoPlayer.useEffect"];
        }
    }["VideoPlayer.useEffect"], [
        isLoading,
        hasError,
        retryCount
    ]);
    const handleLoad = ()=>{
        console.log('VideoPlayer: iframe loaded successfully');
        setIsLoading(false);
        setHasError(false);
        setShowFallback(false);
    };
    const handleError = (error)=>{
        console.log('VideoPlayer: iframe error occurred', error);
        setIsLoading(false);
        setHasError(true);
        setShowFallback(false);
    };
    const resetPlayer = ()=>{
        console.log('VideoPlayer: Resetting player, retry count:', retryCount + 1);
        setHasError(false);
        setIsLoading(true);
        setShowFallback(false);
        setRetryCount((prev)=>prev + 1);
        // Force iframe reload
        if (iframeRef.current) {
            const src = iframeRef.current.src;
            iframeRef.current.src = '';
            setTimeout(()=>{
                if (iframeRef.current) {
                    iframeRef.current.src = src;
                }
            }, 100);
        }
    };
    // Get the current origin safely
    const getOrigin = ()=>{
        if (typeof globalThis !== 'undefined' && globalThis.window) {
            return globalThis.window.location.origin;
        }
        return '';
    };
    // Build YouTube URL with privacy-enhanced mode and additional parameters
    const getYouTubeUrl = ()=>{
        const baseUrl = 'https://www.youtube-nocookie.com/embed';
        const params = new URLSearchParams({
            rel: '0',
            modestbranding: '1',
            enablejsapi: '1',
            origin: getOrigin(),
            autoplay: '0',
            controls: '1',
            disablekb: '0',
            fs: '1',
            iv_load_policy: '3',
            playsinline: '1',
            start: '0'
        });
        const url = `${baseUrl}/${videoId}?${params.toString()}`;
        console.log('VideoPlayer: Generated YouTube URL:', url);
        return url;
    };
    // Fallback or error state
    if (hasError || showFallback) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full aspect-video rounded-xl overflow-hidden bg-blue-50 shadow-blue-lg flex items-center justify-center border border-blue-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-8 max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-12 w-12 text-blue-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-blue-800 mb-2 font-times",
                        children: hasError ? "Video Failed to Load" : "Video Loading Issue"
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-600 mb-4 text-sm font-times",
                        children: hasError ? "There was an error loading this video. This might be due to network issues or video restrictions." : "The video is taking longer than expected to load. You can try refreshing or watch directly on YouTube."
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-500 mb-4 text-xs",
                        children: [
                            "Video ID: ",
                            videoId,
                            " | Retry Count: ",
                            retryCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resetPlayer,
                                className: "inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-blue-md hover:shadow-blue-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Try Again"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://www.youtube.com/watch?v=${videoId}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1",
                                    children: [
                                        "Watch on YouTube",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full aspect-video rounded-xl overflow-hidden bg-blue-50 shadow-blue-lg border border-blue-200",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50/90 via-white/80 to-blue-100/90 backdrop-blur-sm z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "h-12 w-12 text-blue-600 mx-auto animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20 animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-blue-700 font-medium font-times",
                            children: "Loading video..."
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-blue-500 mt-1",
                            children: [
                                "Video ID: ",
                                videoId
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                ref: iframeRef,
                src: getYouTubeUrl(),
                title: title,
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: true,
                className: "absolute inset-0 w-full h-full border-0 rounded-xl",
                loading: "lazy",
                referrerPolicy: "strict-origin-when-cross-origin",
                sandbox: "allow-scripts allow-same-origin allow-presentation allow-forms allow-popups",
                onLoad: handleLoad,
                onError: handleError,
                style: {
                    colorScheme: 'normal',
                    backgroundColor: 'hsl(var(--blue-50))'
                }
            }, `${videoId}-${retryCount}`, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VideoPlayer, "7d7KDDsKFTaLCBvCOdcr/KE1XXo=");
_c = VideoPlayer;
const __TURBOPACK__default__export__ = VideoPlayer;
var _c;
__turbopack_context__.k.register(_c, "VideoPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/TranscriptPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/scroll-area.tsx [app-client] (ecmascript)");
;
;
;
const TranscriptPanel = ({ transcript, variant = "default" })=>{
    const paragraphs = transcript.split('\n\n');
    const cardStyles = variant === "blue" ? {
        backgroundColor: 'white',
        borderColor: 'hsl(var(--blue-200))',
        boxShadow: 'var(--blue-shadow-card)'
    } : {};
    const headerStyles = variant === "blue" ? {
        borderBottomColor: 'hsl(var(--blue-200))'
    } : {};
    const iconStyles = variant === "blue" ? {
        color: 'hsl(var(--blue-600))'
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-card rounded-xl border border-border overflow-hidden ${variant === "blue" ? "focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2" : ""}`,
        style: cardStyles,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border flex items-center gap-2",
                style: headerStyles,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "h-5 w-5 text-primary",
                        style: iconStyles
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/TranscriptPanel.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `font-semibold ${variant === "blue" ? "text-blue-800" : "text-foreground"}`,
                        children: "Transcript"
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/TranscriptPanel.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/TranscriptPanel.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "h-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4",
                    children: paragraphs.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-sm leading-relaxed ${variant === "blue" ? "text-blue-700" : "text-muted-foreground"}`,
                            children: paragraph
                        }, `paragraph-${index}`, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/TranscriptPanel.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/TranscriptPanel.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/TranscriptPanel.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/TranscriptPanel.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TranscriptPanel;
const __TURBOPACK__default__export__ = TranscriptPanel;
var _c;
__turbopack_context__.k.register(_c, "TranscriptPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/textarea.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const NotesPanel = ({ lessonId, variant = "default" })=>{
    _s();
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleSave = ()=>{
        // In a real app, this would save to the backend
        localStorage.setItem(`lesson-notes-${lessonId}`, notes);
        toast({
            title: "Notes saved",
            description: "Your notes have been saved successfully."
        });
    };
    // Load notes on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotesPanel.useEffect": ()=>{
            const savedNotes = localStorage.getItem(`lesson-notes-${lessonId}`);
            if (savedNotes) {
                setNotes(savedNotes);
            }
        }
    }["NotesPanel.useEffect"], [
        lessonId
    ]);
    const cardStyles = variant === "blue" ? {
        backgroundColor: 'white',
        borderColor: 'hsl(var(--blue-200))',
        boxShadow: 'var(--blue-shadow-card)'
    } : {};
    const headerStyles = variant === "blue" ? {
        borderBottomColor: 'hsl(var(--blue-200))'
    } : {};
    const iconStyles = variant === "blue" ? {
        color: 'hsl(var(--blue-600))'
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-card rounded-xl border border-border overflow-hidden ${variant === "blue" ? "focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2" : ""}`,
        style: cardStyles,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border flex items-center justify-between",
                style: headerStyles,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                className: "h-5 w-5 text-primary",
                                style: iconStyles
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `font-semibold ${variant === "blue" ? "text-blue-800" : "text-foreground"}`,
                                children: "My Notes"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        onClick: handleSave,
                        className: `gap-2 ${variant === "blue" ? "bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" : ""}`,
                        style: variant === "blue" ? {
                            backgroundColor: 'hsl(var(--blue-600))',
                            color: 'white'
                        } : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Save"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                    placeholder: "Take notes while watching the lesson...",
                    value: notes,
                    onChange: (e)=>setNotes(e.target.value),
                    className: `min-h-[200px] resize-none bg-background ${variant === "blue" ? "border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" : ""}`,
                    style: variant === "blue" ? {
                        borderColor: 'hsl(var(--blue-200))'
                    } : undefined
                }, void 0, false, {
                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NotesPanel, "pLXWnxtlgOQXeS0grSaUHz8xTvk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = NotesPanel;
const __TURBOPACK__default__export__ = NotesPanel;
var _c;
__turbopack_context__.k.register(_c, "NotesPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant = "default", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground", variant === "default" && "bg-muted", variant === "blue" && "border", className),
        style: variant === "blue" ? {
            backgroundColor: 'hsl(var(--blue-100))',
            borderColor: 'hsl(var(--blue-200))'
        } : undefined,
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TabsList;
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = _s(({ className, variant = "default", ...props }, ref)=>{
    _s();
    const [isActive, setIsActive] = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all duration-200 disabled:pointer-events-none disabled:opacity-50", variant === "default" && "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", variant === "blue" && [
            "data-[state=active]:shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        ], className),
        style: variant === "blue" ? {
            color: isActive ? 'white' : 'hsl(var(--blue-600))',
            backgroundColor: isActive ? 'hsl(var(--blue-600))' : 'transparent',
            boxShadow: isActive ? 'var(--blue-shadow-sm)' : 'none'
        } : undefined,
        onMouseEnter: (e)=>{
            if (variant === "blue") {
                const isCurrentlyActive = e.currentTarget.dataset.state === 'active';
                if (!isCurrentlyActive) {
                    e.currentTarget.style.backgroundColor = 'hsl(var(--blue-50))';
                    e.currentTarget.style.color = 'hsl(var(--blue-700))';
                } else {
                    e.currentTarget.style.backgroundColor = 'hsl(var(--blue-700))';
                    e.currentTarget.style.boxShadow = 'var(--blue-shadow-md)';
                }
            }
        },
        onMouseLeave: (e)=>{
            if (variant === "blue") {
                const isCurrentlyActive = e.currentTarget.dataset.state === 'active';
                if (!isCurrentlyActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'hsl(var(--blue-600))';
                } else {
                    e.currentTarget.style.backgroundColor = 'hsl(var(--blue-600))';
                    e.currentTarget.style.boxShadow = 'var(--blue-shadow-sm)';
                }
            }
        },
        onFocus: (e)=>{
            if (variant === "blue") {
                e.currentTarget.style.outline = 'none';
                e.currentTarget.style.boxShadow = '0 0 0 2px hsl(var(--blue-500))';
            }
        },
        onBlur: (e)=>{
            if (variant === "blue") {
                const isCurrentlyActive = e.currentTarget.dataset.state === 'active';
                e.currentTarget.style.boxShadow = isCurrentlyActive ? 'var(--blue-shadow-sm)' : 'none';
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/tabs.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "OFRYOMGmWDzfQ4dzLF00ag1mHo0=")), "OFRYOMGmWDzfQ4dzLF00ag1mHo0=");
_c3 = TabsTrigger;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, variant = "default", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-background", variant === "default" && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", variant === "blue" && [
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            "focus-visible:ring-blue-500"
        ], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/tabs.tsx",
        lineNumber: 102,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TabsContent;
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TabsList$React.forwardRef");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "TabsTrigger");
__turbopack_context__.k.register(_c4, "TabsContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LessonPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$data$2f$courses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/data/courses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$lesson$2f$LessonSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/LessonSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$lesson$2f$VideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/VideoPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$lesson$2f$TranscriptPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/TranscriptPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$lesson$2f$NotesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/lesson/NotesPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function LessonPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.slug;
    const lessonId = params.lessonId;
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isCompleted, setIsCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$data$2f$courses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLessonById"])(slug || "", lessonId || "");
    if (!result) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-blue-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-blue-800 mb-4",
                        children: "Lesson Not Found"
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        className: "bg-blue-600 hover:bg-blue-700 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/courses",
                            children: "Browse Courses"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    const { course, lesson } = result;
    // Find current lesson index and get prev/next
    const currentIndex = course.lessons.findIndex((l)=>l.id === lesson.id);
    const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < course.lessons.length - 1 ? course.lessons[currentIndex + 1] : null;
    const handleMarkComplete = ()=>{
        setIsCompleted(!isCompleted);
        toast({
            title: isCompleted ? "Marked as incomplete" : "Lesson completed!",
            description: isCompleted ? "You can continue learning at any time." : "Great job! Keep up the momentum."
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        style: {
            backgroundColor: 'hsl(var(--blue-50))'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "h-16 border-b bg-white flex items-center px-4 gap-4 sticky top-0 z-50 shadow-md",
                style: {
                    borderBottomColor: 'hsl(var(--blue-200))',
                    boxShadow: 'var(--blue-shadow-md)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        onClick: ()=>setSidebarOpen(!sidebarOpen),
                        className: "lg:hidden transition-all duration-200 hover:scale-105",
                        style: {
                            color: 'hsl(var(--blue-600))',
                            '--tw-bg-opacity': '0'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = 'hsl(var(--blue-50))';
                            e.currentTarget.style.color = 'hsl(var(--blue-700))';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'hsl(var(--blue-600))';
                        },
                        children: sidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 26
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2 hover:opacity-80 transition-all duration-200 hover:scale-105",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 hover:shadow-lg",
                                style: {
                                    backgroundColor: 'hsl(var(--blue-600))',
                                    boxShadow: 'var(--blue-shadow-sm)'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.backgroundColor = 'hsl(var(--blue-700))';
                                    e.currentTarget.style.boxShadow = 'var(--blue-shadow-md)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.backgroundColor = 'hsl(var(--blue-600))';
                                    e.currentTarget.style.boxShadow = 'var(--blue-shadow-sm)';
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                    className: "h-5 w-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold hidden sm:block transition-colors duration-200",
                                style: {
                                    color: 'hsl(var(--blue-800))',
                                    fontFamily: 'Times New Roman, serif'
                                },
                                children: "VBUV-Cloud"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/courses/${course.slug}`,
                                className: "transition-colors duration-200 hover:underline truncate",
                                style: {
                                    color: 'hsl(var(--blue-600))'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = 'hsl(var(--blue-700))',
                                onMouseLeave: (e)=>e.currentTarget.style.color = 'hsl(var(--blue-600))',
                                children: course.title
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-4 w-4 flex-shrink-0",
                                style: {
                                    color: 'hsl(var(--blue-400))'
                                }
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium truncate",
                                style: {
                                    color: 'hsl(var(--blue-800))'
                                },
                                children: lesson.title
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-medium",
                                style: {
                                    color: 'hsl(var(--blue-600))'
                                },
                                children: [
                                    currentIndex + 1,
                                    " of ",
                                    course.lessons.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-2 rounded-full overflow-hidden",
                                style: {
                                    backgroundColor: 'hsl(var(--blue-100))'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full transition-all duration-300",
                                    style: {
                                        backgroundColor: 'hsl(var(--blue-600))',
                                        width: `${(currentIndex + 1) / course.lessons.length * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: isCompleted ? "default" : "outline",
                        size: "sm",
                        onClick: handleMarkComplete,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("gap-2 transition-all duration-200 hover:scale-105 font-medium", isCompleted ? "shadow-md hover:shadow-lg" : "hover:shadow-md"),
                        style: isCompleted ? {
                            backgroundColor: 'hsl(var(--blue-600))',
                            borderColor: 'hsl(var(--blue-600))',
                            color: 'white',
                            boxShadow: 'var(--blue-shadow-sm)'
                        } : {
                            borderColor: 'hsl(var(--blue-300))',
                            color: 'hsl(var(--blue-600))',
                            backgroundColor: 'transparent'
                        },
                        onMouseEnter: (e)=>{
                            if (isCompleted) {
                                e.currentTarget.style.backgroundColor = 'hsl(var(--blue-700))';
                                e.currentTarget.style.boxShadow = 'var(--blue-shadow-md)';
                            } else {
                                e.currentTarget.style.backgroundColor = 'hsl(var(--blue-50))';
                                e.currentTarget.style.borderColor = 'hsl(var(--blue-400))';
                            }
                        },
                        onMouseLeave: (e)=>{
                            if (isCompleted) {
                                e.currentTarget.style.backgroundColor = 'hsl(var(--blue-600))';
                                e.currentTarget.style.boxShadow = 'var(--blue-shadow-sm)';
                            } else {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.borderColor = 'hsl(var(--blue-300))';
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-all duration-200", isCompleted ? "fill-current text-white" : ""),
                                style: !isCompleted ? {
                                    color: 'hsl(var(--blue-600))'
                                } : {}
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: isCompleted ? "Completed" : "Mark Complete"
                            }, void 0, false, {
                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed lg:relative inset-y-14 left-0 z-40 lg:z-0 transform transition-transform duration-300 lg:translate-x-0", sidebarOpen ? "translate-x-0" : "-translate-x-full"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$lesson$2f$LessonSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            course: course,
                            currentLessonId: lesson.id,
                            variant: "blue",
                            isOpen: sidebarOpen,
                            onToggle: ()=>setSidebarOpen(!sidebarOpen)
                        }, void 0, false, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto p-4 md:p-8 space-y-6 bg-white min-h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$lesson$2f$VideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    videoId: lesson.youtubeVideoId,
                                    title: lesson.title
                                }, void 0, false, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 rounded-lg border",
                                    style: {
                                        backgroundColor: 'hsl(var(--blue-50))',
                                        borderColor: 'hsl(var(--blue-200))'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-2xl md:text-3xl font-bold mb-2 transition-colors duration-200",
                                                    style: {
                                                        color: 'hsl(var(--blue-800))',
                                                        fontFamily: 'Times New Roman, serif'
                                                    },
                                                    children: lesson.title
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium",
                                                            style: {
                                                                color: 'hsl(var(--blue-600))'
                                                            },
                                                            children: [
                                                                "Lesson ",
                                                                currentIndex + 1,
                                                                " of ",
                                                                course.lessons.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "hidden sm:block w-1 h-1 rounded-full",
                                                            style: {
                                                                backgroundColor: 'hsl(var(--blue-400))'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium",
                                                            style: {
                                                                color: 'hsl(var(--blue-600))'
                                                            },
                                                            children: lesson.duration
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "hidden sm:block w-1 h-1 rounded-full",
                                                            style: {
                                                                backgroundColor: 'hsl(var(--blue-400))'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            style: {
                                                                color: 'hsl(var(--blue-500))'
                                                            },
                                                            children: course.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-medium mb-2",
                                                    style: {
                                                        color: 'hsl(var(--blue-600))'
                                                    },
                                                    children: "Course Progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-2 rounded-full overflow-hidden",
                                                    style: {
                                                        backgroundColor: 'hsl(var(--blue-200))'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full rounded-full transition-all duration-300",
                                                        style: {
                                                            backgroundColor: 'hsl(var(--blue-600))',
                                                            width: `${(currentIndex + 1) / course.lessons.length * 100}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs mt-1",
                                                    style: {
                                                        color: 'hsl(var(--blue-500))'
                                                    },
                                                    children: [
                                                        Math.round((currentIndex + 1) / course.lessons.length * 100),
                                                        "% Complete"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                                    defaultValue: "transcript",
                                    className: "w-full blue-tabs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                            variant: "blue",
                                            className: "w-full max-w-md p-1 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                    variant: "blue",
                                                    value: "transcript",
                                                    className: "flex-1 rounded-md font-medium transition-all duration-200",
                                                    children: "Transcript"
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                    variant: "blue",
                                                    value: "notes",
                                                    className: "flex-1 rounded-md font-medium transition-all duration-200",
                                                    children: "My Notes"
                                                }, void 0, false, {
                                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                            variant: "blue",
                                            value: "transcript",
                                            className: "mt-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$lesson$2f$TranscriptPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "blue",
                                                transcript: lesson.transcript
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                            variant: "blue",
                                            value: "notes",
                                            className: "mt-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$lesson$2f$NotesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "blue",
                                                lessonId: lesson.id
                                            }, void 0, false, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between pt-8 border-t",
                                    style: {
                                        borderTopColor: 'hsl(var(--blue-200))'
                                    },
                                    children: [
                                        prevLesson ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            asChild: true,
                                            className: "gap-2 font-medium transition-all duration-200 hover:scale-105 hover:shadow-md",
                                            style: {
                                                borderColor: 'hsl(var(--blue-300))',
                                                color: 'hsl(var(--blue-600))'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.backgroundColor = 'hsl(var(--blue-50))';
                                                e.currentTarget.style.borderColor = 'hsl(var(--blue-400))';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.borderColor = 'hsl(var(--blue-300))';
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/courses/${course.slug}/lesson/${prevLesson.id}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Previous"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this),
                                        nextLesson ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            className: "gap-2 font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg",
                                            style: {
                                                backgroundColor: 'hsl(var(--blue-600))',
                                                color: 'white',
                                                boxShadow: 'var(--blue-shadow-sm)'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.backgroundColor = 'hsl(var(--blue-700))';
                                                e.currentTarget.style.boxShadow = 'var(--blue-shadow-md)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.backgroundColor = 'hsl(var(--blue-600))';
                                                e.currentTarget.style.boxShadow = 'var(--blue-shadow-sm)';
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/courses/${course.slug}/lesson/${nextLesson.id}`,
                                                children: [
                                                    "Next Lesson",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            className: "gap-2 font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg",
                                            style: {
                                                backgroundColor: 'hsl(var(--blue-600))',
                                                color: 'white',
                                                boxShadow: 'var(--blue-shadow-sm)'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.backgroundColor = 'hsl(var(--blue-700))';
                                                e.currentTarget.style.boxShadow = 'var(--blue-shadow-md)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.backgroundColor = 'hsl(var(--blue-600))';
                                                e.currentTarget.style.boxShadow = 'var(--blue-shadow-sm)';
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/courses/${course.slug}`,
                                                children: [
                                                    "Complete Course",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cloudnexa/vbuv-edu/vbuv-cloud/nextjs-frontend/app/courses/[slug]/lesson/[lessonId]/page.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(LessonPage, "+bA5W3QQ8PbC1RYnMnNgvAJox/w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$cloudnexa$2f$vbuv$2d$edu$2f$vbuv$2d$cloud$2f$nextjs$2d$frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = LessonPage;
var _c;
__turbopack_context__.k.register(_c, "LessonPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=cloudnexa_vbuv-edu_vbuv-cloud_nextjs-frontend_ad30883d._.js.map