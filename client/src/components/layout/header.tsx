import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Microscope, Home, Camera, BarChart3, History } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [location] = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Upload", href: "/upload", icon: Camera },
    { name: "Results", href: "/results", icon: BarChart3 },
    { name: "History", href: "/history", icon: History },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50" data-testid="header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer" data-testid="logo">
              <Microscope className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-semibold text-foreground font-serif">AI-ATC System</h1>
            </div>
          </Link>
          
          <nav className="flex space-x-1">
            {navigation.map((item) => {
              const isActive = location === item.href || 
                (item.href === "/results" && location.startsWith("/results"));
              
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isActive && "bg-primary text-primary-foreground"
                    )}
                    data-testid={`nav-${item.name.toLowerCase()}`}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">{item.name}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
