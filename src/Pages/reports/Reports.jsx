// import React from 'react'

// const Reports = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Reports

import React, { useState } from "react";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import styles from "./reports.module.css";

/**
 * Nexcent — Reports
 * Metrics are reframed for the farm-management context (active farms,
 * fields monitored, soil health) instead of the generic dummy stats.
 * Swap MOCK_STATS / MOCK_TREND for real data from your API.
 */

const MOCK_STATS_TOP = [
  { label: "Active Farms", value: "27", suffix: "/ 80" },
  { label: "Fields Monitored", value: "3,298" },
  { label: "Avg. Session Length", value: "2m 34s" },
];

const MOCK_STATS_BOTTOM = [
  { label: "Starting Soil Health", value: "64%" },
  { label: "Current Soil Health", value: "86%" },
  { label: "Improvement", value: "+22%", accent: true },
];

const MOCK_TREND = [42, 48, 45, 58, 63, 60, 71, 78, 74, 86];

const FILTERS = [
  { label: "All Time", options: ["All Time", "Last 7 days", "Last 30 days", "This year"] },
  { label: "Farms: All", options: ["Farms: All", "My Farms", "Shared Farms"] },
  { label: "Topic: All", options: ["Topic: All", "Irrigation", "Soil Health", "Yield"] },
];

const Reports = () => {
  const [openFilter, setOpenFilter] = useState(null);
  const [filterValues, setFilterValues] = useState(FILTERS.map((f) => f.label));

  const selectFilter = (index, value) => {
    setFilterValues((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
    setOpenFilter(null);
  };

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Reports</h1>
        <button type="button" className={styles.downloadBtn}>
          <FiDownload size={16} />
          Download
        </button>
      </div>

      <div className={styles.filters}>
        {FILTERS.map((filter, i) => (
          <div key={filter.label} className={styles.filterWrap}>
            <button
              type="button"
              className={styles.filterBtn}
              onClick={() => setOpenFilter(openFilter === i ? null : i)}
            >
              {filterValues[i]}
              <FiChevronDown size={16} />
            </button>
            {openFilter === i && (
              <div className={styles.filterMenu}>
                {filter.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={styles.filterOption}
                    onClick={() => selectFilter(i, opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.statGrid}>
        {MOCK_STATS_TOP.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className={styles.lowerGrid}>
        <div className={styles.lowerStats}>
          {MOCK_STATS_BOTTOM.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className={styles.chartCard}>
          <span className={styles.chartLabel}>Soil Health Trend</span>
          <TrendChart data={MOCK_TREND} />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, suffix, accent }) => (
  <div className={styles.statCard}>
    <span className={styles.statLabel}>{label}</span>
    <div className={styles.statValueRow}>
      <span className={`${styles.statValue} ${accent ? styles.statValueAccent : ""}`}>{value}</span>
      {suffix && <span className={styles.statSuffix}>{suffix}</span>}
    </div>
  </div>
);

const TrendChart = ({ data }) => {
  const width = 560;
  const height = 220;
  const padding = 24;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((val, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((val - min) / range) * (height - padding * 2);
    return [x, y];
  });

  const linePath = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const areaPath = `${linePath} L${points[points.length - 1][0]},${height - padding} L${points[0][0]},${
    height - padding
  } Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={styles.chartSvg} preserveAspectRatio="none">
      <defs>
        <linearGradient id="nxAreaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3fa34d" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#3fa34d" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line
          key={f}
          x1={padding}
          x2={width - padding}
          y1={padding + f * (height - padding * 2)}
          y2={padding + f * (height - padding * 2)}
          stroke="#eef0ee"
          strokeWidth="1"
        />
      ))}
      <path d={areaPath} fill="url(#nxAreaFill)" stroke="none" />
      <path d={linePath} fill="none" stroke="#3fa34d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === points.length - 1 ? 4.5 : 3} fill="#3fa34d" />
      ))}
    </svg>
  );
};

export default Reports;