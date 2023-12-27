import { Settings, LogOutIcon } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function LayoutNav({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border w-full items-center py-6 px-8 justify-between sm:hidden flex h-10">
        <span>LOGO</span>
        <div className="flex gap-3 flex-wrap items-center justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Settings className="cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>
      <section className="min-h-screen flex w-full">
        <nav className="h-screen hidden flex-col justify-between items-center border p-4 sm:flex sm:flex-wrap">
          <div className="py-3 flex items-center justify-center w-full">
            LOGO
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex flex-col gap-6 justify-center items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Settings className="cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <LogOutIcon className="cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sign Out</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </nav>
        {children}
      </section>
    </>
  )
}
