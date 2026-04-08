import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const STORAGE_KEY = 'fnb-kpi-dashboard';
const VALID_TIME_FILTERS = ['Today', 'Week', 'Month'];

function normalizeTimeFilter(timeFilter) {
  if (VALID_TIME_FILTERS.includes(timeFilter)) {
    return timeFilter;
  }

  const lowered = String(timeFilter ?? '').toLowerCase();
  if (lowered === 'today') return 'Today';
  if (lowered === 'week') return 'Week';
  if (lowered === 'month') return 'Month';
  return 'Today';
}

export const useDashboardStore = create(
  persist(
    (set) => ({
      selectedDomain: 'Revenue',
      timeFilter: 'Today',
      role: 'Manager',
      theme: 'dark',
      alertSimulationEnabled: true,
      dismissedAlertIds: [],
      setSelectedDomain: (selectedDomain) => set({ selectedDomain }),
      setTimeFilter: (timeFilter) => set({ timeFilter: normalizeTimeFilter(timeFilter) }),
      setRole: (role) => set({ role }),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      toggleAlertSimulation: () =>
        set((state) => ({ alertSimulationEnabled: !state.alertSimulationEnabled })),
      dismissAlert: (alertId) =>
        set((state) => {
          if (state.dismissedAlertIds.includes(alertId)) {
            return state;
          }

          return {
            dismissedAlertIds: [...state.dismissedAlertIds, alertId],
          };
        }),
      restoreAlert: (alertId) =>
        set((state) => ({
          dismissedAlertIds: state.dismissedAlertIds.filter((currentId) => currentId !== alertId),
        })),
      clearDismissedAlerts: () => set({ dismissedAlertIds: [] }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        selectedDomain: state.selectedDomain,
        timeFilter: state.timeFilter,
        role: state.role,
        theme: state.theme,
        alertSimulationEnabled: state.alertSimulationEnabled,
        dismissedAlertIds: state.dismissedAlertIds,
      }),
    },
  ),
);