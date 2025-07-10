// components/AdsterraBanner.tsx
import { useEffect, useRef } from 'react';

const AdsterraBanner: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current) return;

    const script = document.createElement('script');
    script.setAttribute('async', 'true');
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl27130749.profitableratecpm.com/c53f7e5cd7dbc072b5cef54390edc0c6/invoke.js';

    adRef.current.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <div
        id="container-c53f7e5cd7dbc072b5cef54390edc0c6"
        ref={adRef}
        style={{ width: '100%', minHeight: '250px' }}
      />
    </div>
  );
};

export default AdsterraBanner;
