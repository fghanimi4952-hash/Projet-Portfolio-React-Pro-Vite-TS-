import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-gradient-to-br from-background via-background to-primary/5 text-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 -right-4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <header className="sticky top-0 z-50 glass-strong border-b border-border/40 shadow-lg shadow-primary/5">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
          <NavLink 
            to="/" 
            className="font-bold text-lg md:text-xl gradient-text hover:scale-105 transition-transform duration-300"
          >
            Mon Portfolio
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `relative px-3 md:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive 
                    ? "text-primary bg-primary/10 glow" 
                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                }`
              }
            >
              Projets
            </NavLink>
            <NavLink 
              to="/experience" 
              className={({ isActive }) => 
                `relative px-3 md:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive 
                    ? "text-primary bg-primary/10 glow" 
                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                }`
              }
            >
              Parcours
            </NavLink>
            <NavLink 
              to="/education" 
              className={({ isActive }) => 
                `relative px-3 md:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive 
                    ? "text-primary bg-primary/10 glow" 
                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                }`
              }
            >
              Formations
            </NavLink>
            <NavLink 
              to="/certifications" 
              className={({ isActive }) => 
                `relative px-3 md:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive 
                    ? "text-primary bg-primary/10 glow" 
                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                }`
              }
            >
              Certifications
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `relative px-3 md:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive 
                    ? "text-primary bg-primary/10 glow" 
                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                }`
              }
            >
              Contact
            </NavLink>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/40 glass-strong">
            <div className="px-4 py-4 space-y-2">
              <NavLink 
                to="/projects" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                  }`
                }
              >
                Projets
              </NavLink>
              <NavLink 
                to="/experience" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                  }`
                }
              >
                Parcours
              </NavLink>
              <NavLink 
                to="/education" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                  }`
                }
              >
                Formations
              </NavLink>
              <NavLink 
                to="/certifications" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                  }`
                }
              >
                Certifications
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>
      <main className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12 relative z-10">
        <Outlet />
      </main>
      <footer className="border-t border-border/40 mt-12 md:mt-24 py-6 md:py-8 text-center relative z-10 glass">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} • <span className="font-semibold text-foreground gradient-text">Mon Portfolio</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Professeure d'informatique • Province Rhamna, Maroc
          </p>
        </div>
      </footer>
    </div>
  );
}
