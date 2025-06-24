import pino from 'pino';
import fs from 'fs';
import pretty from 'pino-pretty';

interface Log {
  time: number;
  level: number;
  msg: string;
  req?: {
    method: string;
    url: string;
  };
}

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

const customFormat = (log : Log) => {
  const date = new Date(log.time).toISOString().replace('T', ' ').replace('Z', '');
  const levelStr = log.level >= 50 ? 'ERROR' : log.level >= 40 ? 'WARN' : 'INFO';
  return `[${date}] ${levelStr}: ${log.msg}${log.req ? ` (${log.req.method} ${log.req.url})` : ''}\n`;
};

const prettyStream = pretty({
  colorize: true,
  translateTime: 'SYS:standard',
  ignore: 'pid,hostname',
});

const destination = fs.createWriteStream('./logs/access.log', { flags: 'a' });
const errorDestination = fs.createWriteStream('./logs/error.log', { flags: 'a' });

const streams = [
  {
    stream: prettyStream,
  },
  {
    stream: {
      write: (data : string) => {
        const parsed = JSON.parse(data);
        const formatted = customFormat(parsed);
        destination.write(formatted);
      },
    }
  },
  {
    level: 'error',
    stream: {
      write: (data : string) => {
        const parsed = JSON.parse(data);
        errorDestination.write(customFormat(parsed));
      }
    }
  }
];

const logger = pino({ formatters: {} }, pino.multistream(streams));

export default logger;
