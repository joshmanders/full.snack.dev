import nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';

export const sendMail = async (options: Options) => {
  const transport = nodemailer.createTransport({
    pool: true,
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: Boolean(process.env.MAIL_SECURE),
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  return await transport.sendMail(options);
};
