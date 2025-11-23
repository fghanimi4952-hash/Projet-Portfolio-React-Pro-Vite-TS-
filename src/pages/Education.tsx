import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y] = s.split("-");
  return y;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

export default function EducationPage() {
  return (
    <motion.section 
      className="space-y-8 md:space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>Formations — Portfolio</title>
        <meta name="description" content="Mon parcours académique et formations." />
      </Helmet>
      
      <motion.div 
        className="space-y-3 md:space-y-4"
        variants={itemVariants}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
          <div className="p-2 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 glass border border-primary/30">
            <GraduationCap className="w-6 h-6 md:w-10 md:h-10 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">Formations</h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mt-2">
              Mon parcours académique et mes formations professionnelles
            </p>
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary via-purple-500/50 to-transparent rounded-full shadow-lg shadow-primary/20" />
        <div className="space-y-6 md:space-y-8">
          {education.map((e) => (
            <motion.div
              key={e.school + e.start}
              variants={itemVariants}
              className="relative pl-12 md:pl-20 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="absolute left-3 md:left-6 top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-primary to-purple-500 border-2 md:border-4 border-background shadow-xl ring-2 md:ring-4 ring-primary/20 z-10"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
              <Card className="glass hover:glass-strong transition-all duration-500 border-border/50 hover:border-primary/50 glow-hover group-hover:shadow-xl">
                <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {e.degree}{e.field ? ` — ${e.field}` : ""}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground font-medium mb-3 md:mb-4 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {e.school} {e.location ? `• ${e.location}` : ""}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm mb-3 md:mb-4">
                        <Badge variant="outline" className="rounded-full glass border-primary/30 text-xs">
                          {fmt(e.start) === fmt(e.end) ? fmt(e.start) : `${fmt(e.start)} — ${fmt(e.end)}`}
                        </Badge>
                        {e.gpa && (
                          <Badge variant="secondary" className="rounded-full glass text-xs">
                            GPA {e.gpa}
                          </Badge>
                        )}
                      </div>
                      {e.courses?.length ? (
                        <div className="mb-3 md:mb-4">
                          <p className="text-xs md:text-sm font-semibold mb-2 md:mb-3 text-foreground">Cours principaux</p>
                          <div className="flex flex-wrap gap-2">
                            {e.courses.slice(0, 5).map(course => (
                              <Badge 
                                key={course} 
                                variant="secondary" 
                                className="text-xs rounded-full glass border-primary/20 hover:border-primary/50 transition-colors"
                              >
                                {course}
                              </Badge>
                            ))}
                            {e.courses.length > 5 && (
                              <Badge variant="outline" className="text-xs rounded-full glass">
                                +{e.courses.length - 5} autres
                              </Badge>
                            )}
                          </div>
                        </div>
                      ) : null}
                      {e.highlights?.length ? (
                        <ul className="space-y-1.5 md:space-y-2 mt-3 md:mt-4">
                          {e.highlights.map(h => (
                            <li key={h} className="text-xs md:text-sm text-muted-foreground flex items-start gap-2 md:gap-3">
                              <span className="text-primary mt-1 text-base md:text-lg">▸</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
