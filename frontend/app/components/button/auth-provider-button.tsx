import Image from 'next/image';
import { Button } from '../ui/button';

interface Props {
  provider: 'Google' | 'Apple';
}

export function AuthProviderButton({ provider }: Props) {
  const iconPath =
    provider === 'Google' ? '/svg/google-icon.svg' : '/svg/apple-icon.svg';

  return (
    <Button className='relative bg-background text-foreground hover:bg-input'>
      <Image
        src={iconPath}
        alt={`${provider} icon`}
        width={20}
        height={20}
      />
      {provider}
    </Button>
  );
}
