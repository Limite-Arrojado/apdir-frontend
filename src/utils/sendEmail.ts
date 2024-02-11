"use server";
import sgMail from "@sendgrid/mail";

interface IEmailProps {
  subject: string;
  html: string;
}

const sendEmail = async ({ subject, html }: IEmailProps) => {
  const key = process.env.SENDGRID_API_KEY || "";
  sgMail.setApiKey(key);

  const msg = {
    to: "geral@apdir-assoc.pt",
    from: "geral@apdir-assoc.pt",
    subject: subject,
    html: html,
  };

  await sgMail.send(msg).catch((error) => {
    console.error(error);
  });
};

export default sendEmail;
