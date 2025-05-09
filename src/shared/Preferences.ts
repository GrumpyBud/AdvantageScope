import { CoordinateSystem } from "./AdvantageScopeAssets";

/** A set of application preferences. */
export default interface Preferences {
  theme: "light" | "dark" | "system";
  rioAddress: string;
  rioPath: string;
  liveMode: LiveSource;
  liveSources: LiveSource[];
  liveSubscribeMode: "low-bandwidth" | "logging";
  liveDiscard: number;
  publishFilter: string;
  rlogPort: number;
  coordinateSystem: "automatic" | CoordinateSystem;
  field3dModeAc: "cinematic" | "standard" | "low-power";
  field3dModeBattery: "" | "cinematic" | "standard" | "low-power";
  field3dAntialiasing: boolean;
  tbaApiKey: string;
  userAssetsFolder: string | null;
  skipHootNonProWarning: boolean;
  skipNumericArrayDeprecationWarning: boolean;
  skipFrcLogFolderDefault: boolean;
  skipXRExperimentalWarning: boolean;
  ctreLicenseAccepted: boolean;
  usb?: boolean;
}

export type LiveSource = "nt4" | "nt4-akit" | "phoenix" | "rlog";

export function getLiveModeName(mode: LiveSource): string {
  switch (mode) {
    case "nt4":
      return "NetworkTables 4";
    case "nt4-akit":
      return "NetworkTables 4 (AdvantageKit)";
    case "phoenix":
      return "Phoenix Diagnostics";
    case "rlog":
      return "RLOG";
  }
}

export function getShortLiveModeName(mode: LiveSource): string {
  switch (mode) {
    case "nt4":
      return "NT4";
    case "nt4-akit":
      return "NT4 (AdvantageKit)";
    case "phoenix":
      return "Phoenix";
    case "rlog":
      return "RLOG";
  }
}
