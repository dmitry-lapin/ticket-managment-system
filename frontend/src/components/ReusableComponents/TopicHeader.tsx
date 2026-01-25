type TopicHeaderProps = {
  children: React.ReactNode;
};

const TopicHeader = ({ children }: TopicHeaderProps) => {
  return (
    <div id="TopicHeader">
      {children}
    </div>
  );
};

export default TopicHeader;
