'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { useEffect } from 'react';

// TopoJSON of Philippine provinces
const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/philippines/philippines-provinces.json';

export default function PhilippinesMap() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ visible: boolean; name: string; x: number; y: number }>({ visible: false, name: '', x: 0, y: 0 });

  return (
    <div className="flex flex-col items-center p-6 relative">
      <h2 className="text-2xl font-bold mb-4">Philippines Provinces Map</h2>

      <div className="w-full max-w-5xl bg-gradient-to-br from-[var(--ph-blue)]/20 to-[var(--ph-red)]/20 border-2 border-[var(--ph-yellow)]/30 rounded-xl overflow-hidden shadow-2xl">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 4000, center: [123, 12] }}
          width={800}
          height={1000}
          style={{ width: '100%', height: 'auto' }}
        >
          <ZoomableGroup zoom={1} minZoom={0.8} maxZoom={8} center={[123, 12]}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const provinceName = (geo as any).properties.NAME_1 as string;
                  const selected = selectedProvince === provinceName;
                  return (
                    <Geography
                      key={(geo as any).rsmKey}
                      geography={geo}
                      onClick={() => setSelectedProvince(provinceName)}
                      onMouseEnter={(e: any) => {
                        setTooltip({ visible: true, name: provinceName, x: e.clientX, y: e.clientY });
                      }}
                      onMouseMove={(e: any) => {
                        setTooltip(t => ({ ...t, x: e.clientX + 12, y: e.clientY + 12 }));
                      }}
                      onMouseLeave={() => setTooltip(t => ({ ...t, visible: false }))}
                      style={{
                        default: {
                          fill: selected ? '#FCD116' : '#0038A8',
                          outline: 'none',
                          stroke: '#CE1126',
                          strokeWidth: 0.5,
                        },
                        hover: { 
                          fill: '#FCD116', 
                          outline: 'none',
                          stroke: '#CE1126',
                          strokeWidth: 0.8,
                        },
                        pressed: { 
                          fill: '#CE1126', 
                          outline: 'none',
                          stroke: '#FCD116',
                          strokeWidth: 1,
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {selectedProvince && (
        <div className="mt-6 p-4 border border-[var(--border-low)] rounded-lg bg-[var(--surface-1)] shadow text-white">
          <p className="text-lg">
            You clicked on: <span className="font-bold">{selectedProvince}</span>
          </p>
        </div>
      )}

      {tooltip.visible && (
        <div
          className="fixed pointer-events-none px-2 py-1 rounded bg-black/80 border border-[var(--border-low)] text-xs text-white"
          style={{ left: tooltip.x, top: tooltip.y, zIndex: 50 }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}


