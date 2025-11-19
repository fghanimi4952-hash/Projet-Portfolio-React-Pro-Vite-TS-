import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ProfileImage from "@/components/ProfileImage";

const eduLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alumniOf: education.map(e => ({
    "@type": "CollegeOrUniversity",
    name: e.school
  }))
};

const certLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  hasCredential: (certifications ?? []).map(c => ({
    "@type": "EducationalOccupationalCredential",
    name: c.title,
    recognizedBy: { "@type": "Organization", name: c.issuer },
    validFrom: c.issueDate,
    validUntil: c.expiryDate,
    url: c.credentialUrl
  }))
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Home() {
  return (
    <motion.section 
      className="grid gap-8 md:gap-12 lg:grid-cols-[1.2fr_1fr] items-start lg:items-center min-h-[70vh] py-8 md:py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={`Portfolio : ${profile.about}`} />
        <script type="application/ld+json">{JSON.stringify(eduLd)}</script>
        <script type="application/ld+json">{JSON.stringify(certLd)}</script>
      </Helmet>
      
      <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass border border-primary/20 text-xs md:text-sm"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="font-medium">Disponible pour de nouveaux projets</span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            variants={itemVariants}
          >
            <span className="gradient-text">{profile.name.split(' ')[0]}</span>
            <br />
            <span className="text-foreground">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light"
            variants={itemVariants}
          >
            {profile.role}
          </motion.p>
        </div>

        <motion.p 
          className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl text-justify"
          variants={itemVariants}
        >
          {profile.about}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
          variants={itemVariants}
        >
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-6 md:px-8 glow-hover group w-full sm:w-auto"
          >
            <Link to="/projects" className="flex items-center justify-center gap-2">
              Voir mes projets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="rounded-full px-6 md:px-8 border-2 hover:bg-primary/10 hover:border-primary transition-all w-full sm:w-auto"
          >
            <Link to="/contact" className="text-center">
              Me contacter
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="relative order-first lg:order-last flex justify-center lg:justify-center items-center"
        variants={itemVariants}
      >
        <ProfileImage variant="hero" />
      </motion.div>
    </motion.section>
  );
}
