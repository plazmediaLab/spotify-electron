import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

export default function PlayerStatusRange({
  time,
  totalTime,
  setTimeMethod,
  handleSeekTo,
  ...props
}) {
  return (
    <section {...props}>
      <p className="text-xs tracking-wider text-secondary-dark">{time}</p>
      <Range
        step={1}
        min={0}
        max={totalTime}
        values={[time]}
        onChange={(values) => handleSeekTo(Number(values))}
        renderTrack={({ props, children }) => {
          return (
            <div
              {...props}
              className="render-track-range w-full rounded-full"
              style={{
                ...props.style,
                height: '4px',
                background: getTrackBackground({
                  values: [time],
                  colors: ['#9b4dfa', '#494A4E'],
                  min: 0,
                  max: totalTime
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
      <p className="text-xs tracking-wider text-secondary-dark">{totalTime}</p>
    </section>
  );
}
