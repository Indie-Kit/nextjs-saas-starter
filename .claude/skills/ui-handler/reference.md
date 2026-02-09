# UI Handler Reference

## Core Files

- `src/components/ui/`: Shadcn UI components.
- `src/lib/utils.ts`: Utility functions (including `cn`).
- `tailwind.config.ts`: Tailwind configuration.
- `src/app/globals.css`: Global styles and CSS variables.

## Usage

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

<Button className={cn("bg-red-500", className)}>Click me</Button>;
```
