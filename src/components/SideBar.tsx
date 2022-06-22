import { Lesson } from "./Lesson";

export function SideBar() {
  return (
    <aside className="w-[348px] bg-slate-900 p-6 border-l border-slate-800">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-slate-700 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </aside>
  );
}
