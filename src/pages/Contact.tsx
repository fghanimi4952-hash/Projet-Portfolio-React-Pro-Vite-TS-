<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
=======
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
>>>>>>> b585eaa11102bad2ca40175cbb904e58a0c6dabe

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
<<<<<<< HEAD
  return (
    <motion.section 
      className="space-y-8 md:space-y-12"
=======
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <motion.section 
      className="grid gap-8 md:gap-12 lg:grid-cols-2"
>>>>>>> b585eaa11102bad2ca40175cbb904e58a0c6dabe
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
<<<<<<< HEAD
=======

      <motion.div variants={itemVariants}>
        <Card className="shadow-xl border-border/50">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">Envoyer un message</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 md:p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start md:items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 md:mt-0" />
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200 text-sm md:text-base">
                    Message envoyé avec succès !
                  </p>
                  <p className="text-xs md:text-sm text-green-700 dark:text-green-300 mt-1">
                    Je vous répondrai bientôt.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-lg text-sm md:text-base"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-lg text-sm md:text-base"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-lg resize-none text-sm md:text-base"
                    placeholder="Votre message..."
                  />
                </div>
                <Button type="submit" className="w-full rounded-full text-sm md:text-base" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
>>>>>>> b585eaa11102bad2ca40175cbb904e58a0c6dabe
    </motion.section>
  );
}
