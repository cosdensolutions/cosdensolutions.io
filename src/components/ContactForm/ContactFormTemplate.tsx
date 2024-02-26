type ContactFormTemplateProps = {
  message: string;
};

export default function ContactFormTemplate({
  message,
}: ContactFormTemplateProps) {
  return <div style={{ whiteSpace: 'pre-line' }}>{message}</div>;
}
