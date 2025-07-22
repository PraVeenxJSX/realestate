import React from 'react';
import { MessageCircle, MessageSquare } from 'lucide-react';
import styles from './FloatingChatButtons.module.scss';

const FloatingChatButtons = () => (
    <div className={styles.floatingChatButtons}>
        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton} title="WhatsApp Chat"><MessageCircle size={28} /></a>
         
    </div>
);

export default FloatingChatButtons; 