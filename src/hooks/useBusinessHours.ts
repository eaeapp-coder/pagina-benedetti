import { useState, useEffect } from 'react';
import { useSettings } from './useSettings';

export function useBusinessHours() {
  const [isOpen, setIsOpen] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');
  const { settings } = useSettings();

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

      // Parse hours from settings (Expected format: "HH:MM a HH:MM")
      const parseHours = (hoursStr: string) => {
        const match = hoursStr.match(/(\d{2}):(\d{2})\s*a\s*(\d{2}):(\d{2})/);
        if (match) {
          const start = parseInt(match[1]) + parseInt(match[2]) / 60;
          const end = parseInt(match[3]) + parseInt(match[4]) / 60;
          return { start, end };
        }
        return null;
      };

      const tueThu = parseHours(settings.hoursTueThu) || { start: 11, end: 20 };
      const monWedFri = parseHours(settings.hoursMonWedFri) || { start: 8, end: 18 };
      
      if (day === 0 || day === 6) {
        // Saturday or Sunday
        open = false;
        message = 'Te responderemos el lunes a primera hora';
      } else if (day === 2 || day === 4) {
        // Tuesday or Thursday
        if (currentTime >= tueThu.start && currentTime < tueThu.end) {
          open = true;
        } else {
          open = false;
          message = 'Te responderemos apenas reanudemos la atención';
        }
      } else {
        // Monday, Wednesday, Friday
        if (currentTime >= monWedFri.start && currentTime < monWedFri.end) {
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
  }, [settings]);

  return { isOpen, statusMessage };
}
