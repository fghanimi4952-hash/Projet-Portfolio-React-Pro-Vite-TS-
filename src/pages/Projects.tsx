import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Projects() {
  return (
    <motion.section 
      className="space-y-8 md:space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>Projets — Portfolio</title>
        <meta name="description" content="Découvrez mes projets en développement web, pédagogie et technologies éducatives." />
      </Helmet>
      
      <motion.div 
        className="space-y-3 md:space-y-4"
        variants={cardVariants}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 glass border border-primary/30">
            <Code2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">Mes Projets</h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mt-2">
              Derniers Projets Développés
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group"
          >
            <Card className="h-full flex flex-col glass hover:glass-strong transition-all duration-500 border-border/50 hover:border-primary/50 glow-hover relative overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-purple-500/0 to-pink-500/0 group-hover:from-primary/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />
              
              <CardHeader className="pb-3 relative z-10 p-4 md:p-6">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </CardTitle>
                </div>
                {p.period && (
                  <CardDescription className="text-xs font-medium flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {p.period}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-1 relative z-10 px-4 md:px-6 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-justify">
                  {p.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <Badge 
                      key={t} 
                      variant="secondary" 
                      className="text-xs px-2 md:px-3 py-1 rounded-full glass border-primary/20 hover:border-primary/50 transition-colors"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-4 border-t border-border/50 relative z-10 px-4 md:px-6 pb-4 md:pb-6">
                {p.link && (
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="flex-1 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group text-xs md:text-sm"
                  >
                    <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Demo
                    </a>
                  </Button>
                )}
                {p.repo && (
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="flex-1 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group text-xs md:text-sm"
                  >
                    <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                      <Github className="w-3 h-3 md:w-4 md:h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
