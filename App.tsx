// App.tsx
import React, { useState } from 'react';
import Button from './components/Button/Button';
import AvatarUploader from './components/AvatarUploader';
import {Ticket} from './components/Ticket';
import { Input } from './components/Input/Input';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    avatarUrl: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvatarUpload = (url: string) => {
    setFormData(prev => ({
      ...prev,
      avatarUrl: url,
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.github && formData.avatarUrl) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields and upload an avatar.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      {!submitted ? (
        <div className="w-full max-w-md space-y-4">
          <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
          <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
          <Input label="GitHub" name="github" value={formData.github} onChange={handleChange} />
          <AvatarUploader onUpload={handleAvatarUpload} />
          <Button onClick={handleSubmit} label="Generate My Ticket" />
        </div>
      ) : (
        <Ticket
          name={formData.name}
          email={formData.email}
          github={formData.github}
          avatarUrl={formData.avatarUrl}
        />
      )}
    </div>
  );
};

export default App;

