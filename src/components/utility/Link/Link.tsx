import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { isInternalPageLink } from '@lib/links';

export const Link: React.FC<LinkProps> = ({
    to,
    activeClassName,
    partiallyActive,
    noNewTab,
    children,
    className,
    ...others
}) => {
    // If the link is to an internal page, render using Gatsby Link
    return isInternalPageLink(to) ? (
        <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            partiallyActive={partiallyActive}
            className={className}
            {...others}
        >
            {children}
        </GatsbyLink>
    ) : (
        // If the link is external or if we are linking to a file, render using standard link
        <a
            href={to}
            target={noNewTab ? '_self' : '_blank'}
            rel={noNewTab ? '' : 'noopener noreferrer'}
            className={className}
            {...others}
        >
            {children}
        </a>
    );
};

export interface LinkProps {
    to: string;
    activeClassName?: string;
    partiallyActive?: boolean;
    noNewTab?: true;
    className?: string;
}
