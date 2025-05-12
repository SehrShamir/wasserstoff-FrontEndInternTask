// components/AvatarUploader/AvatarUploader.tsx
import React, { useRef } from 'react';
import styles from './AvatarUploader.module.css';

export interface AvatarUploaderProps {
  onUpload: (url: string) => void;
}

const AvatarUploader: React.FC<AvatarUploaderProps> = ({ onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  };

  return (
    <div className={styles.container}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className={styles.input}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AvatarUploader;
