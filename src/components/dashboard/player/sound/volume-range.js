import { Range, getTrackBackground } from 'react-range';

const MIN = 0;
const MAX = 100;

export default function VolumeRange({ volume, setVolume, setLastVolume }) {
  const handleVolume = (val) => {
    setVolume(val);
    setLastVolume(val);
  };

  return (
    <Range
      step={1}
      min={MIN}
      max={MAX}
      values={[volume]}
      onChange={(values) => handleVolume(values)}
      renderTrack={({ props, children }) => {
        return (
          <div
            {...props}
            className="render-track-range w-20 rounded-full"
            style={{
              ...props.style,
              height: '4px',
              background: getTrackBackground({
                values: [volume],
                colors: ['#9b4dfa', '#494A4E'],
                min: MIN,
                max: MAX
              })
            }}>
            {children}
          </div>
        );
      }}
      renderThumb={({ props, isDragged }) => {
        return (
          <div
            {...props}
            style={{
              ...props.style,
              cursor: 'default'
            }}
            className={`render-thumb-range w-3.5 h-3.5 cursor-pointer rounded-full border-secondary border-4 ${
              isDragged ? 'bg-gradient-to-br from-secondary-dark to-secondary' : 'bg-secondary'
            } `}
          />
        );
      }}
    />
  );
}
