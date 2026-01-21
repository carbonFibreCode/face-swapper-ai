export interface ILogger {
    info(message: string, meta?: Record<string, unknown>): void;
    error(message: string, meta?: Record<string, unknown>): void;
    warn(message: string, meta?: Record<string, unknown>): void;
    debug(message: string, meta?: Record<string, unknown>): void;
}
export class ConsoleLogger implements ILogger {
    private formatMessage(level: string, message: string, meta?: Record<string, unknown>): string {
        const timestamp = new Date().toISOString();
        const metaString = meta ? ` ${JSON.stringify(meta)}` : '';
        return `[${timestamp}] [${level.toUpperCase()}] ${message}${metaString}`;
    }
    info(message: string, meta?: Record<string, unknown>): void {
        console.log(this.formatMessage('info', message, meta));
    }
    error(message: string, meta?: Record<string, unknown>): void {
        console.error(this.formatMessage('error', message, meta));
    }
    warn(message: string, meta?: Record<string, unknown>): void {
        console.warn(this.formatMessage('warn', message, meta));
    }
    debug(message: string, meta?: Record<string, unknown>): void {
        if (process.env.NODE_ENV !== 'production') {
            console.debug(this.formatMessage('debug', message, meta));
        }
    }
}
export const logger = new ConsoleLogger();