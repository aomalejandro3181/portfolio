export interface Project {
    title: string;
    slug: string;
    role: string;
    year: string;
    type: string;
    description: string;
    problem: string;
    solution: string;
    architecture?: Architecture;
    technicalChallenges?: TechnicalChallenge[];
    image: string;
    setImages: string[];
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
    diagram: boolean;
}

export interface TechnicalChallenge {
    title: string;
    icon: string;
    description: string | { challenger?: string; solution?: string }[];
}
  
export interface Architecture {
    frontend: string;
    backend: string;
    diagram: boolean;
}

// Internal raw data structure with bilingual support
interface BilingualProject {
    title: string;
    slug: string;
    role: string;
    year: string;
    type: string;
    description: { en: string; es: string };
    problem: { en: string; es: string };
    solution: { en: string; es: string };
    architecture?: {
      frontend: { en: string; es: string };
      backend: { en: string; es: string };
    };
    technicalChallenges?: {
        title: { en: string; es: string };
        icon: string;
        description: { en: string; es: string } | { challenger?: { en: string; es: string }; solution?: { en: string; es: string } }[];
    }[];
    image: string;
    setImages: string[];
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
    diagram: boolean;
}

const rawProjects: BilingualProject[] = [
    {
        title: "Äbasto",
        slug: "abasto",
        role: "Full-Stack Developer",
        year: "2026",
        type: "SaaS Multi-tenant",
        description: {
            es: "SaaS multi-tenant para gestión de bodegas con inventario, POS, compras, cuentas por pagar y control de acceso por roles.",
            en: "Multi-tenant SaaS for warehouse management with inventory, POS, purchasing, accounts payable, and role-based access control."
        },
        problem: {
            es: "Las bodegas pequeñas y medianas gestionan inventario, ventas, compras y cuentas por pagar con herramientas dispersas o manuales, sin control de acceso por rol ni visibilidad centralizada cuando operan varias bodegas.",
            en: "Small and medium warehouses manage inventory, sales, purchasing, and accounts payable using scattered or manual tools, lacking role-based access control and centralized visibility across multiple warehouses."
        },
        solution: {
            es: "Plataforma modular multi-tenant con API NestJS y dashboard Next.js. Integra un POS con carrito transaccional, control de inventario con alertas, gestión de proveedores y administración centralizada para el SuperAdmin.",
            en: "Modular multi-tenant platform with a NestJS API and Next.js dashboard. It integrates a POS with a transactional cart, inventory control with alerts, supplier management, and centralized administration for the SuperAdmin."
        },
        architecture: {
          frontend: {
            es: "Next.js 16 (App Router) con manejo de estado en Zustand e interfaces construidas con Tailwind CSS v4 y shadcn.",
            en: "Next.js 16 (App Router) with state management in Zustand and interfaces built with Tailwind CSS v4 and shadcn."
          },
          backend: {
            es: "NestJS 11 + TypeORM. Manejo de Rate Limiting global (@nestjs/throttler) y endpoints protegidos con JWT.",
            en: "NestJS 11 + TypeORM. Global Rate Limiting (@nestjs/throttler) management and endpoints protected with JWT."
          },
        },
        technicalChallenges: [
          {
            title: {
                es: "Aislamiento de Datos Nivel DB (PostgreSQL RLS)",
                en: "DB-Level Data Isolation (PostgreSQL RLS)"
            },
            icon: "ShieldAlert", 
            description: [
              {
                challenger: {
                    es: '¿Cómo asegurar que una bodega no vea los datos de otra sin saturar la lógica de la aplicación?',
                    en: 'How to ensure one warehouse cannot see another\'s data without cluttering the application logic?'
                }
              },
              {
                solution: {
                    es: 'Implementé Row-Level Security (RLS) en PostgreSQL. A través de un JwtAuthGuard en NestJS, inyecto variables de sesión SET LOCAL para que la base de datos filtre los registros automáticamente. Seguridad infranqueable.',
                    en: 'I implemented Row-Level Security (RLS) in PostgreSQL. Through a JwtAuthGuard in NestJS, I inject SET LOCAL session variables so the database automatically filters records. Unbreakable security.'
                }
              }
            ]
          },
          {
            title: {
                es: "Subdominios Multi-tenant Dinámicos",
                en: "Dynamic Multi-tenant Subdomains"
            },
            icon: "Globe",
            description: [
              {
                challenger: {
                    es: 'Asignar a cada cliente una URL única (ej. `mistienda.abasto.com`).',
                    en: 'Assign a unique URL to each client (e.g. `mystore.abasto.com`).'
                },
                solution: {
                    es: 'Creé un proxy personalizado en Next.js que extrae el subdominio del `Host` y reescribe la ruta a `/store/[subdomain]`. Se incluye validación server-side decodificando el JWT para evitar accesos no autorizados.',
                    en: 'I created a custom Next.js proxy that extracts the subdomain from the `Host` and rewrites the route to `/store/[subdomain]`. Includes server-side validation by decoding the JWT to prevent unauthorized access.'
                }
              }
            ]
          },
          {
            title: {
                es: "Motor de Suscripciones y Bloqueos",
                en: "Subscription Engine and Lockouts"
            },
            icon: "Lock",
            description: {
                es: "Desarrollo de un sistema SaaS completo con periodos de gracia. Backend: Un `SubscriptionGuard` bloquea operaciones de escritura (POST/PUT) y un Cron Job diario verifica expiraciones. Frontend: Pantallas de bloqueo (Lock Screens) en el POS y banners de alerta integrados en el Dashboard si la suscripción está por vencer.",
                en: "Developed a complete SaaS system with grace periods. Backend: A `SubscriptionGuard` blocks write operations (POST/PUT) and a daily Cron Job checks expirations. Frontend: Lock Screens in the POS and integrated alert banners in the Dashboard if the subscription is about to expire."
            }
          },
          {
            title: {
                es: "Notificaciones Multicanal",
                en: "Multi-channel Notifications"
            },
            icon: "Bell",
            description: {
                es: "Integración del SDK de Resend para emails transaccionales HTML (recibos, expiración, reseteo de contraseñas) y generación de enlaces dinámicos a WhatsApp para soporte y recordatorios de pago.",
                en: "Integration of the Resend SDK for HTML transactional emails (receipts, expiration, password reset) and dynamic WhatsApp link generation for support and payment reminders."
            }
          }
        ],
        image: "/images/Abasto.png",
        setImages: [
          "/images/abasto-1.png",
          "/images/abasto-2.png",
          "/images/abasto-3.png",
          "/images/abasto-4.png",
          "/images/abasto-5.png"
        ],
        technologies: ["NestJS", "Next.js 16", "PostgreSQL", "TypeORM", "Zustand", "Tailwind CSS", "JWT", "RLS"],
        liveUrl: "https://abasto-seven.vercel.app",
        githubUrl: "#",
        featured: true,
        diagram: true,
      },
      {
        title: "Si Presto!",
        slug: "si-presto",
        role: "Mobile & Backend Developer",
        year: "2026",
        type: "Mobile App (Fintech)",
        description: {
            es: "Aplicación móvil para el seguimiento y control de préstamos informales y deudas, con cálculo automático de saldos y alertas.",
            en: "Mobile application for tracking and controlling informal loans and debts, with automatic balance calculation and alerts."
        },
        problem: {
            es: "Las personas que realizan préstamos informales dependen de libretas o Excel para cobrar, lo que causa pérdidas por olvidos, falta de claridad en las cuentas y procesos manuales para enviar estados de cuenta.",
            en: "People making informal loans rely on notebooks or Excel to collect, causing losses due to forgetfulness, lack of account clarity, and manual processes to send account statements."
        },
        solution: {
            es: "Aplicación nativa con Flutter y Firebase que permite registrar deudores, abonos y cuotas en tiempo real. Genera reportes automatizados en PDF y gestiona notificaciones de cobro sin configuraciones complejas.",
            en: "Native application using Flutter and Firebase that allows registering debtors, payments, and installments in real time. It generates automated PDF reports and manages collection notifications without complex configurations."
        },
        architecture: {
            frontend: {
                es: "Aplicación móvil construida en Flutter con una arquitectura limpia basada en Riverpod para la gestión de estado global y UI responsiva.",
                en: "Mobile application built in Flutter with a clean architecture based on Riverpod for global state management and responsive UI."
            },
            backend: {
                es: "Firebase Auth para credenciales seguras, Cloud Firestore para sincronización offline/online en tiempo real y Firebase Storage.",
                en: "Firebase Auth for secure credentials, Cloud Firestore for real-time offline/online synchronization, and Firebase Storage."
            }
        },
        technicalChallenges: [
            {
            title: {
                es: "Sincronización Offline y Consistencia",
                en: "Offline Synchronization and Consistency"
            },
            icon: "wifi-off",
            description: {
                es: "Configuración de la persistencia nativa de Firestore para permitir el uso de la app en zonas con baja conectividad en Venezuela, garantizando que los cobros locales se sincronicen sin duplicar saldos al recuperar la red.",
                en: "Configuration of native Firestore persistence to allow app usage in low connectivity areas in Venezuela, ensuring local collections synchronize without duplicating balances upon network recovery."
            }
            },
            {
            title: {
                es: "Generación Dinámica de PDF Nativos",
                en: "Dynamic Native PDF Generation"
            },
            icon: "file-text",
            description: {
                es: "Diseño e implementación de un motor de renderizado de estados de cuenta transaccionales en formato PDF directamente desde el dispositivo, optimizando el uso de memoria en teléfonos de gama baja.",
                en: "Design and implementation of a transactional account statement rendering engine in PDF format directly from the device, optimizing memory usage on low-end phones."
            }
            },
            {
            title: {
                es: "Monetización Inteligente con AdMob",
                en: "Smart Monetization with AdMob"
            },
            icon: "dollar-sign",
            description: {
                es: "Integración estratégica de anuncios (banners y de recompensa) cuidando la experiencia de usuario (UX) para asegurar la rentabilidad de la aplicación sin frustrar el flujo diario del cobrador.",
                en: "Strategic integration of ads (banners and rewarded) mindful of user experience (UX) to ensure application profitability without frustrating the collector's daily flow."
            }
            }
        ],
        image: "/images/Si-presto.png",
        setImages: [
            "/images/Si-presto-1.jpeg",
            "/images/Si-presto-2.jpeg",
            "/images/Si-presto-3.jpeg",
        ],
        technologies: ["Flutter", "Riverpod", "Firebase", "Firestore", "Cloud Functions", "AdMob"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
        diagram: false,
    }
];

export const getProjects = (lang: 'en' | 'es'): Project[] => {
    return rawProjects.map((p) => {
        let techChallenges: TechnicalChallenge[] | undefined;
        if (p.technicalChallenges) {
            techChallenges = p.technicalChallenges.map(tc => {
                let description: string | { challenger?: string; solution?: string }[];
                if (Array.isArray(tc.description)) {
                    description = tc.description.map(item => ({
                        challenger: item.challenger ? item.challenger[lang] : undefined,
                        solution: item.solution ? item.solution[lang] : undefined
                    }));
                } else {
                    description = tc.description[lang];
                }
                return {
                    title: tc.title[lang],
                    icon: tc.icon,
                    description
                };
            });
        }

        return {
            title: p.title,
            slug: p.slug,
            role: p.role,
            year: p.year,
            type: p.type,
            description: p.description[lang],
            problem: p.problem[lang],
            solution: p.solution[lang],
            architecture: p.architecture ? {
                frontend: p.architecture.frontend[lang],
              backend: p.architecture.backend[lang],
              diagram: p.diagram
            } : undefined,
            technicalChallenges: techChallenges,
            image: p.image,
            setImages: p.setImages,
            technologies: p.technologies,
            liveUrl: p.liveUrl,
            githubUrl: p.githubUrl,
            featured: p.featured
            ,
            diagram: p.diagram
        };
    });
};

// Default export or fallback
export const projects = getProjects('en');