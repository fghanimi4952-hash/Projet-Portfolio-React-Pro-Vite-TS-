import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Award, Search } from "lucide-react";

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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      certifications
        .filter(c =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => {
          // Trier : "pending" en premier, puis par date décroissante
          if (a.status === "pending" && b.status !== "pending") return -1;
          if (a.status !== "pending" && b.status === "pending") return 1;
          return b.issueDate.localeCompare(a.issueDate);
        }),
    [q]
  );

  return (
    <motion.section 
      className="space-y-8 md:space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>Certifications — Portfolio</title>
        <meta name="description" content="Mes certifications professionnelles et badges." />
      </Helmet>
      
      <motion.div 
        className="space-y-3 md:space-y-4"
        variants={itemVariants}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
          <div className="p-2 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 glass border border-primary/30">
            <Award className="w-6 h-6 md:w-10 md:h-10 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">Mes Certifications</h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mt-2">
              Attestations de Formation
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="relative"
        variants={itemVariants}
      >
        <div className="relative">
          <Search className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground z-10" />
          <Input
            placeholder="Rechercher une certification..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full pl-11 md:pl-14 pr-4 md:pr-6 py-4 md:py-6 text-sm md:text-base rounded-full glass border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            aria-label="Filtrer les certifications"
          />
        </div>
      </motion.div>

      {list.length === 0 ? (
        <motion.div 
          className="text-center py-12 md:py-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted/50 mb-4">
            <Search className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground">
            Aucune certification trouvée pour "{q}"
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {list.map((c) => (
            <motion.div
              key={c.title + c.issueDate}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <CertificationCard c={c} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
