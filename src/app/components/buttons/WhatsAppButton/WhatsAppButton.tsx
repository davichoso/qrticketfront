import React from 'react';
import Image from 'next/image';
import styles from './WhatsAppButton.module.css';
import clsx from 'clsx';

interface WhatsAppButtonProps {
    eventName: string;
    phoneNumber?: string;
    width?: string;
    height?: string;
    className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    eventName,
    phoneNumber = '+59170793005',
    width = '100%',
    height = '48px',
    className
}) => {
    const message = `Quiero comprar entrada para el evento ${eventName}`;
    // Remove spaces and + sign for WhatsApp URL format
    const cleanPhoneNumber = phoneNumber.replace(/\s+/g, '').replace(/^\+/, '');
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(styles.button, className)}
            style={{ width, height }}
        >
            <Image
                src="/icons/whatsapp-icon.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                className={styles.icon}
            />
            WhatsApp
        </a>
    );
};

export default WhatsAppButton;
