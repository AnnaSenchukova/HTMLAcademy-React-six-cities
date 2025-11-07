import {useState, useCallback} from 'react';

export function useCardHover() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardMouseEnter = useCallback((id: number) => {
    setActiveCardId(id);
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    setActiveCardId(null);
  }, []);

  return {
    activeCardId,
    handleCardMouseEnter,
    handleCardMouseLeave
  };
}
