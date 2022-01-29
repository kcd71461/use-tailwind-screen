import resolveConfig from "tailwindcss/resolveConfig";
import { TailwindConfig } from "tailwindcss/tailwind-config";

export function setTailwindConfig(config: any) {
  _config = resolveConfig(config);
}

export function getCurrentScreen(): string | null {
  checkConfigInitialized();

  const screens = _config!.theme.screens! as any;
  for (let key of Object.keys(screens).reverse()) {
    if (window.matchMedia(`(min-width: ${screens[key] as string})`).matches) {
      return key;
    }
  }

  return null;
}

export function matchScreen(screenName: string) {
  checkConfigInitialized();

  const screens = _config!.theme.screens! as any;
  if (!screens[screenName]) {
    throw new Error(`'${screenName}' does not exist in tailwind config`);
  }

  return window.matchMedia(`(min-width: ${screens[screenName] as string})`)
    .matches;
}

function checkConfigInitialized() {
  if (_config === null) {
    throw new Error(`tailwind config is empty.
          set config via setTailwindConfig`);
  }
}

let _config: TailwindConfig | null = null;

export { default } from "./useTailwindScreen";
export { default as useMatchScreen } from "./useMatchScreen";
