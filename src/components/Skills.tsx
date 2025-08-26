export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 75 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "FastAPI", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      title: "Base de Datos",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 70 },
        { name: "Prisma", level: 82 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      title: "DevOps & Herramientas",
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 78 },
        { name: "Linux", level: 82 },
        { name: "Vercel", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-foreground/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones completas y escalables
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-background rounded-2xl p-8 shadow-lg border border-foreground/10 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-foreground/60">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-foreground/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Otras Competencias
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Metodologías Ágiles',
                'Arquitectura de Software',
                'Testing (Jest, Cypress)',
                'Microservicios',
                'WebSockets',
                'OAuth & JWT',
                'Performance Optimization',
                'SEO',
                'Responsive Design',
                'Accesibilidad Web'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full text-sm font-medium text-foreground hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
