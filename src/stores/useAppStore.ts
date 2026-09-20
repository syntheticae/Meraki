import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  // Last module topic the user was reading — survives tab switches
  lastViewedTopicId: string;
  setLastViewedTopicId: (id: string) => void;

  // Vault item count — updated after quiz auto-vault so Dashboard KPI stays fresh
  vaultDirty: boolean;
  markVaultDirty: () => void;
  clearVaultDirty: () => void;

  // Onboarding gate — mirrors storage.ts but lets React components react instantly
  hasCompletedOnboarding: boolean;
  setHasCompletedOnboarding: (v: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      lastViewedTopicId: 'modul-00a-alphabet-phonetics',
      setLastViewedTopicId: (id) => set({ lastViewedTopicId: id }),

      vaultDirty: false,
      markVaultDirty: () => set({ vaultDirty: true }),
      clearVaultDirty: () => set({ vaultDirty: false }),

      hasCompletedOnboarding: false,
      setHasCompletedOnboarding: (v) => set({ hasCompletedOnboarding: v }),
    }),
    {
      name: 'meraki_app_state',
      // Only persist lastViewedTopicId and onboarding flag — not the dirty flags
      partialize: (state) => ({
        lastViewedTopicId: state.lastViewedTopicId,
        hasCompletedOnboarding: state.hasCompletedOnboarding,
      }),
    }
  )
);
