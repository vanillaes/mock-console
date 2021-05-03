/**
 * MockConsole class used to manage the 'console' built-in methods (ex log, info, error)
 */
export class MockConsole {
    log: (...data: any[]) => void;
    info: (...data: any[]) => void;
    error: (...data: any[]) => void;
    logs: any[];
    infos: any[];
    errors: any[];
    /**
     * Disable the console built-in methods
     */
    disable(): void;
    /**
     * Capture the output of the console built-ins
     */
    capture(): void;
    /**
     * Restore the built-in console methods
     */
    restore(): void;
    /**
     * Flush the captured console output
     */
    flush(): void;
}
