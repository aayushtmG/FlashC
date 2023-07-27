import "dotenv/config"
import nodemailer from "nodemailer"
import SMTPConnection from "nodemailer/lib/smtp-connection"

export type mailOptions = {
  email: string
  from?: string
  subject: string
  message: string
}

const sendEmail = async (mailOpt: mailOptions) => {
  //USING MAILTRAP
  const options: SMTPConnection.Options = {
    secure: false,
    host: process.env.MAIL_HOST,
    port: parseInt(`${process.env.MAIL_HOST}`),
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  }

  //using Gmail
  //   const options: SMTPConnection.Options = {
  //     host: "smtp.gmail.com",
  //     secure: false,
  //     port: 587,
  //     auth: {
  //       user: "aayush2058@gmail.com",
  //       pass: "wyicwhkadjanicol",
  //     },
  //   }
  const transporter = nodemailer.createTransport(options)

  const mailInfo = {
    from: "FlashC",
    to: mailOpt.email,
    subject: mailOpt.subject,
    text: mailOpt.message,
  }

  await transporter.sendMail(mailInfo)
}

export default sendEmail
