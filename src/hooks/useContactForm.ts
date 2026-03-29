import { useState } from 'react';
import type { ContactFormData } from '../types';
import { sanitizeText } from '../utils/sanitize';

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
  serviceType: '',
};

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: sanitizeText(value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate API call - replace with actual submitContactForm when backend is ready
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setFormData(initialFormData);
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsSuccess(false);
    setError(null);
  };

  return { formData, isSubmitting, isSuccess, error, handleChange, handleSubmit, resetForm };
};
