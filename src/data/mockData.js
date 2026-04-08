const DOMAIN_DEFINITIONS = {
  Revenue: {
    label: 'Revenue',
    description: 'Track top-line performance, pricing quality, and yield efficiency.',
    accent: 'sky',
    kpis: [
      { key: 'dailyRevenueTarget', label: 'Daily Revenue Target', unit: '₹', base: 1200000, target: 1180000, direction: 'up', volatility: 0.06 },
      { key: 'revPASH', label: 'RevPASH', unit: '₹', base: 5700, target: 5500, direction: 'up', volatility: 0.04 },
      { key: 'averageCheck', label: 'Average Check', unit: '₹', base: 2440, target: 2380, direction: 'up', volatility: 0.03 },
      { key: 'channelMixBalance', label: 'Channel Mix Balance', unit: '%', base: 72.8, target: 75, direction: 'up', volatility: 0.035 },
      { key: 'peakHourCapture', label: 'Peak Hour Capture', unit: '%', base: 68.4, target: 70, direction: 'up', volatility: 0.05 },
      { key: 'cateringEventsRev', label: 'Catering Events %', unit: '%', base: 12.6, target: 15, direction: 'up', volatility: 0.06 },
    ],
  },
  Operations: {
    label: 'Operations',
    description: 'Measure throughput, service speed, and labor efficiency.',
    accent: 'emerald',
    kpis: [
      { key: 'tableTurnover', label: 'Table Turnover', unit: 'x', base: 3.8, target: 3.6, direction: 'up', volatility: 0.04 },
      { key: 'avgDwellTime', label: 'Avg Dwell Time', unit: 'min', base: 54.2, target: 52, direction: 'down', volatility: 0.045 },
      { key: 'kitchenTicketTime', label: 'Kitchen Ticket Time', unit: 'min', base: 18.4, target: 17, direction: 'down', volatility: 0.05 },
      { key: 'orderToDelivery', label: 'Order to Delivery', unit: 'min', base: 28.6, target: 26, direction: 'down', volatility: 0.048 },
      { key: 'seatUtilization', label: 'Seat Utilization', unit: '%', base: 81.2, target: 85, direction: 'up', volatility: 0.035 },
      { key: 'deadSlotIndex', label: 'Dead Slot Index', unit: '%', base: 8.4, target: 5, direction: 'down', volatility: 0.04 },
    ],
  },
  'Orders & Menu': {
    label: 'Orders & Menu',
    description: 'Balance menu engineering, channel mix, and order conversion.',
    accent: 'amber',
    kpis: [
      { key: 'menuContributionMargin', label: 'Menu Contribution Margin', unit: '%', base: 34.7, target: 36, direction: 'up', volatility: 0.04 },
      { key: 'orderErrorRate', label: 'Order Error Rate', unit: '%', base: 2.1, target: 1.5, direction: 'down', volatility: 0.06 },
      { key: 'cancellationRate', label: 'Cancellation Rate', unit: '%', base: 3.8, target: 3, direction: 'down', volatility: 0.05 },
      { key: 'upsellConversion', label: 'Upsell Conversion', unit: '%', base: 24.6, target: 27, direction: 'up', volatility: 0.045 },
      { key: 'stockOutFrequency', label: 'Stock-Out Frequency', unit: '%', base: 2.4, target: 1.5, direction: 'down', volatility: 0.055 },
      { key: 'beverageRatio', label: 'Beverage Ratio', unit: '%', base: 28.2, target: 30, direction: 'up', volatility: 0.035 },
    ],
  },
  Staff: {
    label: 'Staff',
    description: 'Monitor scheduling, productivity, and team coverage.',
    accent: 'violet',
    kpis: [
      { key: 'laborCostPercent', label: 'Labor Cost %', unit: '%', base: 29.4, target: 28, direction: 'down', volatility: 0.03 },
      { key: 'revenuePerLaborHour', label: 'Revenue/Labor-Hour', unit: '₹', base: 4120, target: 4400, direction: 'up', volatility: 0.04 },
      { key: 'staffTurnoverRate', label: 'Staff Turnover Rate', unit: '%', base: 8.2, target: 6, direction: 'down', volatility: 0.05 },
      { key: 'coversPerServer', label: 'Covers/Server', unit: 'x', base: 48.6, target: 50, direction: 'up', volatility: 0.035 },
      { key: 'noShowLateRate', label: 'No-Show/Late Rate', unit: '%', base: 4.8, target: 3, direction: 'down', volatility: 0.055 },
      { key: 'trainingHours', label: 'Training Hours/Month', unit: 'h', base: 8.4, target: 10, direction: 'up', volatility: 0.04 },
    ],
  },
  Customer: {
    label: 'Customer',
    description: 'Watch satisfaction, repeat behavior, and service quality.',
    accent: 'rose',
    kpis: [
      { key: 'guestReturnRate', label: 'Guest Return Rate', unit: '%', base: 42.6, target: 45, direction: 'up', volatility: 0.035 },
      { key: 'nps', label: 'NPS', unit: '', base: 62, target: 65, direction: 'up', volatility: 0.04 },
      { key: 'onlineReviewScore', label: 'Online Review Score', unit: '★', base: 4.62, target: 4.7, direction: 'up', volatility: 0.02 },
      { key: 'customerLifetimeValue', label: 'Customer Lifetime Value', unit: '₹', base: 18400, target: 20000, direction: 'up', volatility: 0.05 },
      { key: 'complaintResolutionTime', label: 'Complaint Resolution Time', unit: 'h', base: 4.2, target: 2, direction: 'down', volatility: 0.06 },
      { key: 'reservationNoShowRate', label: 'Reservation No-Show Rate', unit: '%', base: 8.6, target: 6, direction: 'down', volatility: 0.045 },
      { key: 'reviewVelocity', label: 'Review Velocity', unit: '/day', base: 4.8, target: 6, direction: 'up', volatility: 0.055 },
    ],
  },
  Inventory: {
    label: 'Inventory',
    description: 'Track stock pressure, waste, and replenishment efficiency.',
    accent: 'cyan',
    kpis: [
      { key: 'foodCostPercent', label: 'Food Cost %', unit: '%', base: 28.4, target: 27, direction: 'down', volatility: 0.04 },
      { key: 'foodWastePercent', label: 'Food Waste %', unit: '%', base: 4.2, target: 3, direction: 'down', volatility: 0.05 },
      { key: 'inventoryTurnover', label: 'Inventory Turnover', unit: 'x', base: 8.8, target: 9.5, direction: 'up', volatility: 0.035 },
      { key: 'shrinkageRate', label: 'Shrinkage Rate', unit: '%', base: 1.6, target: 1, direction: 'down', volatility: 0.045 },
      { key: 'supplierOnTimeRate', label: 'Supplier On-Time Rate', unit: '%', base: 94.2, target: 96, direction: 'up', volatility: 0.025 },
      { key: 'costPortionAccuracy', label: 'Cost Portion Accuracy', unit: '%', base: 92.8, target: 95, direction: 'up', volatility: 0.03 },
    ],
  },
  'ROI & Growth': {
    label: 'ROI & Growth',
    description: 'Evaluate profitability, growth metrics, and investment returns.',
    accent: 'lime',
    kpis: [
      { key: 'primeCost', label: 'Prime Cost %', unit: '%', base: 57.8, target: 56, direction: 'down', volatility: 0.04 },
      { key: 'ebitdaMargin', label: 'EBITDA Margin %', unit: '%', base: 18.4, target: 20, direction: 'up', volatility: 0.05 },
      { key: 'marketingROI', label: 'Marketing ROI', unit: 'x', base: 5.4, target: 5.8, direction: 'up', volatility: 0.055 },
      { key: 'breakEvenCovers', label: 'Break-Even Covers', unit: '#', base: 142, target: 130, direction: 'down', volatility: 0.04 },
      { key: 'cashFlowRunway', label: 'Cash Flow Runway', unit: 'months', base: 4.2, target: 6, direction: 'up', volatility: 0.06 },
      { key: 'loyaltyProgramROI', label: 'Loyalty Program ROI', unit: 'x', base: 3.8, target: 4.2, direction: 'up', volatility: 0.045 },
      { key: 'deliveryCommission', label: 'Delivery Commission %', unit: '%', base: 18.6, target: 16, direction: 'down', volatility: 0.05 },
      { key: 'yearOverYearGrowth', label: 'YoY Growth %', unit: '%', base: 12.4, target: 15, direction: 'up', volatility: 0.06 },
    ],
  },
};

export const DOMAIN_ORDER = Object.keys(DOMAIN_DEFINITIONS);

function seededRandom(seed) {
  const raw = Math.sin(seed * 9301 + 49297) * 233280;
  return raw - Math.floor(raw);
}

function round(value, digits = 1) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function formatMetricValue(metric, value) {
  if (metric.unit === '₹') {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
  }

  if (metric.unit === '%') {
    return `${value.toFixed(1)}%`;
  }

  if (metric.unit === '★') {
    return `${value.toFixed(1)}★`;
  }

  if (metric.unit === 'days') {
    return `${value.toFixed(0)} days`;
  }

  if (metric.unit === '/day' || metric.unit === '/month') {
    return `${value.toFixed(1)}${metric.unit}`;
  }

  if (metric.unit === 'x') {
    return `${value.toFixed(1)}x`;
  }

  if (metric.unit === 'min') {
    return `${value.toFixed(1)} min`;
  }

  if (metric.unit === 'h') {
    return `${value.toFixed(1)} hrs`;
  }

  if (metric.unit === '#') {
    return `${Math.round(value)}`;
  }

  if (metric.unit === 'months') {
    return `${value.toFixed(1)} mo`;
  }

  return `${value.toFixed(0)}${metric.unit ? ` ${metric.unit}` : ''}`.trim();
}

function buildSparkline(seed, base, volatility, count = 12) {
  return Array.from({ length: count }, (_, index) => {
    const wave = Math.sin((seed + index) / 2.5) * volatility * 0.5;
    const wobble = Math.cos((seed + index) / 3.2) * volatility * 0.25;
    const noise = (seededRandom(seed * 19 + index) - 0.5) * volatility * 0.3;
    return round(base * (1 + wave + wobble + noise), 2);
  });
}

function buildDailySeries() {
  const today = new Date();
  today.setHours(12, 0, 0, 0);

  return Array.from({ length: 90 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (89 - index));
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isMonday = date.getDay() === 1;
    const weekendMultiplier = isWeekend ? 1.14 : 1;
    const mondayMultiplier = isMonday ? 0.9 : 1;
    const baseRevenue = 1200000 + Math.sin(index / 5) * 76000 + Math.cos(index / 11) * 43000;
    const revenue = round(baseRevenue * weekendMultiplier * mondayMultiplier, 0);
    const target = round(baseRevenue * 0.98 + Math.sin(index / 7) * 15000, 0);
    const orders = round(4200 + Math.sin(index / 4.3) * 260 + Math.cos(index / 8.5) * 110 + (isWeekend ? 190 : 0) - (isMonday ? 150 : 0), 0);

    return {
      date: formatDate(date),
      revenue,
      target,
      orders,
    };
  });
}

function buildHourlyToday() {
  return Array.from({ length: 24 }, (_, hour) => {
    const lunchPeak = hour >= 11 && hour <= 14 ? 58 : 0;
    const dinnerPeak = hour >= 18 && hour <= 21 ? 76 : 0;
    const earlyMorning = hour <= 6 ? -24 : 0;
    const lateNight = hour >= 22 ? -36 : 0;
    const base = 28 + Math.sin((hour - 12) / 2.8) * 14 + Math.cos(hour / 3.2) * 10;
    const value = Math.max(4, base + lunchPeak + dinnerPeak + earlyMorning + lateNight);

    return {
      hour,
      label: `${String(hour).padStart(2, '0')}:00`,
      revenue: round(value * 50000, 0),
      target: round((45 + Math.sin((hour - 12) / 2.4) * 8) * 50000, 0),
    };
  });
}

function buildChannelMix(baseRevenue, seed = 0) {
  const channels = [
    { key: 'Dine In', share: 0.44 },
    { key: 'Delivery', share: 0.26 },
    { key: 'Takeaway', share: 0.18 },
    { key: 'Reservations', share: 0.12 },
  ];

  return channels.map((channel, index) => ({
    name: channel.key,
    value: round(baseRevenue * channel.share * (1 + Math.sin((seed + index) / 3) * 0.05), 0),
    share: round(channel.share * 100, 1),
  }));
}

function buildMenuScatter(seed = 0) {
  const items = [
    ['Signature Steak', 82, 72, 'Plates'],
    ['Truffle Fries', 66, 84, 'Sides'],
    ['Seasonal Salad', 58, 76, 'Healthy'],
    ['BBQ Sliders', 74, 49, 'Plates'],
    ['Espresso Martini', 78, 88, 'Drinks'],
    ['Chicken Wrap', 53, 63, 'Lighter'],
    ['Chef Pasta', 71, 58, 'Plates'],
    ['Dessert Board', 41, 92, 'Dessert'],
    ['Flat White', 88, 71, 'Drinks'],
    ['Crispy Calamari', 62, 67, 'Starters'],
  ];

  return items.map(([name, x, y, category], index) => ({
    name,
    category,
    x: round(x + Math.sin((seed + index) / 2) * 4, 1),
    y: round(y + Math.cos((seed + index) / 2.5) * 5, 1),
    value: 30 + index * 3,
  }));
}

function buildHeatmap() {
  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const heatmap = [];

  dayLabels.forEach((day, dayIndex) => {
    Array.from({ length: 24 }, (_, hour) => hour).forEach((hour) => {
      const base = 30 + Math.sin((hour - 12) / 3.4) * 22 + Math.cos((dayIndex - 3) / 1.8) * 10;
      const lunchPeak = hour >= 11 && hour <= 14 ? 28 : 0;
      const dinnerPeak = hour >= 18 && hour <= 21 ? 34 : 0;
      const weekendBoost = dayIndex >= 5 ? 20 : 0;
      const mondayDip = dayIndex === 0 ? -14 : 0;

      heatmap.push({
        day,
        hour: `${String(hour).padStart(2, '0')}:00`,
        value: round(Math.max(5, base + lunchPeak + dinnerPeak + weekendBoost + mondayDip), 1),
      });
    });
  });

  return heatmap;
}

function buildDomainKpis() {
  return Object.fromEntries(
    Object.entries(DOMAIN_DEFINITIONS).map(([domainKey, domain], domainIndex) => {
      const kpis = domain.kpis.map((kpi, kpiIndex) => {
        const sparkline = buildSparkline(domainIndex * 19 + kpiIndex * 7 + 2, kpi.base, kpi.volatility);
        const latest = sparkline[sparkline.length - 1];
        const previous = sparkline[sparkline.length - 2] ?? latest;
        const delta = latest - previous;
        const deltaPercent = previous === 0 ? 0 : (delta / previous) * 100;

        return {
          ...kpi,
          domain: domain.label,
          sparkline,
          latest,
          previous,
          delta,
          deltaPercent,
        };
      });

      return [domainKey, kpis];
    }),
  );
}

function buildBenchmarkStatus(kpi, value) {
  const performance = kpi.direction === 'down' ? kpi.target - value : value - kpi.target;
  const ratio = Math.abs(value - kpi.target) / (kpi.target || 1);

  if (performance >= 0) {
    return {
      label: 'Above benchmark',
      tone: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20',
      breached: false,
    };
  }

  if (ratio > 0.08) {
    return {
      label: 'Below benchmark',
      tone: 'text-rose-300 bg-rose-500/10 border-rose-400/20',
      breached: true,
    };
  }

  return {
    label: 'On watch',
    tone: 'text-amber-200 bg-amber-500/10 border-amber-400/20',
    breached: true,
  };
}

function buildAlerts(kpiGroups, simulationEnabled, pulse) {
  const alerts = [];

  Object.entries(kpiGroups).forEach(([domainKey, kpis]) => {
    kpis.forEach((kpi) => {
      const status = buildBenchmarkStatus(kpi, kpi.latest);
      if (!status.breached) {
        return;
      }

      const gap = kpi.direction === 'down' ? kpi.latest - kpi.target : kpi.target - kpi.latest;
      const severityScore = Math.abs(gap) / (kpi.target || 1);
      const severity = severityScore > 0.12 ? 'high' : severityScore > 0.06 ? 'medium' : 'low';

      alerts.push({
        id: `${domainKey}-${kpi.key}`,
        domain: domainKey,
        title: `${kpi.label} is under pressure`,
        severity,
        message: `${formatMetricValue(kpi, kpi.latest)} vs ${formatMetricValue(kpi, kpi.target)} target`,
        action:
          severity === 'high'
            ? 'Review pricing, staffing, and channel mix for immediate variance.'
            : 'Watch the trend and compare against the last seven days.',
      });
    });
  });

  if (simulationEnabled) {
    const simulatedHigh = pulse % 2 === 0;
    alerts.unshift({
      id: `simulation-${pulse % 9}`,
      domain: 'Operations',
      title: simulatedHigh ? 'Dinner rush is building faster than forecast' : 'Lunch throughput is slightly softer than plan',
      severity: simulatedHigh ? 'high' : 'medium',
      message: simulatedHigh ? 'Tonight’s throughput forecast is 11% above staffing plan.' : 'Midday cover is 6% below the target band.',
      action: simulatedHigh
        ? 'Reallocate a floor runner and pre-stage high-frequency menu items.'
        : 'Shift one server into support coverage before the lunch wave peaks.',
    });
  }

  return alerts;
}

function adjustSeries(series, pulse, factor = 1) {
  return series.map((point, index) => {
    const wobble = Math.sin((pulse + index) / (3.1 / factor)) * 0.018;
    const drift = Math.cos((pulse + index) / 5.4) * 0.01;

    return {
      ...point,
      revenue: round(point.revenue * (1 + wobble + drift), 0),
      target: round(point.target * (1 + Math.sin((pulse + index) / 8.8) * 0.005), 0),
      orders: point.orders ? round(point.orders * (1 + Math.cos((pulse + index) / 6.4) * 0.012), 0) : point.orders,
    };
  });
}

function adjustChannelMix(channelMix, pulse) {
  return channelMix.map((channel, index) => ({
    ...channel,
    value: round(channel.value * (1 + Math.sin((pulse + index) / 4.7) * 0.02), 0),
  }));
}

function adjustKpis(kpiGroups, pulse, role) {
  return Object.fromEntries(
    Object.entries(kpiGroups).map(([domainKey, kpis]) => {
      const updated = kpis.map((kpi, index) => {
        const roleBias = role === 'Owner' && domainKey === 'ROI & Growth' ? 0.01 : role === 'Manager' && domainKey === 'Operations' ? 0.008 : 0;
        const wobble = Math.sin((pulse + index + kpi.base) / 4.6) * 0.015 + roleBias;
        const liveValue = round(kpi.latest * (1 + wobble), 2);
        const benchmark = buildBenchmarkStatus(kpi, liveValue);

        return {
          ...kpi,
          latest: liveValue,
          delta: liveValue - kpi.previous,
          deltaPercent: kpi.previous === 0 ? 0 : ((liveValue - kpi.previous) / kpi.previous) * 100,
          benchmark,
          formattedValue: formatMetricValue(kpi, liveValue),
        };
      });

      return [domainKey, updated];
    }),
  );
}

export function generateDashboardData() {
  const dailySeries = buildDailySeries();
  const hourlyToday = buildHourlyToday();
  const kpiGroups = buildDomainKpis();
  const menuScatter = buildMenuScatter(6);
  const heatmap = buildHeatmap();
  const channelMix = buildChannelMix(dailySeries[dailySeries.length - 1].revenue, 0);
  const alerts = buildAlerts(kpiGroups, true, 0);

  return {
    generatedAt: new Date().toISOString(),
    domains: DOMAIN_DEFINITIONS,
    dailySeries,
    hourlyToday,
    kpiGroups,
    menuScatter,
    channelMix,
    heatmap,
    alerts,
  };
}

export function buildDashboardViewModel(baseData, options) {
  const { selectedDomain, timeFilter, role, alertSimulationEnabled, dismissedAlertIds = [], pulse = 0 } = options;
  const adjustedKpis = adjustKpis(baseData.kpiGroups, pulse, role);
  const currentDomain = adjustedKpis[selectedDomain] ?? adjustedKpis.Revenue;

  const liveHourlyToday = baseData.hourlyToday.map((hour, index) => ({
    ...hour,
    revenue: round(hour.revenue * (1 + Math.sin((pulse + index) / 6.8) * 0.02), 0),
    target: round(hour.target * (1 + Math.cos((pulse + index) / 7.8) * 0.01), 0),
  }));

  const normalizedTimeFilter = timeFilter === 'Week' || timeFilter === 'Month' ? timeFilter : 'Today';
  const dayWindow = normalizedTimeFilter === 'Week' ? 7 : normalizedTimeFilter === 'Month' ? 30 : 1;
  const slicedSeries = baseData.dailySeries.slice(-dayWindow);
  const trendSeries = adjustSeries(slicedSeries, pulse, normalizedTimeFilter === 'Month' ? 1.1 : 1);

  const revenueTrend =
    normalizedTimeFilter === 'Today'
      ? liveHourlyToday.map((point, index) => ({
          name: point.label,
          revenue: point.revenue,
          target: point.target,
          dateLabel: point.label,
          index,
        }))
      : trendSeries.map((point, index) => ({
          name: point.date,
          revenue: point.revenue,
          target: point.target,
          dateLabel: point.date,
          index,
        }));

  const dailyVsTarget =
    normalizedTimeFilter === 'Today'
      ? liveHourlyToday.map((point, index) => ({
          name: point.label,
          revenue: point.revenue,
          target: point.target,
          delta: point.revenue - point.target,
          index,
        }))
      : trendSeries.map((point, index) => ({
          name: point.date.slice(5),
          revenue: point.revenue,
          target: point.target,
          delta: point.revenue - point.target,
          index,
        }));

  const revenuePoints = normalizedTimeFilter === 'Today' ? liveHourlyToday : trendSeries;
  const windowRevenue = revenuePoints.reduce((sum, point) => sum + point.revenue, 0);
  const windowTarget = revenuePoints.reduce((sum, point) => sum + point.target, 0);
  const windowGap = windowRevenue - windowTarget;
  const performanceRatio = windowTarget === 0 ? 1 : windowRevenue / windowTarget;
  const windowShift = Math.max(-0.08, Math.min(0.08, (performanceRatio - 1) * 0.7));

  const windowAwareKpis = Object.fromEntries(
    Object.entries(adjustedKpis).map(([domainKey, kpis]) => {
      const updated = kpis.map((kpi) => {
        const directionFactor = kpi.direction === 'down' ? -1 : 1;
        const shiftedValue = round(kpi.latest * (1 + windowShift * directionFactor), 2);
        const benchmark = buildBenchmarkStatus(kpi, shiftedValue);

        return {
          ...kpi,
          latest: shiftedValue,
          delta: shiftedValue - kpi.previous,
          deltaPercent: kpi.previous === 0 ? 0 : ((shiftedValue - kpi.previous) / kpi.previous) * 100,
          benchmark,
        };
      });

      return [domainKey, updated];
    }),
  );

  const activeAlerts = buildAlerts(windowAwareKpis, alertSimulationEnabled, pulse).filter(
    (alert) => !dismissedAlertIds.includes(alert.id),
  );

  const channelMix = adjustChannelMix(baseData.channelMix, pulse);
  const heatmap = baseData.heatmap.map((cell, index) => ({
    ...cell,
    value: round(cell.value * (1 + Math.sin((pulse + index) / 8) * 0.018), 1),
  }));

  const selectedDomainDefinition = baseData.domains[selectedDomain] ?? baseData.domains.Revenue;
  const selectedDomainKpis = windowAwareKpis[selectedDomain] ?? windowAwareKpis.Revenue;
  const currentKpis = selectedDomainKpis.map((kpi) => ({
    ...kpi,
    formattedValue: formatMetricValue(kpi, kpi.latest),
    benchmarkLabel: kpi.benchmark.label,
    benchmarkTone: kpi.benchmark.tone,
    alertBreached: kpi.benchmark.breached,
    trendDirection: kpi.delta >= 0 ? 'up' : 'down',
    trendLabel: `${kpi.delta >= 0 ? '+' : ''}${formatMetricValue(kpi, Math.abs(kpi.delta))} vs previous`,
  }));

  const headlineMetrics = {
    revenue: {
      ...windowAwareKpis.Revenue[0],
      latest: windowRevenue,
      target: windowTarget,
      delta: windowGap,
      deltaPercent: windowTarget === 0 ? 0 : (windowGap / windowTarget) * 100,
      formattedValue: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(windowRevenue),
    },
    operations: windowAwareKpis.Operations[2],
    customer: windowAwareKpis.Customer[0],
    roi: windowAwareKpis['ROI & Growth'][0],
  };

  return {
    selectedDomainDefinition,
    currentKpis,
    revenueTrend,
    dailyVsTarget,
    channelMix,
    menuScatter: baseData.menuScatter,
    heatmap,
    hourlyToday: liveHourlyToday,
    alerts: activeAlerts,
    headlineMetrics,
    windowMetrics: {
      revenue: windowRevenue,
      target: windowTarget,
      gap: windowGap,
      points: revenuePoints.length,
    },
    role,
    timeFilter: normalizedTimeFilter,
    selectedDomain,
  };
}

export function formatDashboardValue(metric, value) {
  return formatMetricValue(metric, value);
}

export { DOMAIN_DEFINITIONS };