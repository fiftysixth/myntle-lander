import Image from "next/image";
import {
  IconChevronDown,
  IconHistory,
  IconHome,
  IconLayoutSidebarLeftCollapse,
  IconPencil,
  IconSearch,
  IconTrash,
  IconUserCircle,
  IconUsers,
  IconWallet,
} from "@tabler/icons-react";

function NavRow({
  icon,
  label,
  count,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  count?: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex h-7 items-center gap-2.5 rounded-[7px] px-2 text-[13px] font-medium ${
        active ? "bg-hover-2 text-ink" : "text-ink-2"
      }`}
    >
      <span className="shrink-0">{icon}</span>
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {count ? <span className="text-[11.5px] text-ink-2">{count}</span> : null}
    </div>
  );
}

function ChatRow({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex h-8 items-center rounded-control px-2 text-[13.5px] font-medium ${
        active ? "bg-hover-2 text-ink" : "text-ink-2"
      }`}
    >
      <span className="truncate">{label}</span>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside
      aria-label="Workspace navigation"
      className="hidden w-[224px] shrink-0 flex-col lg:flex"
    >
      <div className="flex h-10 items-center justify-between">
        <Image
          src="/myntle-logo.svg"
          alt="Myntle"
          width={28}
          height={28}
          className="ml-2"
        />
        <span className="mr-1 grid size-8 place-items-center rounded-control text-ink-2">
          <IconLayoutSidebarLeftCollapse size={18} stroke={1.8} aria-hidden />
        </span>
      </div>

      <div className="mt-2 flex flex-col gap-px">
        <NavRow
          icon={<IconPencil size={17} stroke={1.8} aria-hidden />}
          label="New chat"
        />
        <NavRow
          icon={<IconHome size={17} stroke={1.8} aria-hidden />}
          label="Home"
        />
        <NavRow
          icon={<IconUsers size={17} stroke={1.8} aria-hidden />}
          label="Invite users"
          count="3/10"
        />
        <NavRow
          icon={<IconWallet size={17} stroke={1.8} aria-hidden />}
          label="Portfolio"
        />
        <NavRow
          icon={<IconHistory size={17} stroke={1.8} aria-hidden />}
          label="History"
        />
      </div>

      <div className="mt-3 min-h-0 flex-1 border-t border-line pt-2">
        <div className="flex h-8 items-center gap-1.5 px-2 text-[12.5px] font-medium text-ink-2">
          <IconChevronDown size={13} stroke={2} aria-hidden />
          <span>Chats</span>
          <IconSearch size={14} stroke={1.8} className="ml-auto" aria-hidden />
        </div>
        <div className="mt-1 flex flex-col gap-px">
          <ChatRow label="What's happening with NEAR?" active />
          <ChatRow label="Explain Blue Sky" />
          <ChatRow label="Check portfolio holdings" />
          <ChatRow label="Check private balance" />
        </div>
      </div>

      <div className="mt-auto border-t border-line pt-2">
        <NavRow
          icon={<IconTrash size={17} stroke={1.8} aria-hidden />}
          label="Trash"
        />
        <div className="mt-2 flex h-8 items-center gap-2 rounded-control bg-hover-2 px-2">
          <IconUserCircle
            size={18}
            stroke={1.8}
            className="shrink-0 text-ink-2"
            aria-hidden
          />
          <span className="min-w-0 flex-1 truncate text-[12px] text-ink">
            0x4849...34e7
          </span>
          <IconChevronDown size={13} stroke={2} className="text-ink-2" aria-hidden />
        </div>
      </div>
    </aside>
  );
}
