"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Clock,
  CreditCard,
  Globe,
  Server,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ExpiredHostingNotice() {
  // Calculate days since January 7, 2026
  const [expirationDate] = useState(new Date("2026-01-07"));
  const today = new Date();
  const daysSinceExpiration = Math.floor(
    (today.getTime() - expirationDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Format expiration date for display
  const formattedExpirationDate = expirationDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Official Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Server className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-semibold text-foreground tracking-tight">
                CloudHost Services
              </h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Account Services Division
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Secure Notice</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl space-y-8">
          {/* Alert Banner */}
          <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-lg px-4 py-3">
            <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-foreground">
              <span className="font-semibold">Action Required:</span> Your
              hosting service has been suspended due to non-payment.
            </p>
          </div>

          {/* Main Notice Card */}
          <Card className="border-border bg-card">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl text-foreground">
                Hosting Plan Expired
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base mt-2">
                Domain:{" "}
                <span className="font-mono text-foreground">
                  vastelcredence.com
                </span>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This is an official notice from CloudHost Services. The
                  hosting plan associated with your domain
                  <span className="font-mono text-foreground mx-1">
                    vastelcredence.com
                  </span>
                  has expired and all services have been temporarily suspended.
                  To restore access and prevent permanent data loss, please
                  renew your subscription immediately.
                </p>
              </div>

              <Separator className="bg-border" />

              {/* Account Details */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Account Details
                </h3>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">
                      Domain
                    </span>
                    <span className="text-sm font-mono text-foreground">
                      vastelcredence.com
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">
                      Account Status
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      Suspended
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">
                      Expiration Date
                    </span>
                    <span className="text-sm text-foreground">
                      {formattedExpirationDate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">
                      Days Overdue
                    </span>
                    <span className="text-sm text-primary font-semibold">
                      {daysSinceExpiration}{" "}
                      {daysSinceExpiration === 1 ? "day" : "days"}
                    </span>
                  </div>
                </div>
              </div>

              <Separator className="bg-border" />

              {/* Renewal Options */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Renewal Option
                </h3>
                <div className="border border-border rounded-lg p-4 bg-secondary/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium text-foreground">
                        Annual Hosting Plan
                      </span>
                    </div>
                    <div className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded font-semibold uppercase tracking-wide">
                      Required
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-foreground">
                      $9.99
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Billed annually at $119.88/year. Includes SSL certificate
                    and 24/7 support.
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4 pt-6">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base"
              >
                <a
                  href="https://869935096370-xbju53xx.us-east-1.console.aws.amazon.com/billing/home#/paymentsoverview/payments-due"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Renew Hosting Now
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By clicking "Renew Hosting Now", you agree to our Terms of
                Service and Privacy Policy.
              </p>
            </CardFooter>
          </Card>

          {/* Official Notice Footer */}
          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground">
              Notice ID: <span className="font-mono">CH-2026-0108-EXP</span> •
              Generated on January 8, 2026
            </p>
            <p className="text-xs text-muted-foreground">
              Questions? Contact support at from the dashboard.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 CloudHost Services, Inc. All rights reserved. This is an
            automated notice.
          </p>
        </div>
      </footer>
    </div>
  );
}
