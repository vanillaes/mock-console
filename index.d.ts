/**
 * MockConsole class used to manage the 'console' built-in methods (ex log, info, error)
 */
export class MockConsole {
    log: (message?: any, ...optionalParams: any[]) => void;
    info: (message?: any, ...optionalParams: any[]) => void;
    error: (message?: any, ...optionalParams: any[]) => void;
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
export { MockConsole as default };
