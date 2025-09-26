// FIX: Created this file to support internationalization.
// This is a placeholder for a more robust i18n solution.

interface Translations {
  [key: string]: {
    dashboard: string;
    patients: string;
    // ... other keys
  };
}

export const translations: Translations = {
  en: {
    dashboard: "Dashboard",
    patients: "Patients",
  },
  es: {
    dashboard: "Tablero",
    patients: "Pacientes",
  },
};

export const useTranslation = (lang: 'en' | 'es' = 'en') => {
  return (key: keyof Translations['en']) => translations[lang][key] || key;
};
