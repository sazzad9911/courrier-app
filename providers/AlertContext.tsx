// AlertContext.tsx
import AlertDialog from '@/components/AlertDialog';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AlertContextType {
    showAlert: (type: 'success' | 'error' | 'warning', message: string) => void;
    hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = (): AlertContextType => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
};

interface AlertProviderProps {
    children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [type, setType] = useState<'success' | 'error' | 'warning'>('success');
    const [message, setMessage] = useState<string>('');

    const showAlert = (alertType: 'success' | 'error' | 'warning', alertMessage: string) => {
        setType(alertType);
        setMessage(alertMessage);
        setVisible(true);
    };

    const hideAlert = () => setVisible(false);

    return (
        <AlertContext.Provider value={{ showAlert, hideAlert }}>
            {children}
            <AlertDialog visible={visible} type={type} message={message} onClose={hideAlert} />
        </AlertContext.Provider>
    );
};
