import React, { useState, useEffect, useRef } from 'react';

interface A11yState {
  fontSize: number;       // multiplier: 1, 1.15, 1.3
  highContrast: boolean;
  dyslexiaFont: boolean;
  reducedMotion: boolean;
  largeLinks: boolean;
}

const defaultState: A11yState = {
  fontSize: 1,
  highContrast: false,
  dyslexiaFont: false,
  reducedMotion: false,
  largeLinks: false,
};

const STORAGE_KEY = 'exhale-a11y';

function loadState(): A11yState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultState, ...JSON.parse(raw) };
  } catch {}
  return defaultState;
}

function applyState(state: A11yState) {
  const root = document.documentElement;
  // Font size
  root.style.setProperty('--a11y-font-scale', String(state.fontSize));
  root.style.fontSize = state.fontSize === 1 ? '' : `${state.fontSize * 100}%`;

  // High contrast
  if (state.highContrast) {
    root.classList.add('a11y-high-contrast');
  } else {
    root.classList.remove('a11y-high-contrast');
  }

  // Dyslexia font
  if (state.dyslexiaFont) {
    root.classList.add('a11y-dyslexia');
  } else {
    root.classList.remove('a11y-dyslexia');
  }

  // Reduced motion
  if (state.reducedMotion) {
    root.classList.add('a11y-reduced-motion');
  } else {
    root.classList.remove('a11y-reduced-motion');
  }

  // Large links
  if (state.largeLinks) {
    root.classList.add('a11y-large-links');
  } else {
    root.classList.remove('a11y-large-links');
  }
}

export const AccessibilityWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(loadState);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Apply on mount and state change
  useEffect(() => {
    applyState(state);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }, [state]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  const update = (patch: Partial<A11yState>) =>
    setState((prev) => ({ ...prev, ...patch }));

  const reset = () => setState(defaultState);

  const fontLabels = ['A', 'A+', 'A++'];
  const fontValues = [1, 1.15, 1.3];
  const currentFontIdx = fontValues.indexOf(state.fontSize);

  return (
    <>
      {/* Inject CSS for a11y modes */}
      <style>{`
        .a11y-high-contrast {
          filter: contrast(1.4) brightness(1.05);
        }
        .a11y-dyslexia body,
        .a11y-dyslexia p,
        .a11y-dyslexia h1,
        .a11y-dyslexia h2,
        .a11y-dyslexia h3,
        .a11y-dyslexia h4,
        .a11y-dyslexia li,
        .a11y-dyslexia label,
        .a11y-dyslexia input,
        .a11y-dyslexia textarea,
        .a11y-dyslexia select,
        .a11y-dyslexia span {
          font-family: 'Arial', 'Helvetica', sans-serif !important;
          letter-spacing: 0.05em !important;
          word-spacing: 0.15em !important;
          line-height: 1.8 !important;
        }
        .a11y-reduced-motion *,
        .a11y-reduced-motion *::before,
        .a11y-reduced-motion *::after {
          animation-duration: 0.001ms !important;
          transition-duration: 0.001ms !important;
        }
        .a11y-large-links a,
        .a11y-large-links button {
          min-height: 52px !important;
          min-width: 52px !important;
          padding-top: 0.6rem !important;
          padding-bottom: 0.6rem !important;
          font-size: 1.05rem !important;
        }
      `}</style>

      {/* Floating trigger button */}
      <button
        ref={triggerRef}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open accessibility options"
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed bottom-6 left-6 z-[9999] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)',
          boxShadow: '0 8px 32px rgba(74,26,122,0.45)',
          outline: open ? '3px solid #C9A84C' : undefined,
        }}
      >
        {/* Accessibility icon */}
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5m0 0l-3 5m3-5l3 5M8 9.5c1.333-.5 2.667-.75 4-.75s2.667.25 4 .75" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          id="a11y-panel"
          ref={panelRef}
          role="dialog"
          aria-label="Accessibility options"
          aria-modal="false"
          className="fixed bottom-24 left-6 z-[9999] w-72 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: 'white',
            border: '1px solid #EDD2FF',
            boxShadow: '0 24px 64px rgba(74,26,122,0.22)',
          }}
        >
          {/* Panel header */}
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)' }}
          >
            <div>
              <h2 className="text-white font-semibold text-sm tracking-wide">Accessibility</h2>
              <p className="text-white/60 text-xs mt-0.5">Customize your experience</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close accessibility panel"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Controls */}
          <div className="p-5 space-y-5">

            {/* Font size */}
            <div>
              <p className="text-xs font-bold text-[#3D3D5C] uppercase tracking-widest mb-3">Text Size</p>
              <div className="flex gap-2">
                {fontLabels.map((label, i) => (
                  <button
                    key={i}
                    onClick={() => update({ fontSize: fontValues[i] })}
                    aria-label={`Set text size to ${label}`}
                    aria-pressed={currentFontIdx === i}
                    className="flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-150 focus-visible:outline focus-visible:outline-2"
                    style={{
                      background: currentFontIdx === i
                        ? 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)'
                        : '#F7EEFF',
                      color: currentFontIdx === i ? 'white' : '#4A1A7A',
                      border: currentFontIdx === i ? 'none' : '1px solid #EDD2FF',
                      fontSize: `${0.8 + i * 0.1}rem`,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle options */}
            {[
              {
                key: 'highContrast' as keyof A11yState,
                label: 'High Contrast',
                desc: 'Increase color contrast for easier reading',
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ),
              },
              {
                key: 'dyslexiaFont' as keyof A11yState,
                label: 'Dyslexia-Friendly Font',
                desc: 'Switch to a clearer, spaced font',
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                ),
              },
              {
                key: 'reducedMotion' as keyof A11yState,
                label: 'Reduce Motion',
                desc: 'Disable animations and transitions',
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25S18 7.5 18 12s-2.25 6.75-2.25 6.75M8.25 5.25S6 7.5 6 12s2.25 6.75 2.25 6.75" />
                  </svg>
                ),
              },
              {
                key: 'largeLinks' as keyof A11yState,
                label: 'Larger Click Targets',
                desc: 'Increase button and link tap areas',
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6 6m-6-6v4.8m0-4.8h4.8M9 3H4.2v4.8M4.2 3L10 8.8M15 3h4.8v4.8M19.8 3L14 8.8M15 21l4.8-4.8M19.8 21v-4.8M9 21H4.2v-4.8M4.2 21L10 15.2" />
                  </svg>
                ),
              },
            ].map(({ key, label, desc, icon }) => {
              const isOn = state[key] as boolean;
              return (
                <button
                  key={key}
                  onClick={() => update({ [key]: !isOn })}
                  aria-pressed={isOn}
                  aria-label={`${isOn ? 'Disable' : 'Enable'} ${label}`}
                  className="w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all duration-150 focus-visible:outline focus-visible:outline-2"
                  style={{
                    background: isOn ? '#F7EEFF' : 'transparent',
                    border: isOn ? '1px solid #C9A84C' : '1px solid #EDD2FF',
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: isOn
                        ? 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)'
                        : '#F7EEFF',
                      color: isOn ? 'white' : '#7B2FBE',
                    }}
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#1C1C2E]">{label}</p>
                    <p className="text-xs text-gray-400 leading-tight mt-0.5 truncate">{desc}</p>
                  </div>
                  {/* Toggle indicator */}
                  <span
                    className="w-9 h-5 rounded-full flex-shrink-0 relative transition-colors duration-200"
                    style={{ background: isOn ? '#7B2FBE' : '#E5E7EB' }}
                    aria-hidden="true"
                  >
                    <span
                      className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-200"
                      style={{ left: isOn ? 'calc(100% - 1.1rem)' : '0.125rem' }}
                    />
                  </span>
                </button>
              );
            })}

            {/* Reset */}
            <button
              onClick={reset}
              className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-150 hover:opacity-80 focus-visible:outline focus-visible:outline-2"
              style={{ background: '#F7EEFF', color: '#7B2FBE', border: '1px solid #EDD2FF' }}
            >
              Reset to Default
            </button>
          </div>
        </div>
      )}
    </>
  );
};
