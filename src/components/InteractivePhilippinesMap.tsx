'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { X, Sparkles } from 'lucide-react';
import { REGION_COLORS, getRegionColor, getRegionGlowColor, type Region } from '@/constants/regionColors';

type CommunityLocation = {
  name: string;
  region: 'Luzon' | 'Visayas' | 'Mindanao';
  coordinates: [number, number]; // [latitude, longitude] for Leaflet
  avatar?: string;
  facebookLink?: string;
  xLink?: string;
  email?: string;
  description?: string;
  communityImage?: string;
};

const communityLocations: CommunityLocation[] = [
  {
    name: 'Tarlac City • TBA',
    region: 'Luzon',
    coordinates: [15.4861, 120.5986],
  },
  {
    name: 'Bacolod City',
    region: 'Visayas',
    coordinates: [10.6769, 122.9620],
    avatar: '/images/Bacolod.jpg',
    facebookLink: 'https://facebook.com/web3bacolod',
    xLink: 'https://x.com/web3bacolod',
    email: 'web3bacolod@gmail.com',
    description: 'Web3 Bacolod is a local community of blockchain & Web3 enthusiasts based in Bacolod City & the Negros Island Region.',
    communityImage: '/images/community_bc.jpg',
  },
  {
    name: 'Makati City • TBA',
    region: 'Luzon',
    coordinates: [14.5546, 121.0244],
  },
  {
    name: 'Butuan City • TBA',
    region: 'Mindanao',
    coordinates: [8.9475, 125.5406],
  },
  {
    name: 'Orani, Bataan • TBA',
    region: 'Luzon',
    coordinates: [14.8004, 120.5362],
  },
  {
    name: 'San Pedro, Laguna • TBA',
    region: 'Luzon',
    coordinates: [14.3571, 121.0509],
  },
  {
    name: 'Kabankalan City',
    region: 'Visayas',
    coordinates: [9.9867, 122.8144],
    avatar: '/images/Kabankalan.jfif',
    facebookLink: 'https://www.facebook.com/web3kab',
  },
  {
    name: 'Iloilo City',
    region: 'Visayas',
    coordinates: [10.7202, 122.5621],
    avatar: '/images/Iloilo.jfif',
    facebookLink: 'https://www.facebook.com/web3iloilo',
  },
  {
    name: 'Cebu City',
    region: 'Visayas',
    coordinates: [10.3157, 123.8854],
    avatar: '/images/Cebu.jfif',
    facebookLink: 'https://www.facebook.com/web3cebu',
  },
  {
    name: 'Rizal',
    region: 'Luzon',
    coordinates: [14.6255, 121.1245], // Antipolo, Rizal
    avatar: '/images/Rizal.jfif',
    facebookLink: 'https://www.facebook.com/Web3Rizal',
  },
  {
    name: 'San Carlos City',
    region: 'Visayas',
    coordinates: [10.4929, 123.4097], // San Carlos City, Negros Occidental
    avatar: '/images/Sancarlos.jfif',
    facebookLink: 'https://www.facebook.com/web3sancarlos',
  },
  {
    name: 'Daraga, Albay • TBA',
    region: 'Luzon',
    coordinates: [13.1489, 123.7126],
  },
  {
    name: 'Batangas City • TBA',
    region: 'Luzon',
    coordinates: [13.7565, 121.0583],
  },
  {
    name: 'Cabuyao City • TBA',
    region: 'Luzon',
    coordinates: [14.2742, 121.1236],
  },
];

// Helper function to convert city name to URL slug
const getCitySlug = (cityName: string): string => {
  // Extract city name (remove "• TBA" part if present)
  const name = cityName.split('•')[0].trim();
  // Convert to lowercase and replace spaces/special chars with hyphens
  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Helper function to find location by slug
const findLocationBySlug = (slug: string): CommunityLocation | undefined => {
  return communityLocations.find(loc => getCitySlug(loc.name) === slug);
};

// Custom marker icons with enhanced design
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createCustomIcon = (L: any, region: CommunityLocation['region'], isSelected: boolean, isHovered: boolean) => {
  const size = isSelected ? 32 : isHovered ? 24 : 20;
  const color = getRegionColor(region as Region);
  const glowColor = getRegionGlowColor(region as Region, 0.8);

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
  const router = useRouter();
  const searchParams = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const leafletRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const geoJsonLayerRef = useRef<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<CommunityLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Initialize selected location from URL params
  useEffect(() => {
    const cityParam = searchParams.get('city');
    if (cityParam) {
      const location = findLocationBySlug(cityParam);
      if (location) {
        setSelectedLocation(location);
      }
    }
  }, [searchParams]);

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
      zoom: isMobile ? 6 : 7,
      zoomControl: true,
      attributionControl: false,
      minZoom: isMobile ? 6 : 7,
      maxZoom: isMobile ? 6 : 7,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      touchZoom: false,
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
          
          // Store reference to GeoJSON layer
          geoJsonLayerRef.current = geoJsonLayer;
          
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
          const padding = isMobile ? [10, 10] : [20, 20];
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
              
              // Store reference to GeoJSON layer
              geoJsonLayerRef.current = geoJsonLayer;
              
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
          const zoomLevel = isMobile ? 8 : 9;
          map.setView(location.coordinates, zoomLevel, { animate: true, duration: 1 });
          
          // Update URL with city parameter
          const citySlug = getCitySlug(location.name);
          router.push(`/community?city=${citySlug}`, { scroll: false });
          
          // Change map color based on selected region
          if (geoJsonLayerRef.current) {
            const regionColor = REGION_COLORS[location.region as Region];
            const regionGlow = getRegionGlowColor(location.region as Region, 0.6);
            
            geoJsonLayerRef.current.setStyle({
              fillColor: regionGlow,
              fillOpacity: 0.4,
              color: regionColor,
              weight: 4,
            });
          }
        })
        .on('mouseover', () => {
          setHoveredLocation(location.name);
        })
        .on('mouseout', () => {
          setHoveredLocation(null);
        });

      // Get all members in the same city
      const cityName = getCityLabel(location);
      const membersInCity = communityLocations.filter(
        (loc) => getCityLabel(loc) === cityName
      );
      const memberNames = membersInCity.map((loc) => {
        const parts = loc.name.split('•');
        return parts.length > 1 ? parts[1].trim() : '';
      }).filter(Boolean);

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
            gap: ${isMobile ? '0.35rem' : '0.5rem'};
            margin-bottom: ${isMobile ? '0.4rem' : '0.6rem'};
          ">
            <span style="color: #22d3ee; font-size: ${isMobile ? '1rem' : '1.2rem'};">📍</span>
            <strong style="
              font-size: ${isMobile ? '0.9rem' : '1.1rem'};
              font-weight: 800;
              letter-spacing: 0.05em;
              color: #ffffff;
              text-shadow: 0 0 10px rgba(34, 211, 238, 0.6), 0 2px 4px rgba(0,0,0,0.5);
            ">${cityName.toUpperCase()}</strong>
          </div>
          ${memberNames.length > 0 ? `
            <div style="
              font-size: ${isMobile ? '0.5rem' : '0.6rem'};
              color: #a855f7;
              margin-bottom: ${isMobile ? '0.25rem' : '0.35rem'};
              line-height: 1.4;
            ">
              ${memberNames.join(' • ')}
            </div>
          ` : ''}
          <div style="
            font-size: ${isMobile ? '0.5rem' : '0.6rem'};
            padding: ${isMobile ? '0.2rem 0.4rem' : '0.25rem 0.5rem'};
            background: rgba(168, 85, 247, 0.2);
            border: 1px solid rgba(168, 85, 247, 0.6);
            border-radius: ${isMobile ? '4px' : '6px'};
            display: inline-block;
            margin-top: ${isMobile ? '0.15rem' : '0.25rem'};
            margin-bottom: ${location.avatar ? (isMobile ? '0.35rem' : '0.5rem') : '0'};
            color: #a855f7;
          ">${location.region}</div>
          ${location.avatar ? `
            <div style="
              margin-top: ${isMobile ? '0.5rem' : '0.65rem'};
              display: flex;
              justify-content: center;
            ">
              <img 
                src="${location.avatar}" 
                alt="${cityName} logo"
                style="
                  width: ${isMobile ? '120px' : '150px'};
                  height: auto;
                  border-radius: 10px;
                  border: 2px solid rgba(168, 85, 247, 0.4);
                  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                "
              />
            </div>
          ` : ''}
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
      const padAmount = isMobile ? 0.1 : 0.15;
      map.fitBounds(group.getBounds().pad(padAmount));
    }

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = [];
      geoJsonLayerRef.current = null;
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

  // Reset map color when no location is selected
  useEffect(() => {
    if (!geoJsonLayerRef.current) return;
    
    if (!selectedLocation) {
      // Reset to default cyan color
      geoJsonLayerRef.current.setStyle({
        fillColor: 'rgba(34, 211, 238, 0.25)',
        fillOpacity: 0.9,
        color: 'rgba(34, 211, 238, 1)',
        weight: 3,
      });
    } else {
      // Update map color based on selected region
      const regionColor = REGION_COLORS[selectedLocation.region as Region];
      const regionGlow = getRegionGlowColor(selectedLocation.region as Region, 0.6);
      
      geoJsonLayerRef.current.setStyle({
        fillColor: regionGlow,
        fillOpacity: 0.4,
        color: regionColor,
        weight: 4,
      });

      // Zoom to selected location if map is loaded
      if (mapRef.current) {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
        const zoomLevel = isMobile ? 8 : 9;
        mapRef.current.setView(selectedLocation.coordinates, zoomLevel, { animate: true, duration: 1 });
      }
    }
  }, [selectedLocation]);

  const regionColors = REGION_COLORS;

  const getCityLabel = (location: CommunityLocation) =>
    location.name.split('•')[0]?.trim() || location.name;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Region Legend */}
      <div className="flex justify-center gap-3 sm:gap-5 md:gap-7 flex-wrap mb-4 sm:mb-6 md:mb-8 px-2">
        {Object.entries(regionColors).map(([region, color]) => (
          <div key={region} className="flex items-center gap-1.5 sm:gap-2.5">
            <div style={{
              width: 'clamp(14px, 3vw, 18px)',
              height: 'clamp(14px, 3vw, 18px)',
              borderRadius: '50%',
              background: color,
              boxShadow: `0 0 clamp(6px, 1.5vw, 10px) ${color}`,
              flexShrink: 0,
            }}></div>
            <span style={{
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)',
              color: 'var(--color-light)',
              whiteSpace: 'nowrap',
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

        {/* Selected Member Overlay */}
      {selectedLocation && (
        <div
            className="member-floating-card"
          style={{
              position: 'absolute',
              top: 'clamp(0.75rem, 2vw, 1.5rem)',
              right: 'clamp(0.75rem, 2vw, 1.5rem)',
              width: 'min(280px, 80vw)',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(20, 20, 40, 0.95))',
            border: `clamp(2px, 0.4vw, 3px) solid ${regionColors[selectedLocation.region]}`,
            borderRadius: 'clamp(0.5rem, 1.5vw, 1rem)',
              padding: 'clamp(0.75rem, 1.5vw, 1rem)',
            boxShadow: `
                0 20px 40px rgba(0,0,0,0.5),
                0 0 clamp(20px, 5vw, 40px) ${regionColors[selectedLocation.region]}60
              `,
              zIndex: 20,
            }}
          >
            {/* Header with title and close button */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0 }}>
                <Sparkles 
                  style={{ 
                    color: regionColors[selectedLocation.region],
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                  }} 
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
                    letterSpacing: '0.05em',
                    margin: 0,
                    background: `linear-gradient(135deg, ${regionColors[selectedLocation.region]}, #ffffff)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {`WEB3 ${getCityLabel(selectedLocation).toUpperCase().replace(' CITY', '')}`}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#9ca3af',
                  width: 24,
                  height: 24,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9ca3af';
                }}
                aria-label="Close member card"
              >
                <X style={{ width: 16, height: 16, strokeWidth: 2 }} />
              </button>
            </div>

            {/* Social icons row */}
            {(selectedLocation.facebookLink || selectedLocation.xLink || selectedLocation.email) && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.5rem' }}>
                {selectedLocation.facebookLink && (
                  <a
                    href={selectedLocation.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      background: 'rgba(24, 119, 242, 0.15)',
                      border: '1px solid rgba(24, 119, 242, 0.5)',
                      borderRadius: '50%',
                      color: '#1877f2',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(24, 119, 242, 0.3)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(24, 119, 242, 0.15)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    aria-label="Visit Facebook Page"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {selectedLocation.xLink && (
                  <a
                    href={selectedLocation.xLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    aria-label="Visit X Profile"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                )}
                {selectedLocation.email && (
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(selectedLocation.email!);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      background: 'rgba(34, 211, 238, 0.15)',
                      border: '1px solid rgba(34, 211, 238, 0.5)',
                      borderRadius: '50%',
                      color: '#22d3ee',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(34, 211, 238, 0.3)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(34, 211, 238, 0.15)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    aria-label="Copy Email"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </button>
                )}
              </div>
            )}

            {/* Community badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.25rem 0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '999px',
                fontSize: 'clamp(0.5rem, 1vw, 0.6rem)',
                letterSpacing: '0.08em',
                color: '#ffffff',
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              <span
                style={{
                  width: '0.3rem',
                  height: '0.3rem',
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
                }}
              />
              <span>Community</span>
            </div>

            {/* Description */}
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontSize: 'clamp(0.65rem, 1.2vw, 0.75rem)',
                lineHeight: 1.5,
                color: '#e5e7eb',
                opacity: 0.9,
              }}
            >
              {selectedLocation.description || 'Tap markers to explore the people powering Filipino Web3 in every city.'}
            </p>

            {/* Community Image */}
            {selectedLocation.communityImage && (
              <div
                style={{
                  marginTop: '0.75rem',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: `1px solid ${regionColors[selectedLocation.region]}40`,
                }}
              >
                <img
                  src={selectedLocation.communityImage}
                  alt={`${getCityLabel(selectedLocation)} community`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </div>
            )}
          </div>
        )}
        </div>

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
