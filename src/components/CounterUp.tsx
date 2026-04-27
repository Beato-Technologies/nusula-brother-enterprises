'use client'

import { useState, useEffect, useRef } from 'react';
import CountUp from "react-countup";

type CounterUpProps = {
    count: number;
    time?: number;
};

export default function CounterUp({ count, time = 3 }: CounterUpProps) {
    const [counterOn, setCounterOn] = useState(false);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = spanRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => setCounterOn(entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <span ref={spanRef}>
            {counterOn && (
                <CountUp end={count} duration={time} redraw={true}>
                    {({ countUpRef }) => (
                        <span ref={countUpRef} className='count'></span>
                    )}
                </CountUp>
            )}
        </span>
    );
}