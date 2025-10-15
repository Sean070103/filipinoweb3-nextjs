'use client';

import { useState } from 'react';
import type { MouseEvent } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

interface CommunityData {
  name: string;
  communities: string[];
  events: number;
  members: number;
  companies: string[];
}

interface TooltipData {
  visible: boolean;
  name: string;
  x: number;
  y: number;
  data?: CommunityData;
}

interface GeographyProperties {
  NAME_1: string;
  [key: string]: unknown;
}

interface GeographyFeature {
  properties: GeographyProperties;
  rsmKey: string;
  [key: string]: unknown;
}

// TopoJSON of Philippine provinces
const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/philippines/philippines-provinces.json';

export default function PhilippinesMap() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipData>({ visible: false, name: '', x: 0, y: 0 });

  // Filipino Web3 Communities Data
  const web3Communities = {
    'Metro Manila': {
      name: 'Metro Manila',
      communities: ['Manila Web3 Hub', 'Makati Blockchain Society', 'Quezon City Crypto Club'],
      events: 12,
      members: 2500,
      companies: ['Coins.ph', 'UnionBank', 'GCash', 'PayMongo']
    },
    'Cebu': {
      name: 'Cebu',
      communities: ['Cebu Web3 Builders', 'Visayas Blockchain Network'],
      events: 6,
      members: 800,
      companies: ['Cebu Web3 Incubator', 'Visayas Crypto Exchange']
    },
    'Davao': {
      name: 'Davao',
      communities: ['Davao Web3 Society', 'Mindanao Blockchain Alliance'],
      events: 4,
      members: 450,
      companies: ['Mindanao Web3 Labs']
    },
    'Iloilo': {
      name: 'Iloilo',
      communities: ['Iloilo Crypto Community'],
      events: 2,
      members: 200,
      companies: ['Panay Web3 Solutions']
    },
    'Baguio': {
      name: 'Baguio',
      communities: ['Baguio Web3 Collective'],
      events: 3,
      members: 300,
      companies: ['Cordillera Blockchain Hub']
    }
  };

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
                geographies.map((geo, index) => {
                  const geoFeature = geo as unknown as GeographyFeature;
                  const provinceName = geoFeature.properties.NAME_1;
                  const selected = selectedProvince === provinceName;
                  return (
                    <Geography
                      key={geoFeature.rsmKey || `geo-${index}`}
                      geography={geo}
                      onClick={() => setSelectedProvince(provinceName)}
                      onMouseEnter={(e: MouseEvent<SVGPathElement>) => {
                        const communityData = web3Communities[provinceName as keyof typeof web3Communities];
                        setTooltip({ 
                          visible: true, 
                          name: provinceName, 
                          x: e.clientX, 
                          y: e.clientY,
                          data: communityData
                        });
                      }}
                      onMouseMove={(e: MouseEvent<SVGPathElement>) => {
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
        <div className="mt-6 p-6 border-2 border-[var(--ph-yellow)]/30 rounded-xl bg-black/80 shadow-2xl text-white max-w-2xl">
          {web3Communities[selectedProvince as keyof typeof web3Communities] ? (
            <div>
              <h3 className="text-2xl font-bold text-[var(--ph-yellow)] mb-4">
                {selectedProvince} Web3 Community
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">📊 Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div>👥 <span className="font-bold">{web3Communities[selectedProvince as keyof typeof web3Communities].members.toLocaleString()}</span> members</div>
                    <div>📅 <span className="font-bold">{web3Communities[selectedProvince as keyof typeof web3Communities].events}</span> events this year</div>
                    <div>🏢 <span className="font-bold">{web3Communities[selectedProvince as keyof typeof web3Communities].companies.length}</span> Web3 companies</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">🏘️ Communities</h4>
                  <div className="space-y-1 text-sm">
                    {web3Communities[selectedProvince as keyof typeof web3Communities].communities.map((community, index) => (
                      <div key={index} className="text-gray-300">• {community}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-lg mb-2">🏢 Local Companies</h4>
                <div className="flex flex-wrap gap-2">
                  {web3Communities[selectedProvince as keyof typeof web3Communities].companies.map((company, index) => (
                    <span key={index} className="px-3 py-1 bg-[var(--ph-blue)]/20 text-[var(--ph-yellow)] rounded-full text-xs">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold text-[var(--ph-yellow)] mb-4">
                {selectedProvince}
              </h3>
              <p className="text-gray-300">
                No Web3 communities found in this region yet. 
                <span className="text-[var(--ph-yellow)]"> Be the first to start one!</span>
              </p>
            </div>
          )}
        </div>
      )}

      {tooltip.visible && (
        <div
          className="fixed pointer-events-none px-4 py-3 rounded-lg bg-black/90 border border-[var(--ph-yellow)]/30 text-sm text-white max-w-xs"
          style={{ left: tooltip.x, top: tooltip.y, zIndex: 50 }}
        >
          <div className="font-bold text-[var(--ph-yellow)] mb-2">{tooltip.name}</div>
          {tooltip.data ? (
            <div className="space-y-1">
              <div>👥 {tooltip.data.members.toLocaleString()} members</div>
              <div>📅 {tooltip.data.events} events</div>
              <div className="text-xs text-gray-300">
                Communities: {tooltip.data.communities.length}
              </div>
            </div>
          ) : (
            <div className="text-gray-400">Click to explore Web3 communities</div>
          )}
        </div>
      )}
    </div>
  );
}


