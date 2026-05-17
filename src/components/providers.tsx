"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/language-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </LanguageProvider>
    </Provider>
  );
}
