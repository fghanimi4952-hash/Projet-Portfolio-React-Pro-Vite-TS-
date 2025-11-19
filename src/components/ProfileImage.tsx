import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type ProfileImageProps = {
  variant?: "hero" | "card" | "avatar" | "compact";
  className?: string;
};

const variants = {
  hero: {
    container: "w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] aspect-square rounded-2xl md:rounded-3xl",
    fallback: "text-5xl md:text-7xl",
    glow: true,
    floating: true,
  },
  card: {
    container: "w-full aspect-square max-w-xs mx-auto rounded-2xl",
    fallback: "text-5xl md:text-6xl",
    glow: true,
    floating: false,
  },
  avatar: {
    container: "w-32 h-32 md:w-40 md:h-40 rounded-full",
    fallback: "text-4xl md:text-5xl",
    glow: false,
    floating: false,
  },
  compact: {
    container: "w-48 h-48 md:w-64 md:h-64 rounded-xl",
    fallback: "text-5xl md:text-6xl",
    glow: false,
    floating: false,
  },
};

export default function ProfileImage({ variant = "hero", className }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const config = variants[variant];

  return (
    <div className={cn("relative", className)}>
      <div className={cn(
        "relative overflow-hidden shadow-2xl ring-1 ring-border/50 group",
        config.container
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 animate-gradient" />
        {profile.image && !imageError ? (
          <motion.img
            src={profile.image}
            alt={`${profile.name} - ${profile.role}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading={variant === "hero" ? "eager" : "lazy"}
            onError={() => setImageError(true)}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <span className={config.fallback}>👩‍🏫</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        
        {/* Glow effect */}
        {config.glow && (
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl md:rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300 -z-10" />
        )}
      </div>
      
      {/* Floating elements - only for hero variant */}
      {config.floating && (
        <>
          <motion.div 
            className="hidden md:block absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="hidden md:block absolute -top-6 -left-6 w-16 h-16 md:w-24 md:h-24 bg-purple-500/20 rounded-full blur-2xl -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </>
      )}
    </div>
  );
}

