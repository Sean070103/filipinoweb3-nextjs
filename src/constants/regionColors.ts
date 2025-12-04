// Standard region colors for Luzon, Visayas, and Mindanao
export const REGION_COLORS = {
  Luzon: '#22d3ee',      // Cyan
  Visayas: '#a855f7',    // Purple
  Mindanao: '#f97316',   // Orange
} as const;

export type Region = keyof typeof REGION_COLORS;

// Helper function to get region color
export const getRegionColor = (region: Region): string => {
  return REGION_COLORS[region];
};

// Helper function to get region glow color (with opacity)
export const getRegionGlowColor = (region: Region, opacity: number = 0.8): string => {
  if (region === 'Luzon') return `rgba(34, 211, 238, ${opacity})`;
  if (region === 'Visayas') return `rgba(168, 85, 247, ${opacity})`;
  return `rgba(249, 115, 22, ${opacity})`;
};

