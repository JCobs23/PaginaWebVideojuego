'use client';

import React, { useState } from 'react';
import styles from './TabsWeeks.module.css';

interface TabContent {
  weekNumber: number;
  title: string;
  description: string;
}

interface TabsWeeksProps {
  tabs: TabContent[];
}

export default function TabsWeeks({ tabs }: TabsWeeksProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      <div
        className={styles.tabList}
        role="tablist"
        aria-label="Semanas de desarrollo"
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <span className={styles.weekNumber}>Semana {tab.weekNumber}</span>
            <span className={styles.weekTitle}>{tab.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.panels}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={`panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            className={`${styles.panel} ${activeTab === index ? styles.active : ''}`}
            hidden={activeTab !== index}
          >
            <h3>{tab.title}</h3>
            <p>{tab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
