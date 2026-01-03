import type { LucideIcon } from "lucide-react"

type MaintainInfoBoxProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export function MaintainInfoBox({ Icon, title, description }: MaintainInfoBoxProps) {
  return (
    <article>
      <div className="w-full flex flex-col items-center justify-center min-h-100 border-2 border-color-border p-3 text-center rounded-3xl space-y-2 dark:bg-[#10192a]">
        <Icon className="w-24 h-24 text-icon-foreground" />
        {title && <h4>{title}</h4>}
        {description && <p>{description}</p>}
      </div>
    </article>
  );
}

type FeatureSectionProps = {
  imagePath: string;
  title: string;
  description: string;
};

export function FeatureSection({ imagePath, title, description }: FeatureSectionProps) {
  return (
    <article>
      <div className="flex flex-col items-center md:min-h-130 justify-center border-2 border-color-border p-3 text-center rounded-3xl space-y-2 bg-card">
        <img src={imagePath} className="w-full max-h-90 object-contain mb-4" />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
}

type PriceComponenPropst = {
  title: string;
  items: string[];
  Icon: LucideIcon;
  price: string;
  subtitle: string;
};

export const PriceComponent: React.FC<PriceComponenPropst> = ({ title, subtitle, items, Icon, price }) => {
  return (
    <article>
      <div className="flex flex-col items-center md:min-h-130 justify-start md:pt-20 pt-5 border-2 dark:border-gray-800 border-gray-200 p-3 text-center rounded-3xl space-y-2 dark:bg-[#10192a]">
        <Icon className="w-24 h-24 text-icon-foreground" />
        <h4>{title}</h4>
        <p className="price">{price}</p>
        <p className="subtitle">{subtitle}</p>
        <ul className="list-disc list-inside mt-2 text-muted-foreground text-md">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};