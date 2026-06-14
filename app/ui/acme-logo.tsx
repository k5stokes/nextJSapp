import { GlobeAltIcon } from '@heroicons/react/24/outline';
//import { bakbakOne } from '@/app/ui/fonts';
import { bakbakOne } from './fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${bakbakOne.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
