import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IComponentProps {
  duration?: number;
  delay?: number;
}

export const FadeIn = styled(motion.div).attrs((props: IComponentProps) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: {
    duration: `${props.duration ? props.duration : '0.6'}`,
    ease: 'easeOut',
    delay: `${props.delay ? props.delay : '0'}`,
  },
  viewport: { once: true },
}))``;
