import { useLanguage } from '@/context/LanguageContext';

export function useTranslation(namespace?: string) {
  const { t } = useLanguage();

  return (key: string) => (namespace ? t(`${namespace}.${key}`) : t(key));
}
