"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Logo.module.scss";
import { SpacingToken } from "../types";
import { Flex } from ".";

const sizeMap: Record<string, SpacingToken> = {
  xs: "20",
  s: "24",
  m: "32",
  l: "40",
  xl: "48",
};

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  size?: "xs" | "s" | "m" | "l" | "xl";
  style?: React.CSSProperties;
  wordmark?: boolean;
  icon?: boolean;
  iconSrc?: string;
  wordmarkSrc?: string;
  wordmarkText?: string;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "m",
  wordmark = true,
  icon = true,
  href,
  iconSrc,
  wordmarkSrc,
  wordmarkText = "Rohit Shrestha", // Set default text to "Rohit Shrestha"
  className,
  style,
  ...props
}) => {
  useEffect(() => {
    if (!icon && !wordmark) {
      console.warn(
        "Both 'icon' and 'wordmark' props are set to false. The logo will not render any content."
      );
    }
  }, [icon, wordmark]);

  const content = (
    <>
      {icon && !iconSrc && (
        <div
          style={{
            height: `var(--static-space-${sizeMap[size]})`,
          }}
          className={styles.icon}
        />
      )}
      {iconSrc && (
        <img
          style={{
            height: `var(--static-space-${sizeMap[size]})`,
            width: "auto",
          }}
          alt="Rohit Shrestha Logo" // Updated alt text
          src={iconSrc}
        />
      )}
      {wordmark && !wordmarkSrc && (
        <div
          style={{
            height: `var(--static-space-${sizeMap[size]})`,
            display: "flex",
            alignItems: "center",
            fontSize: `calc(var(--static-space-${sizeMap[size]}) * 0.5)`,
            marginLeft: "0.5rem",
          }}
          className={styles.type}
        >
          {wordmarkText || "Rohit Shrestha"} {/* Updated default text */}
        </div>
      )}

      {wordmarkSrc && (
        <img
          style={{
            height: `var(--static-space-${sizeMap[size]})`,
            width: "auto",
          }}
          alt="Rohit Shrestha" // Updated alt text
          src={wordmarkSrc}
        />
      )}
    </>
  );

  return href ? (
    <Link
      className={classNames(
        "radius-l",
        "display-flex",
        "fit-height",
        className
      )}
      style={style}
      href={href}
      aria-label="Rohit Shrestha" // Updated aria-label
      {...props}
    >
      {content}
    </Link>
  ) : (
    <Flex
      className={classNames(className)}
      radius="l"
      fitHeight
      style={style}
      aria-label="Rohit Shrestha" // Updated aria-label
    >
      {content}
    </Flex>
  );
};

Logo.displayName = "Rohit Shrestha"; // Updated displayName
export { Logo };
