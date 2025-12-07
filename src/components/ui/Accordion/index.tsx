'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import styles from './Accordion.module.scss';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenItems = [],
  className = ''
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(itemId)
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId];
      } else {
        return prev.includes(itemId) ? [] : [itemId];
      }
    });
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div key={item.id} className={styles.accordionItem}>
            <button
              className={`${styles.accordionHeader} ${isOpen ? styles.open : ''}`}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className={styles.accordionTitle}>{item.title}</span>
              <div className={`${styles.accordionIcon} ${isOpen ? styles.rotated : ''}`}>
                <Icon 
                  icon="mdi:chevron-down" 
                  width="20" 
                  height="20"
                  style={{ 
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>
            </button>
            
            <div
              id={`accordion-content-${item.id}`}
              className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}
              aria-hidden={!isOpen}
            >
              <div className={styles.accordionBody}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
