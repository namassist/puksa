interface ErrorOutputProps {
  command: string;
}

export const ErrorOutput = ({ command }: ErrorOutputProps) => {
  return (
    <div className="space-y-2">
      <p className="text-red">
        bash: {command}: command not found
      </p>
      <p className="text-subtext text-sm">
        Type <span className="text-green">help</span> to see available commands.
      </p>
    </div>
  );
};
