export const WhoamiOutput = () => {
  return (
    <div className="space-y-2">
      <p className="text-foreground">
        <span className="text-green">visitor</span>
        <span className="text-subtext">@</span>
        <span className="text-blue">portfolio</span>
      </p>
      <p className="text-subtext text-sm">
        You are a visitor exploring John Doe's portfolio.
      </p>
      <p className="text-subtext text-sm">
        Welcome! Feel free to look around. Type <span className="text-green">help</span> for available commands.
      </p>
    </div>
  );
};
