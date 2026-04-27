'use client'
import Link from 'next/link'
import { useEffect, useState } from "react"

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setHasScrolled(window.scrollY > 100)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            {hasScrolled && (
                <Link id="scrollUp" href="/#top" style={{ position: 'fixed', zIndex: 2147483647 }}><span /></Link>
            )}
        </>
    )
}
