import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui";
import React, { type PropsWithChildren } from "react";
import { AuthSocial } from "./AuthSocial";
import Link from "next/link";
interface AuthWrapperProps {
  heading: string;
  description?: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  isShowSocial?: boolean;
}
export default function ({
  children,
  heading,
  description,
  backButtonHref,
  backButtonLabel,
  isShowSocial = false,
}: PropsWithChildren<AuthWrapperProps>) {
  return (
    <Card className="w-[400px]">
      <CardHeader className="space-y-2">
        <CardTitle>{heading}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent>
        {isShowSocial && <AuthSocial />}
        {children}
      </CardContent>

      <CardFooter>
        {backButtonLabel && backButtonHref && (
          <Button variant="link" className="w-full font-normal">
            <Link href={backButtonHref}>{backButtonLabel}</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
