import { Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Beginning of starter */}
      <div className="p-8 h-full bg-neutral-500/10 flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <img
            src="https://avatars.githubusercontent.com/u/66894537"
            alt="Github Profile Image"
            className="w-16 h-16 rounded-full border border-foreground/25"
          />
          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-2 items-center">
              <p className="text-xl">Adam's Template Tauri App</p>
              <Sparkles size={23} color="orange" />
            </span>
            <div className="flex flex-col text-sm opacity-70">
              <a
                href="https://github.com/Wind-Explorer/blank-tauri-app"
                target="_blank"
              >
                github.com/Wind-Explorer/blank-tauri-app
              </a>
              <a href="https://www.heroui.com/docs/components" target="_blank">
                heroui.com/docs/components
              </a>
              <a href="https://tailwindcss.com/" target="_blank">
                tailwindcss.com
              </a>
              <a href="https://lucide.dev/icons" target="_blank">
                lucide.dev/icons
              </a>
              <a href="https://tauri.app/" target="_blank">
                tauri.app
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-end">
          <span>
            Edit{" "}
            <code className="px-2 py-1 mx-1 rounded-md bg-neutral-500/25">
              HomePage.tsx
            </code>{" "}
            to get started
          </span>
        </div>
      </div>
      {/* End of starter */}
    </div>
  );
}
