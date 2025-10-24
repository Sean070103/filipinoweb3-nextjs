import MyMap from "@/components/smooth_maps";

export default function SmoothMap() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold' }}>
        Community Map
      </h1>
      <MyMap />
    </div>
  );
}
