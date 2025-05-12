// components/Ticket/Ticket.tsx
import React from 'react';
import styles from './Ticket.module.css';

export interface TicketProps {
  name: string;
  email: string;
  github: string;
  avatarUrl: string;
}

export const Ticket: React.FC<TicketProps> = ({ name, email, github, avatarUrl }) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.avatarSection}>
        <img src={avatarUrl} alt="Avatar" className={styles.avatar} />
      </div>
      <div className={styles.infoSection}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.email}>{email}</p>
        <a href={github} className={styles.github} target="_blank" rel="noopener noreferrer">
          {github}
        </a>
      </div>
    </div>
  );
};

