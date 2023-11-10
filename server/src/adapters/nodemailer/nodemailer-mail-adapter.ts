import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";
import { type } from 'os';

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2152cc9ca2cbab",
    pass: "2d9d74b6e72490"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
     await transport.sendMail({
      from: 'equipe feedget <hello@feedget.com>',
      to: 'Weslei wesleidominio@gmail.com',
      subject,
      html: body,
    });
  }
}