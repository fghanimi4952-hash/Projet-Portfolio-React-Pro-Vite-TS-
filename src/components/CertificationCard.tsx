import type { Certification } from "@/data/certifications";
import clsx from "clsx";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function formatDate(s: string) {
  const [y, m] = s.split("-");
  const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  return `Obtenue en ${months[parseInt(m) - 1]} ${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);
  const displayTitle = c.shortTitle || c.title;
  
  return (
    <Card
      className={clsx(
        "glass hover:glass-strong transition-all duration-500 border-border/50 hover:border-primary/50 glow-hover group relative overflow-hidden h-full flex flex-col",
        isExpired && "opacity-80",
        c.status === "pending" && "border-yellow-500/30 hover:border-yellow-500/50"
      )}
      aria-label={`Certification ${c.title}`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-purple-500/0 to-pink-500/0 group-hover:from-primary/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />
      
      {/* Image du certificat en haut - seulement si l'image existe */}
      {c.image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Badge score en haut à droite */}
          {c.score !== undefined && (
            <div className="absolute top-2 right-2 z-10">
              <Badge 
                variant="destructive" 
                className="text-xs md:text-sm font-bold rounded-full px-2 md:px-3 py-1 shadow-lg"
              >
                {c.score}%
              </Badge>
            </div>
          )}
        </div>
      )}
      
      {/* Badge score en haut à droite - si pas d'image */}
      {!c.image && c.score !== undefined && (
        <div className="absolute top-4 right-4 z-10">
          <Badge 
            variant="destructive" 
            className="text-xs md:text-sm font-bold rounded-full px-2 md:px-3 py-1 shadow-lg"
          >
            {c.score}%
          </Badge>
        </div>
      )}

      {/* Contenu de la carte */}
      <CardHeader className="relative z-10 p-4 md:p-6 flex-1 flex flex-col">
        <CardTitle className="text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-2">
          {displayTitle}
        </CardTitle>
        <CardDescription className="text-sm md:text-base text-muted-foreground mb-3">
          {c.issuer}
        </CardDescription>
        <CardDescription className="text-xs md:text-sm text-muted-foreground mb-4">
          {formatDate(c.issueDate)}
        </CardDescription>
        
        {/* Tags en bas */}
        {c.tags && c.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto pt-2">
            {c.tags.map(tag => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs rounded-full glass hover:border-primary/50 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
    </Card>
  );
}
