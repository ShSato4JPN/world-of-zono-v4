import clsx from "clsx";

type SpacerProps = {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export function HSpacer({ base, sm, md, lg, xl }: SpacerProps) {
  return (
    <div
      className={clsx(
        base && `mt-${base}`,
        sm && `mt-${sm}`,
        md && `mt-${md}`,
        lg && `mt-${lg}`,
        xl && `mt-${xl}`,
      )}
    >
      spacer
    </div>
  );
}

export function VSpacer({ base, sm, md, lg, xl }: SpacerProps) {
  return (
    <div
      className={clsx(
        base && `mb-${base}`,
        sm && `mb-${sm}`,
        md && `mb-${md}`,
        lg && `mb-${lg}`,
        xl && `mb-${xl}`,
      )}
    >
      spacer
    </div>
  );
}
