import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };
    return (
        <button onClick={toggleTheme} className="btn btn-ghost btn-primary btn-circle">
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>
    )
}

export default ThemeToggle