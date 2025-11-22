declare module 'react-simple-maps' {
  import * as React from 'react';

  export interface GeographyObject {
    properties: Record<string, unknown>;
    geometry: {
      type: string;
      coordinates: number[] | number[][] | number[][][];
    };
    id?: string | number;
    type: string;
  }

  export interface ComposableMapProps extends React.SVGProps<SVGSVGElement> {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      rotate?: [number, number, number];
      precision?: number;
    };
    width?: number;
    height?: number;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;

  export interface GeographiesProps {
    geography: string | object;
    children?: (args: { geographies: GeographyObject[] }) => React.ReactNode;
  }

  export const Geographies: React.FC<GeographiesProps>;

  export interface GeographyProps extends React.SVGProps<SVGPathElement> {
    geography: GeographyObject;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    onMouseEnter?: (event: React.MouseEvent<SVGPathElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<SVGPathElement>) => void;
    onClick?: (event: React.MouseEvent<SVGPathElement>) => void;
  }

  export const Geography: React.FC<GeographyProps>;

  export interface ZoomableGroupProps extends React.SVGProps<SVGGElement> {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
  }

  export const ZoomableGroup: React.FC<ZoomableGroupProps>;

  export interface MarkerProps extends React.SVGProps<SVGGElement> {
    coordinates: [number, number];
  }

  export const Marker: React.FC<MarkerProps>;
}


