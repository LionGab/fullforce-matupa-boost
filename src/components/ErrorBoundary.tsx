import React, { Component, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="max-w-md w-full text-center">
            <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
            <h1 className="text-3xl font-black text-foreground mb-4">
              Algo deu errado
            </h1>
            <p className="text-muted-foreground mb-8">
              Desculpe, encontramos um erro inesperado. Por favor, tente
              recarregar a página.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              Recarregar Página
            </Button>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <pre className="mt-8 p-4 bg-card border border-border rounded-lg text-left text-sm overflow-auto">
                {this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
