import { format } from 'date-fns';
import { CheckCircle2 } from 'lucide-react';

export default function LastUpdated() {
  const lastUpdated = new Date('2024-06-17');

  return (
    <div className="flex flex-row items-center justify-center gap-2 rounded-full text-green-500">
      <CheckCircle2 className="h-6 w-6 stroke-green-500" />
      <div className="text-md font-semibold">
        Updated {format(lastUpdated, 'MMMM dd, yyyy')}
      </div>
    </div>
  );
}
