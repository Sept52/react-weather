import React from 'react';
import s from './Days.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18next';

function Tabs({ onClick }) {
  const { t } = useTranslation();
  const tabs = [
    {
      value: `${t("tabs.three_days")}`,
      func: () => {
        onClick("3");
      },
    },
    {
      value: `${t("tabs.five_days")}`,
      func: () => {
        onClick("5");
      },
    },
  ];

  const close = () => {
    onClick("0");
  };

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => {
          return (
            <div onClick={tab.func} className={s.tab} key={tab.value}>
              {tab.value}
            </div>
          );
        })}
      </div>
      <div onClick={close} className={s.cansel}>
        {t("tabs.cansel")}
      </div>
    </div>
  );
}

export default Tabs;
