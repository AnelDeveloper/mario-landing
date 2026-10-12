import { ghostButton } from "./buttons";
import { AppLink } from "./AppLink";
import { LogoMark } from "./LogoMark";

export function Header() {
  return (
    <header className="bg-ink">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-[clamp(18px,4vw,48px)] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <LogoMark size={26} />
          <span className="font-display text-[19px] font-semibold tracking-[.12em] text-paper">
            MANDARIĆ METHOD
          </span>
        </div>
        <AppLink
          path="/prijava"
          className={`${ghostButton} min-h-[40px] rounded-[9px] px-4 text-[13.5px] hover:bg-[rgba(244,242,236,.1)]`}
        >
          Prijavi se
        </AppLink>
      </div>
    </header>
  );
}
