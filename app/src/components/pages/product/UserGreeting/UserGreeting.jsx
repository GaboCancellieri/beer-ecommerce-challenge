'use client';

import { Typography } from '@/components/common';
import styles from './UserGreeting.module.scss';

const USER_DATA = {
  firstName: 'Michael',
  lastName: 'Smith',
  honorific: 'Mr.'
};

/**
 * UserGreeting component.
 *
 * This component displays a greeting message to the user, welcoming them back.
 *
 * @returns {JSX.Element} The rendered user greeting component.
 */
export default function UserGreeting() {
  return (
    <div className={styles.userGreetingContainer}>
      <Typography className={styles.greetingSalute} variant="span">
        Hi {USER_DATA.honorific} {USER_DATA.firstName},
      </Typography>
      <Typography className={styles.greetingTitle} variant="h2">
        Welcome Back!
      </Typography>
    </div>
  );
}
