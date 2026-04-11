import { useState, useEffect } from 'react';

export function useBusinessHours() {
  const [isOpen, setIsOpen] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const checkStatus = () => {
      // Get current time in Argentina (UTC-3)
      const now = new Date();
      const argentinaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Argentina/Buenos_Aires"}));
      
      const day = argentinaTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = argentinaTime.getHours();
      const minutes = argentinaTime.getMinutes();
      const currentTime = hours + minutes / 60;

      let open = false;
      let message = '';

      // Business Hours:
      // Mar. a Jue. – 11:00 a 20:00
      // Lun. Mie. y Vie. – 08:00 a 18:00
      
      if (day === 0 || day === 6) {
        // Saturday or Sunday
        open = false;
        message = 'Te responderemos el lunes a primera hora';
      } else if (day === 2 || day === 4) {
        // Tuesday or Thursday (11:00 to 20:00)
        if (currentTime >= 11 && currentTime < 20) {
          open = true;
        } else {
          open = false;
          message = 'Te responderemos apenas reanudemos la atención';
        }
      } else {
        // Monday, Wednesday, Friday (08:00 to 18:00)
        if (currentTime >= 8 && currentTime < 18) {
          open = true;
        } else {
          open = false;
          message = 'Te responderemos apenas reanudemos la atención';
        }
      }

      setIsOpen(open);
      setStatusMessage(message);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return { isOpen, statusMessage };
}
