import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function Contact() {
  return (
    <motion.section 
      className="space-y-8 md:space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>Contact — Portfolio</title>
        <meta name="description" content="Contactez-moi pour discuter de projets ou opportunités." />
      </Helmet>
      
      <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">Contactez-moi</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
            N'hésitez pas à me contacter pour discuter de projets, opportunités ou collaborations dans le domaine de l'éducation et des technologies.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <motion.div 
            className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors bg-card/50"
            variants={itemVariants}
          >
            <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold mb-1 text-sm md:text-base">Email</h3>
              <a 
                href={`mailto:${profile.email}`} 
                className="text-primary hover:underline transition-colors text-sm md:text-base break-all"
              >
                {profile.email}
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors bg-card/50"
            variants={itemVariants}
          >
            <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-sm md:text-base">Localisation</h3>
              <p className="text-muted-foreground text-sm md:text-base">{profile.location}</p>
            </div>
          </motion.div>

          <motion.div 
            className="p-3 md:p-4 rounded-lg border border-border/50 bg-card/50"
            variants={itemVariants}
          >
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Réseaux sociaux</h3>
            <div className="flex flex-col gap-2 md:gap-3">
              {profile.socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2 md:p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-accent/50 transition-all group"
                >
                  {social.label === "GitHub" ? (
                    <Github className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  ) : (
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  )}
                  <span className="text-primary group-hover:underline text-sm md:text-base">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
