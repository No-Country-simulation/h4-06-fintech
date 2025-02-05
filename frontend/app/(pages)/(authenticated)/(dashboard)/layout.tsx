import HelpButtonWithIcon from './_components/help-button';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <HelpButtonWithIcon />
    </div>
  );
}
