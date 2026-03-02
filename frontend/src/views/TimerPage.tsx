import { Main } from "../components/MainTimerLayout/Main";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Seperator } from "../components/ui/Seperator";

export const TimerPage = () => {
  return (
    <>
      <Sidebar />
      <Seperator orientation="vertical" flexItem />
      <Main />
    </>
  );
};
