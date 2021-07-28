import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldExactMathHref?: boolean;
}

export function ActiveLink({
  children,
  shouldExactMathHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldExactMathHref && (asPath == rest.href || asPath === rest.as)) {
    isActive = true;
  }
  if (
    !shouldExactMathHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.500" : "gray.50",
      })}
    </Link>
  );
}
