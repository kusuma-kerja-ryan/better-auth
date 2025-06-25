interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row  items-center gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <p className="text-sm font-semibold">{item.title}</p>
        {item.description && (
          <p className="text-xs leading-snug text-muted-foreground/80">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default SubMenuLink;