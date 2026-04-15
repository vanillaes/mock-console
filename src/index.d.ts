/**
 * MockConsole class used to manage the 'console' built-in methods (ex log, info, error)
 */
export class MockConsole {
    /** @type {(...data: []) => void} */
    log: (...data: []) => void;
    /** @type {(...data: []) => void} */
    info: (...data: []) => void;
    /** @type {(...data: []) => void} */
    warn: (...data: []) => void;
    /** @type {(...data: []) => void} */
    error: (...data: []) => void;
    logs: any[] | undefined;
    infos: any[] | undefined;
    warnings: any[] | undefined;
    errors: any[] | undefined;
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
