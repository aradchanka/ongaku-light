interface TabsProps {
  activeTab: 'top' | 'about' | 'related';
  onTabChange: (tab: 'top' | 'about' | 'related') => void;
}

export default function ArtistTabs({ activeTab, onTabChange }: TabsProps) {
  const tabs = [
    { id: 'top' as const, label: 'Top' },
    { id: 'about' as const, label: 'About' },
    { id: 'related' as const, label: 'Related' },
  ];

  return (
    <div className="pb-3">
      <div className="flex border-b border-[#3c5d49] px-4 gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
              activeTab === tab.id
                ? 'border-b-[#94e0b2] text-white'
                : 'border-b-transparent text-[#9bbfaa]'
            }`}
          >
            <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
              activeTab === tab.id ? 'text-white' : 'text-[#9bbfaa]'
            }`}>
              {tab.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
