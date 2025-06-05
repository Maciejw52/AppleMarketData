export  const checkboxLabels = ["Open", "Close", "Low", "High"] as const;

export type CheckboxLabel = (typeof checkboxLabels)[number];
