import { Button, SmoothLink } from '@/components/ui';

export default function CtaButton() {
  return (
    <div className="space-y-2 text-center">
      <h3>Ready to start building?</h3>
      <Button asChild size="xl">
        <SmoothLink href="#pricing">Enroll Now</SmoothLink>
      </Button>
    </div>
  );
}
