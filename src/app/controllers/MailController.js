import Mail from '../../lib/Mail';

class MailController {
  async store(req, res) {
    try {
      const { name, tel, email, subject, message } = req.body;

      let destinatario = '';

      if (subject === 'DÚVIDA') {
        destinatario = 'antoniosobral@poli.ufrj.br';
      } else {
        destinatario = 'direcaosobral@gmail.com';
      }

      console.log(destinatario);

      await Mail.sendMail({
        to: destinatario,
        subject: `${subject}`,
        template: 'contact',
        context: {
          name,
          tel,
          email,
          subject,
          message,
        },
      });

      return res.json({ message: 'E-mail was sent.' });
    } catch (err) {
      console.log('problem sendind email');
    }
  }
}

export default new MailController();
