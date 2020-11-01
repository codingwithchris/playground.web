import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@nerve/core/tokens';
import { useConfigContext } from '@nerve/shared/context';

import {
    Container,
    Section,
    BodyText,
    GrittyHeading,
} from '@nerve/core/components';

import { EmailSubscribe } from '../EmailSubscribe/EmailSubscribe';

const StyledSubscribeSection = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .intro-copy {
        margin-top: ${spacing.layout.xs};
        margin-bottom: ${spacing.layout.s};
    }
`;

export const SubscribeSection: React.FC = () => {
    const config = useConfigContext();

    return (
        <StyledSubscribeSection
            bgImage={config.subscribe_image}
            overlay="dark90"
            bgPosition="center center"
        >
            <Container maxWidth="xs">
                <GrittyHeading
                    size="s"
                    color="dark"
                    as="h3"
                    bgColor="neutralLight"
                    offset={-2}
                    className="intro-title"
                >
                    {config.subscribe_title}
                </GrittyHeading>
                <BodyText color="light" size="m" className="intro-copy">
                    {config.subscribe_copy}
                </BodyText>
                <EmailSubscribe />
            </Container>
        </StyledSubscribeSection>
    );
};
