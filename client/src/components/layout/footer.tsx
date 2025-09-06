export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-6 mt-auto" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2023 AI-ATC System. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground" data-testid="footer-version">
            Version 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}
