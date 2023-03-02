"use client";
import {ThemeProvider} from "next-themes";

export default function Providers({children}) {
    return (
        <ThemeProvider
            enableSystem={true}
            attribute="class">
           <div className="dark:bg-gray-700 dark:text-gray-300
           text-gray-600 transition-colors duration-200 min-h-screen
           select-none">{children}</div>
        </ThemeProvider>

    )
}