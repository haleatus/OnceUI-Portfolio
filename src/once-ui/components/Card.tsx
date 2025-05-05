"use client";

import React, { forwardRef } from "react";
import { Flex } from ".";
import styles from "./Card.module.scss";
import { ElementType } from "./ElementType";
import classNames from "classnames";

interface CardProps extends React.ComponentProps<typeof Flex> {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  noHoverBackground?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { children, href, onClick, style, className, noHoverBackground, ...rest },
    ref
  ) => {
    return (
      <ElementType
        tabIndex={0}
        className={classNames(
          "reset-button-styles",
          "display-flex",
          "fill-width",
          (onClick || href) && "focus-ring",
          (onClick || href) && "radius-l"
        )}
        href={href}
        onClick={onClick ? onClick : () => {}}
        role="button"
        ref={ref}
      >
        <Flex
          background="surface"
          onBackground="neutral-strong"
          transition="macro-medium"
          border="neutral-medium"
          cursor="interactive"
          align="left"
          className={classNames(
            styles.card,
            noHoverBackground && styles.noHoverBackground,
            className
          )}
          onClick={onClick}
          {...rest}
        >
          {children}
        </Flex>
      </ElementType>
    );
  }
);

Card.displayName = "Card";
export { Card };
