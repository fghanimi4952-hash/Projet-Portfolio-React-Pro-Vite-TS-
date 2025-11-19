import { Helmet } from "react-helmet-async";
import { experiences } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Experience() {
  return (
    <motion.section 
      className="space-y-8 md:space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>Parcours Professionnel — Portfolio</title>
        <meta name="description" content="Mon parcours professionnel en tant que professeure d'informatique." />
      </Helmet>
      
      <motion.div 
        className="space-y-2 md:space-y-3"
        variants={itemVariants}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 glass border border-primary/30">
            <Briefcase className="w-6 h-6 md:w-10 md:h-10 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight gradient-text">Parcours Professionnel</h1>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              Mon expérience professionnelle dans l'enseignement
            </p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4 md:space-y-6">
        {experiences
          .sort((a, b) => {
            // Trier par date décroissante (plus récent en premier)
            const dateA = a.end || a.start;
            const dateB = b.end || b.start;
            return dateB.localeCompare(dateA);
          })
          .map((exp) => (
          <motion.div
            key={exp.title + exp.start}
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader className="p-4 md:p-6">
                <div className="flex flex-col gap-3 md:gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <Badge variant="outline" className="rounded-full text-xs">
                          {fmt(exp.start)} — {fmt(exp.end)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6 pt-0">
                {exp.description && (
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">{exp.description}</p>
                )}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 md:mb-3 text-foreground text-sm md:text-base">Responsabilités</h4>
                    <ul className="space-y-1.5 md:space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
                          <span className="text-primary mt-1 md:mt-1.5 text-sm md:text-base">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 md:mb-3 text-foreground text-sm md:text-base">Réalisations</h4>
                    <ul className="space-y-1.5 md:space-y-2">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
                          <span className="text-primary mt-1 md:mt-1.5">✓</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
