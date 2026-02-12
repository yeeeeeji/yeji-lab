interface ThemeModalProps {
  ref: React.RefObject<HTMLDivElement | null>;
  theme: {
    title: string;
    bgColor: string;
  };
  handleBgColor: (value: string) => void;
}

function ThemeModal({ ref, theme, handleBgColor }: ThemeModalProps) {
  const colors = [
    "#FFFFFF",
    "#D7E9D3",
    "#FFF1E6",
    "#E6E6FA",
    "#E6E6E6",
    "#000000",
  ];
  return (
    <div
      className="absolute top-20 right-8 w-[300px] h-[500px] bg-white z-10 shadow-xl rounded-lg p-6 flex flex-col gap-4"
      ref={ref}
    >
      <div>
        <Title title={theme.title} />
        <div>
          <input type="text" />
        </div>
      </div>
      <div>
        <Title title="배경색" />
        <div className="flex gap-2">
          {colors.map((color) => (
            <ColorCircle
              key={color}
              color={color}
              isChosen={color === theme.bgColor}
              onClick={() => handleBgColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThemeModal;

function Title({ title }: { title: string }) {
  return <div className="font-bold mb-2">{title}</div>;
}

interface ColorCircleProps {
  color: string;
  isChosen: boolean;
  onClick: () => void;
}

function ColorCircle({ color, isChosen, onClick }: ColorCircleProps) {
  return (
    <button
      className="w-7 h-7 rounded-full border border-2 cursor-pointer"
      style={{
        backgroundColor: color,
        borderColor: isChosen ? "#FDA4AF" : "#E5E7EB",
      }}
      onClick={onClick}
    />
  );
}
