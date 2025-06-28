import React from "react";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface SubMenuLinkProps {
  item: MenuItem;
}

const SubMenuLink = React.forwardRef<HTMLAnchorElement, SubMenuLinkProps>(
  ({ item }, ref) => {
    return (
      <a
        ref={ref}
        className="flex flex-row items-center gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
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
  }
);

SubMenuLink.displayName = "SubMenuLink";

export default SubMenuLink;
