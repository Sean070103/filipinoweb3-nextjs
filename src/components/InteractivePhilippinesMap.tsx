'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Sparkles } from 'lucide-react';

type CommunityLocation = {
  name: string;
  region: 'Luzon' | 'Visayas' | 'Mindanao';
  coordinates: [number, number]; // [latitude, longitude] for Leaflet
};

const communityLocations: CommunityLocation[] = [
  {
    name: 'Bacolod',
    region: 'Visayas',
    coordinates: [10.6765, 122.9556],
  },
  {
    name: 'Kabankalan',
    region: 'Visayas',
    coordinates: [9.9889, 123.1583],
  },
  {
    name: 'San Carlos (Neg.Occ)',
    region: 'Visayas',
    coordinates: [10.4833, 123.4167],
  },
  {
    name: 'Dumaguete',
    region: 'Visayas',
    coordinates: [9.3103, 123.3044],
  },
  {
    name: 'Cebu',
    region: 'Visayas',
    coordinates: [10.3157, 123.8854],
  },
  {
    name: 'Iloilo',
    region: 'Visayas',
    coordinates: [10.7202, 122.5644],
  },
  {
    name: 'Guimaras',
    region: 'Visayas',
    coordinates: [10.5667, 122.5833],
  },
  {
    name: 'Leyte',
    region: 'Visayas',
    coordinates: [11.1667, 124.6333],
  },
  {
    name: 'Davao',
    region: 'Mindanao',
    coordinates: [7.1907, 125.6083],
  },
  {
    name: 'Rizal',
    region: 'Luzon',
    coordinates: [14.5667, 121.1167],
  },
  {
    name: 'Baguio',
    region: 'Luzon',
    coordinates: [16.4023, 120.5931],
  },
];

// Custom marker icons with enhanced design
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createCustomIcon = (L: any, region: CommunityLocation['region'], isSelected: boolean, isHovered: boolean) => {
  const size = isSelected ? 32 : isHovered ? 24 : 20;
  const color = 
    region === 'Luzon' ? '#22d3ee' :
    region === 'Visayas' ? '#a855f7' :
    '#f97316';

  const glowColor = 
    region === 'Luzon' ? 'rgba(34, 211, 238, 0.8)' :
    region === 'Visayas' ? 'rgba(168, 85, 247, 0.8)' :
    'rgba(249, 115, 22, 0.8)';

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        position: relative;
        width: ${size}px;
        height: ${size}px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        ${isSelected ? `
          <div style="
            position: absolute;
            width: ${size + 16}px;
            height: ${size + 16}px;
            border-radius: 50%;
            background: ${glowColor};
            animation: ripple 2s infinite;
            opacity: 0.6;
          "></div>
        ` : ''}
        <div style="
          position: relative;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: ${isSelected ? 'linear-gradient(135deg, #22d3ee, #a855f7)' : color};
          border: 4px solid #ffffff;
          box-shadow: 
            ${isSelected 
              ? `0 0 20px ${glowColor}, 0 0 40px ${glowColor}, 0 0 60px ${glowColor}, inset 0 0 10px rgba(255, 255, 255, 0.3)` 
              : `0 0 15px ${glowColor}, inset 0 0 8px rgba(255, 255, 255, 0.2)`};
          display: flex;
          align-items: center;
          justify-content: center;
          animation: ${isSelected ? 'pulse 2s infinite' : isHovered ? 'bounce 0.6s infinite' : 'none'};
          transition: all 0.3s ease;
          z-index: 10;
        ">
          <div style="
            width: ${size * 0.4}px;
            height: ${size * 0.4}px;
            border-radius: 50%;
            background: #ffffff;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
          "></div>
        </div>
        ${isSelected ? `
          <div style="
            position: absolute;
            top: -${size + 8}px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.95);
            border: 2px solid ${color};
            border-radius: 8px;
            padding: 4px 12px;
            white-space: nowrap;
            font-family: var(--font-press-start-2p), 'Courier New', monospace;
            font-size: 10px;
            color: ${color};
            text-shadow: 0 0 10px ${glowColor};
            box-shadow: 0 4px 20px rgba(0,0,0,0.5), 0 0 15px ${glowColor};
            z-index: 1000;
            animation: fadeIn 0.3s ease;
          ">${region}</div>
        ` : ''}
      </div>
    `,
    iconSize: [size, size + (isSelected ? 20 : 0)],
    iconAnchor: [size / 2, size / 2 + (isSelected ? 10 : 0)],
  });
};

export default function InteractivePhilippinesMap() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const leafletRef = useRef<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<CommunityLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Load Leaflet and fix icon paths
  useEffect(() => {
    if (typeof window === 'undefined' || leafletRef.current) return;

    import('leaflet').then((L) => {
      // Fix default marker icon path issue
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.default.Icon.Default.prototype as any)._getIconUrl;
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });
      
      leafletRef.current = L.default;
      setIsMapLoaded(true);
    });
  }, []);

  // Initialize map once Leaflet is loaded
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current || !isMapLoaded || !leafletRef.current) return;

    const L = leafletRef.current;

    // Initialize map with responsive settings
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const map = L.map(mapContainerRef.current, {
      center: [12.8797, 121.7740], // Center of Philippines
      zoom: isMobile ? 5 : 6,
      zoomControl: true,
      attributionControl: false,
      minZoom: isMobile ? 4 : 5,
      maxZoom: isMobile ? 8 : 10,
    });

    // Set max bounds
    map.setMaxBounds([
      [4.0, 114.0], // Southwest bounds
      [21.0, 128.0]  // Northeast bounds
    ]);

    // Load Philippines GeoJSON
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then((res) => res.json())
      .then((worldData) => {
        // Filter for Philippines
        const philippines = worldData.features?.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (feature: any) => 
            feature.properties.ADMIN === 'Philippines' ||
            feature.properties.NAME === 'Philippines' ||
            feature.properties.name === 'Philippines'
        );
        
        if (philippines) {
          const geoJsonLayer = L.geoJSON(philippines, {
            style: {
              fillColor: 'rgba(34, 211, 238, 0.25)',
              fillOpacity: 0.9,
              color: 'rgba(34, 211, 238, 1)',
              weight: 3,
            },
          }).addTo(map);
          
          // Add hover effect
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          geoJsonLayer.on('mouseover', function(e: any) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const layer: any = e.target;
            layer.setStyle({
              fillColor: 'rgba(34, 211, 238, 0.4)',
              fillOpacity: 1,
              color: 'rgba(168, 85, 247, 1)',
              weight: 4,
            });
          });
          
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          geoJsonLayer.on('mouseout', function(e: any) {
            geoJsonLayer.resetStyle(e.target);
          });
          
          // Fit map to Philippines bounds with responsive padding
          const padding = isMobile ? [15, 15] : [30, 30];
          map.fitBounds(geoJsonLayer.getBounds(), { padding });
        }
      })
      .catch(() => {
        // Fallback: Try alternative source
        fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
          .then((res) => res.json())
          .then((worldData) => {
            const philippines = worldData.features?.find(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (feature: any) => 
                feature.properties.name === 'Philippines' ||
                feature.properties.NAME === 'Philippines'
            );
            
            if (philippines) {
              const geoJsonLayer = L.geoJSON(philippines, {
                style: {
                  fillColor: 'rgba(34, 211, 238, 0.25)',
                  fillOpacity: 0.9,
                  color: 'rgba(34, 211, 238, 1)',
                  weight: 3,
                },
              }).addTo(map);
              
              const padding = isMobile ? [15, 15] : [30, 30];
              map.fitBounds(geoJsonLayer.getBounds(), { padding });
            }
          })
          .catch(() => {
            console.warn('Could not load Philippines map data');
          });
      });

    // Add markers for each location
    communityLocations.forEach((location) => {
      const isSelected = selectedLocation?.name === location.name;
      const isHovered = hoveredLocation === location.name;
      
      const icon = createCustomIcon(L, location.region, isSelected, isHovered);
      
      const marker = L.marker(location.coordinates, { icon })
        .addTo(map)
        .on('click', () => {
          setSelectedLocation(location);
          const zoomLevel = isMobile ? 7 : 8;
          map.setView(location.coordinates, zoomLevel, { animate: true, duration: 1 });
        })
        .on('mouseover', () => {
          setHoveredLocation(location.name);
        })
        .on('mouseout', () => {
          setHoveredLocation(null);
        });

      // Enhanced popup with responsive sizing
      marker.bindPopup(`
        <div style="
          font-family: var(--font-press-start-2p), 'Courier New', monospace;
          font-size: ${isMobile ? '0.6rem' : '0.75rem'};
          color: #ffffff;
          text-align: center;
          padding: ${isMobile ? '0.5rem' : '0.75rem'};
          background: linear-gradient(135deg, rgba(0,0,0,0.95), rgba(20,20,40,0.95));
          border: ${isMobile ? '1.5px' : '2px'} solid rgba(34, 211, 238, 0.6);
          border-radius: ${isMobile ? '8px' : '12px'};
          box-shadow: 0 0 ${isMobile ? '20px' : '30px'} rgba(34, 211, 238, 0.5);
        ">
          <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${isMobile ? '0.25rem' : '0.5rem'};
            margin-bottom: ${isMobile ? '0.25rem' : '0.5rem'};
          ">
            <span style="color: #22d3ee; font-size: ${isMobile ? '0.8rem' : '1rem'};">📍</span>
            <strong style="
              font-size: ${isMobile ? '0.65rem' : '0.8rem'};
              background: linear-gradient(135deg, #22d3ee, #a855f7);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            ">${location.name.toUpperCase()}</strong>
          </div>
          <div style="
            font-size: ${isMobile ? '0.5rem' : '0.6rem'};
            opacity: 0.9;
            padding: ${isMobile ? '0.2rem 0.4rem' : '0.25rem 0.5rem'};
            background: rgba(34, 211, 238, 0.1);
            border-radius: ${isMobile ? '4px' : '6px'};
            display: inline-block;
            margin-top: ${isMobile ? '0.15rem' : '0.25rem'};
          ">${location.region}</div>
        </div>
      `, {
        className: 'custom-popup',
        maxWidth: isMobile ? 150 : 200,
        closeButton: false,
      });

      markersRef.current.push(marker);
    });

    mapRef.current = map;

    // Fit bounds to show all markers with responsive padding
    if (markersRef.current.length > 0) {
      const group = new L.FeatureGroup(markersRef.current);
      const padAmount = isMobile ? 0.2 : 0.3;
      map.fitBounds(group.getBounds().pad(padAmount));
    }

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = [];
    };
  }, [isMapLoaded]);

  // Update marker icons when selection changes
  useEffect(() => {
    if (!mapRef.current || !leafletRef.current) return;

    markersRef.current.forEach((marker, index) => {
      const location = communityLocations[index];
      const isSelected = selectedLocation?.name === location.name;
      const isHovered = hoveredLocation === location.name;
      
      const newIcon = createCustomIcon(leafletRef.current!, location.region, isSelected, isHovered);
      marker.setIcon(newIcon);
    });
  }, [selectedLocation, hoveredLocation]);

  const regionColors = {
    Luzon: '#22d3ee',
    Visayas: '#a855f7',
    Mindanao: '#f97316',
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Region Legend */}
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap mb-4 sm:mb-6 md:mb-8">
        {Object.entries(regionColors).map(([region, color]) => (
          <div key={region} className="flex items-center gap-2 sm:gap-3">
            <div style={{
              width: 'clamp(12px, 2.5vw, 16px)',
              height: 'clamp(12px, 2.5vw, 16px)',
              borderRadius: '50%',
              background: color,
              boxShadow: `0 0 clamp(6px, 1.5vw, 10px) ${color}`,
            }}></div>
            <span style={{
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(0.5rem, 1.2vw, 0.7rem)',
              color: 'var(--color-light)',
            }}>{region}</span>
          </div>
        ))}
      </div>

      {/* Map Container with Enhanced Styling */}
      <div className="relative w-full overflow-hidden" style={{
        aspectRatio: '16/10',
        background: 'linear-gradient(135deg, #0a0f1a 0%, #1a1f2e 50%, #0f1419 100%)',
        border: 'clamp(2px, 0.5vw, 4px) solid rgba(34, 211, 238, 0.3)',
        borderRadius: 'clamp(0.5rem, 1.5vw, 1rem)',
        boxShadow: `
          0 clamp(10px, 2.5vw, 20px) clamp(30px, 7.5vw, 60px) rgba(0,0,0,0.5),
          0 0 clamp(20px, 5vw, 40px) rgba(34, 211, 238, 0.2),
          inset 0 0 clamp(20px, 5vw, 40px) rgba(34, 211, 238, 0.05)
        `,
        zIndex: 1,
      }}>
        {/* Grid Pattern Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(20px, 5vw, 40px) clamp(20px, 5vw, 40px)',
          pointerEvents: 'none',
          zIndex: 2,
        }} />

        {/* Corner Decorations */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 'clamp(20px, 5vw, 40px)',
          height: 'clamp(20px, 5vw, 40px)',
          borderTop: 'clamp(2px, 0.4vw, 3px) solid rgba(34, 211, 238, 0.6)',
          borderLeft: 'clamp(2px, 0.4vw, 3px) solid rgba(34, 211, 238, 0.6)',
          borderTopLeftRadius: 'clamp(0.5rem, 1.5vw, 1rem)',
          zIndex: 3,
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 'clamp(20px, 5vw, 40px)',
          height: 'clamp(20px, 5vw, 40px)',
          borderTop: 'clamp(2px, 0.4vw, 3px) solid rgba(34, 211, 238, 0.6)',
          borderRight: 'clamp(2px, 0.4vw, 3px) solid rgba(34, 211, 238, 0.6)',
          borderTopRightRadius: 'clamp(0.5rem, 1.5vw, 1rem)',
          zIndex: 3,
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 'clamp(20px, 5vw, 40px)',
          height: 'clamp(20px, 5vw, 40px)',
          borderBottom: 'clamp(2px, 0.4vw, 3px) solid rgba(34, 211, 238, 0.6)',
          borderLeft: 'clamp(2px, 0.4vw, 3px) solid rgba(34, 211, 238, 0.6)',
          borderBottomLeftRadius: 'clamp(0.5rem, 1.5vw, 1rem)',
          zIndex: 3,
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 'clamp(20px, 5vw, 40px)',
          height: 'clamp(20px, 5vw, 40px)',
          borderBottom: 'clamp(2px, 0.4vw, 3px) solid rgba(34, 211, 238, 0.6)',
          borderRight: 'clamp(2px, 0.4vw, 3px) solid rgba(34, 211, 238, 0.6)',
          borderBottomRightRadius: 'clamp(0.5rem, 1.5vw, 1rem)',
          zIndex: 3,
        }} />

        <div ref={mapContainerRef} style={{ width: '100%', height: '100%', zIndex: 1 }} />
      </div>

      {/* Enhanced Selected Location Details Panel */}
      {selectedLocation && (
        <div
          className="mt-4 sm:mt-6 md:mt-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 40, 0.8))',
            border: `clamp(2px, 0.4vw, 3px) solid ${regionColors[selectedLocation.region]}`,
            borderRadius: 'clamp(0.5rem, 1.5vw, 1rem)',
            padding: 'clamp(1rem, 3vw, 2rem)',
            boxShadow: `
              0 clamp(10px, 2.5vw, 20px) clamp(30px, 7.5vw, 60px) rgba(0,0,0,0.5),
              0 0 clamp(20px, 5vw, 40px) ${regionColors[selectedLocation.region]}40
            `,
          }}
        >
          {/* Background Glow Effect */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: `radial-gradient(circle, ${regionColors[selectedLocation.region]}20 0%, transparent 70%)`,
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 sm:mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                  <Sparkles 
                    style={{ 
                      color: regionColors[selectedLocation.region],
                      width: 'clamp(18px, 3.5vw, 24px)',
                      height: 'clamp(18px, 3.5vw, 24px)'
                    }} 
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                      letterSpacing: '0.08em',
                      margin: 0,
                      background: `linear-gradient(135deg, ${regionColors[selectedLocation.region]}, #ffffff)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: `0 0 clamp(10px, 2.5vw, 20px) ${regionColors[selectedLocation.region]}40`,
                      wordBreak: 'break-word',
                    }}
                  >
                    {selectedLocation.name.toUpperCase()}
                  </h3>
                </div>
                <div
                  className="inline-block"
                  style={{
                    padding: 'clamp(0.375rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
                    background: `linear-gradient(135deg, ${regionColors[selectedLocation.region]}20, ${regionColors[selectedLocation.region]}10)`,
                    border: `clamp(1px, 0.3vw, 2px) solid ${regionColors[selectedLocation.region]}`,
                    borderRadius: 'clamp(4px, 1vw, 8px)',
                    fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: regionColors[selectedLocation.region],
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    boxShadow: `0 0 clamp(8px, 2vw, 15px) ${regionColors[selectedLocation.region]}40`,
                  }}
                >
                  {selectedLocation.region} REGION
                </div>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'clamp(1px, 0.3vw, 2px) solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  color: '#ffffff',
                  width: 'clamp(32px, 5vw, 40px)',
                  height: 'clamp(32px, 5vw, 40px)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              >
                <X style={{ width: 'clamp(16px, 2.5vw, 20px)', height: 'clamp(16px, 2.5vw, 20px)' }} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        
        .custom-popup .leaflet-popup-content-wrapper {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        
        .custom-popup .leaflet-popup-tip {
          background: rgba(0, 0, 0, 0.95) !important;
          border: 2px solid rgba(34, 211, 238, 0.6) !important;
        }
        
        .leaflet-container {
          background: linear-gradient(135deg, #0a0f1a 0%, #1a1f2e 50%, #0f1419 100%) !important;
          font-family: var(--font-montserrat), sans-serif;
        }
        
        .leaflet-control-zoom {
          border: clamp(1px, 0.3vw, 2px) solid rgba(34, 211, 238, 0.4) !important;
          border-radius: clamp(6px, 1.5vw, 12px) !important;
          overflow: hidden;
          box-shadow: 0 clamp(2px, 0.5vw, 4px) clamp(10px, 2.5vw, 20px) rgba(0,0,0,0.5), 0 0 clamp(8px, 2vw, 15px) rgba(34, 211, 238, 0.3) !important;
          background: rgba(0, 0, 0, 0.8) !important;
        }
        
        .leaflet-control-zoom a {
          background: rgba(0, 0, 0, 0.8) !important;
          color: #22d3ee !important;
          border-bottom: clamp(0.5px, 0.15vw, 1px) solid rgba(34, 211, 238, 0.2) !important;
          font-size: clamp(14px, 2.5vw, 18px) !important;
          line-height: clamp(24px, 4vw, 30px) !important;
          width: clamp(28px, 4.5vw, 34px) !important;
          height: clamp(28px, 4.5vw, 34px) !important;
          transition: all 0.3s ease !important;
        }
        
        .leaflet-control-zoom a:hover {
          background: rgba(34, 211, 238, 0.2) !important;
          color: #ffffff !important;
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.5) !important;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
